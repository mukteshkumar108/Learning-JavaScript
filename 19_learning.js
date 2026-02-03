function orderFood(food) {
    console.log("Order placed for:", food);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenOpen = true;

            if (kitchenOpen) {
                resolve(`🍔 ${food} is ready`);
            } else {
                reject("❌ Kitchen closed");
            }
        }, 2000);
    });
}

orderFood("Burger")
    .then((result) => {
        console.log(result);
        return "Delivery partner assigned 🚴";
    })
    .then((status) => {
        console.log(status);
        return "Food delivered 🏠";
    })
    .then((finalMsg) => {
        console.log(finalMsg);
    })
    .catch((error) => {
        console.log(error);
    });
