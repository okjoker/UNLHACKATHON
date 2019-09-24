
  function buyWoodenPick(){
    if( sheks >= 200){
      sheks = sheks - 200;
      woodenpickaxe = true;
      z = z + 2*(prestigeLevel+1);
      document.getElementById("numofsheks").innerHTML = "Number of Dollars: " + sheks;
      document.getElementById("feedback").innerHTML = "You bought a Wooden Pickaxe";
      document.getElementById("twohun").hidden = true;
      document.getElementById("getpick").hidden = true;

      fadeAudi();
    }
    else {
      poorBoy();
    }
  }
  function buySteelPick(){
    if( sheks >= 500){
      sheks = sheks - 500;
      steelpickaxe = true;
      z = z+8*(prestigeLevel+1);
      document.getElementById("numofsheks").innerHTML = "Number of Dollars: " + sheks;
      document.getElementById("feedback").innerHTML = "You bought a Steel Pickaxe";
      document.getElementById("fivehun").hidden = true;
      document.getElementById("getpicktwo").hidden = true;

      fadeAudi();
    }
    else
    {
      poorBoy();
    }
  }
  function buyTitaniumPick(){
    if( sheks >= 1000){
      sheks = sheks - 1000;
      titaniumpickaxe = true;
      z = z+32*(prestigeLevel+1);
      document.getElementById("numofsheks").innerHTML = "Number of Dollars: " + sheks;
      document.getElementById("feedback").innerHTML = "You bought a Titanium Pickaxe";
      document.getElementById("onetho").hidden = true;
      document.getElementById("getpickthree").hidden = true;

      fadeAudi();
    }
    else {
      poorBoy();
    }
  }
  function buyDiamondPick(){
    if(sheks >= 10000)
    {
      sheks = sheks - 10000;
      diamondpickaxe = true;
      z = z+128*(prestigeLevel+1);
      document.getElementById("numofsheks").innerHTML = "Number of Dollars: " + sheks;
      document.getElementById("feedback").innerHTML = "You bought a Diamond Pickaxe";
      document.getElementById("tentho").hidden = true;
      document.getElementById("getpickfour").hidden = true;
      fadeAudi();

    }
    else {
      poorBoy();
    }
  }
  function buyOnyxPick(){
    if(sheks >= 250000) {
    sheks = sheks - 250000;
    onyxpickaxe = true;
    z = z+2048*(prestigeLevel+1);
    document.getElementById("numofsheks").innerHTML = "Number of Dollars: " + sheks;
    document.getElementById("feedback").innerHTML = "You bought a Onyx Pickaxe";
    document.getElementById("twofif").hidden = true;
    document.getElementById("getpickfive").hidden = true;
    fadeAudi();
  }
    else {
      poorBoy();
    }
  }

  function poorBoy(){
    document.getElementById("feedback").innerHTML = "Insufficient Funds";
  }


//Auto Miners


async function buyMiners()
{
  if(sheks >= 500)
  {
    sheks = sheks - 500;
    document.getElementById("numofsheks").innerHTML = "Number of Dollars: " + sheks;
    miners = (miners+1)*(prestigeLevel+1);
    for (var i = 1; i > 0; i++) {
    var result = await minerLoop();
    sheks = sheks + result*miners; //adds one shek every second
    document.getElementById("numofsheks").innerHTML = "Number of Dollars: " + sheks;
  }
}
  else
  {
    poorBoy();
  }
}

function minerLoop()
{
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}


// Prestige


function prestige(){
  if(sheks >= 1000000 * Math.pow(5, prestigeLevel))
  {

      prestigeValue = 1000000 * Math.pow(5, prestigeLevel);
      sheks = 0;
      miners = 0;
      z = 2*Math.pow(2,prestigeLevel);

//Reset

      document.getElementById("twofif").hidden = false;
      document.getElementById("getpickfive").hidden = false;
      document.getElementById("tentho").hidden = false;
      document.getElementById("getpickfour").hidden = false;
      document.getElementById("tentho").hidden = false;
      document.getElementById("getpickfour").hidden = false;
      document.getElementById("onetho").hidden = false;
      document.getElementById("getpickthree").hidden = false;
      document.getElementById("fivehun").hidden = false;
      document.getElementById("getpicktwo").hidden = false;
      document.getElementById("twohun").hidden = false;
      document.getElementById("getpick").hidden = false;

      prestigeLevel++;
      document.getElementById("feedback").innerHTML = "You have Prestige Level: " + prestigeLevel;
  }
}
