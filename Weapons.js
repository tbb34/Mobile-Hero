var weapons = [
    {Name: "Wooden stick", lowHit: 1, maxHit: 5, reqLevel: 1, Cost: 25},
    {Name: "Baseball bat", lowHit: 3, maxHit: 10, reqLevel: 5, Cost: 100},
    {Name: "Tire iron", lowHit: 5, maxHit: 15, reqLevel: 15, Cost: 1000},
    {Name: "Rusty Sword", lowHit: 8, maxHit: 20, reqLevel: 25, Cost: 6500},
    {Name: "Crystal Dagger", lowHit: 10, maxHit: 25, reqLevel: 35, Cost: 50000},
    {Name: "Admir's golden cane", lowHit: 15, maxHit: 50, reqLevel: 45, Cost: 999999}
];


$(document).ready(function(){
    var html="<table class='table-striped'><tr><th>Name</th><th>Min hit</th><th>Max hit</th><th>Required level</th><th>Cost</th><th></th></tr>";
    for (var i = 0; i < weapons.length; i++) {
        html+="<tr>";
        html+="<td>"+weapons[i].Name+"</td>";
        html+="<td>"+weapons[i].lowHit+"</td>";
        html+="<td>"+weapons[i].maxHit+"</td>";
        html+="<td>"+weapons[i].reqLevel+"</td>";
        html+="<td>"+weapons[i].Cost+"</td>";
        html+="<td><button onclick='buyWep(" + i + ");' class='buyBtn'>Buy</button></td>";
        html+="</tr>";
    }
    html+="</table>";
   document.getElementById("items").innerHTML = html;
});

function buyWep(number){
    var current = weapons[number];
    if(curMoney >= current.Cost && curLevel >= current.reqLevel){
        //Hämtar nya värden för vapen
        wepName = current.Name;
        lowHit = parseInt(current.lowHit);
        maxHit = current.maxHit;
        localStorage.setItem("wepname", wepName);
        localStorage.setItem("lowhit", lowHit);
        localStorage.setItem("maxhit", maxHit);
        
        reqLevel = current.reqLevel;
        curMoney = curMoney - current.Cost;
        
        money();
        weapon();
        window.alert(wepName + " aquired! You pay the shopkeeper " + current.Cost + " Schmeckles!");
    }
    else{
        window.alert("You require level " + current.reqLevel + " and " + current.Cost + " Schmeckles, fool!");
    }
}