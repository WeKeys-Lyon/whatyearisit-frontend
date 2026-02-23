function displayResult() {
    fetch('https://whatyearisit-backend-psi-gules.vercel.app/year').then(response => response.json()).then(data => {
document.querySelector('#year').textContent = `
        Nous sommes dans l'année ${data.year}. Ça vous fait une belle jambe ?
`})
}

displayResult();
