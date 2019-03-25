let id = 15;
let characters = [
    {
        id: 2,
        image_path: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/MarioNSMBUDeluxe.png/220px-MarioNSMBUDeluxe.png",
        moves: ["Super Jump Punch","Fireball","Mario Tornado","Cape"],
        name: "Mario",
        universe: "Mario",
        weight: 'Medium'
      },
      {
        id: 3,
        image_path: "https://www.ssbwiki.com/images/thumb/6/67/PMLuigiAlt.png/200px-PMLuigiAlt.png",
        moves: ["Super Jump Punch","Fireball","Luigi Cyclone","Throat Thrust","Green Missile"],
        name: "Luigi",
        universe: "Mario",
        weight: 'Medium'
      },
      {
        id: 4,
        image_path: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/YoshiMarioParty10.png/220px-YoshiMarioParty10.png",
        moves: ["Egg Lay","Egg Throw","Egg Roll","Yoshi Bomb"],
        name: "Yoshi",
        universe: "Yoshi",
        weight: 'Medium'
      },
      {
        id: 5,
        image_path: "https://www.ssbwiki.com/images/thumb/f/ff/Wii_Fit_Trainer_SSBU.png/250px-Wii_Fit_Trainer_SSBU.png",
        moves: ["Sun Salutation, Tree Pose, Downward Dog"],
        name: "Wii Fit Trainer",
        universe: "Wii Fit Plus",
        weight: 'Medium'
      },
      {
        id: 6,
        image_path: "https://www.ssbwiki.com/images/thumb/8/88/Lucas_SSB4.png/250px-Lucas_SSB4.png",
        moves: ["PK Freeze, PK Fire, PK Thunder"],
        name: "Lucas",
        universe: "Mother 3",
        weight: 'Medium'
      },
      {
        id: 7,
        image_path: "https://www.ssbwiki.com/images/thumb/1/1a/Ness_SSB4.png/250px-Ness_SSB4.png",
        moves: ["PK Flash, PK Fire, PK Thunder"],
        name: "Ness",
        universe: "Mother 3",
        weight: 'Medium'
      },
      {
        id: 8,
        image_path: "https://www.ssbwiki.com/images/thumb/d/d5/Bowser_SSB4.png/250px-Bowser_SSB4.png",
        moves: ["Fire Breath, Flying Slam, Whirling Fortress, Bowser Bomb"],
        name: "Bowser",
        universe: "Mario",
        weight: 'Super Heavy'
      },
      {
        id: 9,
        image_path: "https://img.rankedboost.com/wp-content/plugins/super-smash-bros-ultimate/assets/character-images-main/Ganondorf_SSBU.png",
        moves: ["Warlock Punch, Flame Choke, Dark Dive, Wizard's Foot"],
        name: "Ganondorf",
        universe: "Legend of Zelda",
        weight: 'Super Heavy'
      },
      {
        id: 10,
        image_path: "https://www.ssbwiki.com/images/thumb/6/6a/Jigglypuff_SSBU.png/250px-Jigglypuff_SSBU.png",
        moves: ["Sing, Slap, Sleep"],
        name: "Jigglypuff",
        universe: "Pokemon",
        weight: 'light'
      },
      {
        id: 11,
        image_path: "https://vignette.wikia.nocookie.net/kirby/images/2/2d/SSU_Kirby_artwork.png/revision/latest?cb=20180612173614&path-prefix=en",
        moves: ["Inhale, Hammer Flip, Final Cutter, Stone"],
        name: "Kirby",
        universe: "Kirby",
        weight: 'light'
      },
      {
        id: 12,
        image_path: "https://vignette.wikia.nocookie.net/the-zoopur-smesch-bruddas-bizarre-adventures-xyz/images/3/34/SSB4_Dark_Link.png/revision/latest?cb=20180722214333",
        moves: ["Bow and arrows, Boomerang, Spin Attack, Bomb"],
        name: "Link",
        universe: "Legend of Zelda",
        weight: 'heavy'
      },
      {
        id: 13,
        image_path: "https://img.rankedboost.com/wp-content/plugins/super-smash-bros-ultimate/assets/character-images-main/Young_Link_SSBU.png",
        moves: ["Bow and arrows, Boomerang, Spin Attack, Bomb"],
        name: "Young Link",
        universe: "Legend of Zelda",
        weight: 'light'
      },
      {
        id: 14,
        image_path: "https://vignette.wikia.nocookie.net/supersmashbrosfanon/images/5/52/CrueltyToonLink.png/revision/latest?cb=20160521191516",
        moves: ["Bow and arrows, Boomerang, Spin Attack, Bomb"],
        name: "Toon Link",
        universe: "Legend of Zelda",
        weight: 'light'
      },
      {
        id: 15,
        image_path: "https://www.ssbwiki.com/images/thumb/2/2f/Fox_SSBU.png/1200px-Fox_SSBU.png",
        moves: ["Blaster, Fox Illusion, Fire Fox, Reflector"],
        name: "Fox",
        universe: "Star Fox",
        weight: 'light'
      },
      {
        id: 16,
        image_path: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/8a9441c0-2f2a-46a0-a3f6-a057afbac58c/d9k1sn1-db4329b9-11df-4bd3-83c2-90534f680bd8.png",
        moves: ["Giant Punch, Headbutt, Spinning Kong, Hand Slap"],
        name: "Donkey Kong",
        universe: "Donkey Kong Land",
        weight: 'super heavy'
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