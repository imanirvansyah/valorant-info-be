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
          imgUrl: "/images/weapons/Classic.png",
        },
        {
          id: 2,
          name: 'stinger',
          imgUrl: "/images/weapons/stinger.png",
        },
        {
          id: 3,
          name: 'bulldog',
          imgUrl: "/images/weapons/bulldog.png",
        },
        {
          id: 4,
          name: 'marshall',
          imgUrl: "/images/weapons/marshall.png",
        },
        {
          id: 5,
          name: 'shorty',
          imgUrl: "/images/weapons/shorty.png",
        },
        {
          id: 7,
          name: 'spectre',
          imgUrl: "/images/weapons/spectre.png",
        },
        {
          id: 8,
          name: 'guardian',
          imgUrl: "/images/weapons/guardian.png",
        },
        {
          id: 9,
          name: 'outlaw',
          imgUrl: "/images/weapons/outlaw.png",
        },
        {
          id: 10,
          name: 'frenzy',
          imgUrl: "/images/weapons/frenzy.png",
        },
        {
          id: 11,
          name: 'bucky',
          imgUrl: "/images/weapons/bucky.png",
        },
        {
          id: 12,
          name: 'phantom',
          imgUrl: "/images/weapons/phantom.png",
        },
        {
          id: 13,
          name: 'operator',
          imgUrl: "/images/weapons/operator.png",
        },
        {
          id: 14,
          name: 'ghost',
          imgUrl: "/images/weapons/ghost.png",
        },
        {
          id: 15,
          name: 'judge',
          imgUrl: "/images/weapons/judge.png",
        },
        {
          id: 16,
          name: 'vandal',
          imgUrl: "/images/weapons/vandal.png",
        },
        {
          id: 17,
          name: 'ares',
          imgUrl: "/images/weapons/ares.png",
        },
        {
          id: 18,
          name: 'sheriff',
          imgUrl: "/images/weapons/sheriff.png",
        },
        {
          id: 19,
          name: 'golden gun',
          imgUrl: "/images/weapons/golden-gun.png",
        },
        {
          id: 20,
          name: 'knife',
          imgUrl: "/images/weapons/knife.png",
        },
        {
          id: 21,
          name: 'odin',
          imgUrl: "/images/weapons/odin.png",
        },
        {
          id: 22,
          name: 'snowball launcher',
          imgUrl: "/images/weapons/snowball-launcher.png",
        },
      ]
    }
  });
})

module.exports = router;