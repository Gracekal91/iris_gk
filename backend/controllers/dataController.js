const axios = require('axios');
const base_url = 'http://test.dev.irisns.com/';

const getDataContent = async (req, res) => {
    try{
        const response = await axios.get(`${base_url}`);
        const {data} = response.data;
        return res.status(200).send(data.data);
    }catch (e) {
        console.log('Error', e);
    }
}

const getPlotsItems = async (req, res) =>{
    const response = await axios.get(`${base_url}`);
    const data = response.data;
    return res.status(200).send(data?.data?.plots);
}

const getVariables = async(req, res) =>{
    const response = await axios.get(`${base_url}`);
    const data = response.data;
    return res.status(200).send(data?.data?.variables);
}

module.exports = {
    getDataContent,
    getPlotsItems,
    getVariables
}