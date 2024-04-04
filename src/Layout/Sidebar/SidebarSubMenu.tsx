import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux-toolkit/store";
import { MenuListType, SidebarMenuType } from "../../Types/LayoutTypes";
import { LI, UL } from "../../AbstractElements";
import { Href } from "../../Utils/Constants";
import { setPinedMenu } from "../../redux-toolkit/reducers/LayoutReducer";
import SvgIcon from "../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";
import { useTranslation } from "react-i18next";

export default function SidebarSubMenu({
  menu,
  setActiveMenu,
  activeMenu,
  level,
}: MenuListType) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const location = useLocation();
  const { pinedMenu } = useSelector((state: RootState) => state.layout);
  const handlePined = (value: string) => {
    if (!pinedMenu.includes(value)) {
      dispatch(setPinedMenu([...pinedMenu, value]));
    } else {
      let filterMenu = pinedMenu.filter((item) => item !== value);
      dispatch(setPinedMenu(filterMenu));
    }
  };
  const ActiveNavLinkUrl = (path?: string) => {
    return location.pathname === path ? true : "";
  };
  function shouldSetActive({ item }: { item: SidebarMenuType }): boolean {
    var returnValue = false;
    if (item?.url === location.pathname) {
      returnValue = true;
    }
    if (!returnValue && item?.menu) {
      item?.menu.every((subItem: SidebarMenuType) => {
        returnValue = shouldSetActive({ item: subItem });
        return !returnValue;
      });
    }
    return returnValue;
  }
  useEffect(() => {
    menu?.forEach((item) => {
      let gotValue = shouldSetActive({ item });
      if (gotValue) {
        let temp = [...activeMenu];
        temp[level] = item.title;
        setActiveMenu(temp);
      }
    });
  }, []);
  return (
    <>
      {menu?.map((item, i) => (
        <LI
          key={i}
          className={`${level === 0 ? "sidebar-list" : ""} ${
            (item.menu
              ? item.menu
                  .map((innerItem) => ActiveNavLinkUrl(innerItem.url))
                  .includes(true)
              : ActiveNavLinkUrl(item.url)) || activeMenu[level] === item.title
              ? "active"
              : ""
          }`}
        >
          <Link
            className={`${level === 0 ? "sidebar-link sidebar-title" : ""} ${
              (item.menu
                ? item.menu
                    .map((innerItem) => ActiveNavLinkUrl(innerItem.url))
                    .includes(true)
                : ActiveNavLinkUrl(item.url)) ||
              activeMenu[level] === item.title
                ? "active"
                : ""
            }`}
            to={item.url ? item.url : Href}
            onClick={() => {
              const temp = activeMenu;
              temp[level] = item.title !== temp[level] ? item.title : "";
              setActiveMenu([...temp]);
            }}
          >
            {item.icon && (
              <>
                <SvgIcon
                  className="stroke-icon"
                  iconId={`stroke-${item.icon}`}
                />
                <SvgIcon className="fill-icon" iconId={`fill-${item.icon}`} />{" "}
              </>
            )}
            {level === 0 ? (
              <span className="lan-3">{t(`${item.title}`)}</span>
            ) : (
              t(`${item.title}`)
            )}
            {item.menu && (
              <div className="according-menu">
                {activeMenu[level] === item.title ? (
                  <i className="fa fa-angle-down" />
                ) : (
                  <i className="fa fa-angle-right" />
                )}
              </div>
            )}
          </Link>
          {item.menu && (
            <UL
              className={`simple-list ${
                level / 2 === 0
                  ? "sidebar-submenu"
                  : "nav-sub-childmenu submenu-content"
              }`}
              style={{
                display: `${
                  (item.menu
                    ? item.menu
                        .map((innerItem) => ActiveNavLinkUrl(innerItem.url))
                        .includes(true)
                    : ActiveNavLinkUrl(item.url)) ||
                  activeMenu[level] === item.title
                    ? "block"
                    : "none"
                }`,
              }}
            >
              <SidebarSubMenu
                menu={item.menu}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                level={level + 1}
              />
            </UL>
          )}
        </LI>
      ))}
    </>
  );
}
