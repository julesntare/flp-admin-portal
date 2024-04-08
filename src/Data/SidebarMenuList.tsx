import { SidebarMenuType } from "../Types/LayoutTypes";

export const menuList: SidebarMenuType[] = [
  {
    id: 1,
    title: "Dashboard",
    url: `${process.env.PUBLIC_URL}/dashboard`,
    type: "link",
  },
  {
    id: 2,
    title: "Site Contents",
    url: `${process.env.PUBLIC_URL}/site-contents`,
    type: "link",
  },
  {
    id: 3,
    title: "Slides",
    url: `${process.env.PUBLIC_URL}/slides`,
    type: "link",
  },
];
