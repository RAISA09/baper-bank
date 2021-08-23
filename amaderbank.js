document.getElementById("btn").addEventListener('click', function () {
    // account number
    const typeAccountNumber = document.getElementById("account-type")
    const userAccountNumber = typeAccountNumber.value
    // password
    const typePassword = document.getElementById("password-type")
    const userPassword = typePassword.value

    if (userAccountNumber == "Abir Hasan" && userPassword == "Tania Hasan") {
        // console.log("correct accout")
        window.location.href = 'indiabank.html'
    }
    else {
        console.log("wrong account")
    }
})

