import pg from "pg";
import dotenv from 'dotenv'
const {Pool}=pg;

dotenv.config();

const pool=new Pool({
    connectionString:process.env.POSTGRES_URL
});

try {
    pool.connect();
    console.log("Connected to POSTGRESQL Succesfully");
} catch (error) {
    console.log(error);
}

export default pool;