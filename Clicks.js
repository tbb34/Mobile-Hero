$(document).ready(function() {
            var current = document.getElementById("current");
            var mc = new Hammer(current);
    
            mc.on("tap", function(event){
                refreshHit(current);
                $("#current").addClass("clicked");
                calcDamage();
                //console.log("Hit: " + hit + " damage!");
             });
        });

function refreshHit(element){
    $("#current").removeClass("clicked");
    void element.offsetWidth;
}