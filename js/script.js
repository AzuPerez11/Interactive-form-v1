//testing local changes to GitHub 

//Include a text field that will be revealed with "other" is selected
//HELP 1: This code block shows no errors but the text box doesn't display when 'Other' clicked
$('#other-title').hide();
$("#title").on('click', 'other', function(){
    $('#other-title').show();
});

//For the T-Shirt "Color" menu, only display the color options that match the design selected in the "Design" menu.



//If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."

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