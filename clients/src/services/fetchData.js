import axios from 'axios';

export default function signalResponse() {
    return axios.get(`/traffic`).then((res) =>{
        return res;
    })
}