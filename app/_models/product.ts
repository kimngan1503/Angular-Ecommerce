export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id, name, description = '', price = 0, imageUrl ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPtENrbB2dZZyeunlUCeObtcRrNjyLzl7Ty5WEco6BxEseNMFz5PpnNBPoUMKwFbMhHwM&usqp=CAU'){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}
