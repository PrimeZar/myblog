
import NavBar from './NavBar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {



  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className="content">
          <Switch>
            <Route exact path ="/">
            <Home/>
            </Route>
            <Route path ="/create">
              <Create/>
            </Route>

            {/* any name can be use as path = " sideBlog/:idALL" */}
            <Route path = "/myBlog/:idChanges">
              <BlogDetails/>
            </Route >
            
            <Route path="*">
              <NotFound/>
            </Route>

            {/* 
            <Route path = "/myBlog/:new">
              <BlogDetails/>
            </Route > */}
          </Switch> 
          
          
          
        </div>
      </div>
    </Router>
  );
}

export default App;
