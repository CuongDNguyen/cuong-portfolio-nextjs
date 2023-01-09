import Link from 'next/link';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Navigation = () => (
    <Navbar color="light" light expand="md">
        <Link href="/">
            <NavbarBrand>Cuong Nguyen</NavbarBrand>
        </Link>
        <Nav className="ml-auto" navbar>
            <NavItem>
                <Link href="/">
                    <NavLink>Home</NavLink>
                </Link>
            </NavItem>
            <NavItem>
                <Link href="/about">
                    <NavLink>About</NavLink>
                </Link>
            </NavItem>
            <NavItem>
                <Link href="/experience">
                    <NavLink>Experience</NavLink>
                </Link>
            </NavItem>
        </Nav>
    </Navbar>
);

export default Navigation;
