/**
 * Created by chaika on 09.02.16.
 */
var Pizza_List = require('./data/Pizza_List');

exports.getPizzaList = function(req, res) {
    res.send(Pizza_List);
};

function base64(str) {
    return new Buffer(str).toString('base64');
}

var crypto = require('crypto');
function sha1(string) {
    var sha1 = crypto.createHash('sha1');
    sha1.update(string);
    return sha1.digest('base64');
}


exports.createOrder = function(req, res) {
    var order_info = req.body;
    console.log("Creating Order", order_info);

    /*var order = {
        version: 3,
        public_key: i35565441927,
        action: "pay",
        amount: 1,
        currency: "UAH",
        description: "Опис транзакції",
        order_id: Math.random(),
        //!!!Важливо щоб було 1, бо інакше візьме гроші!!
        sandbox: 1
    };*/
    //var data = base64(JSON.stringify(order));
    //var signature = sha1(rB4u8bHChJmIL7UAxPcWWzSwVEvtGLwSXiY5YT0l + data + rB4u8bHChJmIL7UAxPcWWzSwVEvtGLwSXiY5YT0l);


    res.send({
        success: true,
        /*data: data,
        signature: signature*/
    });
};