//qui creo una x vicino i tag che usero per cancellare l elemento da me voluto

//creo una variabile con il riferimento al tag <li>
let ButtonX = document.getElementsByTagName("li");


for (i = 0; i < ButtonX.length; i++) {

  //creo un elemeto span
  let span = document.createElement("span");

  //creero un elemento di testo che poi andra dentro lo span
  //"\u00D7" sta per il simbolo della "X" ma io per divertimento mettero una Z
  let simbol = document.createTextNode("z"); 

  //assegno la classe allo span
  span.className = "close";  

  //simbol diventera figlio di span
  span.appendChild(simbol);

  //cosi span diventera figlio dell indice della stringa button 
  ButtonX[i].appendChild(span);  

  //ho provato a creare un bottone per modificare il file di contenuto ma me lo mette attaccato

  // //creo un elemeto span
  // let span1 = document.createElement("span");

  // //\u00D7 sta per il simbolo della "X" ma io per divertimento mettero una Z
  // let simbol1 = document.createTextNode("write"); 

  // //assegno la classe allo span
  // span1.className = "write";  

  // //simbol diventera figlio di span
  // span1.appendChild(simbol1);

  // //cosi span diventera figlio dell indice della stringa button 
  // ButtonX[i].appendChild(span1);  
  // console.log(ButtonX[i]);
}

//ora cerchero di creare un metodo per eliminare gli elementi che selezionero tramite la x
//dovro richiamare anche nella function per far cancellare anche gli altri elementi della lista

let close = document.getElementsByClassName('close');
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//qui creo un nodo per inserire il testo con tutti gli attr e valori da me necessari nel testo
//richiamo anche la funzione del bottone sopra cosi che per ogni elemento creato mi si aggiungera anche quest ultimo

function ClickButton(e) {

  //importo il valore dello span
  let ciao = document.getElementById("myInput").value; 

  //ora all bottone creiamo un tag "li" da importare successivamente
  let li = document.createElement('li');    

  //gli assegnamo la classe al tag <li>
  li.className="hola";

  //per concludere il dom mi manchera solo aggiungere lo span dentro il tag "li"
  li.appendChild(document.createTextNode(myInput.value));  
  console.log(li);

  if (ciao === "") {
    alert("Te sei scordato de scrive qualcosa");
  }
  else {

    //document.getElementById("myUL").insertBefore(ll,cont.nextSibling);   DA DOMANDARE A MASSIMO/SABRINA per la funzione .insertBefore()

    document.getElementById("myUL").prepend(li);
  }
  document.getElementById("myInput").value = "";

  //e qui ho richiamato la funzione del bottone spiegata gia sopra
  let ButtonX = document.getElementsByTagName("li");
  for (i = 0; i < ButtonX.length; i++) {
    let span = document.createElement("span");
    let simbol = document.createTextNode("z");  //\u00D7 sta per il simbolo della "X"
    span.className = "close";
    span.appendChild(simbol);
    ButtonX[i].appendChild(span);
  
  }

//qui richiamo invece quella per cancellare gli elementi tramite la x
  let close = document.getElementsByClassName('close');
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

}

