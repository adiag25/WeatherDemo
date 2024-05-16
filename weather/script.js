const Apikey = "91cbcd25f852b76d6c5e44843cb085cc";

async function fetchWeatherData(city) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Apikey}`
    );
    // console.log(response);
    const data = await response.json();
    console.log(data);
    console.log(data.main.temp);
    console.log(data.name);
    console.log(data.main.humidity);
    console.log(data.visibility);
    console.log(data.wind.speed);
    updateWeatherUi(data);
    
}
const cityElement= document.querySelector('.city')
const dateElement= document.querySelector('.date')
const tempreatureElement= document.querySelector('.temprature')
const windSpeedElement=document.querySelector('.wind-speed')
const humidityzelement=document.querySelector('.humidity')
const visiblityElement=document.querySelector('.Visiblity-distance')
const weatherelement=document.querySelector('.description-text')

function updateWeatherUi(data){
    cityElement.textContent=data.name;
    windSpeedElement.textContent=data.wind.speed +" KM/h";
    tempreatureElement.textContent=`${Math.round(data.main.temp)}`+ "°C";
    humidityzelement.textContent=data.main.humidity+ "%";
    visiblityElement.textContent=(data.visibility)/1000 +" Km";
    const Cdate=new Date();
    dateElement.textContent=Cdate.toDateString();
    weatherelement.textContent=`${(data.weather[0].description)}`;

}


const formElement=document.querySelector('.search-form');
const inputElement=document.querySelector('.city-input');

formElement.addEventListener("submit",function(e){
    e.preventDefault();
    const city=inputElement.value;
    if (city!== ""){
        fetchWeatherData(city);
    }
});
