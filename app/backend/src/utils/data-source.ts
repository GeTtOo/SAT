import { DataSource } from "typeorm"
import { DatabaseConfig } from "../classes/config/DatabaseSettings"

import { Players } from "../entity/Players"
import { BansList } from "../entity/BansList"
import { MuteList } from "../entity/MuteList"
import { Inventory } from "../entity/Inventory"
import { Admins } from "../entity/Admins"
import { AdminsGroups } from "../entity/AdminsGroups"

const Config = new DatabaseConfig('database').setting;

export const AppDataSource = new DataSource({
	type: "mysql",
	host: Config.host,
	port: Config.port,
	database: Config.database,
	username: Config.username,
	password: Config.password,
	synchronize: true,
	logging: false,
	entities: [Players, BansList, MuteList, Inventory, Admins, AdminsGroups],
	migrations: [],
	subscribers: [],
})