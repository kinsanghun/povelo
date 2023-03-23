import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PostDetail() {
    const { postId } = useParams();

    useEffect(() => {
        console.log(postId);
    }, [])

    return (
        <div className="container post-detail">
        {postId}
        </div>
    )
}