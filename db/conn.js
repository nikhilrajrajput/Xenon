const mongoose =require("mongoose");
mongoose.connect("mongodb+srv://nikhilrajsingh787:Nikhil123@cluster0.i6th06s.mongodb.net/xenonstack",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true
}).then(()=>{
    console.log('Connnection Successful');
}).catch((err)=>{
    console.log(`Error is ${err}`);
})
