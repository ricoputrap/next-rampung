import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.png"
import styles from "../../styles/Sidebar.module.css"

import HomeIcon from "../../public/svg/home.svg"
import GridIcon from "../../public/svg/grid.svg"
import DashboardIcon from "../../public/svg/dashboard-icon.svg"

const Sidebar = () => {
    return (
        <nav className={ styles.nav }>
            <div className={ styles.logo }>
                <Image src={ logo } />
            </div>

            <ul className={ styles.ul }>
                <li className={ `${styles.navItemActive} ${styles.navItem}` }>
                    <Link href="/">
                        <button>
                            <HomeIcon />
                            Home
                        </button>
                    </Link>
                </li>
                <li className={ styles.navItem }>
                    <Link href="/grid">
                        <button>
                            <GridIcon />
                            Grid View
                        </button>
                    </Link>
                </li>
                <li className={ styles.navItem }>
                    <Link href="/dashboard">
                        <button className={ styles.navItemFill }>
                            <DashboardIcon />
                            Dashboard
                        </button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar;