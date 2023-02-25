import Header from "./Component/Header/Header";
import SearchPage from "./Component/AppPage/SearchPage/SearchPage";
import "./App.css";
import Sidebar from "./Component/AppPage/Sidebar";
import RecommendedVideos from "./Component/AppPage/RecommendedVideos";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Header></Header>

      <Switch>
        <Route path="/search/:searchTerm">
          <div className="app_page">
            <Sidebar></Sidebar>
            <SearchPage></SearchPage>
          </div>
        </Route>

        <Route path="/">
          <div className="app_page">
            <Sidebar></Sidebar>
            <RecommendedVideos></RecommendedVideos>
          </div>
        </Route>
      </Switch>

      {/* <Header></Header>
      <div className="app_page">
        <Sidebar></Sidebar>
        <RecommendedVideos></RecommendedVideos>
      </div> */}
    </>
  );
}

export default App;
