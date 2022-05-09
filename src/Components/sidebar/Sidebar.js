import './Sidebar.css'

const Sidebar = ({sidebarOpen, closeSidebar}) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__tittle">
                <div className="sidebar__img">
                    <h1>User</h1>
                </div>
                <i onClick={() => closeSidebar()}
                className="fa fa-times"
                id="sidebarIcon"
                aria-hidden="true">

                </i>
            </div>
            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="fa fa-minus-square"></i>
                    <a href="#">Home</a>
                </div>
                <h2>ADMIN</h2>
                <div className="sidebar__link">
                    <i className="fa fa-tachometer"></i>
                    <a href="#">AREA ADMINISTRATIVA</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-tachometer"></i>
                    <a href="#">AREA ADMINISTRATIVA</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-tachometer"></i>
                    <a href="#">AREA ADMINISTRATIVA</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-tachometer"></i>
                    <a href="#">AREA ADMINISTRATIVA</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-tachometer"></i>
                    <a href="#">AREA ADMINISTRATIVA</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-tachometer"></i>
                    <a href="#">AREA ADMINISTRATIVA</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-tachometer"></i>
                    <a href="#">AREA ADMINISTRATIVA</a>
                </div>
                <div className="sidebar__logout">
                    <i className="fa fa-power-off"></i>
                    <a href="#">Log out</a>
                </div>
            </div>

        </div>
    )
}

export default Sidebar