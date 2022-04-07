const formSorteio = document.getElementById("sorteador")
const inputSorteia = document.getElementById("sorteia")
const exibeResultado = document.getElementById("resultado")
 

function sorteia() {
    let arrayValores = []
    const valorinput = inputSorteia.value.split(/[\r\n]+/)

    for (let i = 0; i < valorinput[0].length; i++) {
        arrayValores.push(valorinput)
        const sorteado = arrayValores[0][Math.floor(Math.random() * arrayValores[0].length)];
        exibeResultado.innerHTML = `Seu resultado é: <span> ${sorteado} </span>`
    }
}

formSorteio.addEventListener('submit', (ev) => {
    ev.preventDefault()
    sorteia()
})
  
 