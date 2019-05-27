//The cursor is automatically drawn to the Name: field. 
$("#name").focus();

// A const to capture the id of the new, other text field is created
const $newText = $("#other-title");

//The added text field is hidden until the 'other' option is selected
// but it is hidden again if an option besides 'other is selected
 $($newText).hide();
 $("#title").change(function(){
    if($("#title").val()==="other"){
       $($newText).show();
    } else {
      $($newText).hide()
    }
});

//These two consts capture the two options under the Design: menu
 const $puns = $("#design option:eq(1)");
 const $heart = $("#design option:eq(2)");
 //These two consts capture the color options specific to the options above
 const $punsColors = $("#color option:lt(3)");
 const $heartColors = $("#color option:gt(2)");

 //If the puns option is chosen, only the colors within the puns options 
 //The Color menu is hidden until an option is selected from the Design menu
$("#color").hide();

//If the JS Puns theme is selected, only the colors pertaining to that theme 
//will show in the Color menu
    $("#design").change(function(){
        if($("#design").val()==="js puns"){
            $("#color").show();
            $($heartColors).hide();
         $($punsColors).show()
        } else {
        $($punsColors).hide()
    }
    });

   //The Color menu is hidden until an option from the Design menu is chosen
    $("#color").hide();

     //If the I Heart JS theme is selected, only the colors pertaining to that
    //theme will show in the Color menu
    $("#design").change(function(){
        if($("#design").val()==="heart js"){
            $("#color").show();
            $($punsColors).hide();
         $($heartColors).show()
        } else {
        $($heartColors).hide()
    }
    });

//These consts hold each option in the Activities menu including the Activities section
const $activities = $(".activities");
const $mainConference = $("[name='all']");
const $jsFrameworks = $("[name='js-frameworks']");
const $jsLibraries = $("[name='js-libs']");
const $express = $("[name='express']");
const $node = $("[name='node']");
const $buildToolsWS = $("[name ='build-tools']");
const $npmWS = $("[name = 'npm']");

//If the JS Frameworks WS is selected, the Express WS is disabled.
    $($activities).change(function(){
        if ($($jsFrameworks).is(':checked')){
           $($express).attr('disabled', 'disabled')
        } else {
        $($express).attr('disabled', false)
        }
    });

    //If the Express WS is selected, the JS Frameworks WS is disabled.
    $($activities).change(function(){
        if ($($express).is(':checked')){
           $($jsFrameworks).attr('disabled', 'disabled')
        } else {
        $($jsFrameworks).attr('disabled', false)
        }
    });

    //If the JS Libraries WS is selected, the Node WS is disabled.
    $($activities).change(function(){
        if ($($jsLibraries).is(':checked')){
           $($node).attr('disabled', 'disabled')
        } else {
        $($node).attr('disabled', false)
        }
    });

    //If the Node WS is selected, the JS Libraries WS is disabled. 
    $($activities).change(function(){
        if ($($node).is(':checked')){
           $($jsLibraries).attr('disabled', 'disabled')
        } else {
        $($jsLibraries).attr('disabled', false)
        }
});

//totalCost keeps track of the total cost for the activities selected in the 
//Activities section above
let totalCost = 0;

//A new div is added and displayed at the bottom of the Activities section
//to reflect the cost of the conference. 
const $displayedCost =  $(`<div id="cost">Your total cost is: $ <span class = "apple">${totalCost}</span></div>`); 
$($activities).append($displayedCost);
$($displayedCost).show();

//If the Main Conference option is selected, $200 is added to the total at the bottom
$($mainConference).change(function(){
    if ($($mainConference).is(':checked')){
        totalCost += 200;
        $($displayedCost).find(".apple").text(totalCost);
$displayedCost.show();
    } else { 
// If the Main Conference option is deselected, the $200 is removed from the total
        totalCost -= 200;
        $displayedCost.find (".apple").text(totalCost);
} 
});

//If the JS Frameworks option is selected, $100 is added to the total at the bottom
$($jsFrameworks).change(function(){
    if ($($jsFrameworks).is(':checked')){
        totalCost += 100;
        $displayedCost.find(".apple").text(totalCost);
        $displayedCost.show();
    }else { 
// If the JS Frameworks option is deselected, the $100 is removed from the total
        totalCost -= 100;
        $displayedCost.find(".apple").text(totalCost);
}
});

//If the JS Libraries option is selected, $100 is added to the total at the bottom
$($jsLibraries).change(function(){
    if ($($jsLibraries).is(':checked')){
        totalCost += 100;
        $displayedCost.find(".apple").text(totalCost);
        $displayedCost.show();
    }else { 
// If the JS Libraries option is deselected, the $100 is removed from the total
        totalCost -= 100;
        $displayedCost.find(".apple").text(totalCost);
}
});

//If the Express option is selected, $100 is added to the total at the bottom
$($express).change(function(){
    if ($($express).is(':checked')){
        totalCost += 100;
        $displayedCost.find(".apple").text(totalCost);
        $displayedCost.show();
    } else { 
 // If the Express option is deselected, the $100 is removed from the total       
        totalCost -= 100;
        $displayedCost.find(".apple").text(totalCost);
    
}
});

