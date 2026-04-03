import { Car, Brand } from './types';

export const BRANDS: Brand[] = [
  {
    id: 'bugatti',
    name: 'Bugatti',
    logo: 'https://logo.clearbit.com/bugatti.com',
    description: 'The pinnacle of automotive engineering and luxury.',
    founded: 1909,
    origin: 'France'
  },
  {
    id: 'pagani',
    name: 'Pagani',
    logo: 'https://logo.clearbit.com/pagani.com',
    description: 'Where art meets science in every detail.',
    founded: 1992,
    origin: 'Italy'
  },
  {
    id: 'koenigsegg',
    name: 'Koenigsegg',
    logo: 'https://logo.clearbit.com/koenigsegg.com',
    description: 'Pushing the boundaries of what is possible.',
    founded: 1994,
    origin: 'Sweden'
  },
  {
    id: 'lamborghini',
    name: 'Lamborghini',
    logo: 'https://logo.clearbit.com/lamborghini.com',
    description: 'Iconic design and raw power.',
    founded: 1963,
    origin: 'Italy'
  },
  {
    id: 'ferrari',
    name: 'Ferrari',
    logo: 'https://logo.clearbit.com/ferrari.com',
    description: 'The soul of racing on every road.',
    founded: 1939,
    origin: 'Italy'
  }
];

export const CARS: Car[] = [
  {
    id: 'chiron-pur-sport',
    brand: 'Bugatti',
    model: 'Chiron Pur Sport',
    year: 2024,
    price: '$3,600,000',
    specs: {
      engine: '8.0L W16 Quad-Turbo',
      power: '1500 HP',
      topSpeed: '350 KM/H',
      acceleration: '2.3s 0-100'
    },
    image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=2070&auto=format&fit=crop',
    description: 'Designed for corners, the Pur Sport is the most agile Chiron ever built.'
  },
  {
    id: 'huayra-roadster-bc',
    brand: 'Pagani',
    model: 'Huayra Roadster BC',
    year: 2024,
    price: '$3,500,000',
    specs: {
      engine: '6.0L V12 Twin-Turbo',
      power: '800 HP',
      topSpeed: '383 KM/H',
      acceleration: '2.8s 0-100'
    },
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2070&auto=format&fit=crop',
    description: 'A tribute to Benny Caiola, the Roadster BC is a masterpiece of carbon fiber.'
  },
  {
    id: 'jesko-absolut',
    brand: 'Koenigsegg',
    model: 'Jesko Absolut',
    year: 2024,
    price: '$3,400,000',
    specs: {
      engine: '5.0L V8 Twin-Turbo',
      power: '1600 HP',
      topSpeed: '531 KM/H',
      acceleration: '2.5s 0-100'
    },
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2070&auto=format&fit=crop',
    description: 'The fastest Koenigsegg ever made, designed to break the 500 km/h barrier.'
  },
  {
    id: 'revuelto',
    brand: 'Lamborghini',
    model: 'Revuelto',
    year: 2024,
    price: '$600,000',
    specs: {
      engine: '6.5L V12 Hybrid',
      power: '1001 HP',
      topSpeed: '350 KM/H',
      acceleration: '2.5s 0-100'
    },
    image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=2070&auto=format&fit=crop',
    description: 'The first V12 High Performance Electrified Vehicle from Lamborghini.'
  }
];
