function somar(){
    var num1;//Declarando uma variável 
    var num2;
    var res;
    //Coletando os dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando o cálculo
    res = num1 + num2;
    document.getElementById("resultado").value = "A soma dos números é: " + res;
}//fim do método

function subtrair(){
    var num1;//Declarando uma variável 
    var num2;
    var res;
    //Coletando os dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando o cálculo
    res = num1 - num2;
    document.getElementById("resultado").value = "A subtração dos números é: " + res;
}//fim do método

function multiplicar(){
    var num1;//Declarando uma variável 
    var num2;
    var res;
    //Coletando os dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando o cálculo
    res = num1 * num2;
    document.getElementById("resultado").value = "A multiplicação dos números é: " + res;
}//fim do método

function dividir(){
    var num1;//Declarando uma variável 
    var num2;
    var res;
    //Coletando os dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando o cálculo
    if(num2 <= 0){
        res = "Impossível dividir por número menores ou iguais a zero!";
    }else{
        res = num1 / num2;
    }
    //Faço a resposta
    document.getElementById("resultado").value = "A divisão dos números é: " + res;
}//fim do método

function tabuada(){
    var num1;
    var num2;

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);

    var resNum1 = "Tabuada do " + num1;
    var resNum2 = "Tabuada do " + num2;

    for(i = 0; i <= 10; i++){
        resNum1 += "\n" + num1 + " * " + i + " = " + (num1 * i);
        resNum2 += "\n" + num2 + " * " + i + " = " + (num2 * i);
    }

    document.getElementById("resultado").value = "\n" + resNum1 + "\n\n" + resNum2;
}//fim do método

function potencia(){
    var num1; 
    var pot;
    var resultado;

    num1 = parseInt(document.getElementById("tpNum").value);
    pot = parseInt(document.getElementById("tsNum").value);

    //Realizando a potência dos números
    
        resultado = Math.pow(num1,pot);
     

   document.getElementById("resultado").value="O resultado da potência é:" + resultado;
}//fim do método

function raizQuadrada(){
    var num1; 
    var num2;

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);

        //Realizando a raiz dos números

        document.getElementById("resultado").value= "\n\nA raíz de: " + num1 + "é"+ Math.sqrt(num1)
        + "\n\nA raíz de:" + num2 + "é" + Math.sqrt(num2)
}//fim do método

function bhaskara(){
    var a;
    var b;
    var c;
    var delta;
    var x1;
    var x2;
    var resposta;

    a = parseInt(document.getElementById("tpNum").value);
    b = parseInt(document.getElementById("tsNum").value);
    c = parseInt(document.getElementById("ttNum").value);

    delta = Math.pow(b,2) - 4 * a * c;

    if (delta <= 0){
        resposta = "Delta é igual a: " + delta + " .Impossível fazer a operação. O resultado de delta não pode ser menor ou igual a zero";
    }else{

        x1 = (-b + Math.sqrt(delta)) / (2 * a);
        x2 = (-b - Math.sqrt(delta)) / (2 * a);

        resposta = "x1 é igual a: " + x1 + "\nx2 é igual a: " + x2;
    }
        
    document.getElementById("resultado").value = "Delta é igual a: " + delta + "\n" + resposta;
}//fim do metodo

//EXERCÍCIOS

//Exercício1
function contarDez(){
    var res = "Números de 1 a 10: ";

    for(i = 1; i <= 10; i++){
        res += "\n" + i; 
    }

    document.getElementById("resultado").value = "\n" + res;
}//Fim do método

//Exercicio2
function contarPares(){
        var num1; 
        var num2;
        var res = "Pares de 1 a 20:";
    
        for(i = 1; i <= 20; i++){
            if(i % 2 == 0 ){
                res += "\n" + i; 
            }
        }
    
        document.getElementById("resultado").value = "\n" + res;
    }//Fim do método



//Exercício3
function somarCem(){
        var soma = 0;
    
        for(i = 1; i <= 100; i++){
                soma += i;   
            }
    
        document.getElementById("resultado").value = soma;
    }//Fim do método

//Exercício4
function multiplosDeCinco(){
    var res = "Multiplos de 5, de 1 a 50" ;

    for(i = 5; i <= 50; i++){
        if(i % 5 == 0 ){
            res += "\n" + i; 
        }
    }
    document.getElementById("resultado").value = res;
}//Fim do método

//Exercício5
function deUmAteNum(){
    var num;
    var res;

    for(i = 1; i<num1; i++){

    
    }

}