import {Stack} from "@chakra-ui/react";
import {RiDashboardLine} from 'react-icons/ri';
import {NavSection} from "./NavSection";
import {NavLink} from "./NavLink";

export function SidebarNav() {
    return (
        <Stack spacing="12" align="flex-start">
            <NavSection title="GERAL">
                <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
                <NavLink icon={RiDashboardLine} href="/users">Nova Nota Fiscal</NavLink>
                <NavLink icon={RiDashboardLine} href="/users">Nova Despesa</NavLink>
            </NavSection>

            <NavSection title="Preferências">
                <NavLink icon={RiDashboardLine} href="/dashboard">Configurações</NavLink>
            </NavSection>
        </Stack>
    );
}