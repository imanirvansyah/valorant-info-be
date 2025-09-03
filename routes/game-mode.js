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
          description: 'Standard 5v5 mode with no abilities.'
        },
        {
          id: 2,
          name: 'Competitive',
          imgUrl: "/images/game-modes/competitive.png",
          description: 'Create your own game rules and settings.'
        },
        {
          id: 3,
          name: 'Swiftplay',
          imgUrl: "/images/game-modes/swiftplay.png",
          description: 'Fast-paced mode with random abilities and weapons.'
        },
        {
          id: 4,
          name: 'Deathmatch',
          imgUrl: "/images/game-modes/deathmatch.png",
          description: 'Free-for-all mode with no abilities.'
        },
        {
          id: 5,
          name: 'Escalation',
          imgUrl: "/images/game-modes/escalation.png",
          description: 'Team-based mode with evolving weapons.'
        },
        {
          id: 6,
          name: 'Deathmatch (Team)',
          imgUrl: "/images/game-modes/team-deathmatch.png",
          description: 'Team-based version of Deathmatch.'
        },
      ]
    }
  });
})

module.exports = router;