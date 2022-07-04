import Api, { USERS } from '../../Services/Configs/Api';

export const getUsersApi = async () => {
    try {
        const request = await Api.get(USERS);
        console.log('UsersScreen.action@getUsersApi', request);
        return request;
    } catch (error) {
        console.log('UsersScreen.action@getUsersApi', error);
    }
};
