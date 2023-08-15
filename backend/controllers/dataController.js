const axios = require('axios');
const base_url = 'http://test.dev.irisns.com/';

const getDataContent = async (req, res) => {
    try{
        const response = await axios.get(`${base_url}`);
        const {data} = response.data;
        const content = data?.data;

        //limit each row to 5 items
        const items = content.map(item => item.slice(0, 5));
        return res.status(200).send(items);
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
    const vars = data?.data?.variables.slice(0, 5);
    return res.status(200).send(vars);
}

module.exports = {
    getDataContent,
    getPlotsItems,
    getVariables
}