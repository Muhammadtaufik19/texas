import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CardGames from "./Component/CardGame/CardGames";
import Dingdong from "./Component/Dingdong/Dingdong";
// import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Register from "./Component/Register/Register";
import Footer from "./Component/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/card-game" component={CardGames} />
        <Route exact path="/dingdong" component={Dingdong} />
        <Route exact path="/register" component={Register} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
