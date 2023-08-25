const mongoose = require('mongoose');
const connectDb = async()=>{
    try{
        const con = await mongoose.connect("mongodb+srv://ayan:VhaZKP5HvOwpumbY@neonflake.ctgu6hk.mongodb.net/?retryWrites=true&w=majority");
        console.log('Connected to MongoDB ');
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDb;
