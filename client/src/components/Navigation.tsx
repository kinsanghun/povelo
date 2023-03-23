import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

interface NavigationProps {
    navId: string,
    navTitle: string,
    href: string,
}

export default function Navigation() {
    const [isLogin, setIsLogin] = useState(false);

    const navigation: NavigationProps[] = useMemo(() => [
        {
            navId: "nav_main",
            navTitle: "홈으로",
            href: ""
        }, {
            navId: "nav_profile",
            navTitle: "프로필",
            href: "profile"
        }, {
            navId: "nav_portfolio",
            navTitle: "포트폴리오",
            href: "portfolio"
        }
    ], [])

    const navigator: JSX.Element[] = navigation.map(nav => <li key={nav.navId}><Link to={nav.href}>{nav.navTitle}</Link></li>);
    return (
        <nav>
            <ul>
                {navigator}
                {
                    isLogin ?
                        <>
                            <li><Link key={"nav_mypage"} to={"mypage"}>{"마이페이지"}</Link></li>
                            <li><Link key={"nav_logout"} to={"logout"}>{"로그아웃"}</Link></li>
                        </> :
                        <>
                            <li><Link key={"nav_login"} to={"login"}>{"로그인"}</Link></li>
                        </>
                }
            </ul>
        </nav>
    )
}