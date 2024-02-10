// functions/proxy.js
const fetch = require('node-fetch');

exports.handler = async function (event, context) {
    try {
        // Build the URL by appending the path from the original request
        const url = `https://app.netlify.com/sites/imaginative-centaur-0345d7${event.path}`;
        
        // Make a request to the specified URL
        const response = await fetch(url);

        // Parse the response as JSON
        const data = await response.json();

        // Return the data as a response from the Netlify Function
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        // Handle errors and return a response
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' }),
        };
    }
};
