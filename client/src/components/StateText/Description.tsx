interface DescriptionProps {
    text : string;
}
export default function Description({text}:DescriptionProps) {
    return (
        <div className="state-text description">{text}</div>
    )
}