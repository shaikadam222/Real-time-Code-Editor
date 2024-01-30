function postcode() {
    const code = document.getElementById('code').value;
    fetch('http://localhost:3000/code', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
    })
    .then(response => response.text())
    .then(data => {
        console.log('Response from backend:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}