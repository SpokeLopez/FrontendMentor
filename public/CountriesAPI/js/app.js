const flags = document.getElementById('flags');

document.addEventListener('DOMContentLoaded', e => {
    fetchData();
})

const fetchData = async () => {
    try {
        const res = await fetch('https://restcountries.com/v3.1/all');
        const data = await res.json();
        drawFlags(data);
        formCountry(data);
        filterSelect(data);
    } catch (error) {
        console.log(error);
    }
}

const drawFlags = (data) => {
    let ele = '';

    for (let [index, item] of data.entries()){
        console.log(item)
        ele += `
        <div class="card">
        <a href="country.html?name=${item.name.common}">
            <img src="${item.flags.svg}" alt="Bandera ${item.name.common}" class="img-fluid">
        </a>
            <div class="card-content">
                <h3>${item.name.common}</h3>
                <p>
                    <b>Population: </b>
                    ${item.population}
                </p>
                <p>
                    <b>Region: </b>
                    ${item.region}
                </p>
                <p>
                    <b>Capital: </b>
                    ${item.capital}
                </p>
            </div>
        </div>
        `
}

    flags.innerHTML = ele;
}