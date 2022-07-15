import { useEffect } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { GoogleOAuthProvider } from "@react-oauth/google";

import useAuthStore from "stores/auth.store";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
    const authStore = useAuthStore();
    const router = useRouter();

    useEffect(() => {
        if (authStore.isLoggedIn) {
            router.replace("/");
        } else {
            router.replace("/login");
        }
    }, [authStore.isLoggedIn, router]);

    return (
        <GoogleOAuthProvider
            clientId={process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID!}
        >
            <QueryClientProvider client={queryClient}>
                <ChakraProvider>
                    <Component {...pageProps} />
                </ChakraProvider>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </GoogleOAuthProvider>
    );
}

export default MyApp;
