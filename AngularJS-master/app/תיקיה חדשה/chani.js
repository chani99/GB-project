var chani = angular.module('chani', ['ngRoute']);

chani.config(function($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl: "books.html"
    })
    .when("/order",{
        templateUrl: "order.html"
        
    })
});


chani.service('cartService', function(){
    this.booksInCart = [];
    this.addToCart = function(idbn) {
        this.booksInCart.push(idbn);
        console.log(this.booksInCart); 
    }

    this.getbooks = function($user){
        // alert("hi");
        let cart = this.booksInCart.join(', ');
        alert(cart);

    }
});

chani.filter('changeName', function(){
    function ChangeBookName(book){
return "APPLE";
    }

    return function(input){
        for (let i = 0; i < input.length; i++) {
        input[i].book = ChangeBookName(input[i].book);
       }
return input;
    }
});



chani.filter('bestseller', function(){

    return function(input, BS){
        for (let i = 0; i < input.length; i++) {
                if(input[i].isbn == BS){
                    input[i].isBestSeller = true;
                }
       }
       return input;
    }       
    
});



chani.controller('finish', function finish($scope, cartService){
    $scope.user ={
        firstname: "",
        lastname: ""
    }
    
    $scope.shoppingCart = function(){
        // alert('hi');
        cartService.getbooks($scope.user);
    }

}); 



chani.controller('mybooks', function CreateBook($scope, cartService){


    
 function Book(book, name, image, isbn) {
        this.name = name;
        this.book = book;
        this.image = image;
        this.isbn = isbn;        
        this.isBestSeller = false;
    }


    $scope.book =[
    new Book('Book1', 'Mical','book1.jpg',1234 ),
    new Book('Book2', 'Chani','book2.jpg', 4578),
    new Book('Book3', 'Zvi','book3.jpg', 2212)];
    

    $scope.addItem = function(idbn){
        cartService.addToCart(idbn);
    }



}); 

chani.directive('ad', function(){
    return  {
        template: function(elem, attr) { 
            return "<span style='color:red'>Add " + attr.name + ' to favorites</span>';
        }
    };
});
        

