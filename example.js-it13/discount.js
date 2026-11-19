let purchase = 30000;
let discount = 0;
if (purchase < 5000) {
    discount = 0;
}
else if (purchase > 50000) {
    discount = 30;
}
else if (purchase > 25000) {
    discount = 20;
}
else if (purchase > 10000) {
    discount = 15;
}
else if (purchase > 5000) {
    discount = 10;
}
let discountAmount = (purchase * discount) / 100;
let finalAmount = purchase - discountAmount;
console.log("Purchase Amount: " + purchase);
console.log("Discount: " + discount + "%");
console.log("Discount Amount: " + discountAmount);
console.log("Final Amount: " + finalAmount);
