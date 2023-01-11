import {TABLE_HEAD_COLUMNS} from "../../constants";
import {IUser} from "../../../../../../domain/entity/User/entity";
import classes from "./Table.module.scss";

interface ITableProps {
    users: IUser[]
}

export default function Table({users}: ITableProps): JSX.Element
{
    if (!users.length) {
        return (
            <div className={classes.nothing_found_container}>
                <h1>Users not found</h1>
            </div>
        );
    }

    return (
        <table
            className="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative"
        >
            <thead>
            <tr className="text-left">
                {TABLE_HEAD_COLUMNS.map((headColumn, index) => (
                    <th
                        key={'UserTable_HeadColumn_' + index}
                        className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs"
                    >
                        {headColumn.name}
                    </th>
                ))}
            </tr>
            </thead>
            <tbody>

            {
                users.map((item, index) => (
                    <tr key={'User_Table_item-' + index}>
                        <td className="border-dashed border-t border-gray-200 userId">
                            <span className="text-gray-700 px-6 py-3 flex items-center" style={{color: 'green'}}>ToDo</span>
                        </td>

                        <td className="border-dashed border-t border-gray-200 userId">
                            <span className="text-gray-700 px-6 py-3 flex items-center">{item.id}</span>
                        </td>

                        <td className="border-dashed border-t border-gray-200 firstName">
                            <span className="text-gray-700 px-6 py-3 flex items-center">{item.name}</span>
                        </td>

                        <td className="border-dashed border-t border-gray-200 emailAddress">
                            <span className="text-gray-700 px-6 py-3 flex items-center">{item.email}</span>
                        </td>

                        <td className="border-dashed border-t border-gray-200 phoneNumber">
                            <span className="text-gray-700 px-6 py-3 flex items-center">{item.phone}</span>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}