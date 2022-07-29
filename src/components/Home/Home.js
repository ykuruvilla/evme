import "./Home.scss";

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
            <h2 className="home__hero-subheader">
              Find your perfect EV in 3 simple steps
            </h2>
          </div>
        </div>
      </section>

      <section className="home__steps">
        <article className="home__steps-container">
          <div>
            <div className="home__steps-img"></div>
            <p className="home__steps-text">
              Put in your vehicle details of your existing car or one that you
              would like to compare
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Home;
