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