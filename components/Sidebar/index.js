import Image from "next/image";
import logo from "../../public/images/logo.png"
import styles from "../../styles/Sidebar.module.css"

// import HomeIcon from "../../public/svg/home.svg"
// import GridIcon from "../../public/svg/grid.svg"
// import DashboardIcon from "../../public/svg/dashboard-icon.svg"
import NavItem from "./NavItem";
import { navItems } from "../../data";

const Sidebar = () => {
    
    return (
        <nav className={ styles.nav }>
            <div className={ styles.logo }>
                <Image src={ logo } />
            </div>

            <ul className={ styles.ul }>
                {navItems.map(item => (
                    <NavItem
                        label={ item.label }
                        path={ item.path }
                        MenuIcon={ item.MenuIcon }
                        isIconTypeFill={ item.isIconTypeFill }
                    />
                ))}
            </ul>
        </nav>
    )
}

export default Sidebar;