import { SelectType } from "pages/Portfolio";
import './Button.scss';
interface CategoryProps {
    title : string;
    selector : SelectType;
    src : string;
    handler : (data:SelectType) => void;
}
export default function Category({title, selector, src, handler}:CategoryProps) {
    
    return (
        <div className="category" onClick={()=>{handler(selector)}}>
        <div className="image"><img src={src} alt={title}/></div>
            <div className="black"></div>
            <h2>{title}</h2>
        </div>
    )
}