let cartCount = 0;
let totalAmount = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-product-name');
        const productPrice = parseFloat(button.getAttribute('data-product-price'));

        // Update cart count and total amount
        cartCount++;
        totalAmount += productPrice;

        // Update the cart display
        document.getElementById('cart-count').innerText = cartCount;
        document.getElementById('total-amount').innerText = totalAmount.toFixed(2);
        
        // Update cart items display
        const cartItems = document.getElementById('cart-items');
        cartItems.innerHTML += `<p>${productName} - $${productPrice.toFixed(2)}</p>`;
    });
});

// Checkout button functionality (add more logic as needed)
document.getElementById('checkout-btn').addEventListener('click', () => {
    alert('Proceeding to checkout...');
    // Here you can redirect to a payment page or show a payment form
});
