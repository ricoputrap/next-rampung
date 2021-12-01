import Link from "next/link"
import { useRouter } from "next/router";
import styles from "../../styles/Sidebar.module.css"

const NavItem = ({ label, MenuIcon, path  }) => {
    const router = useRouter();
    let classes = styles.navItem;

    if (router.pathname === path) {
        classes += ` ${styles.navItemActive}`;
    }

    return (
        <li className={ classes }>
            <Link href={ path }>
                <button>
                    <MenuIcon />
                    { label }
                </button>
            </Link>
        </li>
    )
}

export default NavItem;