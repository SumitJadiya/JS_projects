window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description')
    let temperatureSection = document.querySelector('.temperature')
    let temperatureSectionSpan = document.querySelector('.temperature span')
    let temperatureDegree = document.querySelector('.temperature-degree')
    let locationTimezone = document.querySelector('.location-timezone')
    // This will show a popup (Browser wants to know your location)
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            // proxy to fix CORS issue
            const proxy = "https://cors-anywhere.herokuapp.com/"
            const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;
            console.log(api)
            fetch(api)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    console.log(data);
                    const { temperature, summary, icon } = data.currently;
                    temperatureDegree.textContent = temperature;
                    temperatureDescription.textContent = summary
                    locationTimezone.textContent = data.timezone;
                    // Formula for celcius 
                    let celcius = (temperature - 32) * 5 / 9;

                    setIcons(icon, document.querySelector(".icon"))

                    temperatureSection.addEventListener('click', () => {
                        if (temperatureSectionSpan.textContent == 'F') {
                            temperatureSectionSpan.textContent = 'C'
                            temperatureDegree.textContent = Math.floor(celcius)
                        }
                        else {
                            temperatureSectionSpan.textContent = 'F'
                            temperatureDegree.textContent = temperature
                        }
                    })
                })
        })
    }

    function setIcons(icon, iconId) {
        const skycon = new Skycons({ color: "white" })
        const currentIcon = icon.replace(/-/g, "_").toUpperCase()
        skycon.play()
        return skycon.set(iconId, Skycons[currentIcon]);
    }
})