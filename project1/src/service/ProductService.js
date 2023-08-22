import http from '../utils/http-url';
import APIURL from '../utils/common_var';

export default class Product {
    static getProduct() {
        return http.get(APIURL.PRODUCT);
    }

    static saveProduct(data) {
        return http.post(APIURL.PRODUCT_SAVE, data);
    }

    static deleteProduct(id) {
        return http.get(APIURL.PRODUCT_DELETE + id);
    }

    static updateProduct(data) {
        return http.post(APIURL.PRODUCT_UPDATE, data);
    }

    static editProduct(id) {
        return http.get(APIURL.PRODUCT_EDIT + id);
    }
}