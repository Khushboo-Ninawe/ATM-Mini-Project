
        let balance = 1000;
        let pin = "1234";
        let selectedAccount = "savings";

        function authenticate(inputPin) {
            return inputPin === pin;
        }

        function balanceQuery() {
            const enteredPin = prompt("Enter PIN:");
            if (authenticate(enteredPin)) {
                document.getElementById("output").innerText = `Balance: $${balance}`;
            } else {
                document.getElementById("output").innerText = "Invalid PIN";
            }
        }

        function withdraw() {
            const enteredPin = prompt("Enter PIN:");
            if (authenticate(enteredPin)) {
                const amount = parseFloat(prompt("Enter amount to withdraw:"));
                if (!isNaN(amount) && amount > 0 && amount <= balance) {
                    balance -= amount;
                    document.getElementById("output").innerText = `Withdrawal successful. Remaining balance: $${balance}`;
                } else {
                    document.getElementById("output").innerText = "Invalid amount or insufficient balance.";
                }
            } else {
                document.getElementById("output").innerText = "Invalid PIN";
            }
        }

        function changePin() {
            const enteredPin = prompt("Enter current PIN:");
            if (authenticate(enteredPin)) {
                const newPin = prompt("Enter new PIN:");
                if (newPin.length === 4 && !isNaN(newPin)) {
                    pin = newPin;
                    document.getElementById("output").innerText = "PIN changed successfully.";
                } else {
                    document.getElementById("output").innerText = "Invalid new PIN. It must be 4 digits.";
                }
            } else {
                document.getElementById("output").innerText = "Invalid PIN";
            }
        }

        function miniStatement() {
            const enteredPin = prompt("Enter PIN:");
            if (authenticate(enteredPin)) {
                document.getElementById("output").innerText = `Mini statement: Last transaction on ${new Date()}`;
            } else {
                document.getElementById("output").innerText = "Invalid PIN";
            }
        }

        function selectAccount(accountType) {
            selectedAccount = accountType;
            document.getElementById("output").innerText = `Selected account: ${accountType.charAt(0).toUpperCase() + accountType.slice(1)}`;
        }

        function printReceipt() {
            const enteredPin = prompt("Enter PIN:");
            if (authenticate(enteredPin)) {
                document.getElementById("output").innerText = `Receipt printed for ${selectedAccount} account. Thank you!`;
            } else {
                document.getElementById("output").innerText = "Invalid PIN";
            }
        }
   