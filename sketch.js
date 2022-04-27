var input,heading;


function setup() 
{
  createCanvas(400, 400);
  background(178,255,102);
 
  //criando caixa de entrada de texto
  input = createInput();
  //definindo a posição da caixa
  input.position(5,60);

  //texto de cabeçalho, h4 é o tamanho do cabeçalho (quanto menor o número, maior a letra)
  heading = createElement('h4', 'Insira qualquer letra do alfabeto');
  //posição do texto de cabeçalho
  heading.position(5,20);

  //alinhamento do texto e tamanho da letra
  textAlign(CENTER);
  textSize(50);

  
}

function draw() {

  const value = input.value();

  switch(value){

    //fazer 5 casos, um para cada vogal

    case 'a':
      console.log("Vogal");
      break;
    
    case 'e':
      console.log("Vogal");
      break;
    
    case 'i':
      console.log("Vogal");
      break;
    
    case 'o':
      console.log("Vogal");
      break;
    
    case 'u':
      console.log("Vogal");
      break;

    //caso não seja vogal

    default:
      console.log("Tente outra letra");
  }
}

