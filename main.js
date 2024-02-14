let searchBtn = document.getElementById('search-btn');
let countryInp = document.getElementById('country-inp');
let result = document.getElementById('result');
let dataContainer = document.getElementById('data');

searchBtn.addEventListener('click', ()=>{
    let countryName = countryInp.value;
    countryName = countryName.toLowerCase();
    
    if(countryName == 'us' || countryName == 'usa' || countryName == 'america'){
        countryName = 'united states';
    }
    else if(countryName == 'rsa'){
        countryName = 'south africa';
    }

    let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    fetch(finalUrl)
        .then((response) => response.json())
        .then((data) =>{
            console.log(data);
            console.log(data[0]);
            console.log(data[0].name.common);  //India
            console.log(data[0].capital[0]);  //New Delhi
            console.log(data[0].continents[0]);  //Asia
            console.log(data[0].currencies[Object.keys(data[0].currencies)].name);  //Indian rupee
            console.log(data[0].currencies[Object.keys(data[0].currencies)].symbol);  //symbol
            console.log(data[0].flags.svg);  //flag
            console.log(Object.values(data[0].languages).toString().split(',').join(', '));  //languages
            console.log(data[0].timezones[0]);  //time zones

            result.innerHTML = `
                <img src="${data[0].flags.svg}" alt="">
                <h2>${data[0].name.common}</h2>
                <div class="data" id="data">
                    <h4>Capital: <span id='subData'>${data[0].capital[0]}</span></h4>
                    <h4>Continent: <span id='subData'>${data[0].continents[0]}</span></h4>
                    <h4>Currency: <span id='subData'>${data[0].currencies[Object.keys(data[0].currencies)].name}, ${data[0].currencies[Object.keys(data[0].currencies)].symbol}</span></h4>
                    <h4>Languages: <span id='subData'>${Object.values(data[0].languages).toString().split(',').join(', ')}</span></h4>
                    <h4>Timezone: <span id='subData'>${data[0].timezones[0]}</span></h4>
                </div>
            `; 
        }).catch(() => {
            if(countryName.length == 0){
                result.innerHTML = '<h3> The input field cannot be empty!</h3>';
            } 
            else{
                result.innerHTML = '<h3>Please enter a valid country name!</h3>'
            }
    })

});

countryInp.addEventListener('keypress', (e)=>{
    let countryName = countryInp.value;
    countryName = countryName.toLowerCase();

    if (e.key === "Enter") {
        if(countryName == 'us' || countryName == 'usa' || countryName == 'america'){
            countryName = 'united states';
        }
        else if(countryName == 'rsa'){
            countryName = 'south africa';
        }
    
        let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
        fetch(finalUrl)
            .then((response) => response.json())
            .then((data) =>{
                console.log(data);
                console.log(data[0]);
                console.log(data[0].name.common);  //India
                console.log(data[0].capital[0]);  //New Delhi
                console.log(data[0].continents[0]);  //Asia
                console.log(data[0].currencies[Object.keys(data[0].currencies)].name);  //Indian rupee
                console.log(data[0].currencies[Object.keys(data[0].currencies)].symbol);  //symbol
                console.log(data[0].flags.svg);  //flag
                console.log(Object.values(data[0].languages).toString().split(',').join(', '));  //languages
                console.log(data[0].timezones[0]);  //time zones
    
                result.innerHTML = `
                    <img src="${data[0].flags.svg}" alt="">
                    <h2>${data[0].name.common}</h2>
                    <div class="data" id="data">
                        <h4>Capital: <span id='subData'>${data[0].capital[0]}</span></h4>
                        <h4>Continent: <span id='subData'>${data[0].continents[0]}</span></h4>
                        <h4>Currency: <span id='subData'>${data[0].currencies[Object.keys(data[0].currencies)].name}, ${data[0].currencies[Object.keys(data[0].currencies)].symbol}</span></h4>
                        <h4>Languages: <span id='subData'>${Object.values(data[0].languages).toString().split(',').join(', ')}</span></h4>
                        <h4>Timezone: <span id='subData'>${data[0].timezones[0]}</span></h4>
                    </div>
                `; 
            }).catch(() => {
                if(countryName.length == 0){
                    result.innerHTML = '<h3> The input field cannot be empty!</h3>';
                } 
                else{
                    result.innerHTML = '<h3>Please enter a valid country name!</h3>'
                }
        })
    }
})
