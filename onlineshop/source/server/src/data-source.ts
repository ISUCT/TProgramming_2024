import { DataSource } from "typeorm";
import { Country } from "./components/country/country.entity";
import { Hotel } from "./components/hotel/hotel.entity";
import { Tour } from "./components/tour/tour.entity";

export default new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "1296",
  database: "tours_db2",
  entities: [Country, Hotel, Tour],
  migrations: ["src/migrations/*.ts"],
  synchronize: false,
});