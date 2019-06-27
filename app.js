import { h, render } from "preact"
import { useState } from "preact/hooks";
import Router from "react-router-dom/BrowserRouter";
import Route from "react-router/Route";
import Header from "./components/header";
import PostList from "./components/postList";
import PostView from "./components/postView";
//import ScrollMemory from "react-router-scroll-memory";

const App = () => {

  const [postViewCache, setPostViewCache] = useState({});


  return (
    <Router>
      <div>
        {/*<ScrollMemory />*/}
        <Header />
        <section className="section container content">
          <Route exact path="/random/using-react-with-wordpress-demo/dist/" component={PostList} />
          <Route
            path="/random/using-react-with-wordpress-demo/dist/:slug"
            render={props => (<PostView {...props} cache={postViewCache} fillCache={setPostViewCache} />)}
          //component={PostView} 
          />
        </section>
      </div>
    </Router>
  )
};

render(<App />, document.getElementById("app"));
