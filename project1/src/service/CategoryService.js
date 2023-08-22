import http from '../utils/http-url';
import APIURL from '../utils/common_var';

export default class CategoryService {
    static getCategory() {
        return http.get(APIURL.CATEGORIES);
    }

    static categorySave(data) {
        return http.post(APIURL.CATEGORY_CREATE, data);
    }

    static deleteCategory(id) {
        return http.get(APIURL.DELETE_CATEGORY + id);
    }

    static updateCategory(data) {
        return http.post(APIURL.UPDATE_CATEGORY, data);
    }

    static editCategory(id) {
        return http.get(APIURL.EDIT_CATEGORY + id);
    }
}