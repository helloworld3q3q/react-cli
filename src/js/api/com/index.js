import api from './api';
import { get, post} from '../../utlis/request' 

export const login = (params) => {
    return post(api.login)
}
