import RequestAdapterService from "./requestAdapter.service";

export default class Covid19Service extends RequestAdapterService {
    constructor() {
        super();
    }

    getWorldConfirmed() {
        try {
            return this.sendGetRequest("/confirmed");
        } catch (error) {
            throw error;
        }
    }

    getWorldRecovered() {
        try {
            return this.sendGetRequest("/recovered");
        } catch (error) {
            throw error;
        }
    }
}
