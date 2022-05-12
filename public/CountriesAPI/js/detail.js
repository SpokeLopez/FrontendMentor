const flag = document.getElementById('flags');
const query = new URLSearchParams(window.location.search);
const params = query.get('name');
console.log(params);

document.addEventListener('DOMContentLoaded', e => {
    fetchData();
})

const fetchData = async () => {
    try {
        const res = await fetch('https://restcountries.com/v3.1/all');
        const data = await res.json();
        const fiterData = data.filter(item => item.name.common === params);

        drawFlags(fiterData);
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
        <img src="${item.flags.svg}" alt="Bandera ${item.name.common}" class="img-fluid">
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