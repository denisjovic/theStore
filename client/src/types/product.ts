export interface Product {
    "id": number;
    "name": string;
    "description"?: string,
    "price": number,
    "pictureUrl"?: string,
    "type"?: string,
    "brand"?: string,
    "quantityInStock"?: number
  
}

export type AddProducts = (product: Product) => void;
