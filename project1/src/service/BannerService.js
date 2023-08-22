import http from '../utils/http-url';
import APIURL from '../utils/common_var';

export default class BannerService {
    static getBanner() {
        return http.get(APIURL.BANNER);
    }

    static saveBanner(data) {
        return http.post(APIURL.BANNER_CREATE, data);
    }

    static deleteBanner(id) {
        return http.get(APIURL.BANNER_FORCE_DELETE + id);
    }

    static updateBanner(data) {
        return http.post(APIURL.BANNER_UPDATE, data);
    }

    static editBanner(id) {
        return http.get(APIURL.BANNER_EDIT + id);
    }
}