import axios from "axios";
import { routes } from "../Helpers/Routes";

export default class UsersService {
    static async getUsers(){
        const response = await axios.get(routes.apiUrl + routes.users)
                                    .catch(function (error) {
                                        console.log(error);
                                    });
        return response;    
    }

    static async getUserById(id) {
        const response = await axios.get(routes.apiUrl + routes.users + `/${id}`)
                                    .catch(function (error) {
                                        console.log(error);
                                    });
        return response;  
    }

    static async addUser(userModel) {
        const response = {
            data: null,
            errors: []
        }

        await axios.post(routes.apiUrl + routes.users, userModel, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => response.data = res.data)
        .catch(error => response.errors.push(error.response.data.message));
        
        return response;
    }

    static async authenticate(authRequest) {
        const response = {
            data: null,
            errors: []
        }

        await axios.post(routes.apiUrl + routes.users + '/Authenticate', authRequest, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => response.data = res.data)
        .catch(error => response.errors.push(error.response.data.message));

        return response;
    }

    static async updateUser() {

    }

    static async deleteUser() {

    }
}