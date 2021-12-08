import {LinkProps as ChakraLinkProps, Link as ChakraLink, Icon, Text} from "@chakra-ui/react"
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
    children: string;
    icon: ElementType;
    href: string
}

export function NavLink({children, icon, href, ...rest}: NavLinkProps ) {
    return (
        <ActiveLink href={href} passHref>
            <ChakraLink>
                <Icon as={icon} fontSize="20" />
                <Text ml="4" fontWeight="medium">{children}</Text>
            </ChakraLink>
        </ActiveLink>
    );
}