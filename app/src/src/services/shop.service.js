import instance from "./api.service";



const create = async (credantials) => {
    const response = await instance.post('/shops', credantials);
    return response.data;
}

const getAll = async () => {
    const response = await instance.get('/shops');
    return response.data;
}

const getOne = async (id) => {
    const response = await instance.get(`/shops/${id}`);
    return response.data;
}


const update = async (id, data) => {
    const response = await instance.put(`/shops/${id}`, data);
    return response.data;
}

const delate = async (id) => {
    const response = await instance.delete(`/shops/${id}`);
    return response.data;
}
  
const ShopService = {
    create,
    getAll,
    getOne,
    update,
    delate
};

export default ShopService;