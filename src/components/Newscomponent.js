import React, { Component } from 'react'
import Newsitem from './Newsitem'
export default class newscomponent extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "CleanTechnica"
            },
            "author": "Johnna Crider",
            "title": "Tesla Owners Club Of East Bay Holds Donation Drive To Help Ukrainian Refugees",
            "description": "The Tesla Owners Club of East Bay (Fremont, California area) is holding a donation drive to support Ukrainian refugees. The group of Tesla owners is rallying to donate to help those impacted by the conflict in Ukraine, and there are three ways you can help. A…",
            "url": "https://cleantechnica.com/2022/03/13/tesla-owners-club-of-east-bay-holds-donation-drive-to-help-ukrainian-refugees/",
            "urlToImage": "https://cleantechnica.com/files/2022/03/Screen-Shot-2022-03-10-at-1.42.18-PM.png",
            "publishedAt": "2022-03-13T14:50:23Z",
            "content": "The Tesla Owners Club of East Bay (Fremont, California area) is holding a donation drive to support Ukrainian refugees. The group of Tesla owners is rallying to donate to help those impacted by the c… [+4221 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Fontanka.ru"
            },
            "author": null,
            "title": "От алкоголя и косметики до Tesla: какую роскошь США запретили поставлять в Россию",
            "description": "The Tesla Owners Club of East Bay (Fremont, California area) is holding a donation drive to support Ukrainian refugees. The group of Tesla owners is rallying to donate to help those impacted by the conflict in Ukraine, and there are three ways you can help. A…",
            "url": "https://www.fontanka.ru/2022/03/13/70505246/",
            "urlToImage": "https://static.ngs.ru/news/2015/social/909e801da2af06345fc3dc3a96c372.png",
            "publishedAt": "2022-03-13T14:35:00Z",
            "content": "\"\" - -, , , , . , -, , , , . , , , , - , - . - \"\"! - , , ."
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Emma Roth",
            "title": "Ford to ship and sell incomplete vehicles with missing chips",
            "description": "Ford has plans to ship and sell vehicles without the chips that power certain non-safety features. The automaker will ship the chips to dealers within one year, which they can then install in customers’ cars.",
            "url": "https://www.theverge.com/2022/3/13/22975246/ford-ship-sell-incomplete-vehicles-missing-chips",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/0UfgG7h74Fp6FksDzFO_xzBiYmU=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19881637/acastro_200406_1777_ford_0002.0.jpg",
            "publishedAt": "2022-03-13T14:34:35Z",
            "content": "The vehicles will still be driveable\r\nIllustration by Alex Castro / The Verge\r\nFord will soon start selling and shipping incomplete, but driveable vehicles that come without the chips that power cert… [+1712 chars]"
        }

    ]
    constructor() {
        super();
        console.log("This is constructer");
        this.state =
        {
            articles: this.articles,
            loading: false,
        }
    }
    render() {
        return (
            <>
                <h3 className='container my-3'>Top Headlines</h3>
                <div className="container">
                    <div className="row">
                        {
                            this.state.articles.map((element) => {
                                console.log(element);
                                return <div className="col-md-4" key={element.url}>
                                    <Newsitem title={element.title.slice(0,44)} discription={element.description.slice(0,88)} imgURL={element.urlToImage} newsURL={element.url} />
                                </div>
                            })}
                    </div>

                </div>
            </>
        )
    }
}

