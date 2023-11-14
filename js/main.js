
function userHasFinishDataCompletion(event){
    event.preventDefaut();

    let nameSurname = document.getElementById("nameSurname").value;
    let kmTot = document.getElementById("kmTot").value;
    let age = document.getElementById("age").value;
    age = parseInt(age);
    kmTot=parseFloat(kmTot);
    let prezzo = (kmTot*0.21);

    if(age=="minorenne"){
        prezzo = (prezzo*0.8);

    }

    else if(age=="over65"){
        prezzo = (prezzo*0.6);
    }

    else{
        prezzo=prezzo;
    }

    let prezzoFinale = prezzo.toFixed(2);
    console.log("il prezzo del tuo biglietto è di: " + prezzoFinale + "€");
}


document.getElementById("Prezzo-Biglietto").innerHTML = "Il prezzo del tuo biglietto: " + prezzoFinale+"€";