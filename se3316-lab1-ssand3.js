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

var letterArr = []
var numArr = []

var parentDiv = document.getElementById('ul-1')
var newDiv = document.createElement('div')
newDiv.style.backgroundColor = "#90E4C1";
newDiv.style.position = "relative"; 
newDiv.style.borderWidth = "10px";
newDiv.style.width = "90%";
newDiv.style.height = "100%";
newDiv.style.borderRadius = "25px";
newDiv.style.top = "45px";
newDiv.style.left = "-22px";
newDiv.style.marginBottom = "100px";
var newList = document.createElement('ul')

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

const fullPokeArr = [
    ["001", "Bulbasaur", "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.", "Overgrow", "Grass", "pokemon_jpg/1.jpg"], 
    ["002", "Ivysaur", "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.", "Overgrow", "Grass", "pokemon_jpg/2.jpg"], 
    ["003", "Venusaur", "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.", "Overgrow", "Grass", "pokemon_jpg/3.jpg"], 
    ["004", "Charmander", "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.", "Blaze", "Fire", "pokemon_jpg/4.jpg"], 
    ["005", "Charmeleon", "It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.", "Blaze", "Fire", "pokemon_jpg/5.jpg"], 
    ["006", "Charizard", "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.", "Blaze", "Fire", "pokemon_jpg/6.jpg"], 
    ["007", "Squirtle", "When it retracts its long neck into its shell, it squirts out water with vigorous force.", "Torrent", "Water", "pokemon_jpg/7.jpg"], 
    ["008", "Wartortle", "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.", "Torrent", "Water", "pokemon_jpg/8.jpg"], 
    ["009", "Blastoise", "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.", "Torrent", "Water", "pokemon_jpg/9.jpg"], 
    ["010", "Caterpie", "For protection, it releases a horrible stench from the antenna on its head to drive away enemies.", "Shield Dust", "Bug", "pokemon_jpg/10.jpg"], 
    ["011", "Metapod", "It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.", "Shed Skin", "Bug", "pokemon_jpg/11.jpg"], 
    ["012", "Butterfree", "In battle, it flaps its wings at great speed to release highly toxic dust into the air.", "Compound Eyes", "Bug", "pokemon_jpg/12.jpg"], 
    ["013", "Weedle", "Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves.", "Shield Dust", "Bug", "pokemon_jpg/13.jpg"], 
    ["014", "Kakuna", "Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy.", "Shed Skin", "Bug", "pokemon_jpg/14.jpg"], 
    ["015", "Beedrill", "It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.", "Swarm", "Bug", "pokemon_jpg/15.jpg"], 
    ["016", "Pidgey", "Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.", "Tangled Feet", "Normal", "pokemon_jpg/16.jpg"], 
    ["017", "Pidgeotto", "This Pokémon is full of vitality. It constantly flies around its large territory in search of prey.", "Tangled Feet", "Normal", "pokemon_jpg/17.jpg"], 
    ["018", "Pidgeot", "This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.", "Tangled Feet", "Normal", "pokemon_jpg/18.jpg"], 
    ["019", "Rattata", "Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area.", "Guts", "Normal", "pokemon_jpg/19.jpg"], 
    ["020", "Raticate", "Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey.", "Guts", "Normal", "pokemon_jpg/20.jpg"]
]