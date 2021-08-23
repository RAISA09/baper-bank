function getNewDepositeAmount(inputId) {
    const fieldType = document.getElementById(inputId)
    const fieldAmountText = fieldType.value
    const fieldAmount = parseFloat(fieldAmountText)
    fieldType.value = '';
    return fieldAmount
}

function updateTotalField(totalFieldId, amount) {
    // debugger;
    const totalElement = document.getElementById(totalFieldId)
    const previousText = totalElement.innerText
    const newTotal = parseFloat(previousText)
    const newDepositeTotal = newTotal + amount;
    totalElement.innerText = newDepositeTotal;

}

function getCurrentBalance() {
    const totalBalance = document.getElementById("total-balance");
    const totalBalanceText = totalBalance.innerText
    const previousTotalBalance = parseFloat(totalBalanceText)
    return previousTotalBalance;
}

function updateBalance(amount, add) {
    const totalBalance = document.getElementById("total-balance");
    // const totalBalanceText = totalBalance.innerText
    // const previousTotalBalance = parseFloat(totalBalanceText)
    const previousTotalBalance = getCurrentBalance();
    if (add == true) {
        const newTotalBalance = previousTotalBalance + amount;
        totalBalance.innerText = newTotalBalance;
    }

    else {
        const newTotalBalance = previousTotalBalance - amount;
        totalBalance.innerText = newTotalBalance;

    }

}
// deposite

document.getElementById("deposite-button").addEventListener('click', function () {
    // const depositeType = document.getElementById("deposite-type")
    // const newDepositeAmountText = depositeType.value
    // const newDepositeAmount = parseFloat(newDepositeAmountText)


    // const totalElement = document.getElementById("total-deposite")
    // const previousText = totalElement.innerText
    // const newTotal = parseFloat(previousText)
    // const newDepositeTotal = newTotal + newDepositeAmount;
    // totalElement.innerText = newDepositeTotal;



    // // update balance
    // const totalBalance = document.getElementById("total-balance");
    // const totalBalanceText = totalBalance.innerText
    // const previousTotalBalance = parseFloat(totalBalanceText)
    // const newTotalBalance = previousTotalBalance + newDepositeAmount;
    // totalBalance.innerText = newTotalBalance;
    const newDepositeAmount = getNewDepositeAmount("deposite-type")
    if (newDepositeAmount > 0) {
        updateTotalField("total-deposite", newDepositeAmount)
        updateBalance(newDepositeAmount, true)
    }
})

// withdrow 
document.getElementById("withdrow-button").addEventListener('click', function () {
    // const withdrowType = document.getElementById("withdrow-type")
    // const newWithdrowAmountText = withdrowType.value
    // const newWithdrowAmount = parseFloat(newWithdrowAmountText)

    // const totalWithdrow = document.getElementById("total-withdrow")
    // const previousWithdrowText = totalWithdrow.innerText
    // const previousWithdrow = parseFloat(previousWithdrowText)
    // const newWithdrowTotal = previousWithdrow + newWithdrowAmount;
    // totalWithdrow.innerText = newWithdrowTotal;



    // update balance
    // const totalBalance = document.getElementById("total-balance");
    // const totalBalanceText = totalBalance.innerText
    // const previousTotalBalance = parseFloat(totalBalanceText)
    // const newTotalBalance = previousTotalBalance - newWithdrowAmount;
    // totalBalance.innerText = newTotalBalance;
    const newWithdrowAmount = getNewDepositeAmount("withdrow-type")
    const currentBalance = getCurrentBalance()
    if (newWithdrowAmount > 0 && newWithdrowAmount < currentBalance) {
        updateTotalField("total-withdrow", newWithdrowAmount)
        updateBalance(newWithdrowAmount, false)
    }
    if (newWithdrowAmount > currentBalance) {
        console.log("you nou withdrow money for your current balance upper")
    }
})
