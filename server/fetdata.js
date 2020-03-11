const axios = require('axios');
const url = 'https://api.darksky.net/forecast/PUT_YOUR_API_KEY_HERE/43.7695,11.2558';

const fetData = async () => {
    return await axios.get(url);
}

module.exports = fetData;