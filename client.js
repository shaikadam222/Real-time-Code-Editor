function postcode() {
    const code = document.getElementById('code').value;
    const input = document.getElementById('input').value;

<<<<<<< HEAD
<<<<<<< HEAD
    fetch('https://coders-iny9.onrender.com', {
=======
    // Get the current URL and append the path to the serverless function
    const backendUrl = "https://main--spectacular-sopapillas-b488e2.netlify.app/.netlify/functions/compileCpp";

    fetch(backendUrl, {
>>>>>>> bbc2ecdb640916db13b4eea992a468cf85e9483e
=======
    fetch('https://coders-iny9.onrender.com', {
>>>>>>> fd25fac3dd4d4e18b9c7bfeffc1f2cf69393a168
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, input }),
    })
    .then(response => response.json())
    .then(data => {
        // Display the output in the pre tag
        document.getElementById('output').innerText = data.stdout;

        console.log('Output from backend:', data.stdout);
        console.log('Error from backend:', data.stderr);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
