const express= require("express");
const path=require("path");
const hbs=require("hbs");
const { error } = require("console");

const app = express();
require("./db/conn")
const port = process.env.PORT || 4000;


const Register = require("./models/register");
const Userreg= require("./models/registration");

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(static_path))

app.set("view engine", "hbs");


app.get('/',(req, res)=>{
    res.render('login')
})
app.get('/login',(req, res)=>{
    res.render('login')
})
app.get('/contact',(req, res)=>{
    res.render('contact')
})
app.get('/register',(req, res)=>{
    res.render('register')
})

app.post("/contact", async(req,res)=>{
    const registerEmployee = new Register({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message
    })
    const registered = await registerEmployee.save();
    res.status(201).render("index");
    
})


app.post("/registeration", async(req,res)=>{

            const userregisteration= new Userreg({
                name : req.body.name,
                email : req.body.email,
                password : req.body.password
            })

           const userregister = await userregisteration.save();
           res.status(201).render("login");
           
     
})


app.post("/login", async(req, res)=>{
    try {
        const email= req.body.email;
        const password = req.body.password;

        console.log(`${email} and password ${password}`)

        const useremail = await Userreg.findOne({email:email});

        if (useremail.password===password) {
            res.status(201).render("index");
        }
        else{
            res.send("password are not matching");
        }
        
    } catch (error) {
        // res.status(400).send("Invalid Email");
        console.log(error)
    }
})

app.listen(port, ()=>{
    console.log(`Server is running at ${port}`);
})
