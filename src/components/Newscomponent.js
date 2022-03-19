import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';


export default class newscomponent extends Component {

    articles = [
        // {
        //     "source": {
        //         "id": null,
        //         "name": "CleanTechnica"
        //     },
        //     "author": "Johnna Crider",
        //     "title": "Tesla Owners Club Of East Bay Holds Donation Drive To Help Ukrainian Refugees",
        //     "description": "The Tesla Owners Club of East Bay (Fremont, California area) is holding a donation drive to support Ukrainian refugees. The group of Tesla owners is rallying to donate to help those impacted by the conflict in Ukraine, and there are three ways you can help. A…",
        //     "url": "https://cleantechnica.com/2022/03/13/tesla-owners-club-of-east-bay-holds-donation-drive-to-help-ukrainian-refugees/",
        //     "urlToImage": "https://cleantechnica.com/files/2022/03/Screen-Shot-2022-03-10-at-1.42.18-PM.png",
        //     "publishedAt": "2022-03-13T14:50:23Z",
        //     "content": "The Tesla Owners Club of East Bay (Fremont, California area) is holding a donation drive to support Ukrainian refugees. The group of Tesla owners is rallying to donate to help those impacted by the c… [+4221 chars]"
        // },
        // {
        //     "source": {
        //         "id": null,
        //         "name": "Fontanka.ru"
        //     },
        //     "author": null,
        //     "title": "От алкоголя и косметики до Tesla: какую роскошь США запретили поставлять в Россию",
        //     "description": "The Tesla Owners Club of East Bay (Fremont, California area) is holding a donation drive to support Ukrainian refugees. The group of Tesla owners is rallying to donate to help those impacted by the conflict in Ukraine, and there are three ways you can help. A…",
        //     "url": "https://www.fontanka.ru/2022/03/13/70505246/",
        //     "urlToImage": "https://static.ngs.ru/news/2015/social/909e801da2af06345fc3dc3a96c372.png",
        //     "publishedAt": "2022-03-13T14:35:00Z",
        //     "content": "\"\" - -, , , , . , -, , , , . , , , , - , - . - \"\"! - , , ."
        // },
        // {
        //     "source": {
        //         "id": "the-verge",
        //         "name": "The Verge"
        //     },
        //     "author": "Emma Roth",
        //     "title": "Ford to ship and sell incomplete vehicles with missing chips",
        //     "description": "Ford has plans to ship and sell vehicles without the chips that power certain non-safety features. The automaker will ship the chips to dealers within one year, which they can then install in customers’ cars.",
        //     "url": "https://www.theverge.com/2022/3/13/22975246/ford-ship-sell-incomplete-vehicles-missing-chips",
        //     "urlToImage": "https://cdn.vox-cdn.com/thumbor/0UfgG7h74Fp6FksDzFO_xzBiYmU=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19881637/acastro_200406_1777_ford_0002.0.jpg",
        //     "publishedAt": "2022-03-13T14:34:35Z",
        //     "content": "The vehicles will still be driveable\r\nIllustration by Alex Castro / The Verge\r\nFord will soon start selling and shipping incomplete, but driveable vehicles that come without the chips that power cert… [+1712 chars]"
        // }
    ]

