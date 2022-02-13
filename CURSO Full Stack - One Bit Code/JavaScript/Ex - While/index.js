let warpCount = 0
let chosenOption = ""

let spaceship = prompt("Digite o nome da nave")

chosenOption = prompt("Deseja entrar em dobra espacial? \n1- Sim \n 2- Não ")

while(chosenOption == "1") {
    warpCount += 1
    chosenOption = prompt("Deseja realizar a próxima dobra?\n 1- Sim \n 2- Não")
}

alert("Nave: " + spaceship + "\nQuantidade de dobras: " + warpCount) 