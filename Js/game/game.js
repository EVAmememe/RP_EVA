function stepTo() {
    var room = rooms[step];
    var answer = document.getElementById('inp').value;
    document.getElementById('inp').value = '';
    answer = answer.toLowerCase().replace(' ','');
    if ( (step === null) || (!room) || (!answer)) {
        return;
    }
    var isWayNotFound = true;
    for (var i=0;i < room.ways.length;i++) {
        if (answer === room.ways[i].answer) {
            step = room.ways[i].step;
            isWayNotFound = false;
            break;
        }
    }
    if (isWayNotFound ) {
        console.log('неправильно');
        step = room.defaultStep;
        //return; 
    }
    var chance = Math.random()*100;
    if( chance > 9){
        console.log('monster');
        callMonster();
        return;
    }
    calculateStats();
    printRoomInfo();
}

function calculateStats(){

    if(step == 1 && character.hp < 100 && character.money >= 50){
        character.hp += Math.round(5 + (character.knowledge * 0.01));
        character.money -= 50;
        printAbilities();
    }
    if(step == 2){
        character.knowledge += 10;
        character.stress += 3;
        printAbilities();
    }
    if(step == 7){
        character.hp -= 25;
        printAbilities();
    }
    if(step != 1){
        character.hp -= Math.round(5 - (character.knowledge * 0.01));
    }
    if(character.stress >= 1 && character.hp > 0 && step != 2){
        character.stress -= 1;   
    }
    stepsCount += 1;
    printAbilities();

    if(character.hp <= 5 || character.stress > 90 || deathTimer === 1 ){
        printDeathPage();
    } 
    if( step === 4 ){
        deathTimer = 1;
    } 
    if( step === 5 ){
        printWinPage();
    } 
} 

function printRoomInfo(){
    if (step != null && rooms[step]){
        document.getElementById('location').innerHTML = "Локация: " + rooms[step].name;
        document.getElementById('result').innerHTML = rooms[step].description;
    }
    var b = '';
    var room = rooms[step];
    var exits = [];
    for(var i = 0; i < room.ways.length; i++) {
        var isNameUniq = true;
        var num = room.ways[i].step;
        for(var j = 0; j < exits.length; j++) {
            if(rooms[num].name == exits[j]) {
                isNameUniq = false;
            }
        }
        if(isNameUniq){
            exits.push(rooms[num].name); 
        }        
    }
    document.getElementById('ways').innerHTML = exits.join(', ');
    document.getElementById('image').src = room.image;
    /*document.getElementById('money').innerHTML = 'Деньги студента: ' + money + ' рублей';
    document.getElementById('golod').innerHTML = 'Голод студента: ' + golod;
    document.getElementById('hp').innerHTML = 'Здоровье студента: ' + hp + '%';
    document.getElementById('result').innerHTML = room.description;*/
}


function printAbilities() {
    document.getElementById('hp').innerHTML = 'Здоровье студента: ' + character.hp + '%';
    document.getElementById('money').innerHTML = 'Деньги студента: ' + character.money + ' рублей';
    document.getElementById('knowledge').innerHTML = 'Знания студента: ' + character.knowledge;
    document.getElementById('stress').innerHTML = 'Стресс: ' + character.stress + '%';
    document.getElementById('stepsCount').innerHTML = 'Количество ходов: ' + stepsCount;
}


function setCharacters() {
    var str = '';
    for (var i = 0; i < characters.length; i++) {
        var ch = characters[i];
        str += `<div class = "character">
            <lable><b>${ch.name}</b></lable>
            <lable>Старторые характеристики:</lable>
            <lable>Здоровье: ${ch.hp}%</lable>
            <lable>Деньги: ${ch.money}</lable>
            <lable>Интеллект: ${ch.knowledge}</lable>
            <lable>Стресс: ${ch.stress}%</lable>
            <button class="setChooseCharacters" data-number="${i}" >Выбрать этого персонажа</button>
            </div>`;
    }
    document.getElementById('chooseCharacter').innerHTML = str;
    var buttons = document.getElementsByClassName('setChooseCharacters');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            //console.log(this.dataset.number);
            character =  characters[this.dataset.number];
            document.getElementById('chooseCharacter').style.display = 'none';
            printAbilities();
        });
    }
    //console.log(buttons);
}

function printDeathPage(){
    document.getElementById('death').style.display = 'flex';
    document.getElementById('death').style.background = 'red';
    //document.getElementById('SMS-TEXT').innerHTML = 'ВЫ УМЕРЛИ';
}




function callMonster(){
    document.getElementById('monster').style.display = 'flex';
    var chance = Math.random()*100;
    if(chance > 50){
        setMonsterInfo(1);
    } else {
        setMonsterInfo(0);
    }
}

function setMonsterInfo(number){
    document.getElementById('monster-img').src = monsters[number].img;
    document.getElementById('monsterStats').innerHTML = monsters[number].stats;
    document.getElementById('monsterQuestion').innerHTML = monsters[number].question;
    document.getElementById('monsterText').innerHTML = monsters[number].text;
    for(var i = 0; i < monsters[number].answers.length; i++){
        document.getElementById(`answer${i+1}`).innerHTML = monsters[number].answers[i];
    }
    var answerButtons = document.getElementsByClassName('answerButton');
    for (var i = 0; i < answerButtons.length; i++) {
        if ( i === monsters[number].rightAnswer ){
            answerButtons[i].addEventListener('click', function () {
                setResultFromMonster(true, number);
            });
        } else {
            answerButtons[i].addEventListener('click', function () {
                setResultFromMonster(false, number);
            });
        }
    }
}

function setResultFromMonster(isYouRight, number){
    console.log('rez');
    console.log(isYouRight);
    if (isYouRight) {
        character.knowledge += 30; 
    } else {
        character.hp -= monsters[number].result.damage;
        character.stress += monsters[number].result.stress;  
    } 
    document.getElementById('monster').style.display = 'none';
    calculateStats();  
}








/*<label><b>Парень</b></label>
<label>Старторые характеристики:</label>
<label>Здоровье: 100%</label>
<label>Деньги: 500</label>
<label>Интеллект: 10</label>
<label>Стресс: 10%</label>
<button id="ChooseMale">Выбрать этого персонажа</button>*/