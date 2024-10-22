# ecommerce-website
Sustainable Shopping Platform is an eco-friendly e-commerce website that allows users to browse and purchase sustainable products while earning rewards for their purchases.

(html)
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sustainable Shopping Platform</title>
    <meta name="description" content="EcoShop - Your platform for eco-friendly and sustainable products. Shop now for a better planet.">
    <meta name="keywords" content="sustainable, eco-friendly, shopping, products, rewards, environment">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">EcoShop</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link active" href="#home">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="#products">Products</a></li>
                    <li class="nav-item"><a class="nav-link" href="#about">About Us</a></li>
                    <li class="nav-item"><a class="nav-link" href="#rewards">Rewards</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact">Contact Us</a></li>
                    <li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
                    <li class="nav-item"><a class="nav-link" href="cart.html">Cart</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Homepage Section -->
    <section id="home" class="text-center bg-success text-white py-5 hero-section">
        <h1>Welcome to EcoShop!</h1>
        <p>Your platform for eco-friendly and sustainable products</p>
        <a href="#products" class="btn btn-light mt-3">Explore Products</a>
        <div class="alert alert-warning mt-3" role="alert">
            Join our newsletter for exclusive discounts and eco-tips!
        </div>
    </section>

    <!-- Products Section -->
    <section id="products" class="container my-5">
        <h2 class="text-center mb-4">Featured Eco-Friendly Products</h2>
        <div class="row">
            <div class="col-md-4">
                <div class="card product-card shadow-sm">
                    <img src="https://img.freepik.com/premium-photo/beautiful-woman-holding-bottle-shampoo-conditioner-hair-product_1218867-175334.jpg?w=900" class="card-img-top" alt="Eco-Friendly Shampoo">
                    <div class="card-body">
                        <h5 class="card-title">Eco-Friendly Shampoo</h5>
                        <p class="card-text">Carbon Footprint: 5g CO2</p>
                        <button class="btn btn-primary" onclick="addToCart('Eco-Friendly Shampoo', 5)">Add to Cart</button>
                        <a href="shampoo.html" class="btn btn-success">View Details</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card product-card shadow-sm">
                    <img src="https://img.freepik.com/free-photo/green-eco-friendly-household-cleaning-product_23-2148460757.jpg" class="card-img-top" alt="Eco-Friendly Cleaner">
                    <div class="card-body">
                        <h5 class="card-title">Eco-Friendly Cleaner</h5>
                        <p class="card-text">Carbon Footprint: 3g CO2</p>
                        <button class="btn btn-primary" onclick="addToCart('Eco-Friendly Cleaner', 3)">Add to Cart</button>
                        <a href="cleaner.html" class="btn btn-success">View Details</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card product-card shadow-sm">
                    <img src="https://img.freepik.com/free-photo/reusable-beeswax-food-wrap-eco-friendly-bag_23-2148953404.jpg" class="card-img-top" alt="Beeswax Food Wraps">
                    <div class="card-body">
                        <h5 class="card-title">Beeswax Food Wraps</h5>
                        <p class="card-text">Carbon Footprint: 1g CO2</p>
                        <button class="btn btn-primary" onclick="addToCart('Beeswax Food Wraps', 1)">Add to Cart</button>
                        <a href="wraps.html" class="btn btn-success">View Details</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="container my-5">
        <h2 class="text-center">What Our Customers Say</h2>
        <div class="row">
            <div class="col-md-4">
                <blockquote class="blockquote text-center">
                    <p class="mb-0">"I love the eco-friendly products! They work great and I'm helping the planet!"</p>
                    <footer class="blockquote-footer">Sarah H.</footer>
                </blockquote>
            </div>
            <div class="col-md-4">
                <blockquote class="blockquote text-center">
                    <p class="mb-0">"The rewards program is fantastic! I save so much on my purchases!"</p>
                    <footer class="blockquote-footer">John D.</footer>
                </blockquote>
            </div>
            <div class="col-md-4">
                <blockquote class="blockquote text-center">
                    <p class="mb-0">"A wonderful shopping experience. I will definitely return!"</p>
                    <footer class="blockquote-footer">Emily R.</footer>
                </blockquote>
            </div>
        </div>
    </section>

    <!-- Rewards Program Section -->
    <section id="rewards" class="container my-5">
        <h2 class="text-center">EcoShop Rewards Program</h2>
        <p class="text-center">Earn rewards every time you make a sustainable purchase! Points can be redeemed for discounts on future orders.</p>
        <ul class="text-center">
            <li>Get 10 points for every eco-friendly purchase</li>
            <li>Earn discounts for using recyclable packaging</li>
            <li>Redeem points for product discounts</li>
        </ul>
    </section>

    <!-- About Us Section -->
    <section id="about" class="container my-5">
        <h2 class="text-center">About Us</h2>
        <p class="text-center">We are committed to promoting sustainability by offering eco-friendly products and helping people reduce their carbon footprint. Together, we can make a positive impact on the planet.</p>
    </section>

    <!-- Contact Us Section -->
    <section id="contact" class="container my-5">
        <h2 class="text-center">Contact Us</h2>
        <form class="mx-auto" style="max-width: 600px;">
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" placeholder="Enter your name" required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Enter your email" required>
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" id="message" rows="3" placeholder="Enter your message" required></textarea>
            </div>
            <button type="submit" class="btn btn-success w-100">Send Message</button>
        </form>
    </section>

    <!-- Footer -->
    <footer class="bg-light text-center py-4">
        <p>&copy; 2024 EcoShop - Sustainable Shopping for a Better Future</p>
        <div>
            <a href="#" class="me-3">Facebook</a>
            <a href="#" class="me-3">Twitter</a>
            <a href="#" class="me-3">Instagram</a>
        </div>
    </footer>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="script.js"></script>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eco-Friendly Cleaner</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">EcoShop</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="cart.html">Cart</a></li>
                    <li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Product Detail Section -->
    <section class="container my-5">
        <h2 class="text-center">Eco-Friendly Cleaner</h2>
        <div class="row">
            <div class="col-md-6">
                <img src="https://img.freepik.com/free-photo/green-eco-friendly-household-cleaning-product_23-2148460757.jpg" class="img-fluid" alt="Eco-Friendly Cleaner">
            </div>
            <div class="col-md-6">
                <p><strong>Carbon Footprint:</strong> 3g CO2</p>
                <p>This eco-friendly cleaner is effective and made from natural ingredients, perfect for a sustainable home.</p>
                
                <h4>Select Size:</h4>
                <div class="form-group">
                    <select id="cleanerSize" class="form-select">
                        <option value="8">250ml - $8</option>
                        <option value="12">500ml - $12</option>
                        <option value="20">1L - $20</option>
                    </select>
                </div>
                <button class="btn btn-success mt-3" onclick="addToCart('Eco-Friendly Cleaner', document.getElementById('cleanerSize').value)">Add to Cart</button>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-light text-center py-4">
        <p>&copy; 2024 EcoShop - Sustainable Shopping for a Better Future</p>
    </footer>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="script.js"></script> <!-- Link to your JavaScript file -->
