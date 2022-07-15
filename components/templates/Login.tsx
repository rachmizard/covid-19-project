import { useState } from "react";
import { Container, Flex, useToast } from "@chakra-ui/react";
import { useGoogleLogin } from "@react-oauth/google";

import MoleculeLoginAction from "components/molecules/LoginAction";
import useAuthStore from "stores/auth.store";

const TemplateLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const authStore = useAuthStore();
    const toast = useToast();

    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            setIsLoading(true);
            await authStore.setAuth(tokenResponse);
            setIsLoading(false);

            toast({
                title: "Success",
                status: "success",
                description: `Successfully logged in with google`,
            });
        },
        onError: (error) => {
            setIsLoading(false);
            toast({
                title: "Error",
                status: "error",
                description: error.error_description,
            });
        },
    });

    return (
        <Container maxW="container.md">
            <Flex minH="100vh" justifyContent="center" alignItems="center">
                <MoleculeLoginAction
                    isLoading={isLoading}
                    onLoginClick={login}
                />
            </Flex>
        </Container>
    );
};

export default TemplateLogin;
