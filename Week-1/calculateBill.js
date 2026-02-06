function calculateBill() {
    let totalAmount = 0;

    totalAmount += 500;
    totalAmount += 1200;
    totalAmount -= 200;

    let gst = totalAmount * 0.18;
    let finalBill = totalAmount + gst;

    console.log("Final Bill Amount:", finalBill);
}

calculateBill();
