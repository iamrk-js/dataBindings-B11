import { Component } from "@angular/core";




@Component({
    selector : "app-product",
    templateUrl : "./product.component.html",

    styleUrls : ["./product.component.scss"]

    // template : `<p>The Product is PRODUCT_NAME with id PRODUCT_ID</p>`,
    // styles : [
    //     'p{padding: 10px; border: 1px solid skyblue;border-radius: 5px;}'
    // ]

})
export class ProductComponent {
    productName : string = "Samsung";
    productId : number = 1234;


    getProductName():string{
        return `Iphone 15`
    }
}