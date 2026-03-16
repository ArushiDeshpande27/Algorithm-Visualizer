const express = require("express")
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/algovisualizer")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err))

const User = mongoose.model("User", {
name: String,
email: String,
password: String
})

app.get("/", (req,res)=>{
res.send("Backend running")
})

app.post("/signup", async (req,res)=>{

const {name,email,password} = req.body

const hashedPassword = await bcrypt.hash(password,10)

const user = new User({
name,
email,
password: hashedPassword
})

await user.save()

res.json({
success:true,
message:"Account created"
})

})

app.post("/login", async (req,res)=>{

const {email,password} = req.body

const user = await User.findOne({email})

if(!user){
return res.json({message:"User not found"})
}

const valid = await bcrypt.compare(password,user.password)

if(!valid){
return res.json({message:"Invalid password"})
}

const token = jwt.sign({id:user._id},"secretkey")

res.json({token})

})

app.listen(3000, ()=>{
console.log("Server running on port 3000")
})