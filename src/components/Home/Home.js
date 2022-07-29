import "./Home.scss";
import breadcrumbs from "../../assets/images/breadcrumb all blue .png";
import socials from "../../assets/images/social-icons .png";
import down from "../../assets/images/vectorchevron.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <section className="home__hero">
        <div className="home__hero-container">
          <div>
            <h1 className="home__hero-header">Making the switch </h1>
            <h1 className="home__hero-header"> easier for you.</h1>
          </div>
          <div>
            <p className="home__hero-subheader">
              Find your perfect EV in 3 simple steps
            </p>
          </div>
        </div>
        <div className="home__down">
          <img className="home__down-img" src={down}></img>
        </div>
      </section>

      <section className="home__steps">
        <div className="home__steps-container">
          <article className="home__steps-step">
            <div className="home__steps-card">
              <div className="home__steps-img"></div>
              <p className="home__steps-text--bold">Details</p>
              <p className="home__steps-text">
                Put in your vehicle details of your existing car or one that you
                would like to compare
              </p>
            </div>
          </article>

          <article className="home__steps-step">
            <div className="home__steps-card">
              <div className="home__steps-img2"></div>
              <p className="home__steps-text--bold">Compare</p>
              <p className="home__steps-text">
                Compare vehicles by their carbon offset amount and choose which
                will save you the most money in the future
              </p>
            </div>
          </article>

          <article className="home__steps-step">
            <div className="home__steps-card">
              <div className="home__steps-img3"></div>
              <p className="home__steps-text--bold">Purchase</p>
              <p className="home__steps-text">
                Once chosen click the chosen manufacturers link and be elligible
                for a discount!
              </p>
            </div>
          </article>
        </div>
        <div className="home__steps-breadcrumbs--container">
          <img className="home__steps-breadcrumbs" src={breadcrumbs}></img>
          <div className="home__steps-breadcrumbs--text">
            <p>Step 1</p>
            <p>Step 2</p>
            <p>Step 3</p>
          </div>
        </div>

        <Link to="/form">
          <button className="home__button">
            <h3 className>Let's go</h3>
          </button>
        </Link>
        <img className="home__socials" src={socials}></img>
      </section>
    </div>
  );
};

export default Home;
