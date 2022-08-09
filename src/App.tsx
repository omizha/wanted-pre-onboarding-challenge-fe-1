import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth from "./pages/Auth";
import Error from "./pages/Error";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <ErrorBoundary FallbackComponent={Error}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/auth" component={Auth} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </ErrorBoundary>
    );
}

export default App();
