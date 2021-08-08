import { Flex, Text, useColorMode, Image, Switch } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import HomeIcon from "../../assets/icons/home-icon.png"

export default function Header({ title }: { title: string }) {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    return (
        <Flex width="100%" px={4} py={6} align="center" justify="space-between">
            <Text fontWeight="bold" color="teal" fontSize="4xl" >{title}</Text>
            <Flex align="center">
                <Link to="/"><Image width="1.5rem" mx="1rem" color="teal" src={HomeIcon} /></Link>
                <Switch
                    m="1rem"
                    isChecked={isDark}
                    onChange={toggleColorMode}
                    pr={2}
                />
            </Flex>
        </Flex>
    );
}
