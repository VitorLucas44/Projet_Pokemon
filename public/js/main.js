// class Pokemon constructor
class Pokemon {
    constructor(name, sprite, hp, moves) {
        this.name = name;
        this.sprite = sprite;
        this.hp = hp;
        this.fullhp = hp;
        this.moves = moves;
    }
}

//liste pokemon
let pkmList = [
['Dracaufeu', 'https://www.pokepedia.fr/images/7/78/Sprite_006_XY.png', 360, [
    ['Lance flamme', 'feu', 95, 0.95],
    ['Griffe de dragon', 'dragon', 100, 0.95],
    ['Air slash', 'fly', 75, 0.85],
    ['Sabre', 'normal', 70, ]
]],
['Tortank', 'https://www.pokepedia.fr/images/3/38/Sprite_009_XY.png', 362, [
    ['Surf', 'water', 90, 0.95],
    ['Croc', 'normal', 80, 0.95],
    ['Poing à glace', 'glace', 75, 0.95],
    ['Canon Flash', 'steel', 80, 0.95]
]],
['Florizarre', 'https://www.pokepedia.fr/images/5/53/Sprite_003_%E2%99%82_XY.png', 364, [
    ['Tempête de pétales', 'plante', 90, 0.95],
    ['Bombe à boue', 'poison', 90, 0.95],
    ['Tremblement de terre', 'terre', 100, 0.95],
    ['Coup de corps', 'normal', 85, 0.95]
]]
];

//type de pokemon
let typeMatch = {
    'Dracaufeu': [
        ['terre'],
        ['eau', 'rock'],
        ['feu', 'plante', 'steel']
    ],
    'Tortank': [
        [''],
        ['plante'],
        ['feu', 'water']
    ],
    'Florizarre': [
        ['poison'],
        ['feu', 'fly', 'glace', 'steel'],
        ['plante', 'water']
    ],
}