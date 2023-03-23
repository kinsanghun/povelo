import { AiOutlineMeh } from "react-icons/ai";
import "./Post.scss";

interface SkillProps {
    skill : string;
}
export default function Skill({skill}:SkillProps) {
    return (
        <div className="skill"><AiOutlineMeh/>{skill}</div>
    )
}