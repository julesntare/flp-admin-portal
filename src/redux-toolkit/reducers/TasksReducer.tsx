import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TaskItems, TasksInitialStateProps } from '../../Types/TasksType';
import { taskLists } from '../../Data/AppsData/Tasks&CalendarData';

const initialState: TasksInitialStateProps = { newTask: [], allTask: taskLists };

const TaskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setAllTask: (state, action: PayloadAction<TaskItems[]>) => {
            state.allTask = action.payload;
        },
        addNewTask: (state, action: PayloadAction<TaskItems>) => {
            if (!Array.isArray(state.allTask)) {
                state.allTask = [];
            }
            const newId = Math.max(...state.allTask.map(task => task.id), 0) + 1;
            const taskTemp = {
                id: newId,
                title: action.payload.title,
                collection: action.payload.collection,
                description: action.payload.description,
            };
            state.allTask = [taskTemp, ...state.allTask];
        },
        removeTask: (state, action: PayloadAction<number>) => {
            state.allTask = state.allTask.filter((data: TaskItems) => data.id !== action.payload);
        },
    },
});
export const { setAllTask, addNewTask, removeTask } = TaskSlice.actions;
export default TaskSlice.reducer;