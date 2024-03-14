document.getElementById("action-1").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Extract form data
    var formData = new FormData(event.target);
    var formObject = {};
    formData.forEach(function(value, key) {
        formObject[key] = value;
    });

    // Redirect to another page and pass form data as query parameters
    var queryString = Object.keys(formObject).map(key => key + '=' + encodeURIComponent(formObject[key])).join('&');
    window.location.href = "display_data.html?" + queryString;
});
