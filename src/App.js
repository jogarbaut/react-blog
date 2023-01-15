// Components imports
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import EditPost from "./EditPost";
import About from "./About";
import Missing from "./Missing";

// React-router-dom
import { Route, Switch } from "react-router-dom";

// Context (allows data to be provided to children components)
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <div className="App">
      {/* DataProvider goes around all components so that data can be accessed (i.e. components can subscribe to DataProvider data) */}
      <Header title="React JS Blog" />
      <DataProvider>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post" component={NewPost} />
          <Route path="/edit/:id" component={EditPost} />
          <Route path="/post/:id" component={PostPage} />
          <Route path="/about" component={About} />
          <Route path="*" component={Missing} />
        </Switch>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;
