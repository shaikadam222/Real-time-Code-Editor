function postcode() {
    const code = document.getElementById('code').value;
    const input = document.getElementById('input').value;

    fetch('/.netlify/functions/proxy/some/path', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, input }),
    })
    .then((resp) => {
        // Check if the response is JSON
        const contentType = resp.headers.get('content-type');
        
        if (contentType && contentType.includes('application/json')) {
            return resp.json();
        } else {
            return resp.text(); // Treat non-JSON responses as plain text
        }
    })
    .then((data) => {
        // Now `data` can be either an object (if it was JSON) or plain text
        if (typeof data === 'object') {
            // Handle JSON response
            document.getElementById('output').innerText = data.stdout;
            console.log('Output from backend:', data.stdout);
            console.log('Error from backend:', data.stderr);
        } else {
            // Handle plain text response
            document.getElementById('output').innerText = data;
            console.log('Output from backend:', data);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
    
}
