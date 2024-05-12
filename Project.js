// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://priceline-com.p.rapidapi.com/cars/location/search',
//   params: {q: 'Seattle'},
//   headers: {
//     'X-RapidAPI-Key': 'b8948b8c80msha69a9d2d5b01e64p1cacf8jsna10da033d029',
//     'X-RapidAPI-Host': 'priceline-com.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
function expandPage(contentId) {
    var expandedContent = document.getElementById(contentId);
    if (expandedContent.style.display === "none") {
        expandedContent.style.display = "block";
    } else {
        expandedContent.style.display = "none";
    }
}
// Add event listener to the search input field
document.querySelector('input[type="text"]').addEventListener('input', function() {
    // Get the search query
    const query = this.value.toLowerCase();

    // Get all product cards
    const productCards = document.querySelectorAll('.product-card');

    // Loop through each product card
    productCards.forEach(card => {
        // Get the destination name in lowercase
        const destination = card.querySelector('h3').textContent.toLowerCase();

        // Show or hide the card based on whether the destination matches the search query
        if (destination.includes(query)) {
            card.style.display = 'inline-block';
        } else {
            card.style.display = 'none';
        }
    });
});
 // Add event listener to all "Book Now" buttons
 document.querySelectorAll('.book-now').forEach(button => {
    button.addEventListener('click', function() {
        window.location.href = 'Bookings.html';
    });
});

