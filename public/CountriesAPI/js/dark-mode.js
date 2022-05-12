const btnDark = document.querySelector('.btn-dark-mode');

btnDark.addEventListener('click', () => {
    console.log('diste click');
    document.body.classList.toggle('dark-mode');

    if(document.body.className === 'dark-mode') {
        btnDark.innerHTML =
        `<i class="far fa-sun"></i> Light mode`;

    } else{
        btnDark.innerHTML =
        `<i class="far fa-moon"></i> Dark mode`;
    }
})