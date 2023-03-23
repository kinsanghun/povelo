import { ChangeEvent, forwardRef } from "react"
import "./input.scss";

export interface InputProps {
    readonly id? : any;
    readonly type : string;
    readonly label? : string;
    readonly placeHolder? : string;
    readonly onChange? : (e:ChangeEvent<HTMLInputElement>) => void;
    readonly readonly? : boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref):JSX.Element => {
    return (
        <div className="input">
            <div>
                <input
                    className={props.readonly ? "readonly" : ""}
                    id={props.id ? props.id : null}
                    ref={ref} 
                    type={props.type}
                    onChange={props.onChange}
                    autoComplete={"off"}
                    placeholder={props.placeHolder ? props.placeHolder : ""}
                    readOnly={props.readonly ? props.readonly : false}
                />
                {
                    props.label 
                    ? <label htmlFor={props.id ? props.id : null}>{props.label}</label> 
                    : null
                }
            </div>
        </div>
    )
})

export default Input;