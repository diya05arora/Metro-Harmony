document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        if (!validateForm()) {
            event.preventDefault();
        } else if ( validateForm == true){
            window.location.href = 'seat.html';
        }
    });

    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const age = document.getElementById('age').value;
        const ailment = document.getElementById('ailment').value.trim();

        if (name === '' || age === '' || ailment === '') {
            alert('Please fill in all required fields.');
            return false;
        }

        return true;
    }
});
