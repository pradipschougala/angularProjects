export class Product {
    id:number;
    name:string;
    discount:number;
    price:number;
    imageUrl:string;

    constructor(id, 
                name, 
                discount = 0, 
                price = 0, 
                imageUrl ='https://www.flaticon.com/svg/static/icons/svg/3520/3520171.svg')
    {
        this.id = id;
        this.name = name;
        this.discount = discount;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}
