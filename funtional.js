function getInput(inputId) {
    const fieldInput = document.getElementById(inputId)
    const fieldText = fieldInput.value
    const field = parseFloat(fieldText)
    fieldInput.value = '';
    return field
}
function getInnerTextInput(inputId) {
    const fieldTag = document.getElementById(inputId)
    const fieldTagText = fieldTag.innerText
    const value = parseFloat(fieldTagText)

    return value
}

function getDepoWidTotal(inputId, amount) {
    const previousTotalValue = getInnerTextInput(inputId)
    const newTotalValue = previousTotalValue + amount;
    document.getElementById(inputId).innerText = newTotalValue
    return newTotalValue
}

function getTotalBalance(amount, isAdd) {
    const totalBalance = getInnerTextInput("total-balance")
    let total;
    if (isAdd == true) {
        total = totalBalance + amount;
    }
    else {
        total = totalBalance - amount;
    }
    document.getElementById("total-balance").innerText = total

}

document.getElementById("deposite-button").addEventListener('click', function () {
    const amount = getInput("deposite-type")

    if (amount > 0) {
        getDepoWidTotal("total-deposite", amount)
        getTotalBalance(amount, true)
    }
})
document.getElementById("withdrow-button").addEventListener('click', function () {
    const amount = getInput("withdrow-type")
    const balance = getInnerTextInput("total-balance")
    if (amount > 0 && amount <= balance) {
        getDepoWidTotal("total-withdrow", amount)
        getTotalBalance(amount, false)
    }
})