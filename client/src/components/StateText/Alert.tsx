interface AlertProps {
    text : string;
}
export default function Alert({text}:AlertProps) {
    return (<div className="state-text alert">{text}</div>);
}