var rooms = [
[ 
    'коридор0',
    'Перед тобой дверь в столовую и дверь в аудиторию. Куда пойдёшь?',
    ['налево','да','аудиторию','направо','встоловую','нет','наулицу','выйти'],
    [2,2,2,1,1,4,6,6],
    0,
    "kartinki/room0.jpg"
],[
    'столовка1',
    'Ты обожрался. Хочешь ещё поесть, или пойдёшь учиться?',
    ['да','нет','хочуучиться'],
    [1,1,0],
    1,
    "kartinki/room1.jpg"
],[
    'аудитория2',
    'Ты в аудитории.Хочешь заниматься или пойдешь в туалет?',
    ['да','заниматься','хочуучиться','туалет','обратно','нет','нехочу','люблюучиться'],
    [2,5,5,3,0,0,4,5],
    2,
    "kartinki/room2.jpg"
],[
    'туалет3',
    'Ты сходил в туалет. Пойдёшь на пары или домой?',
    ['да','заниматься','хочуучиться','напары','останусь','вкоридор','нет','нехочу','домой'],
    [2,2,2,2,3,0,4,4,4],
    3,
    "kartinki/room3.jpg"
],[
    'военкомат4',
    'Ты в военкомате. Тебя уже не спасти! ',
    [],
    [],
    4,
    "kartinki/room4.jpg"
],[
    'Дом5',
    'Пары кончились. Ты молодец!',
    [],
    [],
    5,
    "kartinki/room5.jpg"
],[
    'Улица6',
    'Ты на улице. Куда пойдёшь?',
    ['курить','обратно','да','нет','домой'],
    [7,0,0,0,4],
    6,
    "kartinki/room6.jpg"
],[
    'Сигарета7',
    'КУРЕНИЕ УБИВАЕТ!',
    ['курить','обратно','да','нет','домой','заниматься','хочуучиться','напары'],
    [1,6,6,6,6,6,6,6],
    6,
    "kartinki/room7.jpg"
]

];

var step = 0;
document.getElementById('location').innerHTML = rooms[0][0];
document.getElementById('result').innerHTML = rooms[0][1];
var hp = 100;
var money = 100;

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
        document.getElementById("imageGO").classList.remove("imagePassiv");
        //var elem = document.getElementById("imageGO");
        //elem.classList.remove("imagePassiv");
        return;
    }
    if (step === 5 ) {
        document.getElementById("imageYW").classList.remove("imagePassiv");
        return;
    }
    var isWayNotFound = true;
    for (var i=0;i < room[2].length;i++) {
        if (answer === room[2][i]) {
            hp -= 5;
            step = room [3][i];
            isWayNotFound = false;
            break;
        }
    }
    if (isWayNotFound ) {
        console.log('неправильно');
        step = room[4];
        return; 
    }
    if (step === 1 && money >= 20 && hp < 100) {
        money -= 20;
        hp = 100;
    } else if (step === 7) {
        hp -= 25;
    }
    printRoomInfo();
}
function printRoomInfo(){
    if (step != null && rooms[step]){
        document.getElementById('location').innerHTML = "Локация: " + rooms[step][0];
    }
    var b = '';
    var room = rooms[step];
    var exits = [];
    for(var i = 0; i < room[3].length; i++) {
        var isNameUniq = true;
        var num = room[3][i];
        for(var j = 0; j < exits.length; j++) {
            if(rooms[num][0] == exits[j]) {
                isNameUniq = false;
            }
        }
        if(isNameUniq){
            exits.push(rooms[num][0]); 
        }        
    }
    document.getElementById('ways').innerHTML = exits.join(', ');
    document.getElementById('image').src = rooms[step][5];
    document.getElementById('money').innerHTML = 'Деньги студента: ' + money + ' рублей';
    document.getElementById('hp').innerHTML = 'Здоровье студента: ' + hp + '%';
    document.getElementById('result').innerHTML = rooms[step][1];
}
var btn = document.getElementById('step');
btn.addEventListener('click', stepTo);
printRoomInfo();
    /*switch (step) {
        case 0: 
        answer = prompt('Перед тобой дверь в столовую и дверь в аудиторию. Куда пойдёшь?');
        answer = answer.toLowerCase().replace(' ','');
    switch (answer) {
        case 'налево':
        case 'да':
        case 'аудиторию': 
            step = 2; 
        break;
        case 'направо':
        case 'встоловую':    
        step = 1; 
        break; 
        case 'нет': step = 4; break;  
        default: alert ('Ты остался на месте, вот и стой теперь, как дурак.'); break; 
    }
        break;
        case 1:
            answer = prompt('Ты обожрался. Хочешь ещё поесть, или пойдёшь учиться?');
            answer = answer.toLowerCase().replace(' ','');
            switch (answer) {
                case 'да': step = 1; break;
                case 'нет':
                    step = 1; 
                break;
                case 'хочуучиться!':
                    step = 0; 
                break;
                default: step = 1; break; 
            }        
        break;
        case 2:
            answer = prompt('Ты в аудитории.Хочешь заниматься или пойдешь в туалет?');
            answer = answer.toLowerCase().replace(' ','');
            switch (answer) {
                case 'да': 
                case 'заниматься':
                case 'хочуучиться!':
                    step = 2; 
                break;
                case  'туалет':   
                    step = 3; 
                break;
                case 'обратно':
                case  'нет':      
                    step = 0;
                break;
                case  'нехочу':
                    step = 4;
                break;
                default: step = 2; break; 
            } 
        break;
        case 3:
            answer = prompt('Ты сходил в туалет. Пойдёшь на пары или домой?');
            answer = answer.toLowerCase().replace(' ','');
            switch (answer) {
                case 'да': 
                case 'заниматься':
                case 'хочуучиться!':
                case 'напары':
                    step = 2; 
                break;
                case  'останусь':   
                    step = 3; 
                break;
                case 'вкоридор':       
                    step = 0;
                break;
                case  'нет': 
                case  'нехочу':
                case  'домой':
                    step = 4;
                break;
                default: step = 3; break; 
            }
        break;
        case 4:
            answer = prompt('Ты в военкомате. Что будешь делать?');
            answer = answer.toLowerCase().replace(' ','');
            switch (answer) {
                default: 
                alert ('Ничего не помогло. Ты в армии дружок!');
                alert ('GAME OVER');
                step = 6; 
                break; 
            }
        break;
        default: alert ('Cломался скрипт');  break;
    } */

/*
//первый шаг
    //var answer = prompt('Перед тобой дверь в столовую и дверь в аудиторию. Куда пойдёшь?');
    answer = answer.toLowerCase().replace(' ','');
//var answersStep1 = ['налево'];
    switch (answer) {
        case 'налево':
        case 'да': 
            step = 0; 
        break;
        case 'направо': step = 1; break; 
   
        case 'нет': step = 3; break;  
        default: alert ('Ты остался на месте, вот и стой теперь, как дурак.'); break; 
    }
    if (step === null) {
        break;
    }
} */