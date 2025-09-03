var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.status(200).json({
    status: 'success',
    data: {
      gameModes: [
        {
          id: 1,
          name: 'Unrated',
          imgUrl: "/images/game-modes/unrated.png",
        },
        {
          id: 2,
          name: 'Competitive',
          imgUrl: "/images/game-modes/competitive.png",
        },
        {
          id: 3,
          name: 'Swiftplay',
          imgUrl: "/images/game-modes/swiftplay.png",
        },
        {
          id: 4,
          name: 'Deathmatch',
          imgUrl: "/images/game-modes/deathmatch.png",
        },
        {
          id: 5,
          name: 'Escalation',
          imgUrl: "/images/game-modes/escalation.png",
        },
        {
          id: 6,
          name: 'Deathmatch (Team)',
          imgUrl: "/images/game-modes/team-deathmatch.png",
        },
      ]
    }
  });
})

module.exports = router;