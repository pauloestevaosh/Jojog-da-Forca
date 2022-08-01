var sorteada;
var letrasErradas=[]
var palavraTela = []
var todasAsLetras=[]
var letra
var PerdaDeDesconto = 0
var certas = 0

const listapalavras = [                                                      //lista os produtos para o jogo da forca
    "DRONE",  "ALEXA", "SMARTWATCH", "SMARTPHONE", "PROJETOR", "NOTEBOOK", "HEADSET"
];

const dicas = [
    {   palavra:"DRONE",
        dica1: " 1 - Posso fazer imagens",
        dica2: " 2 - Tenho controle remoto ",
        dica3: " 3 - Posso Voar",
    },

     {
        palavra: "ALEXA",
        dica1: " 1 - Sou um dos principais produtos de uma empresa famosa",
        dica2: " 2 - Eu posso falar",
        dica3: " 3 - Tenho nome de mulher",
    },

    {
        palavra: "SMARTWATCH",
        dica1:" 1 - Posso me conectar a outros aparelhos",
        dica2:" 2 - Exibo notificações",
        dica3:" 3 - Sou usado preso ao corpo",
    },

    {
    
        palavra: "SMARTPHONE",
        dica1:" 1 - Tenho acesso a internet ",
        dica2:" 2 - Tenho touchscreen ",
        dica3:" 3 - Estou sempre nas suas mãos ",
    },
    {
        palavra: "PROJETOR",
        dica1:" 1 -  Posso ser usado tanto pra trabalho como lazer",
        dica2:" 2 - Posso deixar imagens grandes ",
        dica3:" 3 - Transformo sua casa em um cinema ",
    },
    {
        palavra: "NOTEBOOK",
        dica1:" 1 - Posso fazer multiplas tarefas ",
        dica2:" 2 - Posso ser levado em uma mochila ",
        dica3:" 3 - Posso ser touchscreen",
    },
    {
        palavra: "HEADSET",
        dica1:" 1 - Tenho tudo a ver com audio ",
        dica2:" 2 - Você pode falar através de mim, ou não.. ",
        dica3:" 3 - Fico na sua cabeça ",
    },
]



sorteada = listapalavras[Math.floor(Math.random()*listapalavras.length)];   //sorteia uma das palavras da lista
console.log(sorteada)

var letrasCorretas = sorteada.split('')                                      //quebra a string sorteada em um vetor de letras


function jogar (){                                                          //Acionada pelo botão de iniciar o jogo

palavraTela=Array(letrasCorretas.length).fill("___")                        //Carrega a Array com ___ de acordo com o tamanho da palavra sorteada
document.getElementById("palavraFormada").innerHTML = palavraTela.join("  ");          //insere isto em tela separados por 2 espaços


    
}

function habBotao(){
    document.getElementById("A").disabled = false;
    document.getElementById("B").disabled = false;
    document.getElementById("C").disabled = false;
    document.getElementById("D").disabled = false;
    document.getElementById("E").disabled = false;
    document.getElementById("F").disabled = false;
    document.getElementById("G").disabled = false;
    document.getElementById("H").disabled = false;
    document.getElementById("I").disabled = false;
    document.getElementById("J").disabled = false;
    document.getElementById("K").disabled = false;
    document.getElementById("L").disabled = false;
    document.getElementById("M").disabled = false;
    document.getElementById("N").disabled = false;
    document.getElementById("O").disabled = false;
    document.getElementById("P").disabled = false;
    document.getElementById("Q").disabled = false;
    document.getElementById("R").disabled = false;
    document.getElementById("S").disabled = false;
    document.getElementById("T").disabled = false;
    document.getElementById("U").disabled = false;
    document.getElementById("V").disabled = false;
    document.getElementById("W").disabled = false;
    document.getElementById("X").disabled = false;
    document.getElementById("Y").disabled = false;
    document.getElementById("Z").disabled = false;
    document.getElementById("botaoDica").disabled = false;

}


function bloqueia(){

    document.getElementById("A").disabled = true;
    document.getElementById("B").disabled = true;
    document.getElementById("C").disabled = true;
    document.getElementById("D").disabled = true;
    document.getElementById("E").disabled = true;
    document.getElementById("F").disabled = true;
    document.getElementById("G").disabled = true;
    document.getElementById("H").disabled = true;
    document.getElementById("I").disabled = true;
    document.getElementById("J").disabled = true;
    document.getElementById("K").disabled = true;
    document.getElementById("L").disabled = true;
    document.getElementById("M").disabled = true;
    document.getElementById("N").disabled = true;
    document.getElementById("O").disabled = true;
    document.getElementById("P").disabled = true;
    document.getElementById("Q").disabled = true;
    document.getElementById("R").disabled = true;
    document.getElementById("S").disabled = true;
    document.getElementById("T").disabled = true;
    document.getElementById("U").disabled = true;
    document.getElementById("V").disabled = true;
    document.getElementById("W").disabled = true;
    document.getElementById("X").disabled = true;
    document.getElementById("Y").disabled = true;
    document.getElementById("Z").disabled = true;
    document.getElementById("botaoDica").disabled = true;

}




