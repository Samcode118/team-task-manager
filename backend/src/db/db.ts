import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

export async function connectToDB() {
  try {
    await client.connect();
    console.log('Connected to PostgreSQL');
    
  } catch (err) {
    console.error('Failed to connect to DB:', err);
  }
}

export default client;
