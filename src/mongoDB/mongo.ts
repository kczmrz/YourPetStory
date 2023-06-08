import { MongoClient, Db, Collection } from 'mongodb';
import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';


/* Interfejs pod bazę danych */
export interface curentlyDatabase {dbName: string, collection: string};

const uri:string = process.env.DB_URI as string;
const configure:any = {
  useUnifiedTopology: false,
  useNewUrlParser: true,
 
}

/* Tworzenie obiektu klient */
const client = new MongoClient(uri, configure);

/* Łączenie z bazą danych*/
async function dbConnect(dbName:string): Promise<{client: MongoClient; db: Db }>
{
  await client.connect();
  const db = client.db(dbName);
  return { client, db };
} 

/* Rozłączenie */
async function disconnect(): Promise<void> {
  await client.close();
}

/* Pobieranie danych z bazy */
async function getCollection<T>(dbname:string, collectionName: string): Promise<Collection<any>> {
  const { db } = await dbConnect(dbname);
  return db.collection<any>(collectionName);
}
export { dbConnect, disconnect, getCollection };