import "./App.css";
import { Main } from "./pages/Main";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Footer } from "./components/Footer/Footer";

import { store, persistor } from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="page-container">
            <div className="content-wrap">
              <Main />
            </div>
          </div>
        </PersistGate>
      </Provider>
      <Footer />
    </div>
  );
}

export default App;
