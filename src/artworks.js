import bloom from './assets/artworks/bloom.jpg';
import rise from './assets/artworks/rise.jpg';
import aether from './assets/artworks/aether.jpg';
import gausser from './assets/artworks/gausser.jpg';
import anechoia from './assets/artworks/anechoia.jpg';
import flora from './assets/artworks/flora.jpg';
import plains from './assets/artworks/plains.jpg';
import dvtnII from './assets/artworks/dvtn-ii.jpg';
import cirrus from './assets/artworks/cirrus.jpg';
import minim from './assets/artworks/minim.jpg';
import dvtnI from './assets/artworks/dvtn-i.jpg';
import overture from './assets/artworks/overture.jpg';

const ACRYLIC = 'Acrylic';
const MIXED_MEDIA = 'Mixed Media';

const PORTRAIT = 'portrait';
const LANDSCAPE = 'landscape';
const SQUARE = 'square';

export default [
  {
    artwork: bloom,
    title: 'BLOOM',
    details: {
      type: ACRYLIC,
      year: 2018,
      price: 90,
    },
    orientation: PORTRAIT,
    color: '#ab8a9f'
  },
  {
    artwork: rise,
    title: 'RISE',
    details: {
      type: ACRYLIC,
      year: 2017,
      price: 100
    },
    orientation: LANDSCAPE,
    color: '#c0c1bf'
  },
  {
    artwork: aether,
    title: 'AETHER',
    details: {
      type: MIXED_MEDIA,
      year: 2018,
      price: 150
    },
    orientation: PORTRAIT,
    color: '#26292e'
  },
  {
    artwork: gausser,
    title: 'GAUSSER',
    details: {
      type: MIXED_MEDIA,
      year: 2017,
      price: 75
    },
    orientation: SQUARE,
    color: '#9e9e9b'
  },
  {
    artwork: anechoia,
    title: 'ANECHOIA',
    details: {
      type: MIXED_MEDIA,
      year: 2017,
      price: 180
    },
    orientation: LANDSCAPE,
    color: '#3f4957'
  },
  {
    artwork: flora,
    title: 'FLORA',
    details: {
      type: MIXED_MEDIA,
      year: 2017,
      price: 75
    },
    orientation: SQUARE,
    color: '#222'
  },
  {
    artwork: plains,
    title: 'PLAINS',
    details: {
      type: MIXED_MEDIA,
      year: 2017,
      price: 200
    },
    orientation: PORTRAIT,
    color: '#9195a2'
  },
  {
    artwork: dvtnII,
    title: 'DVTN II',
    details: {
      type: MIXED_MEDIA,
      year: 2019,
      price: 100
    },
    orientation: LANDSCAPE,
    color: '#2a3338'
  },
  {
    artwork: cirrus,
    title: 'CIRRUS',
    details: {
      type: MIXED_MEDIA,
      year: 2017,
      price: 150
    },
    orientation: PORTRAIT,
    color: '#222'
  },
  {
    artwork: minim,
    title: 'MINIM',
    details: {
      type: MIXED_MEDIA,
      year: 2016,
      price: 75
    },
    orientation: SQUARE,
    color: '#b4bac0'
  },
  {
    artwork: dvtnI,
    title: 'DVTN I',
    details: {
      type: ACRYLIC,
      year: 2018,
      price: 90
    },
    orientation: PORTRAIT,
    color: '#2c3139'
  },
  {
    artwork: overture,
    title: 'OVERTURE',
    details: {
      type: MIXED_MEDIA,
      year: 2018,
      price: 150
    },
    orientation: LANDSCAPE,
    color: '#aaa'
  }
]