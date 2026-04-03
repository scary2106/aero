export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: string;
  specs: {
    engine: string;
    power: string;
    topSpeed: string;
    acceleration: string;
  };
  image: string;
  description: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  description: string;
  founded: number;
  origin: string;
}
