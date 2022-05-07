const curDate =document.getElementById("date");
let weathercon= document.getElementById("weathercon");

const tempStatus = "Clouds";

const getCurrentDay =()=>{
    var weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";
    let currentTime = new Date()
    let day = weekday[currentTime.getDay()];
   return day;
};

const getCurrentTime=()=>{
    var months= ["Jan", "Feb","Mar","Apr","May","Jun","Jul","Aug","Set","Oct","Nov","Dec"]
    var now = new Date();
    var month = months[now.getMonth()];
    var date = now.getDate();

    let hours = now.getHours();
    let min = now.getMinutes();

    let periods = " AM";
    if(hours>11){
        periods = " PM";
        if(hours>12) hours-=12;
    }
    if(min<10)
    min = "0" + min;

    return `${month} ${date} | ${hours}:${min} ${periods}`;
};

curDate.innerHTML = getCurrentDay() + " | " + getCurrentTime();


