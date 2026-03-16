async function signup(){

try{

const name = document.getElementById("name").value
const email = document.getElementById("email").value
const password = document.getElementById("password").value

const response = await fetch("http://localhost:3000/signup",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name,
email,
password
})
})

const data = await response.json()

alert(data.message)

if(data.success){
window.location.href="login.html"
}

}catch(error){

alert("Signup failed. Please try again.")

}

}



async function login(){

try{

const email = document.getElementById("email").value
const password = document.getElementById("password").value

const response = await fetch("http://localhost:3000/login",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
email,
password
})
})

const data = await response.json()

if(data.token){

localStorage.setItem("token",data.token)

window.location.href="main.html"

}else{

alert("Login failed")

}

}catch(error){

alert("Login error. Please try again.")

}

}



function logout(){

localStorage.removeItem("token")

window.location.href="login.html"

}