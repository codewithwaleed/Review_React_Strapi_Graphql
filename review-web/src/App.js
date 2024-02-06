import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Category from "./pages/Category";
import HomePage from "./pages/HomePage";
import ReviewDetails from "./pages/ReviewDetail";
import SiteHeader from "./components/SiteHeader";

function App() {
  // apollo client
  const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <SiteHeader />
        </div>

        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route path="/details/:id" element={<ReviewDetails />} />
          <Route path="/category/:id" element={<Category />} />
        </Routes>
      </ApolloProvider>
    </Router>
  );
}

export default App;
