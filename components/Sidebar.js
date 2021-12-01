import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/logo.png"
import styles from "../styles/Sidebar.module.css"

const Sidebar = () => {
    return (
        <nav className={ styles.nav }>
            <div className={ styles.logo }>
                <Image src={ logo } />
            </div>

            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/">Grid View</Link>
                </li>
                <li>
                    <Link href="/">Dashboard</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar;