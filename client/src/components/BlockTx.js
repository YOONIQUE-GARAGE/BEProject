import {
  Row,
  Col,
  Table,
  ListGroup,
  CardTitle,
  CardBody,
  ListGroupItem,
} from "reactstrap";
import { useEffect, useState } from "react";
import axios from "axios";

const Tables = () => {
  const [txInfo, setTxInfo] = useState([]);
  const [blockInfo, setBlockInfo] = useState([]);

  const subStr = (str) => {
    return str.length > 14 ? str.substr(0, 14) + "..." : str
  }

  const moveDetail = async (el) => {
    if (typeof el === "number") {
      window.location.href = `/block_detail/${el}`
    } else {
      window.location.href = `/tx_detail/${el}`
    }
  };

  useEffect(() => {
    const getTx = async () => {
      const block = await axios
        .get("http://localhost:4000/tx")
        .then((res) => {
          setTxInfo(res.data.data);
        });
      return block;
    };
    getTx();
    const getBlock = async () => {
      const block = await axios
        .get("http://localhost:4000/block")
        .then((res) => {
          setBlockInfo(res.data.data);
        });
      return block;
    };
    getBlock();
  }, []);

  return (
    <div className="block_tx">
      <Row>
        <Col lg="12">
          <div>
            <ListGroup>
              <CardBody>
                <CardTitle tag="h5">Block Explorer</CardTitle>
                <Table
                  className="no-wrap mt-3 align-middle"
                  responsive
                  borderless
                >
                  <thead>
                    <tr>
                      <th>Height</th>
                      <th>miner</th>
                      <th>gasUsed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blockInfo.map((info, index) => (
                      <tr key={index} className="border-top">
                        <td>
                          <div className="ms-3">
                            <ListGroupItem
                              action
                              active
                              tag="button"
                              onClick={() => moveDetail(Number(info.height))}>{info.height}</ListGroupItem>
                          </div>
                        </td>
                        <td>{subStr(info.miner)}</td>
                        <td>{info.gas_used}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </ListGroup>
          </div>
        </Col>
      </Row >
      <Row>
        <Col lg="12">
          <div>
            <ListGroup>
              <CardBody>
                <CardTitle tag="h5">Tx Explorer</CardTitle>
                {/*<CardSubtitle className="mb-2 text-muted" tag="h6">
          Tx Explorer
          </CardSubtitle>*/}
                <Table
                  className="no-wrap mt-3 align-middle"
                  responsive
                  borderless
                >
                  <thead>
                    <tr>
                      <th>Hash</th>
                      <th>From</th>
                      <th>To</th>
                    </tr>
                  </thead>
                  <tbody>
                    {txInfo.map((info, index) => (
                      <tr key={index} className="border-top">
                        <td>
                          <div className="ms-3">
                            <ListGroupItem
                              action
                              active
                              onClick={() => moveDetail(info.tx_hash)} >{subStr(info.tx_hash)}</ListGroupItem>
                          </div>
                        </td>
                        <td>{subStr(info.from)}</td>
                        <td>{subStr(info.to)}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </ListGroup>
          </div>
        </Col>
      </Row >
    </div>
  );
};

export default Tables;