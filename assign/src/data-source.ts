import { DataSource } from "typeorm";
import { User } from './entities/user.entity'; // Adjust this import based on your User entity location

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost', // or your database host
    port: 5432,
    username: 'postgres', // replace with your PostgreSQL username
    password: 'jk@karunadu01', // replace with your PostgreSQL password
    database: 'simple_api', // replace with your PostgreSQL database name
    synchronize: false,
    logging: false,
    // entities: [__dirname + '/**/*.entity{.ts,.js}'],
    entities: [User], // Add your entities here
    migrations: ["src/migrations/*.ts"], // Path to migration files
});
