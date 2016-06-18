/**
 * Created by chaika on 25.01.16.
 */

$(function(){
    //This code will execute when the page is ready
    var PizzaMenu = require('./pizza/PizzaMenu');
    var PizzaCart = require('./pizza/PizzaCart');

    var API = require('./API');
    var Validation = require("./validation")

    API.getPizzaList(function(err, pizza_list){
        if(err) {
            return console.error(err);
        }
        PizzaCart.initialiseCart();
        PizzaMenu.initialiseMenu(pizza_list);
    });

    $(".order-button").click(function() {
        window.location = "/order.html";
    });

    $(".edit-button").click(function(){
        window.location = "/";
    });

    $(".next-step-button").click(function(){
        if (Validation.correctInput()) {
            API.createOrder({
                name: $("#inputName").val(),
                phone: $("#inputPhone").val(),
                address: $("#inputAddress").val(),
                pizza: PizzaCart.getPizzaInCart()
            }, function(err, result){
                if(err) {
                    alert("Can't create order");
                } else {
                    alert("Order created");
                    //window.location = "/order.html";
                    /*LiqPayCheckout.init({
                        data:   result.data,
                        signature:  result.signature,
                        embedTo:    "#liqpay",
                        mode:   "popup" //  embed   ||  popup
                    }).on("liqpay.callback",
                        function(data){
                            console.log(data.status);
                            console.log(data);
                        }).on("liqpay.ready",
                            function(data){
                            //  ready
                            }).on("liqpay.close",   function(data){
                            //  close
                            });*/
                }
            });
        }
    });



    require('./googleMap');
});