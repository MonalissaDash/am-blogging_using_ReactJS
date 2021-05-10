import './App.css';
import HomePage from './pages/Homepage';
import {BrowserRouter as Router,Route,Switch} from'react-router-dom'
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import NavBar from './NavBar';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPages';



function App() {
  return (
    <>
     <Router>
     <div className="App" >
     <NavBar/>
     <div id='page-body'>
     <Switch>
     <Route path='/' component={HomePage} exact/>
     <Route path='/about' component={AboutPage} />
     <Route path='/articles-lists' component={ArticleListPage} />
     <Route path='/article/:name' component={ArticlePage} />
     <Route component={NotFoundPage}/> {/*  //When no path is given it will take if there is no path */}
     </Switch>
     </div>
    </div>
    </Router>
    </>
  );
}

export default App;
