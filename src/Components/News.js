import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';



export default class News extends Component {
    static defaultProps = {
        pageSize: 5,
        country: "in",
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = `NewsMonkey | ${this.capitalizeFirstLetter(this.props.category)}`
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apiKey=1dd6ba6dea624ee08026869c79c64612&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    async componentDidMount() {
        this.updateNews();
    }

    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1 })
        this.updateNews();
    }

    handlePreviousClick = async () => {
        this.setState({ page: this.state.page - 1 })
        this.updateNews();
    }


    render() {
        return (
            <div className='container my-3'>
                <h1 style={{ "textAlign": 'center', "fontFamily": "Roboto" }}><strong>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</strong></h1>
                {this.state.loading && <Spinner />}
                <div className="row my-4">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage ? element.urlToImage : "https://yt3.ggpht.com/ytc/AMLnZu-keBdIyIfptG_c2KOdt991SfQbuivNVcMiQ08QQA=s900-c-k-c0x00ffffff-no-rj"}
                                newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}