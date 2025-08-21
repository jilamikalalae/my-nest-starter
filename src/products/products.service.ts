import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    private readonly products = [
        { id: 1, name: 'Product 1', description: 'Description 1' },
        { id: 2, name: 'Product 2', description: 'Description 2' },
        
    ];

    findAll() {
        return this.products;
    }

    create(product) {
        this.products.push(product);
        return this.products;
    }
}
