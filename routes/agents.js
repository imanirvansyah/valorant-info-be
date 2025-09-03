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
          imgUrl: '/images/agents/jett/list.png'
        },
        {
          id: 2,
          name: 'Yoru',
          imgUrl: '/images/agents/yoru/list.png'
        },
        {
          id: 3,
          name: 'Reyna',
          imgUrl: '/images/agents/reyna/list.png'
        },
        {
          id: 4,
          name: 'Iso',
          imgUrl: '/images/agents/iso/list.png'
        },
        {
          id: 5,
          name: 'Neon',
          imgUrl: '/images/agents/neon/list.png'
        },
        {
          id: 6,
          name: 'Phoenix',
          imgUrl: '/images/agents/phoenix/list.png'
        },
        {
          id: 7,
          name: 'Waylay',
          imgUrl: '/images/agents/waylay/list.png'
        },
        {
          id: 8,
          name: 'Raze',
          imgUrl: '/images/agents/raze/list.png'
        },
        {
          id: 9,
          name: 'Viper',
          imgUrl: '/images/agents/viper/list.png'
        },
        {
          id: 10,
          name: 'Astra',
          imgUrl: '/images/agents/astra/list.png'
        },
        {
          id: 11,
          name: 'Clove',
          imgUrl: '/images/agents/clove/list.png'
        },
        {
          id: 12,
          name: 'Harbor',
          imgUrl: '/images/agents/harbor/list.png'
        },
        {
          id: 13,
          name: 'Brimstone',
          imgUrl: '/images/agents/brimstone/list.png'
        },
        {
          id: 14,
          name: 'Omen',
          imgUrl: '/images/agents/omen/list.png'
        },
        {
          id: 15,
          name: 'Fade',
          imgUrl: '/images/agents/fade/list.png'
        },
        {
          id: 16,
          name: 'Kayo',
          imgUrl: '/images/agents/kayo/list.png'
        },
        {
          id: 17,
          name: 'Tejo',
          imgUrl: '/images/agents/tejo/list.png'
        },
        {
          id: 18,
          name: 'Skye',
          imgUrl: '/images/agents/skye/list.png'
        },
        {
          id: 19,
          name: 'Sova',
          imgUrl: '/images/agents/sova/list.png'
        },
        {
          id: 20,
          name: 'Breach',
          imgUrl: '/images/agents/breach/list.png'
        },
        {
          id: 21,
          name: 'Gekko',
          imgUrl: '/images/agents/gekko/list.png'
        },
        {
          id: 22,
          name: 'Deadlock',
          imgUrl: '/images/agents/deadlock/list.png'
        },
        {
          id: 23,
          name: 'Sage',
          imgUrl: '/images/agents/sage/list.png'
        },
        {
          id: 24,
          name: 'Killjoy',
          imgUrl: '/images/agents/killjoy/list.png'
        },
        {
          id: 25,
          name: 'Cypher',
          imgUrl: '/images/agents/cypher/list.png'
        },
        {
          id: 26,
          name: 'Chamber',
          imgUrl: '/images/agents/chamber/list.png'
        },
        {
          id: 27,
          name: 'Vyse',
          imgUrl: '/images/agents/vyse/list.png'
        },
      ]
    }
  });
});

module.exports = router;
