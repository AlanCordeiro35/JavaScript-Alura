/* Alterar o titula do site */

var titulo = document.querySelector(".titulo_principal");
titulo.textContent = "Aparecida Nutricionista";

/*O código querySelectorAll, exibi todo o contéudo de uma determinada lista
  no caso abaixo, esta exibido todo conteúo da classe paciente do HTML*/
var pacientes = document.querySelectorAll(".paciente");

/* loop de for i = 0, enquanto i < numero de paciente , i soma + 1. 
    está percorrendo toda a lista paciente acrescento mais + 1  
    LENGTH monstra a quantidade que tem nessa lista*/

for(var i = 0; i <  pacientes.length; i++){

    /* Variavel declarada para ver qual posição queremos acessar*/
        
    var paciente = pacientes[i]
    
    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;
    
    /* Função querySelector serve para analisar o diretório e a 
       Função textContent serve para extrair a informação que queremos do diretório*/
    
    var tdaltura = paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    /*  condição true para validar execução do calculo de IMC,
     caso seja altera para false o código retorna um mensagem de erro tdImc.textContent = " " */
    
    var peso_e_valido = true
    var altura_e_valido = true
    
    /*  Condição de validação e caso seja falso
        retornar a mensagem na tabela p/ usuário-- 
        Adicionando uma CLASSE no CSS mostrar uma cor se informação estiver errada*/
    
    if(peso <= 0 || peso >= 450){
        console.log("Peso Inválido!")
        peso_e_valido = false;
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add("informação-invalida")
    
    }
    /*  Condição de validação e caso seja falso
        retornar a mensagem na tabela p/ usuário */
        
    if(altura <= 0 || altura >= 4) {
        console.log("Altura Inválida!")
        altura_e_valido = false;
        tdImc.textContent = "Altura Inválido";
        paciente.classList.add("informação-invalida")
    }
    /* Se as duas condições abaixo continuarem TRUE conforme declaradas 
        la em cima - (variaves boleanas true e false), o IMC será calculado com 2 duas casa decimais */
    
    if (peso_e_valido && altura_e_valido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    
    }
     
}


