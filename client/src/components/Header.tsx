import { Link } from "react-router-dom";
import Navigation from "./Navigation";

export default function Header() {
    return (
        <header>
            <div>
                <h2><Link to="/">povelo</Link></h2>
                <Navigation/>
            </div>
        </header>
    )
}