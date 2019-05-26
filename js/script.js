//testing local changes to GitHub 
$("#name").focus();
//Include a text field that will be revealed with "other" is selected

const $newText = $("#other-title");
 $($newText).hide();
    $("#title").change(function(){
        if($("#title").val()==="other"){
         $($newText).show();
        } else {
        $($newText).hide()
    }
});

//For the T-Shirt "Color" menu, only display the color options that match the design selected in the "Design" menu.

 const $puns = $("#design option:eq(1)");
 const $heart = $("#design option:eq(2)");
 const $punsColors = $("#color option:lt(3)");
 const $heartColors = $("#color option:gt(2)");

$("#color").hide();
    $("#design").change(function(){
        if($("#design").val()==="js puns"){
            $("#color").show();
            $($heartColors).hide();
         $($punsColors).show()
        } else {
        $($punsColors).hide()
    }
    });

    $("#color").hide();
    $("#design").change(function(){
        if($("#design").val()==="heart js"){
            $("#color").show();
            $($punsColors).hide();
         $($heartColors).show()
        } else {
        $($heartColors).hide()
    }
    });

const $activities = $(".activities");
const $mainConference = $("[name='all']");
const $jsFrameworks = $("[name='js-frameworks']");
const $jsLibraries = $("[name='js-libs']");
const $express = $("[name='express']");
const $node = $("[name='node']");
const $buildToolsWS = $("[name ='build-tools']");
const $npmWS = $("[name = 'npm']");

    $($activities).change(function(){
        if ($($jsFrameworks).is(':checked')){
           $($express).attr('disabled', 'disabled')
        } else {
        $($express).attr('disabled', false)
        }
    });

    $($activities).change(function(){
        if ($($express).is(':checked')){
           $($jsFrameworks).attr('disabled', 'disabled')
        } else {
        $($jsFrameworks).attr('disabled', false)
        }
    });

    $($activities).change(function(){
        if ($($jsLibraries).is(':checked')){
           $($node).attr('disabled', 'disabled')
        } else {
        $($node).attr('disabled', false)
        }
    });
    $($activities).change(function(){
        if ($($node).is(':checked')){
           $($jsLibraries).attr('disabled', 'disabled')
        } else {
        $($jsLibraries).attr('disabled', false)
        }
});

let totalCost = 0;
const $displayedCost =  $(`<div id="cost">Your total cost is: $ <span class = "apple">${totalCost}</span></div>`); 
$($activities).append($displayedCost);
$($displayedCost).show();

// $($activities).change(function(){
// const banana = $($mainConference).is()
// };

$($mainConference).change(function(){
    if ($($mainConference).is(':checked')){
        totalCost += 200;
        $($displayedCost).find(".apple").text(totalCost);
$displayedCost.show();
    } else { 
        // if ($mainConference.is(':unchecked')){
        totalCost -= 200;
        $displayedCost.find (".apple").text(totalCost);
} 
});

$($jsFrameworks).change(function(){
    if ($($jsFrameworks).is(':checked')){
        totalCost += 100;
        $displayedCost.find(".apple").text(totalCost);
        $displayedCost.show();
    }else { 
        totalCost -= 100;
        $displayedCost.find(".apple").text(totalCost);
}
});
$($jsLibraries).change(function(){
    if ($($jsLibraries).is(':checked')){
        totalCost += 100;
        $displayedCost.find(".apple").text(totalCost);
        $displayedCost.show();
    }else { 
        totalCost -= 100;
        $displayedCost.find(".apple").text(totalCost);
}
});

$($express).change(function(){
    if ($($express).is(':checked')){
        totalCost += 100;
        $displayedCost.find(".apple").text(totalCost);
        $displayedCost.show();
    } else { 
        totalCost -= 100;
        $displayedCost.find(".apple").text(totalCost);
    
}
});

$($node).change(function(){
    if ($($node).is(':checked')){
        totalCost += 100;
        $displayedCost.find(".apple").text(totalCost);
        $displayedCost.show();
    } else { 
        totalCost -= 100;
        $displayedCost.find(".apple").text(totalCost);
}
});

$($buildToolsWS).change(function(){
    if ($($buildToolsWS).is(':checked')){
        totalCost += 100;
        $displayedCost.find(".apple").text(totalCost);
        $displayedCost.show();
    }else { 
        totalCost -= 100;
        $displayedCost.find(".apple").text(totalCost);
}  
});

$($npmWS).change(function(){
    if ($($npmWS).is(':checked')){
        totalCost += 100;
        $displayedCost.find(".apple").text(totalCost);
        $displayedCost.show();
    }else { 
        totalCost -= 100;
        $displayedCost.find(".apple").text(totalCost);
}
});

const $creditCard = $("#payment option:eq(1)");
const $payPal = $("#payment option:eq(2)");
const $bitCoin = $("#payment option:eq(3)");
const $ccInfo = $(".credit-card");
const $ppInfo = $("p:eq(0)");
const $bcInfo = $("p:eq(1)");

$("#payment option:eq(0)").hide();
$creditCard.attr("selected", true);
$ppInfo.hide();
$bcInfo.hide();

$("#payment").change(function(){
    if($("#payment").val()==="paypal"){
        $ppInfo.show();
       $ccInfo.hide();
       $bcInfo.hide()
    }
});

$("#payment").change(function(){
    if($("#payment").val()==="bitcoin"){
        $ppInfo.hide();
        $bcInfo.show();
       $ccInfo.hide();
    }
});

$("#payment").change(function(){
    if($("#payment").val()==="credit card"){
        $ppInfo.hide();
        $bcInfo.hide();
       $ccInfo.show();
    }
});

//The form element:
//<form action = "index.html" method = "post"></form>
//<h1>Sign Up</h1>
//<input type = "text" id = "name" name = "user_name">
//<input type = "email" id="mail" name = "user_email">
//<textarea> id = "bio" name="user_bio"</textarea>
//<button type = "submit">Sign Up</button>
//<label for="job">Job role:</label>
//<select id="job" name="user_job"></select>
//<option value="frontend_developer">Front-End Developer</option>