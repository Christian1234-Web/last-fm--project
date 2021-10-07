 
setInterval(() => {
     let fourthNub = document.getElementsByClassName('fourthNub')
    numberChange = Math.floor(Math.random() * 9) + 1;
    fourthNub[0].innerHTML = numberChange
}, 1000);
setInterval(() => {
    let fourthNub = document.getElementsByClassName('fourthNub')
   numberChange = Math.floor(Math.random() * 9) + 1;
   fourthNub[1].innerHTML = numberChange
}, 1000);
setInterval(() => {
    let fourthNub = document.getElementsByClassName('fourthNub')
   numberChange = Math.floor(Math.random() * 9) + 1;
   fourthNub[2].innerHTML= numberChange
}, 1000);
setInterval(() => {
    let fourthNub = document.getElementById('upNext')
   numberChange = Math.floor(Math.random() * 9) + 1;
   upNext.innerHTML= numberChange
}, 50000);



let text = 'this is my best programmer'
text.split('')
console.log(text)