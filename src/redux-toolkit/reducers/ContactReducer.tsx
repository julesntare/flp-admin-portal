import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactStateProps, UserProps } from "../../Types/ContactType";

const initialState: ContactStateProps = {
    users: [],
    data: [],
    tempId: 0,
    editData: {}
};

const ContactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        setUsers(state, action: PayloadAction<UserProps[]>) {
            state.users = action.payload;
        },
        setEditData(state, action) {
            state.users = state.users.map((item) =>
                item.id === state.tempId ? action.payload : item
            );
        },
        setTempId(state, action: PayloadAction<number>) {
            state.tempId = action.payload;
        },
        createUser(state, action) {
            const userTemp: UserProps = {
                id: state.users.length + 1,
                avatar: action.payload.defaultUser,
                name: action.payload.data?.name,
                surname: action.payload.data.surname,
                email: action.payload.data.email,
                age: action.payload.data?.age,
                mobile: action.payload.data.mobile,
            };
            state.users = [...state.users, userTemp];
        },
        editUser(state, action) {
            const userTemp: UserProps = {
                id: state.users.length + 1,
                avatar: action.payload.imgUrl,
                name: action.payload.data.name,
                surname: action.payload.data.surname,
                email: action.payload.data.email,
                age: action.payload.data.age,
                mobile: action.payload.data.mobile,
            };
            state.data = [...state.data, userTemp];
        },
        deletedUser(state, action: PayloadAction<number>) {
            state.users = state.users.filter((data) => data.id !== action.payload);
        },
    },
});

export const {
    setUsers,
    setEditData,
    setTempId,
    createUser,
    editUser,
    deletedUser,
} = ContactSlice.actions;

export default ContactSlice.reducer;
