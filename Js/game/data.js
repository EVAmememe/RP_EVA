var rooms = [
    {
        name: 'коридор0',
        description: 'Перед тобой дверь в столовую и дверь в аудиторию. Куда пойдёшь?',
        ways : [
            {answer : 'налево', step: 2 },
            {answer : 'да', step: 2 },
            {answer : 'аудиторию', step: 2 },
            {answer : 'направо', step: 1 },
            {answer : 'встоловую', step: 1 },
            {answer : 'нет', step: 4 },
            {answer : 'наулицу', step: 6 },
            {answer : 'выйти', step: 6 },
        ],
        defaultStep: 0,
        image: "kartinki/room0.jpg"
    },
    {
        name: 'столовка1',
        description: 'Ты обожрался. Хочешь ещё поесть, или пойдёшь учиться?',
        ways : [
            {answer : 'нет', step: 1 },
            {answer : 'да', step: 1 },
            {answer : 'хочуучиться', step: 0 },
        ],
        defaultStep: 1,
        image: "kartinki/room1.jpg"
    },
    {
        name: 'аудитория2',
        description: 'Ты в аудитории.Хочешь заниматься или пойдешь в туалет?',
        ways : [
            {answer : 'да', step: 2 },
            {answer : 'заниматься', step: 5 },
            {answer : 'хочуучиться', step: 5 },
            {answer : 'туалет', step: 3 },
            {answer : 'обратно', step: 0 },
            {answer : 'нет', step: 0 },
            {answer : 'нехочу', step: 4 },
            {answer : 'люблюучиться', step: 5 },
        ],
        defaultStep: 2,
        image: "kartinki/room2.jpg"
    },
    {
        name: 'туалет3',
        description: 'Ты сходил в туалет. Пойдёшь на пары или домой?',
        ways : [
            {answer : 'да', step: 2 },
            {answer : 'заниматься', step: 2 },
            {answer : 'хочуучиться', step: 2 },
            {answer : 'напары', step: 2 },
            {answer : 'останусь', step: 3 },
            {answer : 'вкоридор', step: 0 },
            {answer : 'нет', step: 4 },
            {answer : 'нехочу', step: 4 },
            {answer : 'домой', step: 4 }
        ],
        defaultStep: 3,
        image: "kartinki/room3.jpg"
    },
    {
        name: 'военкомат4',
        description: 'Ты в военкомате. Тебя уже не спасти! ',
        ways : [
        ],
        defaultStep: 4,
        image: "kartinki/room4.jpg"
    },
    {
        name: 'Дом5',
        description: 'Пары кончились. Ты молодец!',
        ways : [
        ],
        defaultStep: 5,
        image: "kartinki/room5.jpg"
    },
    {
        name: 'Улица6',
        description: 'Ты на улице. Куда пойдёшь?',
        ways : [
            {answer : 'курить', step: 7 },
            {answer : 'обратно', step: 0 },
            {answer : 'да', step: 0 },
            {answer : 'нет', step: 0 },
            {answer : 'домой', step: 4 },
        ],
        defaultStep: 6,
        image: "kartinki/room6.jpg"
    },
    {
        name: 'Сигарета7',
        description: 'КУРЕНИЕ УБИВАЕТ!',
        ways : [
            {answer : 'курить', step: 7 },
            {answer : 'обратно', step: 6 },
            {answer : 'да', step: 6 },
            {answer : 'нет', step: 6 },
            {answer : 'домой', step: 6 },
            {answer : 'заниматься', step: 6 },
            {answer : 'хочуучиться', step: 6 },
            {answer : 'напары', step: 6 },
        ],
        defaultStep: 6,
        image: "kartinki/room7.jpg"
    },
    ];

    var step = 0;

    var characters = [
        {
            name: 'Девушка',
            hp: 80,
            money: 800,
            knowledge: 15,
            stress: 15
        },
        {
            name: 'Парень',
            hp: 100,
            money: 500,
            knowledge: 10,
            stress: 10
        },
        {
            name: 'Покемон',
            hp: 450,
            money: 12800,
            knowledge: 3,
            stress: 0
        },
    ];

    var character = {

    };
    