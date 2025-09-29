import { Client } from "pg";


const client = new Client({
    user : "postgres",
    host: "localhost",
    database : "Smat_city",
    password : "guptapx124",
    port : 5432
})



export async function connectPostgres(params) {
    
    try {

        await client.connect();
        console.log("connecetd To Postgres")
        
    } catch (error) {
        console.log("Here is the error")
        
    }
    
}