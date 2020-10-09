var step = 0;
//var hp = 100;
//var money = 100;
var stepsCount = 0;
var deathTimer = 0;

document.getElementById('location').innerHTML = rooms[step].name;
document.getElementById('result').innerHTML = rooms[step].description;

//start point
var btn = document.getElementById('step');
btn.addEventListener('click', stepTo);
setCharacters();
printRoomInfo();

/*
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
*/

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