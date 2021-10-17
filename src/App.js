import {Switch, BrowserRouter as Router, Route} from "react-router-dom"
import Products from "./pages/Products"
import SingleProduct from './pages/SingleProduct';
import './App.css';
import Root from './pages/Root';
import { pcProducts } from "./helper/constants";
const App = () => 
(
  <div className="App">
   <Router>
     <Switch>
       <Route path="/products" component = {() => <Products products={pcProducts}/>}/>
       <Route path="/product/:productId" component = {() =><SingleProduct products={pcProducts}/>}/>
      <Route path="/" component={Root}/>
     </Switch>
   </Router>

  </div>
);

export default App;
