import create from "zustand";
import { persist } from "zustand/middleware";
import { TokenResponse } from "@react-oauth/google";

import GoogleAPIService from "services/google.service";

interface UseAuthStore {
    isLoggedIn?: boolean;
    profile?: any;
    credential?: TokenResponse;
    setAuth: (tokenResponse: TokenResponse) => Promise<void>;
}

const googleApiService = new GoogleAPIService();

const persistedAuthStore = persist<UseAuthStore>(
    (set) => ({
        isLoggedIn: false,
        credential: undefined,
        async setAuth(tokenResponse) {
            const { data: userProfile } = await googleApiService.getUserProfile(
                tokenResponse.access_token
            );

            set((state) => ({
                ...state,
                isLoggedIn: true,
                profile: userProfile,
                credential: tokenResponse,
            }));
        },
    }),
    {
        name: "auth-store",
    }
);

const useAuthStore = create(persistedAuthStore);

export default useAuthStore;
