const form = document.getElementById('form');
const input = document.getElementById('inputCountry');

const formCountry = (data) => {
    form.addEventListener('keyup', async (e) => {
        e.preventDefault();
        const letters = input.value.toLowerCase();
        console.log(letters);

        const arrayFilter = data.filter(item => {
            const letterApi = item.name.common.toLowerCase()

            if(letterApi.indexOf(letters) !== -1){
                return item;
            }
        })
        drawFlags(arrayFilter);
    })
}