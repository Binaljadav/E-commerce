import http from '../utils/http-url';
import APIURL from '../utils/common_var';

export default class CompanyService {
    static getCompany() {
        return http.get(APIURL.COMPANY);
    }

    static companySave(data) {
        return http.post(APIURL.COMPANY_SAVE, data);
    }

    static deleteCompany(id) {
        return http.get(APIURL.COMPANY_DELETE + id);
    }

    static updateCompany(data) {
        return http.post(APIURL.COMPANY_UPDATE, data);
    }

    static editCompany(id) {
        return http.get(APIURL.COMPANY_EDIT + id);
    }
}