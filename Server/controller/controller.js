let id = 9;
let characters = [
    {
        debut: 1981,
        id: 2,
        image_path: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/MarioNSMBUDeluxe.png/220px-MarioNSMBUDeluxe.png",
        moves: ["Super Jump Punch","Fireball","Mario Tornado","Cape"],
        name: "Mario",
        tier: 'E',
        universe: "Mario",
        weight: 'Medium'
      },
      {
        debut: 1983,
        id: 3,
        image_path: "https://www.ssbwiki.com/images/thumb/6/67/PMLuigiAlt.png/200px-PMLuigiAlt.png",
        moves: ["Super Jump Punch","Fireball","Luigi Cyclone","Throat Thrust","Green Missile"],
        name: "Luigi",
        tier: "D",
        universe: "Mario",
        weight: 'Medium'
      },
      {
        debut: 1990,
        id: 4,
        image_path: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/YoshiMarioParty10.png/220px-YoshiMarioParty10.png",
        moves: ["Egg Lay","Egg Throw","Egg Roll","Yoshi Bomb"],
        name: "Yoshi",
        tier: "D",
        universe: "Yoshi",
        weight: 'Medium'
      },
      {
        debut: 1990,
        id: 5,
        image_path: "https://www.ssbwiki.com/images/thumb/f/ff/Wii_Fit_Trainer_SSBU.png/250px-Wii_Fit_Trainer_SSBU.png",
        moves: ["Sun Salutation, Tree Pose, Downward Dog"],
        name: "Wii Fit Trainer",
        tier: "D",
        universe: "Wii Fit Plus",
        weight: 'Medium'
      },
      {
        debut: 1990,
        id: 6,
        image_path: "https://www.ssbwiki.com/images/thumb/8/88/Lucas_SSB4.png/250px-Lucas_SSB4.png",
        moves: ["PK Freeze, PK Fire, PK Thunder"],
        name: "Lucas",
        tier: "D",
        universe: "Mother 3",
        weight: 'Medium'
      },
      {
        debut: 1990,
        id: 7,
        image_path: "https://www.ssbwiki.com/images/thumb/1/1a/Ness_SSB4.png/250px-Ness_SSB4.png",
        moves: ["PK Flash, PK Fire, PK Thunder"],
        name: "Ness",
        tier: "D",
        universe: "Mother 3",
        weight: 'Medium'
      },
      {
        debut: 1990,
        id: 8,
        image_path: "https://www.ssbwiki.com/images/thumb/d/d5/Bowser_SSB4.png/250px-Bowser_SSB4.png",
        moves: ["Fire Breath, Flying Slam, Whirling Fortress, Bowser Bomb"],
        name: "Bowser",
        tier: "D",
        universe: "Mario",
        weight: 'Super Heavy'
      },
      {
        debut: 1990,
        id: 9,
        image_path: "https://img.rankedboost.com/wp-content/plugins/super-smash-bros-ultimate/assets/character-images-main/Ganondorf_SSBU.png",
        moves: ["Warlock Punch, Flame Choke, Dark Dive, Wizard's Foot"],
        name: "Ganondorf",
        tier: "D",
        universe: "Legend of Zelda",
        weight: 'Super Heavy'
      },
]

module.exports = {
    get: (req, res) => {
      function compare(a,b) {
        if (a.name.toLowerCase() < b.name.toLowerCase())
          return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase())
          return 1;
        return 0;
      }
      characters.sort(compare)
      res.send(characters);
    },
    search: (req, res) => {
      let { search } = req.params;
      let searchCharacters = characters.filter(character => {
        return search ? character.name.toLowerCase().includes(search.toLowerCase()) : character
      })
      res.send(searchCharacters)
    },
    create: (req, res) => {
      id++;
      let { name, image_path, moves, universe, weight } = req.body;

      let newCharacter = !name && !image_path ? (
      {
        id: id,
        name: 'Dwayne "The Rock" Johnson',
        image_path: "http://atlantablackstar.com/wp-content/uploads/2015/06/The-Rock-4.png",
        moves: "Destroy, Smolder",
        universe: "Titan Games",
        weight: 'Super Heavy'
      }
      ) : (
      {
        id: id,
        image_path: image_path,
        moves: moves,
        name: name,
        universe: universe,
        weight: weight
      })
      characters.push(newCharacter);
      res.send(characters)
    },
    update: (req, res) => {
      let { name, image_path, moves, universe, weight, id } = req.body;

      let index = characters.findIndex(character => Number(character.id) === Number(req.params.id))
      let character = [];
      character.push(characters[index])

      let updatedCharacter = {
        id: id,
        image_path: image_path ? image_path : character.image_path,
        moves: moves ? moves : character.moves,
        name: name ? name : character.name,
        universe: universe ? universe : character.universe,
        weight: weight ? weight : character.weight
      }
      characters.splice(index, 1, updatedCharacter)
      res.send(characters)
    },
    delete: (req, res) => {
      let index = characters.findIndex(character => Number(character.id) === Number(req.params.id))
      characters.splice(index, 1)
      res.send(characters)
    }
}