let id = 1;
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
        image_path: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/LuigiNSMBW.png/220px-LuigiNSMBW.png",
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
    }
    // search:
    // create:
    // update:
    // delete:
}