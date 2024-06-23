/*let inputAdultos = document.getElementById("Adulto")
let inputCrianca = document.getElementById("Criança")
let inputDuracao = document.getElementById("Duração")

let resulatdo = document.getElementById("Resultado")


function calcular (){  

    console.log("calcular ...")

let Adulto = inputAdultos.value
let Criança = inputCrianca.value
let Duração = inputDuracao.value

let qtdTotalCarne = carnePP(Duração)* Adulto +(carnePP (Duração)) /2 *Criança;
let qtdTotalCerveja = cervejaPP (Duração)*Adulto;
let qtdTotalBebidas= bebidasPP(Duração)* Adulto +(bebibasPP (Duração)) /2 *Criança;

resulatdo.innerHTML = `<p> ${qtdTotalCarne}g de Carne </p>`
resulatdo.innerHTML += `<p> ${qtdTotalCerveja}Ml de Cerveja </p>`
resulatdo.innerHTML += `<p> ${qtdTotalBebidas}ml de Bebidas </p>`

}

    function carnePP ( Duração){

        if(Duração >= 6)
            return 650;
        else{
            return 400;
        }
    }

    
    function cervejaPP (Duração){

        if(Duração >= 6)
            return 2000;
        else{
            return 1200;
        }
    }
    function bebidasPP (Duração){

        if(Duração >= 6)
            return 1500;
        else{
            return 1000;
        }
    }*/
let inputAdultos = document.getElementById("Adulto");
let inputCrianca = document.getElementById("Crianca");
let inputDuracao = document.getElementById("Duracao");

let resultado = document.getElementById("resultado");
resultado.style.color="gray"

function calcular() {
    console.log("calcular ...");

    let Adulto = parseInt(inputAdultos.value);
    let Crianca = parseInt(inputCrianca.value);
    let Duracao = parseInt(inputDuracao.value);

    let qtdTotalCarne = carnePP(Duracao) * Adulto + (carnePP(Duracao) / 2 * Crianca);
    let qtdTotalCerveja = cervejaPP(Duracao) * Adulto;
    let qtdTotalBebidas = bebidasPP(Duracao) * Adulto + (bebidasPP(Duracao) / 2 * Crianca);

    resultado.innerHTML = ` <p>${qtdTotalCarne /1000}kg de Carne</p>`;
    resultado.innerHTML += `<p>${qtdTotalCerveja /1000}L de Cerveja</p>`;
    resultado.innerHTML += `<p>${qtdTotalBebidas /1000}L de Bebidas</p>`;


}

function carnePP(Duracao) {
    
    return Duracao >= 6 ? 650: 400;
    
    
}



function cervejaPP(Duracao) {
    return Duracao >= 6 ? 1500:1200;
}

function bebidasPP(Duracao) {
    return Duracao >= 6? 1200:800;
    
}
