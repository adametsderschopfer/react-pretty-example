import {combineReducers} from '@reduxjs/toolkit'
import UserSlice from "./modules/user/slice";

const rootReducer = combineReducers({
    user: UserSlice.reducer
});

type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer