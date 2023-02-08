const botao = document.getElementById('botao');
const input = document.getElementById('input');
const resultado = document.getElementById('resultado');
const a = 10;



console.log(parseInt(input.value));
console.log(a*parseInt(input.value)^2);
console.log(typeof parseInt(input.value));

botao.addEventListener('click', (e)=>{
    const calculo = (a*(parseInt(input.value)*parseInt(input.value))/2);
    
    alert(`O resultado é ${calculo} metros (ou ${calculo/1000.0} km) para ${input.value} segundos`);
    e.preventDefault();
})