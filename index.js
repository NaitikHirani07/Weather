

let btnClick = document.getElementById('btn')
let cityName = document.getElementById('cityName').value;
const apiKey = 'f5fe34768de0436780a53944241004';

async function getData(apiKey,cityName){
    let data = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=yes`);
    return await data.json();
}

btnClick.addEventListener('click', async () => {
    const cityName = document.getElementById('cityName').value;
    let data = await getData(apiKey,cityName);
    let locationImg = document.getElementById('locationImgTwo');
    let locationTemp = document.getElementById('locationTempTwo');
    let locationName = document.getElementById('locationName');

    locationImg.src = data.current.condition.icon;
    locationTemp.innerHTML = `${data.current.temp_c}&deg`;
    locationName.innerText = `${data.location.name}, ${data.location.region}, ${data.location.country}`;
});