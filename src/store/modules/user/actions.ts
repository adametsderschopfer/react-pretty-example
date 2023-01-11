import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserList = createAsyncThunk(
    "users/fetch-user-list",
    async function () {
        const {data} = await axios.get("/users");

        return data;
    },
);

