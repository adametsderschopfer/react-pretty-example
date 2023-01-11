import classes from "./header.module.scss";
import {Link} from "react-router-dom";
import {NavList} from "./NavList";

export default function HeaderMain(): JSX.Element {
    return (
        <div className={classes.header}>
          <span className={classes.header__logo}>
              <Link to={'/'}>
                  My structured app
              </Link>
          </span>

            <nav className={classes.header__navBar}>
                {NavList.map((item, index) => (
                    <Link
                        key={"Header_nav-" + index}
                        to={item.path}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>
        </div>
    );
}