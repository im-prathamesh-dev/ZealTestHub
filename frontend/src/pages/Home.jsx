
import React from "react";

const Home = () => {
  return (
    <div className="text-center mt-5" id="home" data-testid="home-container">
      <h1 data-testid="welcome-header">Welcome to ZealTestHub</h1>
      <p data-testid="platform-description">A platform for conducting online tests and exams.</p>
    </div>
  );
};

export default Home;