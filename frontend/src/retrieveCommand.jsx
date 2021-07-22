import axios from 'axios';

export const retrieveCommand = (value) => {
    var response = ''
    axios.get('/hackathon/ask?query=' + value)
    .then(resp => {
        console.log(resp.data);
        response = resp.data
    });
    return response
}