var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.status(200).json({
    status: 'success',
    data: {
      weapons: [
        {
          id: 1,
          name: 'Classic',
          imgUrl: "/images/maps/Classic.png",
        },
        {
          id: 2,
          name: 'stinger',
          imgUrl: "/images/maps/stinger.png",
        },
        {
          id: 3,
          name: 'bulldog',
          imgUrl: "/images/maps/bulldog.png",
        },
        {
          id: 4,
          name: 'marshall',
          imgUrl: "/images/maps/marshall.png",
        },
        {
          id: 5,
          name: 'shorty',
          imgUrl: "/images/maps/shorty.png",
        },
        {
          id: 7,
          name: 'spectre',
          imgUrl: "/images/maps/spectre.png",
        },
        {
          id: 8,
          name: 'guardian',
          imgUrl: "/images/maps/guardian.png",
        },
        {
          id: 9,
          name: 'outlaw',
          imgUrl: "/images/maps/outlaw.png",
        },
        {
          id: 10,
          name: 'frenzy',
          imgUrl: "/images/maps/frenzy.png",
        },
        {
          id: 11,
          name: 'bucky',
          imgUrl: "/images/maps/bucky.png",
        },
        {
          id: 12,
          name: 'phantom',
          imgUrl: "/images/maps/phantom.png",
        },
        {
          id: 13,
          name: 'operator',
          imgUrl: "/images/maps/operator.png",
        },
        {
          id: 14,
          name: 'ghost',
          imgUrl: "/images/maps/ghost.png",
        },
        {
          id: 15,
          name: 'judge',
          imgUrl: "/images/maps/judge.png",
        },
        {
          id: 16,
          name: 'vandal',
          imgUrl: "/images/maps/vandal.png",
        },
        {
          id: 17,
          name: 'ares',
          imgUrl: "/images/maps/ares.png",
        },
        {
          id: 18,
          name: 'sheriff',
          imgUrl: "/images/maps/sheriff.png",
        },
        {
          id: 19,
          name: 'golden gun',
          imgUrl: "/images/maps/golden-gun.png",
        },
        {
          id: 20,
          name: 'knife',
          imgUrl: "/images/maps/knife.png",
        },
        {
          id: 21,
          name: 'odin',
          imgUrl: "/images/maps/odin.png",
        },
        {
          id: 22,
          name: 'snowball launcher',
          imgUrl: "/images/maps/snowball-launcher.png",
        },
      ]
    }
  });
})

module.exports = router;