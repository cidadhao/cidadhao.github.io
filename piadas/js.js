function emole() {
  document.getElementById("text").innerHTML = random();
}
function random() {
 var arr = ["Por que foram colocados 3 pinos em uma régua? <br> Porque medidas tinham que ser tomadas.",
 "Qual a banda que não pode viajar de avião porque nunca passa na segurança do aeroporto? <br> Metalica.",
 "Qual o cachorro preferido dos evangélicos? <br> O cachorro crente.",
 "Por que a menininha não podia comprar nada na black friday? <br> Porque era tudo promoção.",
 "Qual o cara que tira fotos comprometedoras dos ricos para dar para os pobres? <br> Robin nudes.",
 "Qual a bebida mais velha do bar? <br> A vodka",
 "Qual o videogame que tem banheiro no quarto? <br> Nintendo Suíte.",
 "Qual é o apresentador de tv que você não pode confiar? <br> Falso Silva.",
 "Qual é a cobra comestível? <br> Sucurilhos.",
 "Qual é o pote que toca música? <br> Spotify.",
 "Onde os detentos escrevem as coisas do dia a dia? <br> No presidiário.",
 "Qual tipo de conexão que não funciona no elevador? <br> A internet de escada.",
 "Qual é a cantora favorita do chorão? <br> Skate Perry.",
 "Qual é a parte do computador que não é boa? <br> O mouse.",
 "Qual o reporter que mais gagueja? <br> Gago Barcelos.",
 "Onde o Mickey mora? <br> No condoMinie.",
 "O que nasce grande e morre pequeno? <br> O lápis.",
 "Qual a cirurgia mais demorada no ser humano? <br> É a hemorroida, porque é feita ao longo dos anos.",
 "Qual o pintor que vende os quadros mais baratos? <br> O Leonardo Da Vinci (e 5 de março).",
 "Qual a semelhança entre o vaso sanitário e um raio? <br> Ambos são acompanhados com uma descarga.",
 "Qual a semelhança entre um ex goleiro brasileiro e uma luta do Mike Tyson? <br> Ambas podem terminam com amor-dida.",
 "Qual o animal que não ganha nada? <br> É o empato."
]
 return arr[Math.floor(Math.random() * arr.length)];
}