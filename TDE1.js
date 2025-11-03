let mostrarResult = (resposta) => document.getElementById("result").innerHTML = "O resultado é " + resposta;

let getInputs = (inputs) =>{nums = []; for (let i = 0; i < inputs.length; i++){nums.push(parseInt(inputs[i].value));}}

function adicao(nums, mostrarResult){
    let resposta = 0
    for (let i = 0; i < nums.length; i++){
        resposta += nums[i]
    } 
    return mostrarResult(resposta);
};

function subtracao(nums, mostrarResult){
    let resposta = nums[0]
    for (let i = 1; i < nums.length; i++){
        resposta -= nums[i]
    } 
    return mostrarResult(resposta);
};

function divisao(nums, mostrarResult){
    let result = nums[0];
    for (let i = 1; i < nums.length; i++) {
        result /= nums[i];
    }
    let resposta = result.toFixed(2);
    return mostrarResult(resposta);
};

function multiplicasao(nums, mostrarResult){
    let resposta = nums[0];
    for (let i = 1; i < nums.length; i++) {
        resposta *= nums[i];
    }
    return mostrarResult(resposta);
};

function media(nums, mostrarResult){
    let soma = 0
    for (let i = 0; i < nums.length; i++){
        soma += nums[i]
    }
    let resposta = soma / nums.length;
    return mostrarResult(resposta);
}

document.addEventListener("DOMContentLoaded", function () {
let btnSoma = document.getElementById("soma");
let btnSubt = document.getElementById("subtrção");
let btnDivi = document.getElementById("dividir");
let btnMulti = document.getElementById("multip");
let btnMedia = document.getElementById("media");
let inputs = document.querySelectorAll('input');

    if(btnSoma){
    btnSoma.addEventListener("click", function() {
        getInputs(inputs);
        adicao(nums, mostrarResult);
    });
    }

    if(btnSubt){
    btnSubt.addEventListener("click", function() {
        getInputs(inputs);
        subtracao(nums, mostrarResult);
    });
    }

    if(btnDivi){
    btnDivi.addEventListener("click", function() {
        getInputs(inputs);
        divisao(nums, mostrarResult);
    });
    }

    if(btnMulti){
    btnMulti.addEventListener("click", function() {
        getInputs(inputs);
        multiplicasao(nums, mostrarResult);
    });
    }

    if(btnMedia){
    btnMedia.addEventListener("click", function() {
        getInputs(inputs);
        media(nums, mostrarResult);
    });
    }
});