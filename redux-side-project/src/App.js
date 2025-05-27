import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Footer from "./components/main/Footer"
import store from "./store/store"
import {Provider} from "react-redux";
import FoodList from "./components/food/FoodList";
import FoodFind from "./components/food/FoodFind";

function App() {
  // store => 등록된 모든 컴포넌트가 사용이 가능
  return (
      <Provider store={store}>
        <Router>
          <Footer />
        </Router>
      </Provider>
  );
}

export default App;
