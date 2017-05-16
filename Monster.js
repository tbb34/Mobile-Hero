var monsters = [
    {Name: "Bloogie", HP: 10, XP: 5, Coins: 10},
    {Name: "Cromulon", HP: 25, XP: 15, Coins: 25},
    {Name: "Fleeb", HP: 50, XP: 25, Coins: 40}  
];

var imgArray = ['Hetti.svg', 'Bloogie.png', 'Fleeb.png'];
var random;

function spawnMonster(imgAr, path){ 
        //Slumpar ut ett värde för monster
        random = Math.floor( Math.random() * imgAr.length );
        
        //Slumpar fram bild
        path = path || './Sprites/';
        var img = imgAr[random];
        var imgStr = path + img;
        document.getElementById("current").src = imgStr;
        //monsterString.innerHTML = monsters[random].Name;
        
        //Hämtar liv för monster
        maxHP = monsters[random].HP;
        curHP = maxHP;
        health();
        //console.log("Monster health: " + maxHP);
}


function deadMonster(){
    getXP();
    getMoney();
    spawnMonster(imgArray);
}