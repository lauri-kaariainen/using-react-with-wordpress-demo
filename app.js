import { h, render } from "preact"
import Router from "react-router-dom/BrowserRouter";
import Route from "react-router/Route";
import Header from "./components/header";
import PostList from "./components/postList";
import PostView from "./components/postView";

const App = () => (
  <Router>
    <div>
      <Header />
      <section className="section container content">
        <Route exact path="/" component={PostList} />
        <Route path="/:slug" component={PostView} />
      </section>
    </div>
  </Router>
);

render(<App />, document.getElementById("app"));
