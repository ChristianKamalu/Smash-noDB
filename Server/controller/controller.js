let id = 5;
let characters = [
    {
        debut: 1981,
        id: 2,
        image_path: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/MarioNSMBUDeluxe.png/220px-MarioNSMBUDeluxe.png",
        moves: ["Super Jump Punch","Fireball","Mario Tornado","Cape"],
        name: "Mario",
        tier: 'E',
        universe: "Mario",
        weight: 100
      },
      {
        debut: 1983,
        id: 3,
        image_path: "https://www.ssbwiki.com/images/thumb/6/67/PMLuigiAlt.png/200px-PMLuigiAlt.png",
        moves: ["Super Jump Punch","Fireball","Luigi Cyclone","Throat Thrust","Green Missile"],
        name: "Luigi",
        tier: "D",
        universe: "Mario",
        weight: 100
      },
      {
        debut: 1990,
        id: 4,
        image_path: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/YoshiMarioParty10.png/220px-YoshiMarioParty10.png",
        moves: ["Egg Lay","Egg Throw","Egg Roll","Yoshi Bomb"],
        name: "Yoshi",
        tier: "D",
        universe: "Yoshi",
        weight: 108
      }
]

module.exports = {
    get: (req, res) => {
      res.send(characters);
    },
    search: (req, res) => {
      let { search } = req.query;
      let searchCharacters = characters.filter(character => {
        return character.name.includes(search)
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
        moves: "Destroy",
        universe: "Titan Games",
        weight: 991
      }
      ) : (
      {
        id: id,
        image_path: image_path,
        moves: moves,
        name: name,
        universe: universe,
        weight: weight * 1
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
        weight: weight ? weight * 1 : character.weight
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