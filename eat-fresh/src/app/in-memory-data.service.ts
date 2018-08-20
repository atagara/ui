import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      { id: 11, name: 'Asparagus', price: 9.99, images: ['assets/test/images/Asparagus.jpg'] },
      { id: 12, name: 'Cauliflower', price: 10.99, images: ['assets/test/images/Cauliflower.jpg','assets/test/images/Asparagus.jpg'] },
      { id: 13, name: 'Green_Bell_Pepper', price: 3.99, images: ['assets/test/images/Green_Bell_Pepper.jpg'] },
      { id: 14, name: 'Organic_Broccoli', price: 2.49, images: ['assets/test/images/Organic_Broccoli.jpg'] },
      { id: 15, name: 'Organic_Tomatoes', price: 25.99, images: ['assets/test/images/Organic_Tomatoes.jpg'] },
      { id: 16, name: 'yellow_onion', price: 99.99, images: ['assets/test/images/yellow_onion.jpg'] },
      { id: 17, name: 'Brussels_Sprouts', price: 1.09, images: ['assets/test/images/Brussels_Sprouts.jpg'] },
      { id: 18, name: 'green_beans', price: 9.45, images: ['assets/test/images/green_beans.jpg'] },
      { id: 19, name: 'organic_baby_carrots', price: 7.65, images: ['assets/test/images/organic_baby_carrots.jpg'] },
      { id: 20, name: 'organic_carrots', price: 6.57, images: ['assets/test/images/organic_carrots.jpg'] },
	    { id: 21, name: 'red_onion', price: 6.57, images: ['assets/test/images/red_onion.jpg'] }
    ];
    return {products};
  }
}