import { NextApiRequest, NextApiResponse } from 'next';
import { dbConnect, disconnect, getCollection } from "@/mongoDB/mongo";

export default async function (req: NextApiRequest, res: NextApiResponse) {
 /*Pierwszy string to nazwa bazy danych, a drugi to kolekcja w tej bazie */
 const collection = await getCollection("Users", "users");


 if (req.method === 'POST') {
    await dbConnect(process.env.DB_Name as string); 

 }
}