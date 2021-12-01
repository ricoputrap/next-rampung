import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar";
import styles from "../styles/Layout.module.css"

const Layout = ({ children }) => {
    return (
        <div className={ styles.root }>
            <Sidebar />
            <div className={ styles.mainWrapper }>
                <Topbar />
                <main className={ styles.main }>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout;