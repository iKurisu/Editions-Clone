import bloom from 'assets/artworks/bloom.jpg';
import rise from 'assets/artworks/rise.jpg';
import aether from 'assets/artworks/aether.jpg';
import gausser from 'assets/artworks/gausser.jpg';
import anechoia from 'assets/artworks/anechoia.jpg';
import flora from 'assets/artworks/flora.jpg';
import plains from 'assets/artworks/plains.jpg';
import dvtnII from 'assets/artworks/dvtn-ii.jpg';
import cirrus from 'assets/artworks/cirrus.jpg';
import minim from 'assets/artworks/minim.jpg';
import dvtnI from 'assets/artworks/dvtn-i.jpg';
import overture from 'assets/artworks/overture.jpg';

const ACRYLIC = 'Acrylic';
const MIXED_MEDIA = 'Mixed Media';

const PORTRAIT = 'portrait';
const LANDSCAPE = 'landscape';
const SQUARE = 'square';

export default [
  {
    src: bloom,
    title: 'BLOOM',
    details: {
      type: ACRYLIC,
      year: 2018,
      price: 90,
    },
    orientation: PORTRAIT,
    colors: {
      font: 'rgb(171, 138, 159)',
      background: 'rgb(171, 138, 159)'
    }
  },
  {
    src: rise,
    title: 'RISE',
    details: {
      type: ACRYLIC,
      year: 2017,
      price: 100
    },
    orientation: LANDSCAPE,
    colors: {
      font: 'rgb(192, 193, 191)',
      background: '#c0c1bf'
    }
  },
  {
    src: aether,
    title: 'AETHER',
    details: {
      type: MIXED_MEDIA,
      year: 2018,
      price: 150
    },
    orientation: PORTRAIT,
    colors: {
      font: 'rgb(60, 63, 69)',
      background: '#26292e'
    }
  },
  {
    src: gausser,
    title: 'GAUSSER',
    details: {
      type: MIXED_MEDIA,
      year: 2017,
      price: 75
    },
    orientation: SQUARE,
    colors: {
      font: 'rgb(158, 158, 155)',
      background: ''
    }
  },
  {
    src: anechoia,
    title: 'ANECHOIA',
    details: {
      type: MIXED_MEDIA,
      year: 2017,
      price: 180
    },
    orientation: LANDSCAPE,
    colors: {
      font: 'rgb(98, 113, 135)',
      background: ''
    }
  },
  {
    src: flora,
    title: 'FLORA',
    details: {
      type: MIXED_MEDIA,
      year: 2017,
      price: 75
    },
    orientation: SQUARE,
    colors: {
      font: 'rgb(68, 68, 68)',
      background: ''
    }
  },
  {
    src: plains,
    title: 'PLAINS',
    details: {
      type: MIXED_MEDIA,
      year: 2017,
      price: 200
    },
    orientation: PORTRAIT,
    colors: {
      font: 'rgb(145, 149, 162)',
      background: ''
    }
  },
  {
    src: dvtnII,
    title: 'DVTN II',
    details: {
      type: MIXED_MEDIA,
      year: 2019,
      price: 100
    },
    orientation: LANDSCAPE,
    colors: {
      font: 'rgb(92, 103, 108)',
      background: ''
    }
  },
  {
    src: cirrus,
    title: 'CIRRUS',
    details: {
      type: MIXED_MEDIA,
      year: 2017,
      price: 150
    },
    orientation: PORTRAIT,
    colors: {
      font: 'rgb(68, 68, 68)',
      background: ''
    }
  },
  {
    src: minim,
    title: 'MINIM',
    details: {
      type: MIXED_MEDIA,
      year: 2016,
      price: 75
    },
    orientation: SQUARE,
    colors: {
      font: 'rgb(180, 186, 192)',
      background: ''
    }
  },
  {
    src: dvtnI,
    title: 'DVTN I',
    details: {
      type: ACRYLIC,
      year: 2018,
      price: 90
    },
    orientation: PORTRAIT,
    colors: {
      font: 'rgb(69, 80, 96)',
      background: ''
    }
  },
  {
    src: overture,
    title: 'OVERTURE',
    details: {
      type: MIXED_MEDIA,
      year: 2018,
      price: 150
    },
    orientation: LANDSCAPE,
    colors: {
      font: 'rgb(170, 170, 170)',
      background: ''
    }
  }
]