</body>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eco-Friendly Shampoo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">EcoShop</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="cart.html">Cart</a></li>
                    <li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Product Detail Section -->
    <section class="container my-5">
        <h2 class="text-center">Eco-Friendly Shampoo</h2>
        <div class="row">
            <div class="col-md-6">
                <img src="https://img.freepik.com/free-photo/closeup-portrait-joyful-girl-posing-without-makeup-white-wall-woman-chose-which-shampoo-is-best-use_197531-13865.jpg?t=st=1729516475~exp=1729517075~hmac=1b39ec0ca921a27d5e0c15dc6884c1ec4df4fb6a1b8da03cd63332b80e67c1aa" class="img-fluid" alt="Eco-Friendly Shampoo">
            </div>
            <div class="col-md-6">
                <p><strong>Carbon Footprint:</strong> 5g CO2</p>
                <p>This eco-friendly shampoo is made with all-natural ingredients and comes in recyclable packaging.</p>
                
                <h4>Select Size:</h4>
                <div class="form-group">
                    <select id="shampooSize" class="form-select">
                        <option value="5">250ml - $5</option>
                        <option value="10">500ml - $10</option>
                        <option value="15">1L - $15</option>
                    </select>
                </div>
                <button class="btn btn-success mt-3" onclick="addToCart('Eco-Friendly Shampoo', document.getElementById('shampooSize').value)">Add to Cart</button>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-light text-center py-4">
        <p>&copy; 2024 EcoShop - Sustainable Shopping for a Better Future</p>
    </footer>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="script.js"></script> <!-- Link to your JavaScript file -->
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Beeswax Food Wraps</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">EcoShop</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="cart.html">Cart</a></li>
                    <li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Product Detail Section -->
    <section class="container my-5">
        <h2 class="text-center">Beeswax Food Wraps</h2>
        <div class="row">
            <div class="col-md-6">
                <img src="https://img.freepik.com/free-photo/reusable-beeswax-food-wrap-eco-friendly-bag_23-2148953404.jpg" class="img-fluid" alt="Beeswax Food Wraps">
            </div>
            <div class="col-md-6">
                <p><strong>Carbon Footprint:</strong> 1g CO2</p>
                <p>These reusable beeswax food wraps are perfect for keeping your food fresh while reducing plastic waste.</p>
                
                <h4>Select Size:</h4>
                <div class="form-group">
                    <select id="wrapSize" class="form-select">
                        <option value="10">Small - $10</option>
                        <option value="15">Medium - $15</option>
                        <option value="20">Large - $20</option>
                    </select>
                </div>
                <button class="btn btn-success mt-3" onclick="addToCart('Beeswax Food Wraps', document.getElementById('wrapSize').value)">Add to Cart</button>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-light text-center py-4">
        <p>&copy; 2024 EcoShop - Sustainable Shopping for a Better Future</p>
    </footer>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="script.js"></script> <!-- Link to your JavaScript file -->
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Cart - EcoShop</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

    <!-- Cart Section -->
    <section class="container my-5">
        <h2 class="text-center mb-4">Your Cart</h2>
        <div id="cartItems" class="mb-4">
            <!-- Products added to the cart will be dynamically displayed here -->
        </div>
        <h4 class="text-end">Total Amount: <span id="totalAmount">$0</span></h4>
        <div class="text-center mt-3">
            <button class="btn btn-primary" onclick="checkout()">Proceed to Checkout</button>
        </div>
    </section>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="script.js"></script>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - EcoShop</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

    <!-- Login Section -->
    <section class="d-flex align-items-center justify-content-center vh-100">
        <div class="card p-5 shadow-lg" style="max-width: 400px; width: 100%;">
            <h2 class="text-center mb-4">Login</h2>
            <form id="loginForm">
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter your email" required>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Enter your password" required>
                </div>
                <button type="submit" class="btn btn-success w-100">Login</button>
            </form>
        </div>
    </section>

    <!-- JavaScript for login -->
    <script>
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Basic login logic for demonstration purposes
            if (email === "user@ecoshop.com" && password === "password123") {
                alert('Login successful!');
                window.location.href = "index.html"; // Redirect to homepage
            } else {
                alert('Invalid login credentials');
            }
        });
    </script>
