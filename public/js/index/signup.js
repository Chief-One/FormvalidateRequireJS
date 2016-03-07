require(["validator"], function () {
    $(document).ready(function () {
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
        });
    });
});