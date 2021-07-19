const userData = [{"fname":"esme", "lname":"sanchez", "id":1892038, "isTherapist":true},
{"fname":"rick", "lname":"jeps", "id":1894024, "isTherapist":false},
{"fname":"angie", "lname":"lange", "id":1982403, "isTherapist":false},
{"fname":"renat", "lname":"gros", "id":1894039, "isTherapist":true},
{"fname":"bettino", "lname":"yang", "id":3789204, "isTherapist":true}]



const mainBox = document.querySelector("#main-container");

userData.forEach(user => {
   const fullName =`${user.lname[0].toUpperCase() + user.lname.slice(1, user.lname.length)}, ${user.fname[0].toUpperCase() + user.fname.slice(1, user.fname.length)}`
   const nameDiv = document.createElement('div')
   nameDiv.innerText = fullName
   nameDiv.classList.add("nameDiv")
   mainBox.appendChild(nameDiv);
})
