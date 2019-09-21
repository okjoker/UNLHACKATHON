function buyPick(){
  if( sheks >= 100){

    if(steelpickaxe == false){
        sheks = sheks - 100;
        steelpickaxe = true;
        document.getElementById("numofsheks").innerHTML = "Number of Dollars: "+sheks;

        buySteelPick();

    }else if(steelpickaxe == true && titaniumpickaxe == false){
        if(sheks >= 400){
          buyTitaniumPick();
        } else{
            poorBoy();
            }

}
}else if(sheks < 100) {
  poorBoy();
}

      }







  function buySteelPick(){
    z = z * 2;


    document.getElementById("feedback").innerHTML = "You bought a Steel Pickaxe";
    fadeAudi();

}
function buyTitaniumPick(){
  sheks = sheks - 400;
  z = z*4;
  document.getElementById("numofsheks").innerHTML = "Number of Dollars: " + sheks;

    document.getElementById("feedback").innerHTML = "You bought a Titanium Pickaxe";
    fadeAudi();
  }

function poorBoy(){
  document.getElementById("feedback").innerHTML = "Insufficient Funds";
}
