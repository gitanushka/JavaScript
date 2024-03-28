const clock = document.getElementById('clock');
//set interval method display the function values in that interval( either always, after 3 sec etc.)
setInterval(function(){
    let date = new Date();
    //console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000 );