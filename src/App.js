import Template from "./template/Template";
import ProductDetail from "./products/detail/ProductDetail";
import { Switch, Route } from "react-router-dom";
import Landing from "./landing/Landing";
import Introduce from './template/Introduce';
import Service from "./template/Service";
import Service1 from './template/Service1';
import Service2 from './template/Service2';
import Service3 from "./template/Service3";
import Service4 from "./template/Service4";
import Contact from './template/Contact';
import Certificate from './template/Certificate';

function App() {
  return (
    <Template>
      <Switch>
        <Route path="/introduce" exact>
          <Introduce />
        </Route>
        <Route path="/service" exact>
          <Service />
        </Route>
        <Route path="/service1" exact>
          <Service1 />
        </Route>
        <Route path="/service2" exact>
          <Service2 />
        </Route>
        <Route path="/service3" exact>
          <Service3 />
        </Route>
        <Route path="/service4" exact>
          <Service4 />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/certificate" exact>
          <Certificate />
        </Route>
        <Route path="/products/:productId/:type">
          <ProductDetail />
        </Route>
        <Route path="/" exact>
          <Landing />
        </Route>
      </Switch>
    </Template>
  );
}

export default App;