function acaoBotao(clicado) {                                              //Retorna o valor da letra clicada e chama outra função
    letra=clicado
    
validaLetras()

}


function validaLetras(){                                                   //Valida se as letras estão corretas ou erradas


    if(letrasErradas.length<5) {                                           // Valida a quantidade de tentativas erradas (máx:5)


        erradas = 0
        


        for (let index = 0; index < letrasCorretas.length; index++) {

            if (letra == letrasCorretas[index]) {                            // posicona no vetor as letras corretas
                palavraTela[index]   = letra

                certas ++

                console.log("letras certas",certas)
                switch(certas){
                    case 1:
                        document.getElementById("msgErro").innerHTML =  '<div style=" width: 200px; text-align : center; background-color: rgba(255, 255, 255, 0.466); color:green" > BOA </div>';
                       
                     break;
                        
                    ; 
                    case 2:
                        document.getElementById("msgErro").innerHTML =  '<div style=" width: 200px; text-align : center; background-color: rgba(255, 255, 255, 0.466); color:green" >Continue Assim </div>';
                        
                        break; 
                    ; 
                    case 3:
                        document.getElementById("msgErro").innerHTML = '<div style=" width: 200px; text-align : center; background-color: rgba(255, 255, 255, 0.466); color:green" > Acertou </div>';
                        break; 
                      
                    ; 
                    case 4:
                        document.getElementById("msgErro").innerHTML =  '<div style=" width: 200px; text-align : center; background-color: rgba(255, 255, 255, 0.466); color:green" > Era essa letra mesmo </div>';
                        break; 
                    ; 

                    case 5:
                        document.getElementById("msgErro").innerHTML =  '<div style=" width: 200px; text-align : center; background-color: rgba(255, 255, 255, 0.466); color:green" > Isso! </div>';
                        break; 
                    ;    
                        
                    case 6:
                        document.getElementById("msgErro").innerHTML =  '<div style=" width: 200px; text-align : center; background-color: rgba(255, 255, 255, 0.466); color:green" > Falta pouco </div>';
                        break; 
                    ;
                    case 7:
                        document.getElementById("msgErro").innerHTML =  '<div style=" width: 200px; text-align : center; background-color: rgba(255, 255, 255, 0.466); color:green" > BOA </div>';
                       
                     break;
                        
                    ; 
                    case 8:
                        document.getElementById("msgErro").innerHTML =   '<div style=" width: 200px; text-align : center; background-color: rgba(255, 255, 255, 0.466); color:green" >Continue Assim </div>';
                        
                        break; 
                    ; 
                    case 9:
                        document.getElementById("msgErro").innerHTML =  '<div style=" width: 200px; text-align : center; background-color: rgba(255, 255, 255, 0.466); color:green" > Acertou </div>';
                      
                    ; 
                    case 10:
                        document.getElementById("msgErro").innerHTML =   '<div style=" width: 200px; text-align : center; background-color: rgba(255, 255, 255, 0.466); color:green" > Era essa letra mesmo </div>';
                        break; 
                    ; 

                    case 11:
                        document.getElementById("msgErro").innerHTML =   '<div style=" width: 200px; text-align : center; background-color: rgba(255, 255, 255, 0.466); color:green" > Isso! </div>';
                        break; 
                       
                
                }


                             

            }
            
            else{
                
                erradas ++
                   
                
            }
            

            
        }
        
        
        if(erradas==letrasCorretas.length){                                // valida que a letra está errada e adiciona a um vetor
                  
        letrasErradas.push(letra)        
        //alert ("Letra - " + letra + " - não existe")
        document.getElementById("erradas").innerHTML =  letrasErradas;
        
        PerdaDeDesconto = letrasErradas.length + clicados
        if (PerdaDeDesconto<=5) {
            document.getElementById("desconto").innerHTML = "Desconto Atual : " +  (50- 10 * (PerdaDeDesconto)) + "%" ;   
        }


        switch(letrasErradas.length){
            case 1:
                document.getElementById("msgErro").innerHTML =  '<div style=" width: 200px; text-align : center; background-color: rgba(255, 255, 255, 0.466); color:rgb(196, 28, 28)" > Tente novamente </div>';
               
             break;
                
            ; 
            case 2:
                document.getElementById("msgErro").innerHTML =  '<div style=" width: 200px; text-align : center; background-color: rgba(255, 255, 255, 0.466); color:rgb(196, 28, 28)" > Quase! </div>';
                
                break; 
            ; 
            case 3:
                document.getElementById("msgErro").innerHTML =  '<div style=" width: 200px; text-align : center; background-color: rgba(255, 255, 255, 0.466); color:rgb(196, 28, 28)" > Letra Errada </div>';
                break; 
              
            ; 
            case 4:
                document.getElementById("msgErro").innerHTML =  '<div style=" width: 200px; text-align : center; background-color: rgba(255, 255, 255, 0.466); color:rgb(196, 28, 28)" > Deve ser outra letra.. </div>';
                break; 
            ; 
            case 5:

                document.getElementById("msgErro").innerHTML =  '<div style=" width: 200px; text-align : center; background-color: rgba(255, 255, 255, 0.466); color:rgb(196, 28, 28)" > Não foi dessa vez! </div>';
                var imagem = document.querySelector("#imagem");
        bloqueia() 
                imagem.innerHTML ='<img src="gif tonystark.gif"  height="350">'  
                setTimeout(function(){
                    imagem.innerHTML ='<img src="voce perdeu.jpeg" width="480" height="480">'
                },2600);

                setTimeout()
                
        
                
                break; 
            ; 
        

        
        }
          
        
        }




        document.getElementById("palavraFormada").innerHTML = palavraTela.join("  ");             //Insere as corretas e incorretas em tela
       
          


        sobeImagens(); 


    }

   

    if (JSON.stringify(palavraTela)==JSON.stringify(letrasCorretas)) {               // valida que a palavra está formada corretamente
        
        var imagem = document.querySelector("#imagem");
        imagem.innerHTML ='<img src="gif homemdeferro.gif"  height="350">'  
        setTimeout(function(){
        PerdaDeDesconto = letrasErradas.length + clicados
        if (PerdaDeDesconto<=5) {
            document.getElementById("desconto").innerHTML = "Desconto Atual : " +  (50- 10 * (PerdaDeDesconto)) + "%" ;   
        }    
        


            switch(PerdaDeDesconto){

                
                case 0:

                    imagem.innerHTML ='<img src="desconto50.jpeg" height="380">'
                     break
                case 1:
                    imagem.innerHTML ='<img src="desconto40.jpeg" height="380">'
                     break;
                case 2:
                    imagem.innerHTML ='<img src="desconto30.jpeg" height="380">'
                     break;
                case 3:
                    imagem.innerHTML ='<img src="desconto20.jpeg" height="380">'
                     break;
                case 4:
                    imagem.innerHTML ='<img src="desconto10.jpeg" height="380">'
                     break;
                case 4:
                imagem.innerHTML ='<img src="desconto10.jpeg" height="380">'
                break; 

                case 5:
                    imagem.innerHTML ='<img src="desconto0.jpeg" height="380">'
                    break; 
                case 6:
                    imagem.innerHTML ='<img src="desconto0.jpeg" height="380">'
                    break; 
                
                case 7:
                    imagem.innerHTML ='<img src="desconto0.jpeg" height="380">'
                    break;
                case 8:
                imagem.innerHTML ='<img src="desconto0.jpeg" height="380">'

                break;  

                   


            
            }
        },2400);

        bloqueia()
        setTimeout()
        
        return alert ("voce venceu!")
        
    } 
    
    
   
}




