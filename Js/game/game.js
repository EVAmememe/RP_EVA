function stepTo() {
    var answer = document.getElementById('inp').value;
    document.getElementById('inp').value = '';
    answer = answer.toLowerCase().replace(' ','');
    if (step === null) {
        return;
    }
    var room = rooms[step];
    if (!room) {
        return;
    }
    if (!answer) {
        return;
    }
    if (step === 4 || hp<=0 ) {
        document.getElementById("imageGO").classList.remove("passiv");
        document.getElementById("imageGO").classList.add("aktiv");
        //var elem = document.getElementById("imageGO");
        //elem.classList.remove("imagePassiv");
        return;
    }
    if (step === 5 ) {
        document.getElementById("imageYW").classList.remove("passiv");
        document.getElementById("imageYW").classList.add("aktiv");
        return;
    }
    var isWayNotFound = true;
    for (var i=0;i < room.ways.length;i++) {
        if (answer === room.ways[i].answer) {
            golod -= 5;
            step = room.ways[i].step;
            isWayNotFound = false;
            break;
        }
    }
    if (isWayNotFound ) {
        console.log('неправильно');
        step = room.defaultStep;
        return; 
    }
    if ( golod <= 0) {
        hp -= 10;
    }
    if (step === 1 && money >= 20 && golod < 100) {
        money -= 20;
        golod = 100;
    } else if (step === 7) {
        hp -= 25;
    }
    printRoomInfo();
}


function printRoomInfo(){
    if (step != null && rooms[step]){
        document.getElementById('location').innerHTML = "Локация: " + rooms[step].name;
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
            console.log(this.dataset.number);
            character =  characters[this.dataset.number];
            //document.getElementsById('chooseCharacter').style.display = 'none';
            document.getElementById('chooseCharacter').style.display = 'none';
            printAbilities();
        });
    }
    console.log(buttons);
}

/*<label><b>Парень</b></label>
<label>Старторые характеристики:</label>
<label>Здоровье: 100%</label>
<label>Деньги: 500</label>
<label>Интеллект: 10</label>
<label>Стресс: 10%</label>
<button id="ChooseMale">Выбрать этого персонажа</button>*/