import {Outlet} from "react-router-dom";
import DefaultHeader from "../features/header/DefaultHeader";

export default function DefaultLayout(): JSX.Element {
    return (
        <div>
            <DefaultHeader />

            <Outlet />
        </div>
    )
}