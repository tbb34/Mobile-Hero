function running(){
    shakes();
    stats();
    
}
function clearStorage(){
    localStorage.setItem("level", 0);
    localStorage.setItem("money", 0);
    localStorage.setItem("XP", 0);
    localStorage.setItem("wepname", "Fists");
    lowHit = 1;
    maxHit = 2;
    localStorage.setItem("lowhit", lowHit);
    localStorage.setItem("maxhit", maxHit);
    reqXP = 20;   
    stats();
    $('#XPbar').css('width', 0 + "%").attr('aria-valuenow', 0);
}
function shakes(){
    /*Gör minsta möjliga skada per steg man tar*/
            var shakes = 0; 
            shaker.on("step", function(o){
                shakes = shakes + 1;
                console.log(shakes);
                //document.getElementById("steps").innerHTML = shakes;  
                hit = lowHit;
                dealDamage();
            });   
        }

//TO DO:
//Shaker
//Material design