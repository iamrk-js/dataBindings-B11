import { Component, OnInit } from "@angular/core";




@Component({
    selector : "app-product",
    templateUrl : "./product.component.html",

    styleUrls : ["./product.component.scss"]

    // template : `<p>The Product is PRODUCT_NAME with id PRODUCT_ID</p>`,
    // styles : [
    //     'p{padding: 10px; border: 1px solid skyblue;border-radius: 5px;}'
    // ]

})
export class ProductComponent  implements OnInit{
    productName : string = "Samsung";
    productId : number = 1234;
    isProdAvailble !: boolean;
    resp : string = `<p class="alert alert-info">I Love Angular</p>`
    userName : string = "Jhon";

    imgUrl : string = `https://images.unsplash.com/photo-1711377785726-47c7dd8773ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8`
    getProductName():string{
        return `Iphone 15`
    }
    ngOnInit(): void {
        this.isProdAvailble = (Math.random() > .5) ? true : false
    }

    getBgColor(){
        // if(this.isProdAvailble){
        //     return "orange"
        // }else{
        //     return "#ccc"
        // }

        return this.isProdAvailble ? 'orange' : '#ccc'
    }
}