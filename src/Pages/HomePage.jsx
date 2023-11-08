import Banner from "../Components/Home/Banner";
import NewsLetter from "../Components/Home/NewsLetter";
import SomeOfOurRooms from "../Components/Home/FeaturedRooms";
import Footer from "../Components/Shared/Footer";
import PageTitle from "../Components/Shared/PageTitle";


const HomePage = () => {
    return (
        <div className="space-y-5">
            <PageTitle title={"Home"}></PageTitle>
            <Banner></Banner>
            <SomeOfOurRooms></SomeOfOurRooms>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;