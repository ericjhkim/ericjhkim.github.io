function pricecalc() {
    var deadline, numpages, crypto, price;
    
    deadline = document.querySelector('input[name="delivery"]:checked').value
    numpages = document.getElementById('numpages').value
    // crypto = document.getElementById('cryptopay').checked

    if (numpages <= 1 && deadline == 5){
        price = 100
    } else if (numpages <= 1 && deadline == 48){
        price = 120
    } else if (numpages > 1 && deadline == 5){
        price = 100 + (numpages-1)*50
    } else if (numpages > 1 && deadline == 48){
        price = 120 + (numpages-1)*60
    } else{
        price = "Error"
    }

    // if (crypto){
    //     price *= 0.9
    // }

    // console.log(price)
    document.getElementById('priceresult').value = "CAD$ " + price
}
