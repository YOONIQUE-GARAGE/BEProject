"use strict";
const Sequelize = require("sequelize");

module.exports = class Block extends Sequelize.Model {
	static init(sequelize) {
		return super.init(
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				height: {
					type: Sequelize.STRING(100),
					allowNull: true,
				},
				transactions: {
					type: Sequelize.INTEGER
				},
				miner: {
					type: Sequelize.STRING
				},
				difficulty: {
					type: Sequelize.INTEGER
				},
				totalDifficulty: {
					type: Sequelize.INTEGER
				},
				size: {
					type: Sequelize.INTEGER
				},
				gas_limit: {
					type: Sequelize.INTEGER
				},
				gas_used: {
					type: Sequelize.INTEGER
				},
				hash: {
					type: Sequelize.STRING
				},
				parent_hash: {
					type: Sequelize.STRING
				}
			},
			{
				sequelize,
				modelName: "Block",
				tableName: "Block",
				timestamps: false,
				paranoid: false,
				underscored: true,
				charset: "utf8",
			}
		);
	}
};

