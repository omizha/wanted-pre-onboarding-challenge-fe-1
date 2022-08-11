import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth from "./pages/AuthPage";
import Error from "./pages/Error";
import Todo from "./pages/TodoPage";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <ErrorBoundary FallbackComponent={Error}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Todo} />
                    <Route exact path="/auth" component={Auth} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </ErrorBoundary>
    );
}

export default App;
