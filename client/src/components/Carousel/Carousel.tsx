import { useEffect, useState } from "react";
import "./Carousel.scss";

interface PageProps {
    src : string;
}
function Page({src}:PageProps) {
    return (<div className="page"><img src={src}/></div>)
}

interface DotProps {
    active? : boolean;
}
function Dot({active}:DotProps) {
    return <span className={active ? "dot active" : "dot"} ></span>   
}

export default function Carousel() {
    const [page, setPage] = useState(0);

    const tmpPage = <Page src="assets/tmpCarousel.png"/>
    const dots = [0, 0, 0].map((data, index) => index === page ? <Dot active={true}/> : <Dot/>);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setPage(prev => (prev + 1) % 3);
        }, 1000)

        return () => clearInterval(interval);
    }, [])
    return (
        <div className="carousel">
            <div className="pages">{tmpPage}</div>
            <div className="page-nav">{dots}</div>
        </div>
    )
}