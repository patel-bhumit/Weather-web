const searchoutput = document.getElementById("button")
var searchinput = document.getElementById("text")
const apikey = `b528921321c22d58397185baab1f16b3`;


window.addEventListener ("load", () => {

    let lat;
    let long;

    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition((position)=>{
            lat = position.coords.latitude
            long = position.coords.longitude

            fetch (
                "https://api.openweathermap.org/data/2.5/weather?lat="+ lat +"&lon="+ long +"&units=metric&appid="+ apikey
            )
            .then((response) =>
            
            {return response.json();}
            )
            .then((data) => displayweather(data));
        })
    }
    else{
        alert("Browser isnot supported")
    }

}
)

document.querySelector('#text').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      fetchweather();// code for enter
    }
});

function fetchweather() {
    x = document.querySelector("#text").value
    fetch (
        "https://api.openweathermap.org/data/2.5/weather?q="+ x +"&appid="+ apikey + "&units=metric"
    )
    .then((responese) => responese.json()
    .then((data) => displayweather(data))
    )
    .catch(error => {
        alert("City Name Is Invalid")
 });
}

function displayweather(data) {
    var { name, id } = data;
    var { icon, description } = data.weather[0];
    var { temp, humidity, pressure } = data.main;
    var { speed } = data.wind;
    console.log(name, temp, icon, description, humidity, pressure, speed, id)
    document.querySelector(".city").innerHTML = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon +".png";
    document.querySelector(".temp").innerHTML = Math.round(temp)+"°C";
    document.querySelector(".discription").innerHTML = description;
    document.querySelector(".humidity").innerHTML = "Humidity : " + humidity + "%";
    document.querySelector(".wind").innerHTML = "Wind Speed : " + speed + " Km/h";
    document.querySelector(".pressure").innerHTML = "Pressure : " + pressure + " mb";
   
    if(icon == "01d"){
        document.getElementById("mybody").style.backgroundImage = "url(./src/image/day.jpg)";
    } else if(icon == "01n") {
        document.getElementById("mybody").style.backgroundImage = "url(./src/image/night.jpg)";
    } else if(icon == "02d" || icon == "03d") {
        document.getElementById("mybody").style.backgroundImage = "url(./src/image/fewcloudsday.jpg)";
    } else if(icon == "02n" || icon == "03n") {
        document.getElementById("mybody").style.backgroundImage = "url(./src/image/fewcloudsnight.jpg)";
    } else if(icon == "04d" || icon == "04n") {
        document.getElementById("mybody").style.backgroundImage = "url(./src/image/cloudy.jpg)";
    } else if(icon == "10d") {
        document.getElementById("mybody").style.backgroundImage = "url(./src/image/rain-day.jpg)";
    } else if(icon == "9d") {
        document.getElementById("mybody").style.backgroundImage = "url(./src/image/rain.jpg)";
    } else if(icon == "09n" || icon == "10n") {
        document.getElementById("mybody").style.backgroundImage = "url(./src/image/rain-night.jpg)";
    } else if(icon == "13d") {
        document.getElementById("mybody").style.backgroundImage = "url(./src/image/snow-day.jpg)";
    } else if(icon == "13n") {
        document.getElementById("mybody").style.backgroundImage = "url(./src/image/snow-night.jpg)";
    } else if(icon == "11d") {
        document.getElementById("mybody").style.backgroundImage = "url(./src/image/thunderstrom.jpg)";
    } else if(icon == "11n") {
        document.getElementById("mybody").style.backgroundImage = "url(./src/image/lightning.jpg)";
    } else if(icon == "50d") {
        document.getElementById("mybody").style.backgroundImage = "url(./src/image/mist-day.jpg)";
    } else if(icon == "50n") {
        document.getElementById("mybody").style.backgroundImage = "url(./src/image/mist-night.jpg)";
    } else {
        document.getElementById("mybody").style.backgroundImage = "url(./src/image/day.jpg)";
    } 
}