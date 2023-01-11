import {createSlice} from "@reduxjs/toolkit";
import {IUserStore} from "../../../domain/entity/User/entity";
import {fetchUserList} from "./actions";

const initialState: IUserStore = {
    list: [],
    loading: "idle",
    error: {},

    search: {
        text: '',
    },
}

const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
       searchHandler(state, {payload})
       {
           state.search.text = payload;
       }
    },
    extraReducers(builder) {
        // fetchUserList
        builder
            .addCase(fetchUserList.pending, (state, action) => {
                if (state.loading === 'idle') {
                    state.loading = 'pending';
                }
            })
            .addCase(fetchUserList.fulfilled, (state, action) => {
                state.list = action.payload;
                state.loading = 'succeeded';
            })
            .addCase(fetchUserList.rejected, (state, action) => {
                state.error = action.error;
                state.loading = 'failed';
            });
    }
});

export default UserSlice;