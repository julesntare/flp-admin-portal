import { SidebarMenuType } from "../Types/LayoutTypes";

export const menuList: SidebarMenuType[] = [
  {
    id: 1,
    title: "Dashboard",
    url: `${process.env.PUBLIC_URL}/dashboard`,
    type: "link",
  },
  {
    id: 11,
    title: "Tasks",
    url: `${process.env.PUBLIC_URL}/applications/task`,
    type: "link",
  },
  {
    id: 26,
    title: "Add Post",
    type: "link",
    active: false,
    url: `${process.env.PUBLIC_URL}/miscellaneous/blog/add-post`,
  },
  {
    id: 31,
    title: "MDE Editor",
    type: "link",
    active: false,
    url: `${process.env.PUBLIC_URL}/miscellaneous/editors/mde-editor`,
  },
];
