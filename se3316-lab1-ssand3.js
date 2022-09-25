function checkNums(event) {
    var x = document.getElementById('nums').value
    var check = x.match(/^\d+$/)
    event.preventDefault()
    if ((check)) {
        if ((x <= 0) || (x >= 21)) {
            alert('Please enter a number between 1 to 20')
            return false
        }
        else {
            var Arr = []
            for (let count = 0; count < pokeArr.length; count++) {
                var pokemonNum = pokeArr[count][0];
                if (pokemonNum.indexOf(x) >= 0) {
                    Arr.push([`${pokemonNum}`])
                }
            }
            toggleWindow(Arr)
            return true
        }
    }
    else {
        alert('Please enter a number')
        return false
    }
}

function checkLetters(event) {
    var name = /^[A-Za-z]+$/
    var y = document.getElementById('letters').value.replace(/\s/g, "")
    var pokemonName = ""
    event.preventDefault()

    if (y.length == 0) {
        alert('Please input a name')
        return false
    }
    else if (y.match(name)) {
        if (y.length >= 21) {
            alert('Please enter a pokemon name less than 21 characters')
            return false
        }
        else {
            var Arr2 = []
            for (let countX = 0; countX < pokeArr.length; countX++) {
                for (let countY = 0; countY < pokeArr[countX].length; countY++) {
                    var pokemonName = pokeArr[countX][countY].toLowerCase()
                    if (pokemonName.indexOf(y) >= 0) {
                        var poke = pokeArr[countX][0]
                        Arr2.push([`${poke}`])
                        break
                    }
                }
            }
            toggleWindow(Arr2)

            return true
        }
    }
    else {
        alert('Please enter letters only');
        return false
    }
}

function toggleWindow(pokeArr2) {
    document.getElementById('popupID').classList.toggle("active");
    var size = pokeArr2.length;
    var z = document.getElementById('pokeList');
    if (pokeArr2.length >= 6) {
        size = 5;
    }
    for (let count = 0; count < size; count++) {
        z.innerHTML = z.innerHTML + pokeArr2[count] + "<br />" + "<br />";
    }
}

function closeWindow(event) {
    document.getElementById('popupID').classList.toggle("active");
    window.location.reload();
}
const pokeArr = [
    ["Number: 001, Name: Bulbasaur, Ability: Overgrow"],
    ["Number: 002, Name: Ivysaur, Ability: Overgrow"],
    ["Number: 003, Name: Venusaur, Ability: Overgrow"],
    ["Number: 004, Name: Charmander, Ability: Blaze"],
    ["Number: 005, Name: Charmeleon, Ability: Blaze"],
    ["Number: 006, Name: Charizard, Ability: Blaze"],
    ["Number: 007, Name: Squirtle, Ability: Torrent"],
    ["Number: 008, Name: Wartortle, Ability: Torrent"],
    ["Number: 009, Name: Blastoise, Ability: Torrent"],
    ["Number: 010, Name: Caterpie, Ability: Shield Dust"],
    ["Number: 011, Name: Metapod, Ability: Shed Skin"],
    ["Number: 012, Name: Butterfree, Ability: Compound Eyes"],
    ["Number: 013, Name: Weedle, Ability: Shield Dust"],
    ["Number: 014, Name: Kakuna, Ability: Shed Skin"],
    ["Number: 015, Name: Beedrill, Ability: Swarm"],
    ["Number: 016, Name: Pidgey, Ability: Tangled Feet"],
    ["Number: 017, Name: Pidgeotto, Ability: Tangled Feet"],
    ["Number: 018, Name: Pidgeot, Ability: Tangled Feet"],
    ["Number: 019, Name: Rattata, Ability: Guts"],
    ["Number: 020, Name: Raticate, Ability: Guts"]
]