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
        <Route exact path="/random/using-react-with-wordpress-demo/dist/" component={PostList} />
        <Route path="/random/using-react-with-wordpress-demo/dist/:slug" component={PostView} />
      </section>
    </div>
  </Router>
);

render(<App />, document.getElementById("app"));
