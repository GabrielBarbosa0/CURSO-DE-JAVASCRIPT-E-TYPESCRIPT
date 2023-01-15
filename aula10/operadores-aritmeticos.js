//Operadores Aritméticos
/*  + = - * / **
    + Adição / Concatenação
    ** Potenciação
    % Resto da divisão
*/

//Ordem de Precedencia
/*
    ()
    **
    * /
    + -
*/

const num1 = 2;
const num2 = 3;
const num3 = '4';
console.log(num1 + num2); //5
console.log(num3 + num2); //43'

/*
 Operadores
    -Incremento = ++
    -Decremento = --
 */
let contador = 1;
contador++; //2
++contador; //3
contador--; //2

//Operadores de Atribuição

contador *= 2; //4
contador *= 2; //8
contador *= 2; //16

console.log(contador)

//Nan = Não é um Numero, parseInt(inteiro) parseFloat(decimais)
const numero1 = 10;
// const numero2 = 'Gabriel';
const numero2 = parseFloat('5.2');
console.log(numero1 + numero2)



