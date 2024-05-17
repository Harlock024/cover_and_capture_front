import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {setContext} from '@apollo/client/link/context';
import { AUTH_TOKEN } from './constants';

import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';

const root = ReactDOM.createRoot(document.getElementById('root'));



const httpLink = createHttpLink({
  uri: 'http://34.174.42.110:8080/graphql/',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : ''
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


root.render(
  <React.StrictMode>

    <BrowserRouter>
     <ApolloProvider client={client}>
        <App />
      </ApolloProvider>,
    </BrowserRouter>,

  </React.StrictMode>
);

reportWebVitals();
