//JS Challenge 1 + 2
let weather = {
  temp: 20,
  humidity: 2,
};
console.log(weather);

//JS Challenge 3
console.log(weather.temp);
console.log(weather.humidity);

//JS Challenge 4
weather.windSpeed = 4;
console.log(weather.windSpeed);

//JS Challenge 5
console.log(weather["windSpeed"]);
console.log(weather["temp"]);
console.log(weather["humidity"]);
// weather["windSpeed"] === weather.windSpeed

//JS Challenge 6
let forecast = [
  {
    day: "Monday",
    temp: 22,
  },
  {
    day: "Tuesday",
    temp: 23,
  },
  {
    day: "Wednesday",
    temp: 20,
  },
  {
    day: "Thursday",
    temp: 19,
  },
  {
    day: "Friday",
    temp: 22,
  },
  {
    day: "Saturday",
    temp: 22,
  },
  {
    day: "Sunday",
    temp: 25,
  },
];
console.log(
  `The temperature for the day after tomorrow will be ${forecast[0].temp} degrees`
);
