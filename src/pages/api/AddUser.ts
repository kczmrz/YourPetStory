import { dbConnect, disconnect, getCollection } from "@/mongoDB/mongo";
import { NextApiRequest, NextApiResponse } from 'next';
import  User  from "@/mongoDB/schemas/account";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    /*dane są pobierane z body */
    const { user_name, surrname, email, password, password2, nick, age, country, city } = req.body;
    
    /*Pierwszy string to nazwa bazy danych, a drugi to kolekcja w tej bazie */
    const collection = await getCollection("Users", "users");
    if (req.method === 'POST') {
      try {
        await dbConnect(process.env.DB_Name as string); // Połączenie z bazą danych i "Users" to nazwa bazy danych, a w Schemas jest kolekcja zapisana!
  
        const newData = {
            ID: "Testowe ID",
            name: user_name,
            surrname:surrname,
            email: email,
            password: password,
            nick: nick,
            age: age,
            country: country,
            city: city
        };
        await collection.insertOne(req.body);
        
        

      } 
      catch (error) 
      {
        console.error( error);
       
      }
    } 
    else {
      res.status(405).json({ message: 'Metoda nie jest obsługiwana' });
    }
  }

