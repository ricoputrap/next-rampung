import Link from "next/link"
import { useRouter } from "next/router";
import styles from "../../styles/Sidebar.module.css"

const NavItem = ({ label, MenuIcon, path, isIconTypeFill = false }) => {
    const router = useRouter();

    let rootClasses = styles.navItem;
    if (router.pathname === path) {
        rootClasses += ` ${styles.navItemActive}`;
    }

    let btnClass = isIconTypeFill ? styles.navItemFill : "";

    return (
        <li className={ rootClasses }>
            <Link href={ path }>
                <button className={ btnClass }>
                    <MenuIcon />
                    { label }
                </button>
            </Link>
        </li>
    )
}

export default NavItem;