//If the Node option is selected, $100 is added to the total at the bottom
$($node).change(function(){
    if ($($node).is(':checked')){
        totalCost += 100;
        $displayedCost.find(".apple").text(totalCost);
        $displayedCost.show();
    } else { 
 // If the Node option is deselected, the $100 is removed from the total       
        totalCost -= 100;
        $displayedCost.find(".apple").text(totalCost);
}
});

//If the Build Tools option is selected, $100 is added to the total at the bottom
$($buildToolsWS).change(function(){
    if ($($buildToolsWS).is(':checked')){
        totalCost += 100;
        $displayedCost.find(".apple").text(totalCost);
        $displayedCost.show();
    }else { 
// If the Build Tools option is deselected, the $100 is removed from the total
        totalCost -= 100;
        $displayedCost.find(".apple").text(totalCost);
}  
});

//If the npm option is selected, $100 is added to the total at the bottom
$($npmWS).change(function(){
    if ($($npmWS).is(':checked')){
        totalCost += 100;
        $displayedCost.find(".apple").text(totalCost);
        $displayedCost.show();
    }else { 
// If the npw option is deselected, the $100 is removed from the total
        totalCost -= 100;
        $displayedCost.find(".apple").text(totalCost);
}
});

//These consts hold the options from the 'I'm going to pay with:" menu
const $creditCard = $("#payment option:eq(1)");
const $payPal = $("#payment option:eq(2)");
const $bitCoin = $("#payment option:eq(3)");
//These consts hold the fields specific to each option above
const $ccInfo = $(".credit-card");
const $ppInfo = $("p:eq(0)");
const $bcInfo = $("p:eq(1)");

//The credit card option is displayed automatically 
//while the payPal and BitCoin options are hidden 
$("#payment option:eq(0)").hide();
$creditCard.attr("selected", true);
$ppInfo.hide();
$bcInfo.hide();

//If the payPal option is selected, the field specific to payPal is shown
//and the fields for the other two options are hidden
$("#payment").change(function(){
    if($("#payment").val()==="paypal"){
        $ppInfo.show();
       $ccInfo.hide();
       $bcInfo.hide()
    }
});

//If the BitCoin option is selected, the field specific to BitCoin is shown
//and the fields for the other two options are hidden
$("#payment").change(function(){
    if($("#payment").val()==="bitcoin"){
        $ppInfo.hide();
        $bcInfo.show();
       $ccInfo.hide();
    }
});

//If the credit card option is selected, the field specific to credit card is shown
//and the fields for the other two options are hidden again
$("#payment").change(function(){
    if($("#payment").val()==="credit card"){
        $ppInfo.hide();
        $bcInfo.hide();
       $ccInfo.show();
    }
});

//These consts hold the fields that will be validated prior to form submission
const $submit = $("button:eq(0)");
const $name = $("#name");
const $email = $("#mail");
const $ccNumber = $("#cc-num");
const $ccZip = $("#zip");
const $ccCvv = $("#cvv");

//When the Register button is selected, the name field is checked 
$submit.on('click', function(event){
if ($name.val().length<2){
//prevent submission of form
event.preventDefault();
//alert the user
alert("Enter your name, Bro!");
//The border of the name field will become red
$name.css("border", "3px solid red");
return true;
}
});

//When the Register button is clicked, the email field is checked
let validEmail = /^[^@]+@[^@.]+\.[a-z]+$/i;
$submit.on('click', function(event){
    if ($email.val().length<7){
    //prevent submission of form
    event.preventDefault();
    //alert the user
    alert("We need your email! We ran out of messenger pigeons.");
    //The border of the email field becomes red
    $email.css("border", "3px solid red");
    validation =  true;
    }
    });

//When the Register button is clicked, the totalCost const is checked
$submit.on('click', function(event){
    if (totalCost<100){
    //prevent submission of form
    event.preventDefault();
    // alert the user
    alert("Select at least one of the fun activities for the conference. Fun, in this case, is relative.");
    $activities.css("border", "3px solid red");
    }
    });

//When the Register button is clicked, the credit card field is checked
$submit.on('click', function(event){
    if ($("#payment").val()==="credit card"){
     $ccNumber.val().length<13;
    //prevent submission of form
    event.preventDefault();
    // alert the user
    alert("Don't forget your credit card number! We won't share it!");
    $ccNumber.css("border", "3px solid red");
    }
    });

//When the Register button is clicked, the zip code field is checked
    $submit.on('click', function(event){
    if ($("#payment").val()==="credit card"){
    $ccZip.val().length<6
    //prevent submission of form
    event.preventDefault();
    // alert the user
    alert("Yes, we still need your zip code in addition to your credit card number.");
    $ccZip.css("border", "3px solid red");
    }
    });

 //When the Register button is clicked, the cvv field is checked
$submit.on('click', function(event){
    if ($("#payment").val()==="credit card"){
    $ccCvv.val().length<3
    //prevent submission of form
    event.preventDefault();
    // alert the user
    alert("Almost forgot, we need your credit card cvv too.");
    $ccCvv.css("border", "3px solid red");
    }
    });

