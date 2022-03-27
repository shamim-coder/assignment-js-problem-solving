const products = [
    {
        name: "iPhone 13 plus",
        price: 112000,
        keyword: "smart PHONES, mobile, PHONES",
    },
    {
        name: "lenovo laptop E480",
        price: 35000,
        keyword: "laptop, computer",
    },
    {
        name: "Samsung Galaxy Z Fold2",
        price: 135000,
        keyword: "smart PHONES, mobile, PHONES",
    },
    {
        name: "Apple watch",
        price: 18000,
        keyword: "smart watch, watch",
    },
    {
        name: "Xaiomi Smart watch",
        price: 6500,
        keyword: "smart watch, watch",
    },
    {
        name: "Google Home mini",
        price: 4500,
        keyword: "voice, google",
    },
    {
        name: "Rolex watch",
        price: 55000,
        keyword: "watch, brand watch",
    },
    {
        name: "Leon HaToT watch",
        price: 32000,
        keyword: "watch, brand watch",
    },
    {
        name: "del laptop",
        price: 38000,
        keyword: "laptop, computer",
    },
];

function searchProduct(products, searchText, priceRange) {
    let searchResult = [];
    for (const product of products) {
        if (
            product.price < priceRange &&
            (product.keyword.toLowerCase().includes(searchText.toLowerCase()) ||
                product.name.toLowerCase().includes(searchText.toLowerCase()))
        ) {
            searchResult.push(product);
        }
    }
    return searchResult;
}

console.log(searchProduct(products, "del", 50000));
