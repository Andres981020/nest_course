export let name: string = 'Andres';
export const age: number = 35;
export const isValid: boolean = true;

name = 'Melissa';


export const templateString = ` Esto es un string
multiline
puede tener
" dobles
' simple
inyectar valores ${ name }
expresiones ${ 1 + 1 }
numeros ${ age }
booleanos ${ isValid }`;

console.log(templateString);


