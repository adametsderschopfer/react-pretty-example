import {RootState} from "../../rootReducer";

export const selectUserState = (state: RootState) => state.user;
export const selectUserListState = (state: RootState) => {
    let result = state.user.list;
    const queryString = state.user.search.text?.toUpperCase();

    if (queryString.length) {
        result = result.filter(item => {
            const includeList: boolean[] = [
                !!item.name.toUpperCase().match(queryString),
                !!item.username.toUpperCase().match(queryString),
                !!item.email.toUpperCase().match(queryString),
                !!item.phone.toUpperCase().match(queryString),
                !!item.id.toString().toUpperCase().match(queryString),
            ]

            return includeList.includes(true);
        });
    }

    return result;
};
