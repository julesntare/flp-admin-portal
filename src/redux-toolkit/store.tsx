import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./reducers/LayoutReducer";
import themeCustomizerReducer from "./reducers/ThemeCustomizerReducer";
import chatReducer from "./reducers/ChatReducer";
import tasksReducer from "./reducers/TasksReducer";
import todoReducer from "./reducers/TodoReducer";
import bookmarkReducer from "./reducers/BookmarkReducer";
import contactReducer from "./reducers/ContactReducer";
import usersReducer from "./reducers/UsersReducer";
import searchResultReducer from "./reducers/SearchResultReducer";
import emailReducer from "./reducers/LetterBoxReducer"
import filterReducer from "./reducers/EcommerceReducer/FilterReducer";
import productReducer from "./reducers/EcommerceReducer/ProductReducer";
import ProjectReducer from "./reducers/ProjectReducer";

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    themeCustomizer: themeCustomizerReducer,
    chat: chatReducer,
    tasks: tasksReducer,
    todos: todoReducer,
    bookmark: bookmarkReducer,
    contact: contactReducer,
    userCards: usersReducer,
    searchResult: searchResultReducer,
    email: emailReducer,
    filter: filterReducer,
    product: productReducer,
    project: ProjectReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
