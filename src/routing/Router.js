import { Switch, Route } from "react-router-dom";
import { routes } from "../routes/routes";

import Article from "../components/Article/Article";
import IndexPage from "../pages/IndexPage";

const Router = () => {
  return (
    <Switch>
      <Route path={routes.mainPage} component={IndexPage} exact={true} />
      <Route path={routes.article} component={Article} />
    </Switch>
  );
};

export default Router;
