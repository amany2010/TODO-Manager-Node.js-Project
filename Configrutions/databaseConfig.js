const mongoose=require("mongoose");
exports.databaseConnection=async ()=>{
    mongoose.connect(process.env.databaseURI)
    .then((connectionResult)=>{
        console.log(`database successfully connected to ${connectionResult.connection.name}...`)
    })
    .catch((error)=>{
        console.log(`connection error: ${error}`);
    })
}
exports.databaseDisConnection=()=>{
    mongoose.disconnect()
    .then(()=>{
        console.log(`database successfully disconnected...`);
    })
    .catch((error)=>{
        console.log(`disConnection error: ${error}`);
    })
}

