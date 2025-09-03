var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.status(200).json({
    message: 'Hello Worlds!', status: 'success', data: {
      title: "not just a tac-shooter fps",
      description: "Riot Games presents VALORANT: a 5v5 character-based tactical FPS where precise gunplay meets unique agent abilities",
      menu: {
        agents: {
          name: "Agents",
          image: "http://localhost:3000/images/dashboard/agents.png",
          url: "/agents"
        },
        maps: {
          name: "maps",
          image: "http://localhost:3000/images/dashboard/maps.png",
          url: "/maps"
        },
        weapons: {
          name: "Weapons",
          image: "http://localhost:3000/images/dashboard/weapons.png",
          url: "/weapons"
        },
        gameMode: {
          name: "Game Modes",
          image: "http://localhost:3000/images/dashboard/game-modes.png",
          url: "/game-modes"
        }
      }
    }
  });
});

module.exports = router;
