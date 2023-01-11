import {FormEvent, useEffect} from "react";
import {useTranslation} from "react-i18next";
import UserSlice from "../../../../store/modules/user/slice";
import {selectUserListState, selectUserState} from "../../../../store/modules/user/selectors";
import {fetchUserList} from "../../../../store/modules/user/actions";
import {useAppDispatch, useAppSelector} from "../../../../app/hooks/store";
import Table from "./components/Table/Table";
import LoaderIndicator from "../../../shared/UI/LoaderIndicator";

export default function UsersTable(): JSX.Element {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUserState);
    const userList = useAppSelector(selectUserListState);

    useEffect(() =>  {
        dispatch(fetchUserList());

        return () => {
            dispatch(UserSlice.actions.searchHandler(""));
        }
    }, [dispatch]);

    function renderTable(): JSX.Element
    {
        if (user.loading !== 'succeeded') {
            return (
              <LoaderIndicator />
            );
        }

        return (
            <Table
                users={userList}
            />
        );
    }

    return (
        <div className="container mx-auto py-6 px-4">
            <h1 className="text-3xl py-4 border-b">{t("app.features.UserTable.title")}</h1>
            <h1 className="text mb-10">{t("app.features.UserTable.description")}</h1>

            <div className="mb-4 flex justify-between items-center">
                <div className="flex-1 pr-4">
                    <div className="relative md:w-1/3">
                        <input
                            type="search"
                            className="w-full pl-10 pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                            placeholder={t("app.features.UserTable.searchPlaceholder") || ""}

                            value={user.search.text}
                            onInput={(e: FormEvent<HTMLInputElement>) => dispatch(UserSlice.actions.searchHandler((e.target as HTMLInputElement).value))}
                        />

                        <div className="absolute top-0 left-0 inline-flex items-center p-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-gray-400"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                                <circle cx="10" cy="10" r="7"/>
                                <line x1="21" y1="21" x2="15" y2="15"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative"
            >
                {renderTable()}
            </div>
        </div>
    );
}