    api=process.env.REACT_APP_NEWSCASTER_API2;
    
  
    static defaultProps = {
        country: 'in'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
    }
    constructor() {
        super();
        console.log("This is constructer");
        this.state =
        {
            articles: this.articles,
            loading: false,
            page: 1,
            publishedAt: this.publishedAt,
            author: this.author,
            totalResults:0,

        }
    }
    async updateNews(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&page=${this.state.page}&category=${this.props.category}&apiKey=${this.api}&pageSize=${this.props.pageSize}`;
        

        this.props.setProgress(10);
        
        const response = await fetch(url, {
            method: 'GET',
        });
        this.props.setProgress(30)
        
        
        console.log(response)
        let data = await response.json(); // parses JSON response into native JavaScript objects
        this.props.setProgress(60);
        this.setState({ loading: false })
        this.setState({ articles: data.articles, totalResults: data.totalResults })
        console.log(data.articles)
        
        this.props.setProgress(100)
        
    }
    async componentDidMount() {
        this.updateNews();
        
    }
    fetchMoreData = async() => {
        this.setState({page:this.state.page+1});
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&page=${this.state.page + 1}&category=${this.props.category}&apiKey=${this.api}&pageSize=${this.props.pageSize}`;
        

        const response = await fetch(url, {
            method: 'GET',
        });

        let data = await response.json(); // parses JSON response into native JavaScript objects
        this.setState({ loading: false })
        this.setState(
            { articles: this.state.articles.concat(data.articles), 
            totalResults: data.totalResults })
    };

    // handleNextClick = async () => {
    //     if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

    //     }
    //     else {
    //         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7e8432d97254488dacf3cc951c564850&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //         this.setState({ loading: true })
    //         const response = await fetch(url, {
    //             method: 'GET',
    //         });
    //         let data = await response.json();
    //         this.setState({ loading: false })
    //         this.setState({ articles: data.articles, page: this.state.page + 1 })
    //     }

    // }
    // handlePrevClick = async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7e8432d97254488dacf3cc951c564850&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    //     this.setState({ loading: true })
    //     const response = await fetch(url, {
    //         method: 'GET',
    //     });
    //     let data = await response.json();
    //     this.setState({ loading: false })
    //     this.setState({ articles: data.articles, page: this.state.page - 1 })
    // }
    render() {
        return (
            <>
                <h2 className='text-center my-5'>TODAY'S TOP HEADLINES</h2>
                {
                    // (this.state.loading) ? <Spinner /> : <></>
                }
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length!== this.state.articles.totalResults}
                    loader={<Spinner/>}
                    >
                {/* ----------------------------------This is for Finite scroll (NEXT AND PREVIOUS BUTTON)--------------------------------- */}
                {/* <div className="row">
                        {
                            (!this.state.loading) ? this.state.articles.map((element) => {

                                if (element.url !== null && element.title !== null && element.description !== null && element.url !== null && element.urlToImage !== null) {
                                    return <div className="col-md-4" key={element.url}>
                                        <Newsitem title={element.title.slice(0, 44)} discription={element.description.slice(0, 88)} imgURL={element.urlToImage} newsURL={element.url} author={(element.author) ? (element.author) : "Unknown"} date={element.publishedAt.slice(0, 10)} source={element.source.name} />
                                    </div>
                                }
                            })
                                : <></>
                        }
                    </div> */}


                    {/* ---------------------------------------- INFINITE SCROLL ------------------------------------------------------- */}
                    <div className="container">
                    <div className="row">
                        {
                            (!this.state.loading) ? this.state.articles.map((element) => {

                                if (element.url !== null && element.title !== null && element.description !== null && element.url !== null && element.urlToImage !== null) {
                                    return <div className="col-md-4" key={element.url}>
                                        <Newsitem title={element.title.slice(0, 44)} discription={element.description.slice(0, 88)} imgURL={element.urlToImage} newsURL={element.url} author={(element.author) ? (element.author) : "Unknown"} date={element.publishedAt.slice(0, 10)} source={element.source.name} />
                                    </div>

                                }
                            })
                                : <></>
                        }
                    </div>
                        </div>
                    </InfiniteScroll>

                    {/* ----------------------------PREVIOUS AND NEXT BUTTONS------------------------- */}

                    {/* <div className="container d-flex justify-content-between my-4">
                        <button type="button" disabled={this.state.page <= 1} className="btn btn-primary " onClick={this.handlePrevClick}>&larr; Previous</button>
                        <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div> */
                    }

            </>
        )
    }
}




// callMe()
// {
//     console.log('Callme')
// }
// <button type="button" className="btn btn-primary" onClick={()=>{this.callMe()}}>Test &rarr;</button>