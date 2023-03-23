interface SubTitleProps{
    title : string;
}
export default function SubTitle({title}:SubTitleProps) {
    return (<h2 className="sub-title">{title}</h2>)
}