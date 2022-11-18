function WriteData(heart,step){
    firebase.database().ref("User").set({
        Heart_Rate:heart,
        Foot_Steps:step
    });
}

// Get value from Firebase
// Get Data calories
var timeCalories = firebase.database().ref('calories').child('time');
timeCalories.on('value',snap =>{
    console.log("Time : "+snap.val());
    document.getElementById("timeCalories").innerHTML = snap.val();
});

var valCalories = firebase.database().ref('calories').child('value');
valCalories.on('value',snap =>{
    console.log("Calories : "+snap.val());
    document.getElementById("valCalories").innerHTML = snap.val();
});

//Get data distance

var timeDistance = firebase.database().ref('distance').child('time');
timeDistance.on('value',snap =>{
    console.log("Time : "+snap.val());
    document.getElementById("timeDistance").innerHTML = snap.val();
});

var valDistance = firebase.database().ref('distance').child('value');
valDistance.on('value',snap =>{
    console.log("Distance : "+snap.val());
    document.getElementById("valDistance").innerHTML = snap.val();
});

//Get data Heart rate

var timeHeart = firebase.database().ref('heart rate').child('time');
timeHeart.on('value',snap =>{
    console.log("Time : "+snap.val());
    document.getElementById("timeHeart").innerHTML = snap.val();
});

var valHeart = firebase.database().ref('heart rate').child('value');
valHeart.on('value',snap =>{
    console.log("Heart rate : "+snap.val());
    document.getElementById("valHeart").innerHTML = snap.val();
});

// Get data steps

var timeSteps = firebase.database().ref('steps').child('time');
timeSteps.on('value',snap =>{
    console.log("Time : "+snap.val());
    document.getElementById("timeSteps").innerHTML = snap.val();
    
});

var valSteps = firebase.database().ref('steps').child('value');
valSteps.on('value',snap =>{
    console.log("Steps : "+snap.val());
    document.getElementById("valSteps").innerHTML = snap.val();
});

// Get Data Move minutes
var timeMove = firebase.database().ref('move minutes').child('time');
timeMove.on('value',snap =>{
    console.log("Time : "+snap.val());
    document.getElementById("timeMove").innerHTML = snap.val();
});

var valMove = firebase.database().ref('move minutes').child('value');
valMove.on('value',snap =>{
    console.log("Move minutes : "+snap.val());
    document.getElementById("valMove").innerHTML = snap.val();
});

// Get Data speed
var timeSpeed = firebase.database().ref('speed').child('time');
timeSpeed.on('value',snap =>{
    console.log("Time : "+snap.val());
    document.getElementById("timeSpeed").innerHTML = snap.val();
});

var valSpeed = firebase.database().ref('speed').child('value');
valSpeed.on('value',snap =>{
    console.log("Speed : "+snap.val());
    document.getElementById("valSpeed").innerHTML = snap.val();
});

// Style
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");              
const closeBtn =document.querySelector("#close-btn");
const themeToggler =document.querySelector(".theme-toggler");


// change theme
themeToggler.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').
    classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').
    classList.toggle('active');
})