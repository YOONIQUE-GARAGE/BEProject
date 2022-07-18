const cron = require("node-cron");
const models = require("./models");
// web3연결
const Web3 = require("web3");

// 내 블록체인 접근
const GETH_PORT = "http://localhost:8545"
var web3 = new Web3(new Web3.providers.HttpProvider(GETH_PORT));

// DB저장된 최신블록넘버 조회
const getBlockNum = async () => {
	const maxNum = await models.block.max("height");
	return maxNum;
}
// 노드의 최신블록넘버 조회
const getLatestBlock = async () => {
	return await web3.eth.getBlockNumber();
}

// 블록정보
const blockInfo = async (num) => await web3.eth.getBlock(num);
// 트랜잭션정보
const txInfo = async (tx) => await web3.eth.getTransaction(tx);
// 블록정보 저장 로직
const insertBlock = async (info, height) => {
	const { transactions, miner, difficulty, totalDifficulty, size, gasLimit, gasUsed, hash, parentHash } = info;
	const isInBlock = await models.block.create({
		height,
		transactions: transactions.length,
		miner,
		difficulty,
		totalDifficulty,
		size,
		gas_limit: gasLimit,
		gas_used: gasUsed,
		hash,
		parent_hash: parentHash
	})
}
// 트랜잭션 저장 로직
const insertTx = async (txs) => {
	for (let tx of txs) {
		const info = await txInfo(tx);
		const { blockNumber, from, to, gasPrice, gas, value } = info;
		const isInTx = await models.tx.create({
			tx_hash: tx,
			blockNumber,
			gas,
			gas_price: gasPrice,
			from,
			to,
			value,
		})
	}
}
// 노드의 정보 저장
const getChaninInfo = async () => {
	// DB에 저장된 최신 블록넘버
	let dbBlock = null ? -1 : await getBlockNum()
	// 노드에 생성된 최신 블럭넘버
	const latestBlock = await getLatestBlock();

	// 만약, db에저장한 블록높이 < 최신블록높이
	if (dbBlock < latestBlock) {
		// 블럭정보와 트랜잭션 정보 DB저장
		for (let i = dbBlock + 1; i <= latestBlock; i++) {
			await blockInfo(i).then((info) => {
				insertBlock(info, i);
				return info.transactions
			}).then((txs) => {
				if (txs.length !== 0) {
					insertTx(txs);
				}
			})
		}
	}
}

// 매 초마다 실행
const task = cron.schedule(
	"* * * * * *",
	async () => {
		getChaninInfo();
	},
	{
		scheduled: false,
	}
);

task.start();