function kuldes() {
    let uzenet = document.getElementById("uzenet").value.trim();

    if (uzenet === "") {
      alert("Hiba: Kérlek, írj be egy üzenetet!");
      return true;
    } 
         
alert("Az üzenetedet rögzítettük!"); 
document.getElementById("uzenet").value = ""; 
return false;
  
   
}