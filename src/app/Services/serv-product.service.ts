import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ServProductService {
  Productslst:Iproduct[];
  constructor() { 
    this.Productslst=[
      {id:100,name:"laptop",price:100,quantity:1,imgurl:"https://fakeimg.pl/300/",categoryID:1},
      {id:200,name:"laptop1",price:400,quantity:5,imgurl:"https://fakeimg.pl/300/",categoryID:4},
      {id:300,name:"laptop2",price:200,quantity:6,imgurl:"https://fakeimg.pl/300/",categoryID:5}
    ]
  }
  
  getAllProduct():Iproduct[]
{ 
return this.Productslst;
}

getProductByID(ID:number):Iproduct|null
{
  let product =this.Productslst.find(e=>e.id==ID);

return  product?product:null;
}



}
