function dragMe() {
        $( ".contact" ).draggable();	//creates a custom function and runs the draggable() jquery ui function for .contact (the contact cards)
    };
$( document ).ready(function(){	// when document ready:
    $( '#first-name' ).focus();		// focuses on first text field
    $( '#submit-button' ).click(function(){		// when the submit button is clicked do the following:
        $( '.alert-container' ).html(''); // resets any alerts
        if ( $( '#first-name' ).val().length < 1 ) {	// checks if field is empty
            $( '#first-name' ).siblings( '.alert-container' ).html( '<p class="alert">Please provide the contact first name.</p>' );		// if not give this alert
        };

        if ( $( '#last-name' ).val().length < 1 ) {		// checks if field is empty
            $( '#last-name' ).siblings( '.alert-container' ).html( '<p class="alert">Please provide the contact last name.</p>' );		// if not give this alert
        };

        if ( $( '#email' ).val().length < 1 ) {		// checks if field is empty
            $( '#email' ).siblings( '.alert-container' ).html( '<p class="alert">Please provide an email address.</p>' );		// if not give this alert
        };

        if ( $( '#description' ).val().length < 1 ) {		// checks if field is empty
            $( '#description' ).siblings( '.alert-container' ).html( '<p class="alert">Please provide a contact description or custom note.</p>' );		// if not give this alert
        } else {
                $('#description').data("description-value", $('#description').val());		// stores the description text as a data value
                var descriptionText = '<div class="descript-info"><h2>' + $( '#description' ).data( "description-value" ) + '</h2>' + '<p class="take-me-back">Click here to return to the main contact card!</p></div>'	// create a new variable for contact description, formatting the html for that section
                var contactInfo = '<div class="contact"><i class="fa fa-close close"></i><div class="info"><h2>' + $( '#first-name' ).val() + ' ' + $( '#last-name' ).val() + '</h2><h6> email: ' + '<a href="mailto:' + $('#email').val() + '" alt="Email Contact">' + $( '#email' ).val() + '</a></h6>' + '<h4 class="descript-link">Click for Description</h4>' + '</div>' + descriptionText + '</div>'; // creates a new variable for the general contact info, formatting the html for that section and also calling the contact description content (this assembles all of our form info as two seperate divs to be manipulated independently).
                $( "#column-one-half-last" ).append( contactInfo ); // attaches contact information and description
                dragMe(); // runs dragMe function
                $( '.descript-info' ).hide(); // hides description by default
                $( 'input[type="text"], textarea' ).val( "" ); // resets form values
                $( '#first-name' ).focus(); // focuses back on first text field
                if ( $( '.contact' ).length < 2 ) { // if only 1 contact card, give the top alert
                    $( '#top-alert' ).append( '<p>Try dragging one of the notes around!</p>' ).children( 'p' ).hide( "drop", { direction: "up" }, 1800 );	// a;erts user to try dragging around element using jquery ui .hide() function and chaining
                }
                //$( '#drag-alert' ).hide( "drop", { direction: "down" }, "60000" );
            }; // end else statement
        return false; // prevents form from actually sending
    }); // end submit button click
    // begin .$(document)on() functions
    $( document ).on('click', '.close', function(){ // when the close button a note is clicked hide the contact card
        $( this ).parent( '.contact' ).hide();
        if ( $( '.contact' ).length < 2 ) { // if only 1 contact card, give the top alert
            $( '#top-alert' ).append( '<p>Try clicking the Show Hidden Cards button!</p>' ).children( 'p' ).hide( "drop", { direction: "up" }, 1800);
        }
    });
    $( document ).on('click', '#show-button', function(){
        $( '.contact' ).show();
        if ( $('.contact' ).length < 2 ) { // if only 1 contact card, give the top alert
            $( '#top-alert' ).append( '<p>All done!</p>' ).children( 'p' ).hide( "drop", { direction: "up" }, 1800);
        }
    });
    $( document ).on('click', '.descript-link', function(){ // when you click the description link, do the following
        $( this ).parent().siblings( ".descript-info" ).show(); // show description
        $( this ).parent( ".info" ).hide(); // hide contact information
    });
    $( document ).on('click', '.take-me-back', function(){  // when you click take me back, do the following:
        $( this ).parent( ".descript-info" ).hide(); // hide description
        $( this ).parent().siblings( ".info" ).show(); // show contact information
        if ( $( '.contact' ).length < 2 ) { // if only 1 contact card, give the top alert
            $( '#top-alert' ).append( '<p>Try closing one of the notes!</p>' ).children( 'p' ).hide( "drop", { direction: "up" }, 1800);
        }
    });
}); // end doc ready
