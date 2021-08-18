
//case item increase and decrease
document.getElementById('case-plus').addEventListener('click', function () {
    inputOperation('case', true, 59);
})

document.getElementById('case-minus').addEventListener('click', function () {
    inputOperation('case', false, 59);
});
//phone item increse and decrease

document.getElementById('phone-plus').addEventListener('click', function () {
    inputOperation('phone', true, 1219)
});
document.getElementById('phone-minus').addEventListener('click', function () {
    inputOperation('phone', false, 1219)
})

//common function for phone item and case item

function inputOperation(product, isIncrement, price) {
    const prouctInput = document.getElementById(product + '-input')
    let productNumber = parseFloat(prouctInput.value);
    if (isIncrement == true) {
        productNumber = productNumber + 1;
    }
    else if (productNumber > 0) {
        productNumber = productNumber - 1
    }
    prouctInput.value = productNumber;
    // console.log(productNumber);
    const totalPrice = document.getElementById(product + '-total')
    totalPrice.innerText = productNumber * price;
    totalCalculation();

}

//total calculation function & tax calcualtion mehtod

function inputItem(type) {
    const inputvalue = document.getElementById(type + '-input');
    const getInput = parseFloat(inputvalue.value);
    // console.log(getInput);
    return getInput;
}

function totalCalculation() {
    const totalPhonePrice = inputItem('phone') * 1219;
    console.log(totalPhonePrice);
    const totalCasePrice = inputItem('case') * 59;

    const subTotal = totalPhonePrice + totalCasePrice;
    const addSubTotal = document.getElementById('sub-total');
    addSubTotal.innerText = subTotal;

    const taxtField = document.getElementById('tax-total');
    const tax = subTotal / 10
    taxtField.innerText = tax;

    const totalField = document.getElementById('price-total');
    totalField.innerText = tax + subTotal;

}