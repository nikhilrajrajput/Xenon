const mongoose =require("mongoose");
mongoose.connect("mongodb://localhost:27017/xenonstack",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true
}).then(()=>{
    console.log('Connnection Successful');
}).catch((err)=>{
    console.log(`Error is ${err}`);
})