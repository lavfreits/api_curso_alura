import mongoose, { mongo } from "mongoose";



async function conectdatabase(){
mongoose.connect(process.env.DB_CONNECTION_STRING);
return mongoose.connection;
}

export default conectdatabase;