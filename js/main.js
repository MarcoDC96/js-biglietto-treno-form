
function userHasFinishDataCompletion(event){
    event.preventDefault();

    let nameSurname = document.getElementById("nameSurname").value;
    document.getElementById("user_name").innerHTML = nameSurname;
    let kmTot = document.getElementById("kmTot").value;
    document.getElementById("km_selezionati").innerHTML = kmTot;
    let age = document.getElementById("age").value;
    document.getElementById("offerta").innerHTML = age;

    age = parseInt(age);
    kmTot=parseFloat(kmTot);
    let prezzo = (kmTot*0.21);

    if(age=="minorenne"){
       let prezzoMinorenni = prezzo*0.8;
       document.getElementById("prezzoFinale").innerHTML = prezzoMinorenni.toFixed(2);
       console.log(prezzoMinorenni.toFixed(2));
    }

    else if(age=="over65"){
        let prezzoOver65 = prezzo*0.6;
        document.getElementById("prezzoFinale").innerHTML = prezzoOver65.toFixed(2);
        console.log(prezzoOver65.toFixed(2));
    }

    else{
        document.getElementById("prezzoFinale").innerHTML = prezzo.toFixed(2);
        console.log(prezzo);
    }

}


