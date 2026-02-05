// 1. Modal Logic
window.toggleModal = function() {
    let modal = document.getElementById('loginModal');
    modal.style.display = (modal.style.display === 'flex') ? 'none' : 'flex';
}

// 2. WhatsApp Logic
window.waBooking = function(item) {
    let phone = "919876543210"; // 🚩 Client ka number yahan
    let url = `https://wa.me/${phone}?text=Mujhe ${item} lena hai`;
    window.open(url);
}

// 3. Simple Payment Alert (Mockup)
window.startPay = function(amt) {
    alert("Redirecting to Secure Payment Gateway for ₹" + amt);
    // Yahan Razorpay API integrate hogi
}
