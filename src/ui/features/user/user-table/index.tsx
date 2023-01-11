import makeLoadableComponent from "../../../../utils/makeLoadableComponent";
import LoaderIndicator from "../../../shared/UI/LoaderIndicator";

export default makeLoadableComponent(
    () => import("./UsersTable"),
    {
        fallback: <LoaderIndicator/>
    }
);