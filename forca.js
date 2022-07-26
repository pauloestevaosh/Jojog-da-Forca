// aqui é o lucas
var sorteada;
var letrasErradas=[]
var palavraTela = []
var todasAsLetras=[]
var letra

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
        dica1:" 1 - lorem ipsum ",
        dica2:" 2 - lorem ipsum ",
        dica3:" 3 - lorem ipsum ",
    },
    {
        palavra: "PROJETOR",
        dica1:" 1 - lorem ipsum ",
        dica2:" 2 - lorem ipsum ",
        dica3:" 3 - lorem ipsum ",
    },
    {
        palavra: "NOTEBOOK",
        dica1:" 1 - lorem ipsum ",
        dica2:" 2 - lorem ipsum ",
        dica3:" 3 - lorem ipsum ",
    },
]



sorteada = listapalavras[Math.floor(Math.random()*listapalavras.length)];   //sorteia uma das palavras da lista
console.log(sorteada)

var letrasCorretas = sorteada.split('')                                      //quebra a string sorteada em um vetor de letras



function jogar (){                                                          //Acionada pelo botão de iniciar o jogo

palavraTela=Array(letrasCorretas.length).fill("___")                        //Carrega a Array com ___ de acordo com o tamanho da palavra sorteada
document.getElementById("palavraFormada").innerHTML = palavraTela.join("  ");          //insere isto em tela separados por 2 espaços


    
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

            }
            
            else{
                
                erradas ++
                   
                console.log(letrasErradas.length+1);
            }
            

            
        }
        
        
        if(erradas==letrasCorretas.length){                                // valida que a letra está errada e adiciona a um vetor
                  
        letrasErradas.push(letra)        
        alert ("Letra - " + letra + " - não existe")
        
        }



        //  console.log(letrasCorretas.indexOf (letra) )



        document.getElementById("palavraFormada").innerHTML = palavraTela.join("  ");             //Insere as corretas e incorretas em tela

        document.getElementById("erradas").innerHTML =  letrasErradas;

        sobeImagens(); 


    }
    else{
        return alert ("o jogo acabou")
    }

    if (JSON.stringify(palavraTela)==JSON.stringify(letrasCorretas)) {               // valida que a palavra está formada corretamente
        document.getElementById("imagem").style.background = "url('./homem de ferro base.jpg')";
        
        return alert ("voce venceu!")
        
    } 
    
    
   
}




function sobeImagens(){



    switch(letrasErradas.length+1){
        case 6:
            var imagem = document.querySelector("#HomemDeFerro");
            imagem.setAttribute('src', '6.png');
            break;
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
        default:
            var imagem = document.querySelector("#HomemDeFerro");
            imagem.setAttribute('src', 'HomemDeFerroFundo.png');
        break;                 
    }
    

}
var clique = 1; 
 
function mostraDicas(){
   
    var clicados = clique++
    var  exibirDicas = document.querySelector("#dicasNumeradas")  
    dicas.forEach(object =>{
        const indexPalavra = dicas.findIndex( (element) => element.palavra == sorteada);
    
    
        if(object.palavra == sorteada){

            switch (clicados) {
                case 1:
                   /* var adiciona = document.querySelector("#tituloDicas");
                    var texto = document.createTextNode("dica1");
                    adiciona.appendChild(texto); */

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

   
    
}  


 






/* function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background  = "url('./imagem/forca01.png')";
            break;
    
    } 

    */
   // console.log(window["le" + "tra"])
