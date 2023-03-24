import { useEffect, useState } from "react";
import "./Carousel.scss";

interface PageProps {
    src : string;
    active? : boolean;
}
function Page({src, active=false}:PageProps) {
    return (<div className="page" style={active ? {opacity : 100} : {opacity : 0}}><img src={src}/></div>)
}

interface DotProps {
    active? : boolean;
}
function Dot({active}:DotProps) {
    return <span className={active ? "dot active" : "dot"} ></span>   
}

export default function Carousel() {
    const [carousel, setCarousel] = useState(
        [
            "assets/tmpCarousel.png",
            "assets/tmpPost.jpg",
            "assets/tmpImg.png"
        ]);
    const [page, setPage] = useState(0);

    const tmpPage = carousel.map((data, index) => <Page src={data} active={index === page ? true: false}/>)
    const dots = carousel.map((data, index) =>  <span onClick={()=>{setPage(index)}}><Dot active={index === page ? true : false}/></span>);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setPage(prev => (prev + 1) % 3);
        }, 2000)

        return () => clearInterval(interval);
    }, [page])
    return (
        <div className="carousel">
            <div className="pages">{tmpPage}</div>
            <div className="page-nav">{dots}</div>
        </div>
    )
}