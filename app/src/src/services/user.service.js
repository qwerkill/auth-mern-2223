import instance from "./api.service";

const update = async (id, data) => {
    const response = await instance.put(`/users/${id}`, data);
    return response.data;
    }

const UserService = {
    update
};

export default UserService;