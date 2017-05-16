var x;
var curHP;
var maxHP;
var percent;
function stats(){
    loadStorage();
    name();
    calcLevel();
    level();
    xp();
    money();
    spawnMonster(imgArray);
    health();
    weapon();
}

function loadStorage(){
    var XPStorage = localStorage.getItem("XP");
    //Sätter värden om localstorage är tom
    if(XPStorage === null || XPStorage === "" || XPStorage === 0){
        localStorage.setItem("level", 0);
        localStorage.setItem("money", 0);
        localStorage.setItem("XP", 0);
        localStorage.setItem("wepname", "Fists");
        localStorage.setItem("lowhit", 1);
        localStorage.setItem("maxhit", 2);
    }
    
    //Hämtar värden från localstorage och deklarerar variabler
    //Level
    var levelStorage = localStorage.getItem("level");
    window.levelString = document.getElementById("statLevel");
    //XP
    XPStorage = localStorage.getItem("XP");
    window.XPString = document.getElementById("statXP");
    window.XPbar = document.getElementById("XPbar");
    //Pengar
    var moneyStorage = localStorage.getItem("money");
    window.moneyString = document.getElementById("statMoney");
    //Vapen
    var weaponStorage = localStorage.getItem("wepname");
    window.weaponString = document.getElementById("statWeapon");
    //Skada
    var lowStorage = localStorage.getItem("lowhit");
    var maxStorage = localStorage.getItem("maxhit");
    //Monster
    window.monsterString = document.getElementById("monsterName")
    //HP
    window.HPString = document.getElementById("healthpoints");
    
    
    //Variabler för alla beräkningar
    window.curLevel = parseInt(levelStorage);
    window.curXP = parseInt(XPStorage);
    window.curMoney = parseInt(moneyStorage);
    window.lowHit = parseInt(lowStorage);
    window.maxHit = parseInt(maxStorage);
    window.wepName = weaponStorage;
}

//Visar namn
function name(){
    var user = localStorage.getItem("username");
    var nameString = document.getElementById("statName");
    if(user === null){
        user = "Unknown user";
    }
    nameString.innerHTML = user;
}

function level(){
    levelString.innerHTML = "Level: " + curLevel;
}

function xp(){
    XPString.innerHTML = "XP: " + curXP + "/" + reqXP;
    XPbar.max = 100;
    x = levelReq;
    percent = x/100;
    $('#XPbar').css('width', levelXP/percent + "%").attr('aria-valuenow', levelXP/percent);   
    
}

function money(){
    moneyString.innerHTML = "Currency: " + curMoney + " Schmeckles";
}
function health(){
    HPString.innerHTML = "<b>" + curHP + "/" + maxHP + "</b>";
    healthbar.max = 100;
    x = maxHP;
    percent = x/100;
    $('#healthbar').css('width', curHP/percent + "%").attr('aria-valuenow', curHP/percent);
    healthColor();
}
function weapon(){
    weaponString.innerHTML = "Weapon: " + wepName + " (" + lowHit + " - " + maxHit + " DMG)";
}

