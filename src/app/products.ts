export const products = [
  {
    name: 'France',
    description: 'The French Republic',
    source: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/125px-Flag_of_France.svg.png',
    price: 67,
    salePrice: 50
  },
  {
    name: 'Germany',
    description: 'The Federal Republic of Germany',
    source: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/125px-Flag_of_Germany.svg.png',
    price: 83,
    salePrice: 65
  },
  {
    name: 'Italy',
    description: 'The Italian Republic',
    source: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/125px-Flag_of_Italy.svg.png',
    price: 60,
    salePrice: 45
  },
  {
    name: 'Spain',
    description: 'Kingdom of Spain',
    source: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/125px-Flag_of_Spain.svg.png',
    price: 46,
    salePrice: 32
  },
  {
    name: 'Poland',
    description: 'The Republic of Poland',
    source: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/125px-Flag_of_Poland.svg.png',
    price: 38,
    salePrice: 29
  }
  
];

export class country
{
  name: string;
  description: string;
  source: string;
  price: number;
  salePrice: number;
}