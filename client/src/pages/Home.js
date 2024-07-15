const Home = () => {
  return (
    <div className="home">
      <div className="home-bg"></div>
      <div className="home-content">
        <h1>Welcome to MovieBuff</h1>
        <h3>You control the story</h3>
        <p>
          Hello and welcome. Here at movie buff you can add to our growing array
          of movies. Click the link below to get started.
        </p>
        <a href="/movies">
          <button>Click Here</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
