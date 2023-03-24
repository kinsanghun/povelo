import Carousel from "components/Carousel/Carousel";
import SubTitle from "components/Title";

export default function Main() {
    return (
        <div className="container main">
            <Carousel/>
            <section className="event">
                <SubTitle title="Event" />
                <div>

                </div>
            </section>
            <section className="news">
                <SubTitle title="News" />
                <div>

                </div>
            </section>
        </div>
    )
}