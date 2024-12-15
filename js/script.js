let show= document.querySelector("#show")
let search = document.getElementById('search')
search.oninput=function(){
 city =search.value.trim()
 if(city.length>=3){
    getweather(city)
 }
 

}


async function getweather(location) {
    
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7a110cb50a5e4e48bd880855241512&q=${location}&days=3&aqi=no&alerts=no`,{method:"get"})
    let data =await response.json()
    console.log("kimo", data)
    // اليوم الحالى 
    let temp1=data.current.temp_c
    let locat1=data.location.name
    let description1 =data.current.condition.text
    let wind1 = data.current.wind_kph
    let humidity1= data.current.humidity
    let wind_dir1=data.current.wind_dir
    let img1= "https:" +data.current.condition.icon
    let date1=new Date().getDate()
    let month1 = new Intl.DateTimeFormat('en-US',{month:'long'}).format()
    let weekday1=new Intl.DateTimeFormat("en-US",{weekday:'long'}).format()
    // اليوم التانى 
    const day2 = data.forecast.forecastday[1]
    let temp2=day2.day.maxtemp_c
    let description2 =day2.day.condition.text;
    let humidity2= day2.day.avghumidity
    let wind2 = day2.day.maxwind_kph
    let wind_dir2=day2.hour[0].wind_dir;
    let img2= "https:" +day2.day.condition.icon
    let fullDate2 = new Date(day2.date); // تحويل النص لتاريخ
    let date2 = fullDate2.getDate();
    let month2 = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(fullDate2);
    let weekday2 = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(fullDate2);
    // اليوم التالت 
    const day3 = data.forecast.forecastday[2]
    let temp3=day3.day.maxtemp_c
    let description3 =day3.day.condition.text;
    let img3= "https:" +day3.day.condition.icon
    let humidity3= day3.day.avghumidity
    let wind3 = day3.day.maxwind_kph
    let wind_dir3=day3.hour[0].wind_dir;
    let fullDate3 = new Date(day3.date); // تحويل النص لتاريخ
let date3 = fullDate3.getDate();
let month3 = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(fullDate3);
let weekday3 = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(fullDate3);
    
display(
    temp1, locat1, description1, wind1, date1, month1, weekday1, humidity1, wind_dir1, img1,
    temp2, description2, date2,humidity2,wind2,wind_dir2,month2, weekday2, img2,
    temp3, description3, date3,humidity3,wind3,wind_dir3, month3, weekday3, img3
  );

}
window.onload= function(){
    getweather('cairo')
} 

function display(
    temp1, locat1, description1, wind1, date1, month1, weekday1, humidity1, wind_dir1, img1,
    temp2, description2, date2,humidity2,wind2,wind_dir2,month2, weekday2, img2,
    temp3, description3, date3,humidity3,wind3,wind_dir3, month3, weekday3, img3
  ){
    let box= `    <div class="col-md-4">
                    <div class="weather-card">
                        <div class="title d-flex justify-content-between rounded-2 p-3 ">
                            <div class="day">${weekday1}</div>
                            <div class="date">${date1} ${month1}</div>
                        </div>
                        <div class="location pt-5">${locat1}</div>
                        <h2>${temp1}&deg;C</h2>
                        <img src="${img1}"  alt="Partly Cloudy">
                        <p class="description">${description1}</p>
                        <div class="details">
                            <span><i class="fas fa-tint"></i>${humidity1}%</span>
                            <span><i class="fas fa-wind"></i>${wind1}km/h</span>
                            <span><i class="fas fa-compass"></i>${wind_dir1}</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="weather-card">
                        <div class="title d-flex justify-content-between rounded-2 p-3 ">
                            <div class="day">${weekday2}</div>
                            <div class="date">${date2} ${month2}</div>
                        </div>
                        <img src="${img2}" class="pt-5" alt="Sunny">
                        <h2>${temp2}&deg;C</h2>
                        <p class="description">${description2}</p>
                        <div class="details">
                            <span><i class="fas fa-tint"></i>${humidity2}%</span>
                            <span><i class="fas fa-wind"></i>${wind2}km/h</span>
                            <span><i class="fas fa-compass"></i>${wind_dir2}</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="weather-card">
                        <div class="title d-flex justify-content-between rounded-2 p-3 ">
                            <div class="day">${weekday3}</div>
                            <div class="date">${date3} ${month3}</div>
                        </div>
                        <img src="${img3}" class="pt-5" alt="Sunny">
                        <h2>${temp3}&deg;C</h2>
                        <p class="description">${description3}</p>
                         <div class="details">
                            <span><i class="fas fa-tint"></i>${humidity3}%</span>
                            <span><i class="fas fa-wind"></i>${wind3}km/h</span>
                            <span><i class="fas fa-compass"></i>${wind_dir3}</span>
                        </div>
                    </div>
                </div>`
show.innerHTML=box
}