function sobeImagens(){

    PerdaDeDesconto = letrasErradas.length + clicados
    

    switch(letrasErradas.length+1){
        case 6:
           /* var imagem = document.querySelector("#HomemDeFerro");
            imagem.setAttribute('src', 'voce perdeu.png');
            break; */
        case 5:
            var imagem = document.querySelector("#HomemDeFerro");
            imagem.setAttribute('src', '5.png');
             break;
        case 4:
            var imagem = document.querySelector("#HomemDeFerro");
            imagem.setAttribute('src', '4.png');
             break;
        case 3:
            var imagem = document.querySelector("#HomemDeFerro");
            imagem.setAttribute('src', '3.png');
            break;
        case 2:
            var imagem = document.querySelector("#HomemDeFerro");
            imagem.setAttribute('src', '2.png');
            //document.getElementById("imagem").style.background = "url('./2.png')";
            break;       
        /* default:
            var imagem = document.querySelector("#HomemDeFerro");
            imagem.setAttribute('src', 'HomemDeFerroFundo.png');
        break;      */           
    }
    

}
var clique = 1;
var clicados = 0
 
function mostraDicas(){

   
    clicados = clique++
    var  exibirDicas = document.querySelector("#dicasNumeradas")  
    dicas.forEach(object =>{
        const indexPalavra = dicas.findIndex( (element) => element.palavra == sorteada);
    
    
        if(object.palavra == sorteada){

            switch (clicados) {
                case 1:
                   

                    exibirDicas.innerHTML='<p>' + dicas[indexPalavra].dica1 + '</p>'
                    
                  break;
                case 2:
                  exibirDicas.innerHTML='<p>' + dicas[indexPalavra].dica1 + '</p>' + '\n' + '<p>' + dicas[indexPalavra].dica2 + '</p>'
                  
                  break;
                case 3:
                    exibirDicas.innerHTML='<p>' + dicas[indexPalavra].dica1 + '</p>' + '\n' + '<p>' + dicas[indexPalavra].dica2 + '</p>' + '\n' + '<p>' + dicas[indexPalavra].dica3 + '</p>'
                break;
            }
         
           

        }

       

    });
    PerdaDeDesconto = letrasErradas.length + clicados
    if (PerdaDeDesconto<=5) {
        document.getElementById("desconto").innerHTML = "Desconto Atual : " +  (50- 10 * (PerdaDeDesconto)) + "%" ;   
    }
    
    console.log ("desconto perdido" ,PerdaDeDesconto)
    
}  
