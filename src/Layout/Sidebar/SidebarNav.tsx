import { useState } from "react";
import { LI, UL } from "../../AbstractElements";
import { menuList } from "../../Data/SidebarMenuList";
import BackButton from "./BackButton";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { Href } from "../../Utils/Constants";

export default function SidebarNav() {
  const [activeMenu, setActiveMenu] = useState([]);
  const { t } = useTranslation();
  const location = useLocation();

  const ActiveNavLinkUrl = (path?: string) => {
    return location.pathname === path ? true : "";
  };

  return (
    <UL className="sidebar-links simple-list custom-scrollbar" id="simple-bar">
      <div className="simplebar-wrapper">
        <div className="simplebar-mask">
          <div className="simplebar-offset">
            <div className="simplebar-content-wrapper">
              <div className="simplebar-content">
                <BackButton />
                {menuList &&
                  menuList.map((item, i) => (
                    <LI
                      key={i}
                      className={
                        (
                          item.menu
                            ? item.menu
                                .map((innerItem) =>
                                  ActiveNavLinkUrl(innerItem.url)
                                )
                                .includes(true)
                            : ActiveNavLinkUrl(item.url)
                        )
                          ? "active"
                          : ""
                      }
                    >
                      <Link
                        className={
                          (
                            item.menu
                              ? item.menu
                                  .map((innerItem) =>
                                    ActiveNavLinkUrl(innerItem.url)
                                  )
                                  .includes(true)
                              : ActiveNavLinkUrl(item.url)
                          )
                            ? "active"
                            : ""
                        }
                        to={item.url ? item.url : Href}
                        onClick={() => {
                          const temp = activeMenu;
                          setActiveMenu([...temp]);
                        }}
                      >
                        {t(`${item.title}`)}
                      </Link>
                    </LI>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </UL>
  );
}
