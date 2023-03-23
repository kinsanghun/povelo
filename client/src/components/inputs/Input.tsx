import { ChangeEvent, forwardRef } from "react"
import "./input.scss";

export interface InputProps {
    readonly id? : any;
    readonly type : string;
    readonly label? : string;
    readonly placeHolder? : string;
    readonly onChange? : (e:ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref):JSX.Element => {
    return (
        <div className="input">
            <div>
                <input 
                    id={props.id ? props.id : null}
                    ref={ref} 
                    type={props.type}
                    onChange={props.onChange}
                    autoComplete={"off"}
                    placeholder={props.placeHolder ? props.placeHolder : ""}
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