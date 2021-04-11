import axios from 'axios';

const Instance = axios.create({baseURL: "http://localhost:8080/api/v2"});

export default Instance;
