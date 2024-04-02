import React from "react";
import { Fragment, useState } from "react";
import { H6, LI, UL } from "../../AbstractElements";
import { menuList } from "../../Data/SidebarMenuList";
import SidebarSubMenu from "./SidebarSubMenu";
import BackButton from "./BackButton";
import { useTranslation } from "react-i18next";

export default function SidebarNav() {
  const [activeMenu, setActiveMenu] = useState([]);
  const { t } = useTranslation();
  return (
    <UL className="sidebar-links simple-list custom-scrollbar" id="simple-bar">
      <div className="simplebar-wrapper">
        <div className="simplebar-mask">
          <div className="simplebar-offset">
            <div className="simplebar-content-wrapper">
              <div className="simplebar-content">
                <BackButton />
                {menuList &&
                  menuList.map((mainMenu, i) => (
                    <Fragment key={i}>
                      <LI className={"sidebar-main-title"}>
                        <div>
                          <H6 className="lan-1">{t(`${mainMenu.title}`)}</H6>
                        </div>
                      </LI>
                      <SidebarSubMenu
                        menu={mainMenu.menu}
                        activeMenu={activeMenu}
                        setActiveMenu={setActiveMenu}
                        level={0}
                      />
                    </Fragment>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </UL>
  );
}
