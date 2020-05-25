import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "@pages/Home";
import About from "@pages/About";
import List from "@pages/List";

const CustomRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/list" component={List} />
        </Switch>
    );
};

export default CustomRouter;
