"use strict";
const Sequelize = require("sequelize");

module.exports = class Tx extends Sequelize.Model {
	static init(sequelize) {
		return super.init(
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				tx_hash: Sequelize.STRING,
				blockNumber: Sequelize.INTEGER,
				gas: Sequelize.INTEGER,
				gas_price: Sequelize.INTEGER,
				from: Sequelize.STRING,
				to: Sequelize.STRING,
				value: Sequelize.STRING,
			},
			{
				sequelize,
				modelName: "Tx",
				tableName: "Tx",
				timestamps: true,
				paranoid: false, // 삭제일 (복구용)
				underscored: true,
				charset: "utf8",
				onDelete: "cascade",
			}
		);
	}
};