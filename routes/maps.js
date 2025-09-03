var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.status(200).json({
    status: 'success',
    data: {
      maps: [
        {
          id: 1,
          name: 'Abyss',
          imgUrl: "/images/maps/abyss.webp",
        },
        {
          id: 2,
          name: 'Ascent',
          imgUrl: "/images/maps/ascent.webp",
        },
        {
          id: 3,
          name: 'Bind',
          imgUrl: "/images/maps/bind.webp",
        },
        {
          id: 4,
          name: 'Breeze',
          imgUrl: "/images/maps/breeze.webp",
        },
        {
          id: 5,
          name: 'Corrode',
          imgUrl: "/images/maps/corrode.webp",
        },
        {
          id: 7,
          name: 'Haven',
          imgUrl: "/images/maps/haven.webp",
        },
        {
          id: 8,
          name: 'Icebox',
          imgUrl: "/images/maps/icebox.webp",
        },
        {
          id: 9,
          name: 'lotus',
          imgUrl: "/images/maps/lotus.webp",
        },
        {
          id: 10,
          name: 'Pearl',
          imgUrl: "/images/maps/pearl.webp",
        },
        {
          id: 11,
          name: 'Split',
          imgUrl: "/images/maps/split.webp",
        },
        {
          id: 12,
          name: 'Sunset',
          imgUrl: "/images/maps/sunset.webp",
        },
      ]
    }
  });
})

module.exports = router;