async function getProduct(productId) {
    const apiUrl = `https://fakestoreapi.com/products/${productId}`;

    const response = await fetch(apiUrl);
    const responseJson = await response.json();

    return responseJson;
}

module.exports = getProduct;
