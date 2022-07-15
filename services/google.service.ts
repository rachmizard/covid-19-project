import RequestAdapterService from "./requestAdapter.service";

export default class GoogleAPIService extends RequestAdapterService {
    constructor() {
        super();
    }

    public async getUserProfile(accessToken: string): Promise<any> {
        try {
            return await this.sendGetRequest(
                `${process.env.NEXT_PUBLIC_GOOGLE_OAUTH_API_BASE_URL}/userinfo`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );
        } catch (error) {
            throw error;
        }
    }
}
