function calculatedTotalPrice(cart,discount=0)
{
    let totalPrice =0;
    cart.forEach(element => {
        totalPrice += element.price*element.quantity;
    });

    let discountAmount = totalPrice*discount/100;
    let discountedPrice = totalPrice - discountAmount;
    return{totalPrice,discountAmount,discountedPrice};
}

module.exports = {calculatedTotalPrice};