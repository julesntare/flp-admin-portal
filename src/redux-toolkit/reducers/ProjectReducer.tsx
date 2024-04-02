import { createSlice } from '@reduxjs/toolkit';
import { allProjectListData } from '../../Data/AppsData/ProjectData';

const projectSlice = createSlice({
    name: 'project',
    initialState: {
        items: allProjectListData
    },
    reducers: {
        setProjects: (state, action) => {
            state.items = [...state.items, action.payload]
        },
    },
});

export const { setProjects } = projectSlice.actions;
export default projectSlice.reducer;
