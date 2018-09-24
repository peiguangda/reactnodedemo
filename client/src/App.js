import React, {Component} from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './stores/store';
import './App.css';
import Home from './components/layouts/Home';
import About from './components/layouts/About';
import Layout from './components/layouts/Layout'
import NewsArticle from './components/containers/NewsArticle';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Layout>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path={'news/:id'} component={NewsArticle}/>
                    </Layout>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
