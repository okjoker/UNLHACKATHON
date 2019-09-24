
function clicks(){
document.getElementById("test").innerHTML = "+"+z;
sheks = sheks + z;

document.getElementById("numofsheks").innerHTML = "Number of Dollars: "+sheks;


}


function start(){
  document.getElementById("numofsheks").innerHTML = "Number of Dollars: 0";
}


function fadeAudi(){
  $(document).ready(function(){
    $("#feedback").fadeOut( 1000 );
  });
}


function Commands(){
  x = document.getElementById("input").value;
  if(x == "add10000d"){
    sheks = sheks + 10000;
      document.getElementById("numofsheks").innerHTML = "Number of Dollars: "+sheks;
    document.getElementById("feedback").innerHTML = "10000 Dollars added!";
    fadeAudi();


  }else if(x == "itemaddSteelPick"){
    buySteelPick();
  }else if(x == "itemaddTitaniumPick"){
    buyTitaniumPick();
  }else if(x == "guy"){
    document.getElementById("Guy").hidden = false;
  }else if(x == "hmm")
  document.getElementById("Villager").hidden = false;
  else {
    document.getElementById("Guy").hidden = true;
    document.getElementById("Villager").hidden = true;
  }


}