</body>
</html>


/* Global Styles */
body {
    font-family: Arial, sans-serif;
    background-color: #f7f7f7;
}

/* Hero Section */
.hero-section {
    background-image: url('https://img.freepik.com/free-photo/young-beautiful-woman-doing-yoga-nature_1139-921.jpg?size=626&ext=jpg');
    background-color: #4CAF50; /* Fallback color */
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 56px; /* Fixed navbar height to prevent overlap */
    position: relative;
}

/* Navbar */
.navbar {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Product Card */
.product-card {
    transition: transform 0.3s, box-shadow 0.3s;
    border: none; /* Remove default border */
    border-radius: 10px; /* Add rounded corners */
    overflow: hidden; /* Ensure images stay within the card */
}

.product-card:hover {
    transform: translateY(-5px); /* Lift effect on hover */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Button Styles */
.btn {
    transition: background-color 0.3s, color 0.3s;
    border-radius: 5px; /* Add rounded corners to buttons */
}

/* Add to Cart Button */
.btn-primary {
    background-color: #007bff; /* Bootstrap primary color */
}

.btn-primary:hover {
    background-color: #0056b3; /* Darker shade on hover */
}

/* Buy Now Button */
.btn-success {
    background-color: #28a745; /* Bootstrap success color */
}

.btn-success:hover {
    background-color: #218838; /* Darker shade on hover */
}

/* Footer */
footer {
    background-color: #f1f1f1;
    padding: 20px;
    color: #333;
    font-size: 14px;
}

/* Testimonials Section */
blockquote {
    background: #e9ecef; /* Light grey background for testimonials */
    border-left: 5px solid #28a745; /* Green left border */
    padding: 10px 20px; /* Padding around the text */
    margin: 20px; /* Margin around the block */
    border-radius: 8px; /* Rounded corners */
}

/* Responsive Design */
@media (max-width: 768px) {
    .hero-section {
        height: 60vh; /* Adjust height for smaller screens */
    }

    .product-card {
        margin-bottom: 20px; /* Add space between cards on small screens */
    }
}

/* Contact Form */
form {
    background-color: #ffffff; /* White background for form */
    padding: 20px;
    border-radius: 8px; /* Rounded corners for form */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Alerts */
.alert {
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
}

/* Cart Details Modal */
.cart-modal {
    display: none; /* Hide by default */
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    padding-top: 60px; /* Location of the box */
}

.cart-modal-content {
    background-color: #fefefe;
    margin: 5% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
}


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

// Checkout button functionality 
document.getElementById('checkout-btn').addEventListener('click', () => {
    alert('Proceeding to checkout...');
});


