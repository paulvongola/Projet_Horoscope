// on récupère la ref de toutes les images des signes astro
const images = [...document.querySelectorAll("img")]


images.forEach(image => {
    image.addEventListener("click", (e) => {
        const sign = e.target.dataset.sign
        let endpoint = `https://aztro.sameerkumar.website?sign=${sign}`
    
    
        fetch(endpoint, {
            method: "POST"
        })
        .then(res => res.json())
        .then(data => {
            const result = document.querySelector('.result')
            result.style.visibility = "visible"
            result.textContent = data.description
        })
    })
    
})

