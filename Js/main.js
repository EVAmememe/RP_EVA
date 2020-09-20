var rooms = [
[ 
    'коридор 0',
    'Перед тобой дверь в столовую и дверь в аудиторию. Куда пойдёшь?',
    ['налево','да','аудиторию','направо','встоловую','нет','наулицу','выйти'],
    [2,2,2,1,1,4,6,6],
    null
],[
    'столовка 1',
    'Ты обожрался. Хочешь ещё поесть, или пойдёшь учиться?',
    ['да','нет','хочуучиться'],
    [1,1,0],
    null
],[
    'аудитория 2',
    'Ты в аудитории.Хочешь заниматься или пойдешь в туалет?',
    ['да','заниматься','хочуучиться','туалет','обратно','нет','нехочу','люблюучиться'],
    [2,5,5,3,0,0,4,5],
    null
],[
    'туалет 3',
    'Ты сходил в туалет. Пойдёшь на пары или домой?',
    ['да','заниматься','хочуучиться','напары','останусь','вкоридор','нет','нехочу','домой'],
    [2,2,2,2,3,0,4,4,4],
    null
],[
    'военкомат 4',
    'Ты в военкомате. Тебя уже не спасти! ',
    [],
    [],
    null
],[
    'Дом 5',
    'Пары кончились. Ты молодец!',
    [],
    [],
    null
],[
    'Улица 6',
    'Ты на улице. Куда пойдёшь?',
    ['курить','обратно','да','нет','домой'],
    [7,0,0,0,4],
    null
],[
    'Сигарета 7',
    'КУРЕНИЕ УБИВАЕТ!',
    [],
    [],
    null
]

];

var step = 0;
while (1) {
    if (step === null) {
        break;
    }
    var room = rooms[step];
    if (!room) {
        break;
    }
    var answer = prompt(room[1]);
    if (!answer) {
        continue;
    }
    answer = answer.toLowerCase().replace(' ','');
    if (step === 4 || step === 7 ) {
        alert ('GAME OVER');
        break;
    }
    if (step === 5 ) {
        alert ('YOU ARE WINNER');
        break;
    }
    var isWayNotFound = true;
    for (var i=0;i < room[2].length;i++) {
        if (answer === room[2][i]) {
            step = room [3][i];
            isWayNotFound = false;
            break;
        }
    }
    if (isWayNotFound ) {
        console.log('неправильно')
    //    step = room[4];
    }
}

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