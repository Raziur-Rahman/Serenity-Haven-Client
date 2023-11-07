import NewsLetter from "../Components/Home/NewsLetter";
import Footer from "../Components/Shared/Footer";
import PageTitle from "../Hooks/PageTitle";


const HomePage = () => {
    return (
        <div className="space-y-5">
            <PageTitle title={"Home"}></PageTitle>
            <h1 className="text-7xl text-amber-600">HOme content Will be here</h1>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;