
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
  if(x == "add100d"){
    sheks = sheks + 100;
      document.getElementById("numofsheks").innerHTML = "Number of Dollars: "+sheks;
    document.getElementById("feedback").innerHTML = "100 Dollars added!";
    fadeAudi();


  }else if(x == "itemaddSteelPick"){
    buySteelPick();
  }else if(x == "itemaddTitaniumPick"){
    buyTitaniumPick();
  }


}
