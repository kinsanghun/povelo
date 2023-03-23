import LazyImage from "components/LazyImage";
import { AiOutlineHeart, AiOutlineMessage,AiOutlineEllipsis } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./Post.scss";
import Skill from "./Skill";

interface PostProps {
    id : string | number;
}
export default function Post({id}:PostProps) {
    const navigate = useNavigate();

    const title = "Lorem Ipsum";
    const skillList = ["React", "JavaScript", "Express"];
    const skill = skillList.map((data, index) => <Skill key={index} skill={data}/>)

    const goDetailHandler = () => {
        navigate(`/post/${id}`)    
    }
    return (
        <div className="post">
            <div className="image-box" onClick={goDetailHandler}>
                <LazyImage src="assets/tmpPost.jpg" alt="tmp"/>
            </div>
            <div className="detail">
                <div className="title" onClick={goDetailHandler}>{title}</div>
                <div className="skills">{skill}</div>
                <div className="other">
                    <div className="like">
                        <div><AiOutlineHeart/><span>2.0K</span></div>
                        <div><AiOutlineMessage/><span>1.7K</span></div>
                    </div>
                    <div className="option">
                        <AiOutlineEllipsis/>
                    </div>
                </div>
            </div>
        </div>
    )
}