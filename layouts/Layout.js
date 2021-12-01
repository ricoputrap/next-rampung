import Sidebar from "../components/Sidebar"
import styles from "../styles/Layout.module.css"

const Layout = ({ children }) => {
    return (
        <div className={ styles.root }>
            <Sidebar />
            <main className={ styles.main }>
                {children}
            </main>
        </div>
    )
}

export default Layout;