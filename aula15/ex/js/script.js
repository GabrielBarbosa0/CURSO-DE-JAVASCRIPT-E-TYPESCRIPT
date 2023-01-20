const numero = Number(prompt('Digite um número'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto')
// const raizQuadrada = document.getElementById('raiz-quadrada');
// const eInteiro = document.getElementById('e-inteiro');
// const eNaN = document.getElementById('e-NaN');
// const arredondadoBaixo = document.getElementById('areedondado-baixo');
// const arredondadoCima = document.getElementById('arredondado-cima');
// const doisDecimais = document.getElementById('dois-decimais');

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>raiz quadrada: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>${numero} é NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>arredondado para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>arredondado para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>com duas casas decimais: ${numero.toFixed(2)}</p>`;


// raizQuadrada.innerHTML = `<p>a raiz quadrada é: ${Math.sqrt(numero)}</p>`;
// eInteiro.innerHTML = `<p>é inteiro: ${Number.isInteger(numero)}</p>`;
// eNaN.innerHTML = `<p>é NaN: ${Number.isNaN(numero)}</p>`;
// arredondadoBaixo.innerHTML = `<p>seu número arredondado para baixo é: ${Math.floor(numero)}</p>`;
// arredondadoCima.innerHTML = `<p>seu número arredondado para cima é: ${Math.ceil(numero)}</p>`;
// doisDecimais.innerHTML = `<p>seu numero com duas casas decimais: ${numero.toFixed(2)
// }</p>`;