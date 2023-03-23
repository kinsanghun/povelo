import { useEffect, useRef, useState } from "react"

interface LazyImageProps {
    src : string;
    lazyImage? : string;
    alt? : string;
}

export default function LazyImage({src, lazyImage, alt}:LazyImageProps) {
    const [isLoading, setIsLoading] = useState(false);

    const imgRef = useRef<HTMLImageElement>(null);
    const observerRef = useRef<IntersectionObserver>();

    useEffect(()=>{
        if(imgRef.current) {
            observerRef.current = new IntersectionObserver(intersectionObserver, {
                threshold : 0.3
            });
            imgRef && observerRef.current.observe(imgRef.current);
        }
    }, [])

    const intersectionObserver = (entries:any, observer:any) => {
        entries.forEach((entry:any) => {
            if(entry.isIntersecting) {
                observer.unobserve(entry.target);
                setIsLoading(true);
            }
        })
    }
    const tmpImage = lazyImage ? lazyImage : "assets/tmpImg.png";
    const tmpAlt = alt ? alt : "lazy";

    return (<img ref={imgRef} src={isLoading ? src : tmpImage} alt={tmpAlt}/>);
}