var validation_result = [false, false, false];

$("#inputName").keyup(function(){
  setTimeout(function(){
    var name = $("#inputName").val();
    if (!/[A-zА-я\s']+$/.test(name)) {
      $(".name-help-block").css("display", "inline-block");
      validation_result[0] = false;
    } else {
      $(".name-help-block").css("display", "none");
      validation_result[0] = true;
    }
  }, 2 * 1000);
});

$("#inputPhone").keyup(function(){
  setTimeout(function(){
    var phone = $("#inputPhone").val();
    if (phone.length != 13 || phone.slice(0,4) !== "+380") {
      $(".telephone-help-block").css("display", "inline-block");
      validation_result[1] = false;
    } else {
      $(".telephone-help-block").css("display", "none");
      validation_result[1] = true;
    }
  }, 2 * 1000);
});

$("#inputAddress").keyup(function(){
  setTimeout(function(){
    var re = /[A-zА-я\s0-9'єЄ]+$/;
    var address = $("#inputAddress").val();
    if (!re.test(address)) {
      $(".address-help-block").css("display", "inline-block");
      validation_result[2] = false;
    } else {
      $(".address-help-block").css("display", "none");
      validation_result[2] = true;
    }
  }, 2 * 1000);
});

function correctInput() {
  var result = true;
  validation_result.forEach(function(input) {
    if (!input) {
      result = false;
    }
  });
  return result;
}

exports.correctInput = correctInput;