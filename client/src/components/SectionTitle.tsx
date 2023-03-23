interface SectionTitleProps{
    title : string;
}
export default function SectionTitle({title}:SectionTitleProps) {
    return (<h2 className="section-title">{title}</h2>);
}