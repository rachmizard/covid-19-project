import { FcGoogle } from "react-icons/fc";
import { Flex, Heading, Stack } from "@chakra-ui/react";

import { AtomCustomButton } from "components/atoms/CustomButton";

interface MoleculeLoginActionProps {
    isLoading?: boolean;
    onLoginClick: () => void;
}

const MoleculeLoginAction = ({
    isLoading,
    onLoginClick,
}: MoleculeLoginActionProps) => {
    return (
        <Stack direction="column" gap={4}>
            <Heading>COVID-19 Project with Mathdroid API</Heading>
            <Flex justifyContent="center">
                <AtomCustomButton
                    leftIcon={<FcGoogle />}
                    isLoading={isLoading}
                    onClick={onLoginClick}
                    variant="outline"
                    fontWeight="light"
                >
                    Sign In With Google
                </AtomCustomButton>
            </Flex>
        </Stack>
    );
};

export default MoleculeLoginAction;
