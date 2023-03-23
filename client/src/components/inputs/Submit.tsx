import { MouseEvent } from "react";

interface SubmitProps {
    text: string;
    handler? : (e:MouseEvent<HTMLInputElement>) => void;
}
export default function Submit({text, handler}:SubmitProps) {

    const submitHandler = (e:MouseEvent<HTMLInputElement>) => {
        if(handler) {
            handler(e);
        }
    }
    return (
        <div className="input">
            <input 
                className="submit" 
                type="submit" 
                value={text} 
                onClick={submitHandler} />
        </div>
    )
}