import {kitData} from '../data/KITS_SHIPPING_DATA';
import axios from 'axios';

const kitDataApi = 'http://localhost:3001/kit_data'

export const getKitInfo = async() => {
    return axios.get(kitDataApi).then((res) => {
        const { data } = res || {};
        return data;
    });
}

export const getKitInfoWithID = async(searchID) => {
    return axios.get(`${kitDataApi}?label_id=${searchID}`).then((res) => {
        const {data} = res || {};
        return data;
    })
}

export default {getKitInfo, getKitInfoWithID};