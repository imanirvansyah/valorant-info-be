var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.status(200).json({
    status: 'success',
    data: {
      agents: [
        {
          id: 1,
          name: 'Jett',
          image: 'http://localhost:3000/images/agents/jett/list.png'
        },
        {
          id: 2,
          name: 'Yoru',
          image: 'http://localhost:3000/images/agents/yoru/list.png'
        },
        {
          id: 3,
          name: 'Reyna',
          image: 'http://localhost:3000/images/agents/reyna/list.png'
        },
        {
          id: 4,
          name: 'Iso',
          image: 'http://localhost:3000/images/agents/iso/list.png'
        },
        {
          id: 5,
          name: 'Neon',
          image: 'http://localhost:3000/images/agents/neon/list.png'
        },
        {
          id: 6,
          name: 'Phoenix',
          image: 'http://localhost:3000/images/agents/phoenix/list.png'
        },
        {
          id: 7,
          name: 'Waylay',
          image: 'http://localhost:3000/images/agents/waylay/list.png'
        },
        {
          id: 8,
          name: 'Raze',
          image: 'http://localhost:3000/images/agents/raze/list.png'
        },
        {
          id: 9,
          name: 'Viper',
          image: 'http://localhost:3000/images/agents/viper/list.png'
        },
        {
          id: 10,
          name: 'Astra',
          image: 'http://localhost:3000/images/agents/astra/list.png'
        },
        {
          id: 11,
          name: 'Clove',
          image: 'http://localhost:3000/images/agents/clove/list.png'
        },
        {
          id: 12,
          name: 'Harbor',
          image: 'http://localhost:3000/images/agents/harbor/list.png'
        },
        {
          id: 13,
          name: 'Brimstone',
          image: 'http://localhost:3000/images/agents/brimstone/list.png'
        },
        {
          id: 14,
          name: 'Omen',
          image: 'http://localhost:3000/images/agents/omen/list.png'
        },
        {
          id: 15,
          name: 'Fade',
          image: 'http://localhost:3000/images/agents/fade/list.png'
        },
        {
          id: 16,
          name: 'Kayo',
          image: 'http://localhost:3000/images/agents/kayo/list.png'
        },
        {
          id: 17,
          name: 'Tejo',
          image: 'http://localhost:3000/images/agents/tejo/list.png'
        },
        {
          id: 18,
          name: 'Skye',
          image: 'http://localhost:3000/images/agents/skye/list.png'
        },
        {
          id: 19,
          name: 'Sova',
          image: 'http://localhost:3000/images/agents/sova/list.png'
        },
        {
          id: 20,
          name: 'Breach',
          image: 'http://localhost:3000/images/agents/breach/list.png'
        },
        {
          id: 21,
          name: 'Gekko',
          image: 'http://localhost:3000/images/agents/gekko/list.png'
        },
        {
          id: 22,
          name: 'Deadlock',
          image: 'http://localhost:3000/images/agents/deadlock/list.png'
        },
        {
          id: 23,
          name: 'Sage',
          image: 'http://localhost:3000/images/agents/sage/list.png'
        },
        {
          id: 24,
          name: 'Killjoy',
          image: 'http://localhost:3000/images/agents/killjoy/list.png'
        },
        {
          id: 25,
          name: 'Cypher',
          image: 'http://localhost:3000/images/agents/cypher/list.png'
        },
        {
          id: 26,
          name: 'Chamber',
          image: 'http://localhost:3000/images/agents/chamber/list.png'
        },
        {
          id: 27,
          name: 'Vyse',
          image: 'http://localhost:3000/images/agents/vyse/list.png'
        },
      ]
    }
  });
});

module.exports = router;
