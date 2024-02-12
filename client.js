function postcode() {
    const code = document.getElementById('code').value;
    const input = document.getElementById('input').value;

<<<<<<< HEAD
    fetch('https://coders-iny9.onrender.com', {
=======
    // Get the current URL and append the path to the serverless function
    const backendUrl = "https://main--spectacular-sopapillas-b488e2.netlify.app/.netlify/functions/compileCpp";

    fetch(backendUrl, {
>>>>>>> bbc2ecdb640916db13b4eea992a468cf85e9483e
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, input }),
    })
        .then((resp) => {
            resp.text().then((data) => {
                document.getElementById('output').innerText = data.stdout;
                console.log('Output from backend:', data.stdout);
                console.log('Error from backend:', data.stderr);
            });
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
