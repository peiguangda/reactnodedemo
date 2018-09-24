import React, {Component} from 'react';
import NewsItemDetail from '../presentation/NewsItemDetail';
import {connect} from 'react-redux'
import {fetchNewsItem} from '../../actions/actions'

class NewsArticle extends Component {

    componentDidMount() {
        var fakeNewsItem = {
            id: '1',
            title: 'Mad owl chases car',
            teaser: 'Mad owl seen tormenting drivers in Morecambe',
            body: `Morecambe - Tuesday 8th August 2017

            Yesterday evening motorists were left running for their lives as a mad owl began a campaign of terror on rush traffic. 
            Eye Witness, Eric Barnes said "When I heard it Squawk in the sky above me, I thought I was done for"`
        };

        this.props.dispatch(fetchNewsItem(fakeNewsItem));
    }

    render() {
        let {newsItem} = this.props;
        const newsItems = this.props.news.map((news, i) => {
            return (
                <div>
                    <h2>News Story</h2>
                    <ul>
                        {newsItem ? <NewsItemDetail data={newsItem}/> : null}
                    </ul>
                </div>
            )
        });

        return (
            <div>
                <h2>News Items</h2>
                {this.props.news.length > 0 ? <ul>{newsItems}</ul> : <div>Sorry we have no news</div>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        newsItem: state.news.newsItem
    }
};

export default connect(mapStateToProps)(NewsArticle);