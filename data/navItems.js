import HomeIcon from "../public/svg/home.svg";
import GridIcon from "../public/svg/grid.svg"
import DashboardIcon from "../public/svg/dashboard-icon.svg"

export const navItems = [
    {
        id: 0,
        label: "Home",
        path: "/",
        MenuIcon: HomeIcon,
        isIconTypeFill: false
    },
    {
        id: 1,
        label: "Grid View",
        path: "/grid",
        MenuIcon: GridIcon,
        isIconTypeFill: false
    },
    {
        id: 2,
        label: "Dashboard",
        path: "/dashboard",
        MenuIcon: DashboardIcon,
        isIconTypeFill: true
    },
]