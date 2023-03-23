import Category from "components/Button/Category";
import { useState } from "react";
import MENU from 'assets/json/menu.json';
import SubTitle from "components/Title";
import { AiFillCaretDown } from "react-icons/ai";
import Post from "components/Post/Post";

export type SelectType = string | number;

export default function Portfolio() {

    // eslint-disable-next-line
    const [select, setSelect] = useState<SelectType>(0);
    const [showFilter, setShowFilter] = useState<boolean>(false);

    const handler = (select:SelectType) => {
        setSelect(select);
    }
    const tmpPosts = Array.from({length : 23}, (undefined, i) => <Post key={i} id={i}/>);
    const menu = MENU.map(data => <Category key={data.id} src={data.src} title={data.title}  selector={data.selector} handler={handler}/>);

    return (
        <div className="container portfolio">
            <SubTitle title="Category"/>
            <div className="menu">{menu}</div>
            <div className="filter">
                <div className="filter-header">
                    <SubTitle title="filter"/>
                    <span 
                        onClick={()=>{setShowFilter(prev => !prev)}}
                        style={!showFilter ? {transform : "rotate(180deg)"} : {}}>
                        <AiFillCaretDown/>
                    </span>
                </div>
                <div className="detail" style={showFilter ? {height : "200px"} : {height : "0px", padding : "0 1rem"}}>
                    <form>Filter</form>
                </div>
            </div>
            <SubTitle title="Portfolio"/>
            <div className="viewer">
                {tmpPosts}
            </div>
        </div>
    )
}