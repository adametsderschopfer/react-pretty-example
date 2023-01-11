import {Route, Routes} from "react-router-dom";
import DefaultLayout from "../../ui/layouts/Default.layout";

import Home from "./Home/Home";
import {NotFound} from "./ErrorPages/NotFound";
import UserTableList from "./User/User.TableList";

export default function NavigationContainer(): JSX.Element {
    return (
        <Routes>
            <Route path={"/"} element={<DefaultLayout/>}>
                <Route index element={<Home/>}/>
            </Route>

            <Route path={"/user/"} element={<DefaultLayout/>}>
                <Route index element={<UserTableList/>}/>
            </Route>

            <Route path={"*"} element={<NotFound/>}/>
        </Routes>
    );
}