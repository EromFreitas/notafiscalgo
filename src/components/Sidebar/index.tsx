import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerHeader, DrawerOverlay, useBreakpointValue } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { SidebarNav } from "./SidebarNav";

export function Sidebar() {
    const {isOpen, onClose} = useSidebarDrawer();

    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false,
    })

    if (isDrawerSidebar) {
        return (
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay bg="gray.800">
                    <DrawerCloseButton mt="6" />
                    <DrawerHeader>Navegação</DrawerHeader>
                    <DrawerBody>
                        <SidebarNav />
                    </DrawerBody>
                </DrawerOverlay>
            </Drawer>
        )
    }

    return (
        <Box as="aside" w="64" mr="8">
            <Sidebar />
        </Box>
    );
}