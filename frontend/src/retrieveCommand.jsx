import axios from 'axios';

export const retrieveCommand = (value) => {
    axios.get('/hackathon/ask?query=' + value)
    .then(resp => {
        console.log(resp.data);
    });
}