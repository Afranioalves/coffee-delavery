export type Product = {
    id:number;
    name:string;
    description:string;
    price:string;
    image:string;
    type:Array<string>;
}

export type cartContextType = {
    cartContext:Array<Product>;
    setCartContext:(value:Array<Product>) => void;
}