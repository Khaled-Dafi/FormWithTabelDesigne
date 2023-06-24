function validateForm() {
            var inputs = document.getElementsByTagName("text");
            var emptyInputs = [];

            for (var i = 0; i < inputs.length; i++) {
                if (inputs[i].hasAttribute("required") && inputs[i].value === "") {
                    emptyInputs.push(inputs[i].getAttribute("placeholder"));
                }
            }

            if (emptyInputs.length > 0) {
                var message = "Please fill in the following fields:\n" + emptyInputs.join("\n");
                alert(message);
                return false;
            }

            return true;
        }

        function resetForm() {
            document.getElementById("registrationForm").reset();
        }