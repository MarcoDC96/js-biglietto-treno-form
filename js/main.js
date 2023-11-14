
function userHasFinishDataCompletion(event){
    event.preventDefaut();

    let nameSurname = document.getElementById("nameSurname").value;
    let kmTot = document.getElementById("kmTot").value;
    let age = document.getElementById("age").value;
    age = parseInt(age);
    kmTot=parseFloat(kmTot);
    let prezzo = (kmTot*0.21);

    if(age=="minorenne"){
       let prezzoMinorenni = (prezzo*0.8);
       console.log(prezzoMinorenni.toFixed(2));
    }

    else if(age=="over65"){
        let prezzoOver65 = (prezzo*0.6);
        console.log(prezzoOver65.toFixed(2));
    }

    else{
        console.log(prezzo);
    }

}


