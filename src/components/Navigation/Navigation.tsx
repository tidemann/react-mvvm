import {Link} from "@tanstack/react-router"
import style from "./navigation.module.css"
import { useTranslation } from 'react-i18next'

export const Navigation = () => {
    const { t } = useTranslation();
    return (
        <nav className={style.navigation}>
            <ul>
                <li>
                    <Link to="/" className="[&.active]:font-bold">
                        {t('home')}
                    </Link>
                </li>
                <li>
                    <Link to="/toysList" className="[&.active]:font-bold">
                        {t('listToys')}
                    </Link>
                </li>
                <li>
                    <Link to="/toyCreate" className="[&.active]:font-bold">
                        {t('createToy')}
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
