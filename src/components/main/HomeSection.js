import classes from "./HomeSection.module.css";
import image from "../../assets/travel.jpg";

function HomeSection() {
    return (
            <div className={classes.main_content}>
                <div className={classes.main_content_img}>
                    <img src={image} alt="Image of a destination to Explore"/>
                </div>
                <div className={classes.main_content_desc}>
                    <h2>Welcome To Our Website</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated 
                    they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
            </div>
    );
}

export default HomeSection;