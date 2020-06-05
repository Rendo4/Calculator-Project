function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result = add(number1, number2);
    $("#output").text(result);
  });
});

$(document).ready(function() {
  $("form#subtract").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#subtract1").val());
    const number2 = parseInt($("#subtract2").val());
    const result = add(number1, number2);
    $("#output").text(result);
  });
});

$(document).ready(function() {
  $("form#multiply").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#multiply1").val());
    const number2 = parseInt($("#multiply2").val());
    const result = add(number1, number2);
    $("#output").text(result);
  });
});

$(document).ready(function() {
  $("form#divide").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#divide1").val());
    const number2 = parseInt($("#divide2").val());
    const result = add(number1, number2);
    $("#output").text(result);
  });
});

// $(document).ready(function() {
//   const over21 = confirm("Are you over 21? Click OK for yes or Cancel for no.");

//   if (over21) {
//     $('#drinks').show();
//   } else {
//     $('#under-21').show();
//   }
// });

// $(document).ready(function() {
//   $("form#insurance").submit(function(event) {
//     const age = parseInt($("input#age").val());
//     const gender = $("select#gender").val();

//     if (age) {
//       let quote = (100 - age) * 3;
//       if (gender === 'male' && age < 26) {
//         quote += 50;
//       }

//       $("#rate").text(quote);
//       $("#quote").show();
//     } else {
//       alert('Please enter your age.');
//     }

//     event.preventDefault();
//   });
// });