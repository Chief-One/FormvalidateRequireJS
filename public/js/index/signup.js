require(["validator"], function() {
    $(document).ready(function() {
        $("#registrationForm").formValidation({
            icon: {
                valid: "ion-ios-checkmark",
                invalid: "ion-ios-close",
                validating: "ion-load-c"
            },
            fields: {
                email: {
                    validators: {
                        remote: {
                            type: "POST",
                            url: "http://localhost:8080",
                            message: "The username is not available",
                            delay: 200
                        }
                    }
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: "Password is required"
                        }
                    }
                }
            }
        })
            .on('success.form.fv', function(e) {

                // Prevent form submission
                e.preventDefault();

                // Reset the message element when the form is valid
                $('#messages').html('');

                // Some instances you can use are
                var $form = $(e.target),        // The form instance
                    fv = $(e.target).data('formValidation'); // FormValidation instance

                // Use Ajax to submit form data
                $.ajax({
                    url: "http://localhost:8080",
                    type: 'POST',
                    data: $form.serialize(),
                    success: function(result) {
                        console.log(result);

                        fv.resetForm();
                        $form.first()
                            .reset();
                            
                        $('#registrationForm input')[0].focus();

                        $('<span/>')
                            .html("Ohhhhhhhh snaaaaaaap boi!!!!")
                            .appendTo('#messages');

                    }
                });
            });
    });
});