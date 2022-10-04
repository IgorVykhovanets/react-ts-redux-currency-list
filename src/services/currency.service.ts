import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const currencyService = {
    getAll: () => axiosService.get(urls.nbu),
}