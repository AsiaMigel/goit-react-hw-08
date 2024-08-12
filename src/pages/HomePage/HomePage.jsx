import { useSelector } from "react-redux";
import PageTitle from "../../components/PageTitle/PageTitle";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

export default function HomePage() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <div className={css.homePageDiv}>
            {isLoggedIn ? (
                <PageTitle>Contacts</PageTitle>
            ) : (
                <>
                    <PageTitle>To get started, please log in!</PageTitle>
                    <p className={css.register}>
                        or <Link to="/register">REGISTER</Link>
                    </p>
                </>
            )}
        </div>
    );
}