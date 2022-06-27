function ClickButton() {

    let contenitore=document.getElementById("myUL")[0];

    let ciao = document.getElementById("myInput").value;
    let ll = document.createElement('li');
    let tt = document.createTextNode(ciao);
    let dd = document.createAttribute('class');
    dd.value = "bomba";
    ll.setAttributeNode(dd);
    ll.insertBefore(tt,contenitore); 

    let pred= document.getElementsByClassName("inutile");
    let write = document.getElementById("myUL").insertBefore(write,contenitore); 

    if (ciao === "") {
        alert("ciao");
    }
    else {
   // document.getElementsByClassName("myUL").appendChild(ll);
    document.getElementById("myUL").insertBefore(write,contenitore);
    }
    document.getElementById("myInput").value = "";
}

/*function ClickButton(){
    let click=document.getElementById("myInput").value;
    console.log(click);

    let tag=document.createElement('li');
    let testo=document.createTextNode("span")
    let id=document.createAttribute("class")
    id.value="blabla"
    let func=document.createAttribute("onclick")
    tag.setAttributeNode(id);
    tag.setAttributeNode(func);
    console.log(tag);
    tag.appendChild(testo);
    console.log(tag);

    //FirstElement=document.getElementsByClassName("inutile")[0];
    //console.log(FirstElement)

    let write = document.getElementById("myUL").appendChild(tag);
    document.getElementById("myInput").value=""
}*/






