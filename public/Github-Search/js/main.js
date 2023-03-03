//https://api.github.com/users/spokelopez/repos

//Obtener el formulario y la barra de busqueda
const form = document.querySelector('#form');
const search = document.querySelector('#search');
const userCard = document.querySelector('.usercard');

//Escuchar el submit

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = search.value;
    getUserData(username);
    search.value = '';
})

// Obtener la información del usuario en GitHub

async function getUserData(username) {
    const API = 'https://api.github.com/users/';
    try {
        const userRequest = await fetch(`${API+username}`);
        if (!userRequest.ok) {
            throw new Error(userRequest.status);
        } 
        const userData = await userRequest.json();
        if (userData.public_repos) {
            const reposRequest = await fetch(`${API + username}/repos`);
            const reposData = await reposRequest.json();
            userData.repos = reposData;
        }
        drawUserData(userData);
    } catch (error) {
       showError(error.message);
    }
}
// HTML para el widget

function drawUserData(userData) {
    let app = `
        <img src="${userData.avatar_url}" alt="">
        <h1>${userData.name}</h1>
        <p>${userData.bio}</p>
        <section class="data">
            <ul>
                <li>Followers: ${userData.followers}</li>
                <li>Following: ${userData.following}</li>
                <li>Repositories: ${userData.public_repos}</li>
            </ul>
        </section>`;
    if (userData.repos) {
        app += `<section class="repos">`;

        userData.repos.slice(0,7).forEach(repo => {
            console.log(repo.name);
            app += `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
        })
        app += `</section>`;
    }
    userCard.innerHTML = app;
}

// Función para gestionar los errores
function showError(error) {
    const errorContent = `<h1>Error 🛑 ${error}</h1>`
    userCard.innerHTML = errorContent;
}