var levelStart = 1;
var levelMax = 99;
var levelArr = [];
var XPArr = [];
var reqXP = 20;
XPArr[0] = reqXP;
var levelXP, levelReq, multiplier;

//Fyller listor med levlar och xp som krävs
for(var i = 1; i <= 99; i++){
    levelArr[i] = i;
    //Ökar xp som krävs för varje level med 30%
    multiplier=XPArr[i-1]*1.3;
    XPArr[i] = Math.round(multiplier);
}

function calcDamage(){
    window.hit = Math.floor((Math.random() * maxHit) + lowHit); 
    //Buggfix
    if(hit > maxHit){
        hit = maxHit;
    }
    dealDamage();
}
function dealDamage(){
    curHP = curHP - hit;
    health();
        if(curHP <= 0){
            deadMonster();
        }
}

function getMoney(){
    monsterMoney = monsters[random].Coins;
    //console.log("Money gained: " + monsterMoney);
    curMoney = curMoney + monsterMoney;
    //console.log("Current money: " + curMoney);
    localStorage.setItem("money", curMoney);
    money();
}
function getXP(){
    monsterXP = monsters[random].XP;
    //console.log("XP gained: " + monsterXP);
    curXP = curXP + monsterXP;
    //console.log("Current XP: " + curXP);
    localStorage.setItem("XP", curXP);
    calcLevel(); 
    xp();
    
}
function calcLevel(){
    for(i = 1; i <= 99; i++){
        //Om nuvarande xp är större än kravet för nästa level
        if(curXP >= XPArr[i]){
            //console.log(curXP + " Is higher than " + XPArr[i]);
            
            //XP som krävs för nästa level
            reqXP = XPArr[i+1];
            //XP spannet mellan två levlar
            levelReq = reqXP - XPArr[i];                        
            //Sätter ny level
            curLevel = levelArr[i];
            //Nuvarande xp för en specifik level
            switch(curLevel){
                case 0:
                    levelXP = curXP;
                    break;
                case 1:
                    levelXP = curXP - 10;
                    break;
                default:
                    levelXP = curXP - XPArr[i];
                    break;       
            }
        }
    }
    xp();
    level();
    levelUp();
}
function levelUp(){
    localStorage.setItem("level", curLevel);
}

function healthColor(){
    if(curHP/percent >= 65){
      progressBarColor = "#0a0";  
    } 
    else if(curHP/percent >= 30){
      progressBarColor = "#cc0";  
    } 
    else{
        progressBarColor ="#a00";
    }
    $("#healthbar").css('background-color', progressBarColor);
}