import http from '../utils/http-url';
import APIURL from '../utils/common_var';

export default class SubCategoryService {
    static getSubCategory() {
        return http.get(APIURL.SUBCATEGORY);
    }

    static subCategorySave(data) {
        return http.post(APIURL.SUBCATEGORY_SAVE, data);
    }

    static deleteSubCategory(id) {
        return http.get(APIURL.SUBCATEGORY_DELETE + id);
    }

    static updateSubCategory(data) {
        return http.post(APIURL.SUBCATEGORY_UPDATE, data);
    }

    static editSubCategory(id) {
        return http.get(APIURL.SUBCATEGORY_EDIT + id);
    }
}