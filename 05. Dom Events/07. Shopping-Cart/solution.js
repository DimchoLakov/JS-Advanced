function solve() {
    let addButtons = Array.from(document.querySelectorAll('.add-product'));
    addButtons.forEach(button => {
        button.addEventListener('click', addProduct);
    });

    let textarea = document.querySelector('textarea');

    let basket = {};

    function addProduct(event) {
        event.preventDefault();

        let productTitleDiv = this.parentNode.parentNode.querySelector('.product-title');
        let productPriceDiv = this.parentNode.parentNode.querySelector('.product-line-price');

        let productTitle = productTitleDiv.textContent.trim();
        let productPrice = Number(productPriceDiv.textContent.trim());

        if (!basket.hasOwnProperty(productTitle)) {
            basket[[productTitle]] = productPrice;
        } else {
            basket[[productTitle]] += productPrice;
        }

        textarea.value += `Added ${productTitle} for ${productPrice.toFixed(2)} to the cart.\n`;
    }

    let checkoutButton = document.querySelector('.checkout');
    checkoutButton.addEventListener('click', checkout);

    function checkout(event) {
        event.preventDefault();

        addButtons.forEach(button => {
            button.removeEventListener('click', addProduct);
            button.disabled = true;
        });

        let products = Object.keys(basket).join(', ');
        let totalPrice = Object.values(basket).reduce((acc, c) => acc + c, 0);

        textarea.value += `You bought ${products} for ${totalPrice.toFixed(2)}.`;

        this.removeEventListener('click', checkout);
    }
}