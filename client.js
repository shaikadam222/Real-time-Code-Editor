function postcode() {
    const code = document.getElementById('code').value;
    const input = document.getElementById('input').value;

    fetch('https://coders-iny9.onrender.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, input }),
    })
    .then((response) => {
        console.log(response.headers)
        if(!response.ok)
        {
            if(response.status === 500)
            {
                return response.text().then(data => {
        
                document.getElementById('error').innerText = data;
                })
            }
            else
            {
                console.log("server fail");
            }
        }

        try{
            return response.json().then(data => {
            
                document.getElementById('output').innerText = data.stdout;
                console.log('Output from backend:', data.stdout);
            })
        }catch (e)
        {
            console.log(e);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
