import { FormEvent } from "react";
import {IoIosArrowRoundForward} from "react-icons/io";

interface LoadMoreProps {
    handler : (e:FormEvent) => void;
}
export default function LoadMore({handler}:LoadMoreProps) {
    return (<button className="loadmore" type="button" onClick={handler}>Load More <IoIosArrowRoundForward/></button>)
}