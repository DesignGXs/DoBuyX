import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import GetUsers from "./Components/GetUser";


const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

//let URI=process.env.URI;

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:3001/graphql"}),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      {" "}
      <GetUsers />
      {/* <Form /> */}
client/src/App.js
//Hello final worlflow checking

 main
    </ApolloProvider>
  );
}

export default App;
