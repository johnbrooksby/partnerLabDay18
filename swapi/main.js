let getBtn = document.querySelector('button');
let div = document.querySelector("div");

const baseURL = "https://swapi.dev/api"

function getRes(e) {
    e.preventDefault()
    div.innerHTML = "";
    let text = document.querySelector("input").value;
    if(text){
        axios.get(`${baseURL}/planets/?search=${text}`).then(res => {
            res.data.results[0].residents.forEach(elem => {
                axios.get(elem).then(res2 => {
                    let pop = document.createElement("h2");
                    pop.textContent = res2.data.name;
                    div.appendChild(pop)
                })
            })
        })
    }
    text.value = "";
}

getBtn.addEventListener("click", getRes);