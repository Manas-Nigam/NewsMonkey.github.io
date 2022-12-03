import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';



const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, settotalResults] = useState(0);




    const capitalizeFirstLetter = (string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }



    const updateNews = async () => {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&category=${props.category}&apiKey=1dd6ba6dea624ee08026869c79c64612&page=${page}&pageSize=${props.pageSize}`;
setLoading(true);
        let data = await fetch(url);
        props.setProgress(30)
        let parsedData = await data.json();
        props.setProgress(70)

        setArticles(parsedData.articles);
        setLoading(false);
        settotalResults(parsedData.totalResults);

        props.setProgress(100)

    }


    useEffect(() => {
        document.title = `NewsMonkey | ${capitalizeFirstLetter(props.category)}`
        updateNews();

        // eslint-disable-next-line
    }, [])



   const fetchMoreData = async() => {
        setTimeout(async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&category=${props.category}&apiKey=1dd6ba6dea624ee08026869c79c64612&page=${page + 1}&pageSize=${props.pageSize}`;
            setPage(page + 1)
            let data = await fetch(url);
            let parsedData = await data.json();
            setArticles(articles.concat(parsedData.articles));
            settotalResults(parsedData.totalResults);
        }, 1500);
    };



    return (
        <>
            <h1 id="news-title"><strong><span id="newsmonkey">NewsMonkey</span><span id="top"> - Top {capitalizeFirstLetter(props.category)} Headlines</span></strong></h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row my-4">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage ? element.urlToImage : "https://yt3.ggpht.com/ytc/AMLnZu-keBdIyIfptG_c2KOdt991SfQbuivNVcMiQ08QQA=s900-c-k-c0x00ffffff-no-rj"}
                                    newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )

}



News.defaultProps = {
    pageSize: 5,
    country: "in",
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News;