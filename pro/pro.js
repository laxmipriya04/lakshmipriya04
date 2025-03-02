document.addEventListener('DOMContentLoaded', function () {
    const donarForm = document.getElementById('donar-form');
    const donateForm = document.getElementById('donate-form');
    const recipientForm = document.getElementById('recipient-form');
    const donarList = document.getElementById('donar-list');
    const donateList = document.getElementById('donate-list');
    const recipientList = document.getElementById('recipient-list');
    const profileDetails = document.getElementById('profile-details');

    let donars = [];
    let donations = [];
    let recipients = [];

    donarForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const donar = {
            name: document.getElementById('donar-name').value,
            restaurant: document.getElementById('restaurant-name').value,
            address: document.getElementById('address').value,
            contact: document.getElementById('contact').value
        };
        donars.push(donar);
        updateDonarList();
        donarForm.reset();
    });

    donateForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const donation = {
            foodName: document.getElementById('food-name').value,
            quantity: document.getElementById('food-quantity').value,
            image: document.getElementById('food-image').value,
            status: document.getElementById('food-status').value
        };
        donations.push(donation);
        updateDonateList();
        donateForm.reset();
    });

    recipientForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const recipient = {
            name: document.getElementById('recipient-name').value,
            organisation: document.getElementById('organisation-name').value,
            address: document.getElementById('recipient-address').value,
            contact: document.getElementById('recipient-contact').value
        };
        recipients.push(recipient);
        updateRecipientList();
        recipientForm.reset();
    });

    function updateDonarList() {
        donarList.innerHTML = '';
        donars.forEach(donar => {
            const div = document.createElement('div');
            div.innerHTML = `<p><strong>Name:</strong> ${donar.name}</p>
                             <p><strong>Restaurant:</strong> ${donar.restaurant}</p>
                             <p><strong>Address:</strong> ${donar.address}</p>
                             <p><strong>Contact:</strong> ${donar.contact}</p>`;
            donarList.appendChild(div);
        });
    }

    function updateDonateList() {
        donateList.innerHTML = '';
        donations.forEach(donation => {
            const div = document.createElement('div');
            div.innerHTML = `<p><strong>Food Name:</strong> ${donation.foodName}</p>
                             <p><strong>Quantity:</strong> ${donation.quantity}</p>
                             <p><strong>Status:</strong> ${donation.status}</p>`;
            donateList.appendChild(div);
        });
    }

    function updateRecipientList() {
        recipientList.innerHTML = '';
        recipients.forEach(recipient => {
            const div = document.createElement('div');
            div.innerHTML = `<p><strong>Name:</strong> ${recipient.name}</p>
                             <p><strong>Organisation:</strong> ${recipient.organisation}</p>
                             <p><strong>Address:</strong> ${recipient.address}</p>
                             <p><strong>Contact:</strong> ${recipient.contact}</p>`;
            recipientList.appendChild(div);
        });
    }

    function updateProfileDetails() {
        // This function should be updated based on the logged-in user's role (donar or recipient)
        profileDetails.innerHTML = '<p>Profile details will be shown here based on the logged-in user.</p>';
    }

    // Initialize Google Map
    function initMap() {
        const map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });
    }

    // Load Google Maps API
    const script = document.createElement('script');
    script.src = https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap;
    script.async = true;
    document.head.appendChild(script);
});