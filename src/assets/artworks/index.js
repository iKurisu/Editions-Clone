import bloom from './bloom';
import aether from './aether';
import anechoia from './anechoia';
import cirrus from './cirrus';
import dvtnI from './dvtn-i';
import dvtnII from './dvtn-ii';
import flora from './flora';
import gausser from './gausser';
import minim from './minim';
import overture from './overture';
import plains from './plains';
import rise from './rise';

const ACRYLIC = 'Acrylic';
const MIXED_MEDIA = 'Mixed Media';

const PORTRAIT = 'portrait';
const LANDSCAPE = 'landscape';
const SQUARE = 'square';

export default [
  {
    src: bloom,
    title: "BLOOM",
    details: {
      type: ACRYLIC,
      year: 2018      
    },
    formats: [{ dimensions: "16 x 20", price: 90 }],
    orientation: PORTRAIT,
    colors: {
      font: "rgb(171, 138, 159)",
      background: "rgb(171, 138, 159)"
    }
  },
  {
    src: rise,
    title: "RISE",
    details: {
      type: ACRYLIC,
      year: 2017      
    },
    formats: [
      { dimensions: "24 x 16", price: 100 },
      { dimensions: "36 x 24", price: 220 }
    ],
    orientation: LANDSCAPE,
    colors: {
      font: "rgb(192, 193, 191)",
      background: "#c0c1bf"
    }
  },
  {
    src: aether,
    title: "AETHER",
    details: {
      type: MIXED_MEDIA,
      year: 2018      
    },
    formats: [{ dimensions: "20 x 24", price: 150 }],
    orientation: PORTRAIT,
    colors: {
      font: "rgb(60, 63, 69)",
      background: "#26292e"
    }
  },
  {
    src: gausser,
    title: "GAUSSER",
    details: {
      type: MIXED_MEDIA,
      year: 2017      
    },
    formats: [
      { dimensions: "16 x 16", price: 75 },
      { dimensions: "24 x 24", price: 180 },
      { dimensions: "30 x 30", price: 275 }
    ],
    orientation: SQUARE,
    colors: {
      font: "rgb(158, 158, 155)",
      background: "#9e9e9b"
    }
  },
  {
    src: anechoia,
    title: "ANECHOIA",
    details: {
      type: MIXED_MEDIA,
      year: 2017      
    },
    formats: [{ dimensions: "30 x 20", price: 180 }],
    orientation: LANDSCAPE,
    colors: {
      font: "rgb(98, 113, 135)",
      background: "#3f4957"
    }
  },
  {
    src: flora,
    title: "FLORA",
    details: {
      type: MIXED_MEDIA,
      year: 2017      
    },
    formats: [{ dimensions: "16 x 16", price: 75 }],
    orientation: SQUARE,
    colors: {
      font: "rgb(68, 68, 68)",
      background: "#222"
    }
  },
  {
    src: plains,
    title: "PLAINS",
    details: {
      type: MIXED_MEDIA,
      year: 2017      
    },
    formats: [{ dimensions: "22 x 28", price: 200 }],
    orientation: PORTRAIT,
    colors: {
      font: "rgb(145, 149, 162)",
      background: "#9195a2"
    }
  },
  {
    src: dvtnII,
    title: "DVTN II",
    details: {
      type: MIXED_MEDIA,
      year: 2019      
    },
    formats: [
      { dimensions: "24 x 16", price: 100 },
      { dimensions: "36 x 24", price: 220 }
    ],
    orientation: LANDSCAPE,
    colors: {
      font: "rgb(92, 103, 108)",
      background: "#2a3338"
    }
  },
  {
    src: cirrus,
    title: "CIRRUS",
    details: {
      type: MIXED_MEDIA,
      year: 2017      
    },
    formats: [{ dimensions: "20 x 24", price: 150 }],
    orientation: PORTRAIT,
    colors: {
      font: "rgb(68, 68, 68)",
      background: "#222"
    }
  },
  {
    src: minim,
    title: "MINIM",
    details: {
      type: MIXED_MEDIA,
      year: 2016      
    },
    formats: [
      { dimensions: "16 x 16", price: 75 },
      { dimensions: "24 x 24", price: 180 },
      { dimensions: "30 x 30", price: 275 }
    ],
    orientation: SQUARE,
    colors: {
      font: "rgb(180, 186, 192)",
      background: "#b4bac0"
    }
  },
  {
    src: dvtnI,
    title: "DVTN I",
    details: {
      type: ACRYLIC,
      year: 2018      
    },
    formats: [{ dimensions: "16 x 20", price: 90 }],
    orientation: PORTRAIT,
    colors: {
      font: "rgb(69, 80, 96)",
      background: "#2c3139"
    }
  },
  {
    src: overture,
    title: "OVERTURE",
    details: {
      type: MIXED_MEDIA,
      year: 2018
    },
    formats: [{ dimensions: '24 x 16', price: 150 }],
    orientation: LANDSCAPE,
    colors: {
      font: "rgb(170, 170, 170)",
      background: "#aaa"
    }
  }
];