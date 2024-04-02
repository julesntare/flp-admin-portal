import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import FooterLayout from './Footer'
import Header from './Header'
import Loader from './Loader'
import Sidebar from './Sidebar'
import Taptop from './TapTop'
import ThemeCustomizer from './ThemeCustomizer'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux-toolkit/store'
import { addSidebarTypes } from '../redux-toolkit/reducers/ThemeCustomizerReducer'
import { setSideBarToggle } from '../redux-toolkit/reducers/LayoutReducer'

export default function Layout() {
    const { sidebar_types } = useSelector((state: RootState) => state.themeCustomizer);
    const { sideBarToggle } = useSelector((state: RootState) => state.layout);
    const dispatch = useDispatch();

    const updateSidebarBasedOnWidth = () => {
        const windowWidth = window.innerWidth;
        if (sidebar_types === "compact-wrapper") {
            if (windowWidth <= 1199) {
                dispatch(setSideBarToggle(true));
            } else {
                dispatch(setSideBarToggle(false));
            }
        }
        else if (sidebar_types === "horizontal-wrapper") {
            if (windowWidth <= 1199) {
                dispatch(setSideBarToggle(true));
                dispatch(addSidebarTypes('compact-wrapper'));
            } else {
                dispatch(setSideBarToggle(false));
                dispatch(addSidebarTypes('horizontal-wrapper'))
            }
        }
    };
    useEffect(() => {
        updateSidebarBasedOnWidth();
        window.addEventListener("resize", () => {
            updateSidebarBasedOnWidth();
        });
    }, [sidebar_types]);

    return (
        <>
            <Loader />
            <Taptop />
            <div className={`page-wrapper ${sideBarToggle ? "compact-wrapper" : sidebar_types}`} id="pageWrapper">
                <Header />
                <div className="page-body-wrapper">
                    <Sidebar />
                    <Outlet />
                    <FooterLayout />
                </div>
            </div>
        </>
    )
}
