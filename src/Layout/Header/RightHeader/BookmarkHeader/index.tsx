/* eslint-disable array-callback-return */
import React from "react";
import { ChangeEvent, useEffect, useState } from "react";
import { menuList } from "../../../../Data/SidebarMenuList";
import BookmarkContainer from "./BookmarkContainer";
import { SidebarMenuType } from "../../../../Types/LayoutTypes";

export default function BookmarkHeader() {
  const [bookmarkItems, setBookmarkItems] = useState<SidebarMenuType[]>([]);
  const [bookmarkList, setBookmarkList] = useState<SidebarMenuType[]>([]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchKey = event.target.value.toLowerCase();
    if (searchKey !== "") {
      let icon: string | undefined;
      let suggestionArray: SidebarMenuType[] = [];
      let updatedList: SidebarMenuType = {};
      const deepSearchFun = (
        menuItem: any,
        searchKeyValue: string,
        mainTitle: string | undefined
      ) => {
        if (
          menuItem.title.toLowerCase().includes(searchKeyValue) &&
          menuItem.url
        ) {
          updatedList = { ...menuItem, mainTitle, icon };
          suggestionArray.push(updatedList);
        }
        if (!menuItem.menu) return;
        menuItem.menu.map((mainSubItem: SidebarMenuType) => {
          if (menuItem.icon) {
            icon = menuItem.icon;
          }
          deepSearchFun(mainSubItem, searchKeyValue, mainTitle);
        });
      };
      menuList.map((mainItem) => {
        mainItem.menu?.map((data) => {
          const mainTittle = data.title;
          deepSearchFun(data, searchKey, mainTittle);
        });
      });
      setBookmarkItems(suggestionArray);
    }
    if (searchKey === "") {
      setBookmarkItems([]);
    }
  };

  useEffect(() => {
    let suggestionArray: SidebarMenuType[] = [];
    let updatedList: SidebarMenuType = {};
    const getBookMarkList = (menuItem: SidebarMenuType) => {
      if (menuItem.bookmark && menuItem.url) {
        updatedList = { ...menuItem };
        suggestionArray.push(updatedList);
      }
      if (!menuItem.menu) return;
      menuItem.menu.map((mainSubItem: SidebarMenuType) => {
        getBookMarkList(mainSubItem);
      });
    };
    // eslint-disable-next-line array-callback-return
    menuList.map((mainItem) => {
      mainItem.menu?.map((data) => {
        getBookMarkList(data);
      });
    });
    setBookmarkList(suggestionArray);
  }, []);

  const handleBookmark = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    item: SidebarMenuType
  ) => {
    const updatedList = [...bookmarkList];
    const foundIndex = updatedList.findIndex(
      (bookmarkItem) => bookmarkItem.title === item.title
    );

    if (foundIndex === -1 && !item.bookmark) {
      item.bookmark = true;
      event.currentTarget.classList.add("starred");
      updatedList.push(item);
      setBookmarkList(updatedList);
    } else {
      event.currentTarget.classList.remove("starred");
      updatedList.splice(foundIndex, 1);
      setBookmarkList(updatedList);
      item.bookmark = false;
    }
  };
  return (
    <BookmarkContainer
      bookmarkList={bookmarkList}
      handleSearch={handleSearch}
      bookmarkItems={bookmarkItems}
      handleBookmark={handleBookmark}
    />
  );
}
