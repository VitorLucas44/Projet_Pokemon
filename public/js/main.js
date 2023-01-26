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



// function poue selectioner le pokemon avant le combat
function selectPokemon() {
// for pour selectionner un des 3
    for (let i = 0; i < pkmList.length; i++) {
        let option = document.createElement('div');
        option.innerHTML = pkmList[i][0];
        option.classList.add('pokemon-option');
        option.setAttribute('data-index', i);
        document.getElementById('pokemon-select').appendChild(option);
    }

// add event listeners pour chaque option
let options = document.getElementsByClassName('pokemon-option');
    for (let i = 0; i < options.length; i++) {
        options[i].addEventListener('click', function(e) {
            let index = e.target.getAttribute('data-index');
            pk1 = new Pokemon(pkmList[index][0], pkmList[index][1], pkmList[index][2], pkmList[index][3]);
// afficher les hp du pokemon
            s1.src = pk1.sprite;
            document.getElementById('hp1').innerHTML = '<p>' + pk1.name +  ' HP: ' + pk1.hp + '/' + pk1.fullhp + '</p>';
//afficgher les 4 attaques
            for (i = 0; i < 4; i++) {
                document.getElementById('m' + i).value = pk1.moves[i][0];
            }
// enlever le select option apres le click
            document.getElementById('pokemon-select').remove();
            pk2 = spawn(false);
// afficher les hp ennemis
            s2.src = pk2.sprite;
            document.getElementById('hp2').innerHTML = '<p>' + pk2.name +  ' HP: ' + + pk2.hp + '/' + pk2.fullhp + '</p>';
        });
    }
}

// lancer la selecion
selectPokemon(); 

//Les faires spawns
function spawn(bool) {
    let p = pkmList[Math.floor(Math.random() * pkmList.length)];
    let pkm = new Pokemon(p[0], p[1], p[2], p[3]);
    
    if (bool) {
        for (i = 0; i < 4; i++) {
            document.getElementById('m' + i).value = pkm.moves[i][0];
        }
    }
    return pkm;
}

//pokemon1  
let pk1 = spawn(true);
s1 = document.createElement('img');
s1.src = pk1.sprite;
document.getElementById('pk1').appendChild(s1);
document.getElementById('hp1').innerHTML = '<p>' + pk1.name +  ' HP: ' + pk1.hp + '/' + pk1.fullhp + '</p>';

//pokemon2
let pk2 = spawn(false);
s2 = document.createElement('img');
s2.src = pk2.sprite;
document.getElementById('pk2').appendChild(s2);
document.getElementById('hp2').innerHTML = '<p>' + pk2.name +  ' HP: ' + + pk2.hp + '/' + pk2.fullhp + '</p>';
    
for (i = 0; i < 4; i++) {
    let btn = document.getElementById('m' + i);
    let move = pk1.moves[i];
    
    function addHandler(btn, move, pk1, pk2) {
        btn.addEventListener('click', function(e) {
            attack(move, pk1, pk2, 'hp2', '');
            setTimeout(attack, 2000, pk2.moves[Math.floor(Math.random() * 3)], pk2, pk1, 'hp1', 'Foe ');
        });
    
    }
    addHandler(btn, move, pk1, pk2);
}


let hpBar = document.getElementById('hp-bar');
let hpPercentage = (pk1.hp / pk1.fullhp) * 100;
hpBar.style.width = hpPercentage + '%';
    
if (hpPercentage > 50) {
    hpBar.style.backgroundColor = 'green';
    } else if (hpPercentage > 25) {
        hpBar.style.backgroundColor = 'orange';
    }    else {
    hpBar.style.backgroundColor = 'red';
}
    
    
let hpBar2 = document.getElementById('hp-bar2');
let hpPercentage2 = (pk2.hp / pk2.fullhp) * 100;
hpBar2.style.width = hpPercentage + '%';
    
    
if (hpPercentage2 > 50) {
    hpBar2.style.backgroundColor = 'green';
    } else if (hpPercentage2 > 25) {
        hpBar2.style.backgroundColor = 'orange';
    } else {
    hpBar2.style.backgroundColor = 'red';
} 


//fonction attaquue avec hp barre et les niveaux
function attack(move, attacker, receiver, hp, owner) {
document.getElementById('comment').innerHTML = '<p>' + owner + attacker.name + ' utilise ' + move[0] + '!</p>';
if (Math.random() < move[3]) {

let power = move[2] += Math.floor(Math.random() * 10);
let rtype = typeMatch[receiver.name];
let mtype = move[1];
let scale = 1;

let hpBar = document.getElementById('hp-bar');
let hpPercentage = (pk1.hp / pk1.fullhp) * 100;
hpBar.style.width = hpPercentage + '%';

let hpBar2 = document.getElementById('hp-bar2');
let hpPercentage2 = (pk2.hp / pk2.fullhp) * 100.
hpBar2.style.width = hpPercentage2 + '%';
        
if (hpPercentage > 50) {
            hpBar.style.backgroundColor = 'green';
        } else if (hpPercentage > 25) {
            hpBar.style.backgroundColor = 'orange';
        } else {
            hpBar.style.backgroundColor = 'red';
        }
        
if (hpPercentage2 > 50) {
    hpBar2.style.backgroundColor = 'green';
    } else if (hpPercentage2 > 25) {
    hpBar2.style.backgroundColor = 'orange';
    } else {
    hpBar2.style.backgroundColor = 'red';
}


// les matchups et phrases
for (i = 0; i < rtype.length; i++) {
    if (rtype[i].includes(mtype)) {
        switch (i) {
                    case 0:
                scale = 0;
                setTimeout(function() {
                document.getElementById('comment').innerHTML = "<p>Cela n'a eu aucun effet!</p>";
                }, 1000);
                break;
                    case 1:
                        scale = 2;
                        setTimeout(function() {
                            document.getElementById('comment').innerHTML = "<p>C'était SUPER efficace !</p>";
                        }, 1000);
                break;
                    case 2:
                        scale = 0.5;
                        setTimeout(function() {
                            document.getElementById('comment').innerHTML = "<p>Ce n'était pas très efficace !</p>";
                        }, 1000);
                break;
                        }
                break;
            }
}
power *= scale;
receiver.hp -= Math.floor(power);
document.getElementById(hp).innerHTML = '<p> HP: ' + receiver.hp + '/' + receiver.fullhp + '</p>';
    } else {
        setTimeout(function() {
            document.getElementById('comment').innerHTML = '<p>Attaque ratée!</p>';
        })
    }
checkWinner(hp);
}


//GG
function checkWinner(hp) {
let f = (pk1.hp <= 0) ? pk1 : (pk2.hp <= 0) ? pk2 : false;
if (f != false) {
    alert('GAME OVER: ' + f.name + ' est K.O !');
    document.getElementById(hp).innerHTML = '<p>HP: 0/' + f.fullhp + '</p>';
    setTimeout(function() {
        document.getElementById('comment').innerHTML = '<p>' + f.name + ' est K.O ! !</p>';
    })
    setTimeout(function() {
            location.reload();
        }, 1500)
    }
    
}