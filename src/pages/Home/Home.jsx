import Banner from "../../components/Banner/Banner";
import DeveloperSection from "../../components/UserTypesSection/DeveloperSection";
import BankerSection from "../../components/UserTypesSection/BankerSection";
import CorporateProfessionalsSection from "../../components/UserTypesSection/CorporateProfessionalsSection";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DeveloperSection></DeveloperSection>
            <CorporateProfessionalsSection></CorporateProfessionalsSection>
            <BankerSection></BankerSection>
        </div>
    );
};

export default Home;