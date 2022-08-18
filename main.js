const h1= document.querySelector("h1");
const input1 =document.querySelector("#calculo1");
const input2=document.querySelector("#calculo2");
const btnSuma= document.querySelector("#btnSuma");
const btnResta= document.querySelector("#btnResta");
const btnMultiplicacion= document.querySelector("#btnMultiplicacion");
const btnDivision= document.querySelector("#btnDivision");
const pResult=document.querySelector("#result");

    btnSuma.addEventListener("click",btnOnlickSuma);
    btnResta.addEventListener('click',btnOnlickResta);
    btnMultiplicacion.addEventListener('click',btnOnlickMultiplicacion);
    btnDivision.addEventListener('click',btnOnlickDivision);





function btnOnlickSuma() {

    const sumaInputs= (Number(input1.value) + Number(input2.value)); 

    
    pResult.innerText = "Resultado: " + sumaInputs;


}

function btnOnlickResta() {

    const restaInputs= (Number(input1.value) - Number(input2.value)); 

    
    pResult.innerText = "Resultado: " + restaInputs;


}
function btnOnlickMultiplicacion() {

    const multiplicacionInputs= (Number(input1.value) * Number(input2.value)); 

    
    pResult.innerText = "Resultado: " + multiplicacionInputs;


}
function btnOnlickDivision() {

    const divisionInputs= (Number(input1.value) / Number(input2.value)); 

    
    pResult.innerText = "Resultado: " + divisionInputs;


}





