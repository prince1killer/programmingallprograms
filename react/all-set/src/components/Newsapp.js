// import PropTypes from 'prop-type/s'
import { element } from 'prop-types';
import React, { Component } from 'react'
import Newsvalue from './Newsvalue'

export class Newsapp extends Component {
    article = [
        {
        "source": {
        "id": null,
        "name": "IT World Canada"
        },
        "author": "Jim Love",
        "title": "Hashtag Trending Feb.28th- Man runs cryptomining operation under a high school, Tesla pauses installations of driver assist software following recall, Apple unhelpful as woman’s iPhone stolen",
        "description": "Man runs cryptomining operation under a high school, Tesla pauses installations of driver assist software following recall and Apple not helpful as woman’s iPhone gets stolen, she gets locked out and 10k is stolen from her bank account.   Welcome to Hashtag T…",
        "url": "https://www.itworldcanada.com/article/hashtag-trending-feb-28th-man-runs-cryptomining-operation-under-a-high-school-tesla-pauses-installations-of-driver-assist-software-following-recall-apple-unhelpful-as-womans-iphone-stolen/530013",
        "urlToImage": "https://i.itworldcanada.com/wp-content/uploads/2021/03/hashtag-trending-text-middle2.png",
        "publishedAt": "2023-02-28T10:00:32Z",
        "content": "Man runs cryptomining operation under a high school, Tesla pauses installations of driver assist software following recall and Apple not helpful as womans iPhone gets stolen, she gets locked out and … [+8572 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "astjohn@insider.com (Alexa St. John)",
        "title": "Tesla may be losing EV market share — but it's still winning over converts from other brands",
        "description": "Automaker inventory challenges drew some car-buyers to buy from Tesla last year, but that might not last.",
        "url": "https://www.businessinsider.com/tesla-market-share-car-buyers-brand-loyalty-advantages-automakers-2023-2",
        "urlToImage": "https://i.insider.com/63fce638b8468e001896ab48?width=1200&format=jpeg",
        "publishedAt": "2023-02-28T10:00:00Z",
        "content": "Tesla has been able to keep a loyal fanbase, but some say Elon Musk might not keep his lead forever.\r\nTesla trumped all other automakers in terms of overall brand loyalty (beating out Ford) and most … [+2656 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MarketWatch"
        },
        "author": "Colin Ryan",
        "title": "The stylish 2023 Audi e-tron is all inspired Audi-ness",
        "description": "The all-electric 2023 Audi e-tron luxury midsize SUV brings all the usual upscale Audi attributes while cutting vehicle emissions to zero.",
        "url": "https://www.marketwatch.com/story/the-stylish-2023-audi-e-tron-is-all-inspired-audi-ness-de1a7d69",
        "urlToImage": "https://images.mktw.net/im-731166/social",
        "publishedAt": "2023-02-28T10:00:00Z",
        "content": "The all-electric 2023 Audi e-tron luxury midsize SUV brings all the usual upscale Audi attributes while cutting vehicle emissions to zero. Prices start at $66,800.Available as a regular SUV or a slee… [+10088 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "marketwatch.com",
        "title": "The U.S. is a ‘build-nothing’ country, says economist, earning agreement from Elon Musk",
        "description": "The U.S. can’t build the things it needs to flourish in the 21st century, and permitting rules and not-in-my-backyard resistance is to blame, a high-profile economist writes. Noah Smith, who has a popular Twitter account and runs the Noahpinion blog, writes t…",
        "url": "https://biztoc.com/x/efc3c86abafbe114",
        "urlToImage": "https://c.biztoc.com/p/efc3c86abafbe114/og.webp",
        "publishedAt": "2023-02-28T09:46:04Z",
        "content": "The U.S. cant build the things it needs to flourish in the 21st century, and permitting rules and not-in-my-backyard resistance is to blame, a high-profile economist writes.Noah Smith, who has a popu… [+300 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "marketwatch.com",
        "title": "Elon Musk becomes world’s richest billionaire again, after Tesla stock surge adds $7 billion to his wealth",
        "description": "Elon Musk is the top dog once again, becoming the world’s richest man due to a recent surge in Tesla stock. On Tuesday, Musk was worth $187 billion – a rise of $7 billion from Monday, according to the daily Bloomberg Billionaires Index. Tesla TSLA, shares hav…",
        "url": "https://biztoc.com/x/7fd05605151c5ba8",
        "urlToImage": "https://c.biztoc.com/p/7fd05605151c5ba8/og.webp",
        "publishedAt": "2023-02-28T09:46:04Z",
        "content": "Elon Musk is the top dog once again, becoming the worlds richest man due to a recent surge in Tesla stock.On Tuesday, Musk was worth $187 billion a rise of $7 billion from Monday, according to the da… [+301 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MarketWatch"
        },
        "author": "Steve Goldstein",
        "title": ": The U.S. is a ‘build-nothing’ country, says economist, earning agreement from Elon Musk",
        "description": "The U.S. can't build the things it needs to flourish in the 21st century, and permitting rules and not-in-my-backyard resistance is to blame, a high-profile economist writes.",
        "url": "https://www.marketwatch.com/story/the-u-s-is-a-build-nothing-country-says-economist-earning-agreement-from-elon-musk-100633ba",
        "urlToImage": "https://images.mktw.net/im-733094/social",
        "publishedAt": "2023-02-28T09:41:00Z",
        "content": "The U.S. cant build the things it needs to flourish in the 21st century, and permitting rules and not-in-my-backyard resistance is to blame, a high-profile economist writes.Noah Smith, who has a popu… [+2185 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MarketWatch"
        },
        "author": "Anviksha Patel",
        "title": "Elon Musk becomes world’s richest billionaire again, after Tesla stock surge adds $7 billion to his wealth",
        "description": "Tesla stock surge leads Musk to top the global wealth list again.",
        "url": "https://www.marketwatch.com/story/elon-musk-becomes-worlds-richest-billionaire-again-after-tesla-stock-surge-adds-7-billion-to-his-wealth-4ba62cdb",
        "urlToImage": "https://images.mktw.net/im-725391/social",
        "publishedAt": "2023-02-28T09:40:00Z",
        "content": "Elon Musk is the top dog once again, becoming the worlds richest man due to a recent surge in Tesla stock.\r\nOn Tuesday, Musk was worth $187 billion a rise of $7 billion from Monday, according to the … [+938 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "NDTV News"
        },
        "author": null,
        "title": "\"They Forced Me To Buy It\": Musk's Post On Twitter Deal Sparks Meme Fest",
        "description": "This is not the first time Mr Musk has commented on his new acquisition. A few weeks ago, he had said that he could not believe that he bought the platform.",
        "url": "https://www.ndtv.com/feature/they-forced-me-to-buy-it-musks-post-on-twitter-deal-sparks-meme-fest-3821322",
        "urlToImage": "https://c.ndtvimg.com/2022-11/c09b2vbo_elon-musk-twitter-blue-tick-afp-650_625x300_10_November_22.jpg",
        "publishedAt": "2023-02-28T09:28:02Z",
        "content": "Mr Musk completed Twitter's takeover in October.\r\nBillionaire Elon Musk stunned the world when he announced that he is buying Twitter. The $44 billion acquisition was completed in October last year a… [+2163 chars]"
        },
        {
        "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
        },
        "author": "The Feed",
        "title": "Elon Musk becomes the richest person in the world once again",
        "description": "Elon Musk became the richest person in the world once again on February 28 with a total wealth of $187 billion, according to the Bloomberg Billionaires Index report.",
        "url": "https://economictimes.indiatimes.com/news/new-updates/elon-musk-becomes-the-richest-person-in-the-world-once-again/articleshow/98299833.cms",
        "urlToImage": "https://img.etimg.com/thumb/msid-98300091,width-1070,height-580,imgsize-13618,overlay-economictimes/photo.jpg",
        "publishedAt": "2023-02-28T09:04:25Z",
        "content": "Elon Musk, Tesla CEO became the richest person in the world once again on February 28, according to Bloomberg Billionaires Index report. The Tesla CEO has a wealth of $187 billion, leaving behind Fre… [+1440 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "reuters.com",
        "title": "Elon Musk recruits team to develop OpenAI's ChatGPT rival - The Information",
        "description": "[1/2] Tesla CEO Elon Musk arrives on the red carpet for the automobile awards \"Das Goldene Lenkrad\" (The golden steering wheel) given by a German newspaper in Berlin, Germany, November 12, 2019. REUTERS/Hannibal Hanschke/File Photo Feb 27 (Reuters) - Elon Mus…",
        "url": "https://biztoc.com/x/c60ee4d60c3fbbbc",
        "urlToImage": "https://c.biztoc.com/p/c60ee4d60c3fbbbc/og.webp",
        "publishedAt": "2023-02-28T08:36:05Z",
        "content": "[1/2] Tesla CEO Elon Musk arrives on the red carpet for the automobile awards \"Das Goldene Lenkrad\" (The golden steering wheel) given by a German newspaper in Berlin, Germany, November 12, 2019. REUT… [+308 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "benzinga.com",
        "title": "Tesla Said To Be Inching Close To Mexico Investment Deal After Musk's Call With President",
        "description": "A deal announcement between Mexico and Tesla Inc TSLA is reportedly imminent. What happened: Mexican President Andres Manuel Lopez Obrador and Tesla CEO Elon Musk spoke Monday on the latter’s intent to invest in Mexico. A deal announcement can be expected Tue…",
        "url": "https://biztoc.com/x/47abb187c83bf992",
        "urlToImage": "https://c.biztoc.com/p/47abb187c83bf992/og.webp",
        "publishedAt": "2023-02-28T08:06:07Z",
        "content": "A deal announcement between Mexico and Tesla Inc TSLA is reportedly imminent.What happened: Mexican President Andres Manuel Lopez Obrador and Tesla CEO Elon Musk spoke Monday on the latters intent to… [+298 chars]"
        },
        {
        "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
        },
        "author": "The Feed",
        "title": "Bengaluru's Men's rights activist group worships Elon Musk, shares video on Twitter",
        "description": "A Bengaluru based Men’s rights NGO, Save Indian Family Foundation (SIFF), worships Twitter CEO, Elon Musk, for saving freedom of speech and destroying Woke Ashura.",
        "url": "https://economictimes.indiatimes.com/news/new-updates/bengalurus-mens-rights-activist-group-worships-elon-musk-shares-the-video-on-twitter/articleshow/98297781.cms",
        "urlToImage": "https://img.etimg.com/thumb/msid-98297817,width-1070,height-580,imgsize-15548,overlay-economictimes/photo.jpg",
        "publishedAt": "2023-02-28T07:43:49Z",
        "content": "Real life is stranger than fiction and an Indian NGO reconfirmed the statement. Elon Musk was worshipped in a ceremony organised by Save Indian Family Foundation (SIFF), a men's rights organisation i… [+2122 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "wsj.com",
        "title": "Move Over EVs, Hybrids Are Hot in China",
        "description": "After Tesla , the most highly valued U.S.-listed EV company isn’t homegrown Rivian or Lucid but Li Auto, a Chinese manufacturer that went public in 2020 by listing American depositary receipts. It has a market value of roughly $26 billion, compared with $20 b…",
        "url": "https://biztoc.com/x/a5f7fe3bec151fef",
        "urlToImage": "https://c.biztoc.com/p/a5f7fe3bec151fef/og.webp",
        "publishedAt": "2023-02-28T07:40:05Z",
        "content": "After Tesla , the most highly valued U.S.-listed EV company isnt homegrown Rivian or Lucid but Li Auto, a Chinese manufacturer that went public in 2020 by listing American depositary receipts. It has… [+237 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "marketwatch.com",
        "title": "South Korea’s L&F signs $2.9 billion supply deal with Tesla",
        "description": "South Korean battery-materials maker L&F Co. 066970, signed a $2.91 billion supply contract with Tesla Inc. TSLA, . L&F said in a regulatory filing Tuesday that it would provide high-nickel cathode materials worth 3.835 trillion won to the U.S. electric-vehic…",
        "url": "https://biztoc.com/x/712f3f07edacebbf",
        "urlToImage": "https://c.biztoc.com/p/712f3f07edacebbf/og.webp",
        "publishedAt": "2023-02-28T07:38:08Z",
        "content": "South Korean battery-materials maker L&amp;F Co. 066970, signed a $2.91 billion supply contract with Tesla Inc. TSLA, .L&amp;F said in a regulatory filing Tuesday that it would provide high-nickel ca… [+312 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "reuters.com",
        "title": "Audi will not cut EV prices to follow Tesla's lead",
        "description": "has no plans to cut prices for its electric vehicles, German industry magazine Automobilwoche cited Audi Europe chief Jens Puttfarcken as saying, despite a similar move by market leader Tesla (TSLA.O) that has put pressure on others to follow suit. \"We have o…",
        "url": "https://biztoc.com/x/4e891673844c884c",
        "urlToImage": "https://c.biztoc.com/p/4e891673844c884c/og.webp",
        "publishedAt": "2023-02-28T07:24:05Z",
        "content": "Audi (VOWG.DE) has no plans to cut prices for its electric vehicles, German industry magazine Automobilwoche cited Audi Europe chief Jens Puttfarcken as saying, despite a similar move by market leade… [+276 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "FX Empire"
        },
        "author": "Reuters",
        "title": "Audi will not cut EV prices to follow Tesla’s lead – Audi Europe chief",
        "description": "BERLIN (Reuters) -   Audi has no plans to cut prices for its electric vehicles, German industry magazine Automobilwoche cited Audi Europe chief Jens Puttfarcken as saying, despite a similar move by market leader Tesla that has put pressure on others to follow…",
        "url": "https://www.fxempire.com/news/article/audi-will-not-cut-ev-prices-to-follow-teslas-lead-audi-europe-chief-1296534",
        "urlToImage": "https://responsive.fxempire.com/width/600/webp-lossy-70.q50/_fxempire_/2021/10/Depositphotos_24448463_S-1-3.jpg",
        "publishedAt": "2023-02-28T07:21:18Z",
        "content": "BERLIN (Reuters) Audi has no plans to cut prices for its electric vehicles, German industry magazine Automobilwoche cited Audi Europe chief Jens Puttfarcken as saying, despite a similar move by marke… [+193 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Everything-everywhere.com"
        },
        "author": "Gary Arndt",
        "title": "Perpetual Motion",
        "description": "Podcast Transcript Imagine a device that could supply an unlimited amount of energy. It would solve many of the world’s problems in one fell swoop.  Unfortunately, such a device is impossible to build, but that hasn’t stopped people throughout history from tr…",
        "url": "https://everything-everywhere.com/perpetual-motion/",
        "urlToImage": "https://photos.smugmug.com/Other/n-hRFP2/Podcast-Images/i-45k3Pdp/0/763ec5a5/L/Perpetual%20Motion-L.png",
        "publishedAt": "2023-02-28T07:20:27Z",
        "content": "Subscribe Apple | Google | Spotify | Amazon | Player.FM | TuneInCastbox | Stitcher | Podcast Republic | RSS | Patreon\r\nImagine a device that could supply an unlimited amount of energy. It would solve… [+9720 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Tech Xplore"
        },
        "author": "Glenn CHAPMAN",
        "title": "Twitter cuts more staff as Musk turmoil grows",
        "description": "Reports of more layoffs at Twitter landed on Monday as owner Elon Musk waded into a racism controversy that risked pushing advertisers further away from the struggling platform.",
        "url": "https://techxplore.com/news/2023-02-twitter-staff-musk-turmoil.html",
        "urlToImage": "https://scx2.b-cdn.net/gfx/news/2023/elon-musk-making-twitt-1.jpg",
        "publishedAt": "2023-02-28T07:18:52Z",
        "content": "Reports of more layoffs at Twitter landed on Monday as owner Elon Musk waded into a racism controversy that risked pushing advertisers further away from the struggling platform.\r\nMusk called US media… [+4189 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CleanTechnica"
        },
        "author": "Steve Hanley",
        "title": "Tesla Investor Day 2023 — Will This Change Everything?",
        "description": "Tesla Investor Day is this Wednesday and Morgan Stanley analyst Adam Jonas says we could hear about a lower priced car from Tesla.",
        "url": "https://cleantechnica.com/2023/02/28/tesla-investor-day-2023-will-this-change-everything/",
        "urlToImage": "https://cleantechnica.com/files/2021/08/Tesla-Fremont-Body-Shop-Model-3-Production-CleanTechnica-Watermark.png",
        "publishedAt": "2023-02-28T07:17:24Z",
        "content": "Wednesday, March 1, 2023, may be an historic day for humanity. That is the day Tesla plans to unveil is Master Plan Part III. The Great And Powerful Musk has promised it will be a blockbuster event.\r… [+7235 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "theguardian.com",
        "title": "Elon Musk overstated Tesla’s autopilot and self-driving tech, new lawsuit says",
        "description": "Elon Musk is facing yet another lawsuit as shareholders of Tesla accuse the chief executive and his company of overstating the effectiveness and safety of their electric vehicles’ autopilot and full self-driving technologies. Shareholders have alleged in the …",
        "url": "https://biztoc.com/x/c5cb67cb38450afc",
        "urlToImage": "https://c.biztoc.com/p/c5cb67cb38450afc/og.webp",
        "publishedAt": "2023-02-28T07:16:04Z",
        "content": "Elon Musk is facing yet another lawsuit as shareholders of Tesla accuse the chief executive and his company of overstating the effectiveness and safety of their electric vehicles autopilot and full s… [+299 chars]"
        },
        {
        "source": {
        "id": "bloomberg",
        "name": "Bloomberg"
        },
        "author": null,
        "title": "Northern Ireland Breakthrough Deal & Musk Regains Crown",
        "description": "Overnight on Wall Street is morning in Europe.Monitor your investments 24 hours a day, around the clock from around the globe. Hosted by Caroline Hepker and Roger Hearing.",
        "url": "https://www.bloomberg.com/news/audio/2023-02-28/northern-ireland-breakthrough-deal-musk-regains-crown",
        "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i5bqmekLs_AU/v0/500x500.jpg",
        "publishedAt": "2023-02-28T07:15:00Z",
        "content": "Bloomberg Daybreak EU Podcast Browse all episodesYour morning briefing. The news you need in just 15 minutes. \r\nOn today's podcast:\r\n(1) Sunak secures a \"breakthrough\" deal with the EU on Northern Ir… [+328 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Marketscreener.com"
        },
        "author": "MarketScreener",
        "title": "Audi will not cut EV prices to follow Tesla's lead - Audi Europe chief",
        "description": "(marketscreener.com) Audi has no plans to cut prices for its electric vehicles, German industry magazine Automobilwoche cited Audi Europe chief Jens Puttfarcken as saying, despite a similar move by market leader Tesla that has put pressure on others to follow…",
        "url": "https://www.marketscreener.com/quote/stock/TESLA-INC-6344549/news/Audi-will-not-cut-EV-prices-to-follow-Tesla-s-lead-Audi-Europe-chief-43104621/?utm_medium=RSS&utm_content=20230228",
        "urlToImage": "https://img.zonebourse.com/reuters/2023-01/2023-01-30T101032Z_1_LYNXMPEJ0T0DD_RTROPTP_3_AUTOSHOW-PARIS.JPG",
        "publishedAt": "2023-02-28T07:13:01Z",
        "content": "\"We have our very own pricing policy,\" Puttfarcken was cited as saying. \"We take such a step when it is necessary for the Audi brand.\"\r\n (Reporting by Kirsti Knolle, Editing by Friederike Heine)"
        },
        {
        "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
        },
        "author": "Navdeep Singh",
        "title": "Elon Musk reclaims world's richest man title after 92% rally in Tesla",
        "description": "Elon Musk is the chief executive of Tesla, known for his various business ventures and technological advancements. Musk is also the chief executive of SpaceX, a rocket manufacturing company, and has a stake in the social networking company Twitter",
        "url": "https://economictimes.indiatimes.com/markets/stocks/news/elon-musk-reclaims-worlds-richest-man-title-after-92-rally-in-tesla/articleshow/98296236.cms",
        "urlToImage": "https://img.etimg.com/thumb/msid-98296305,width-1070,height-580,imgsize-712638,overlay-etmarkets/photo.jpg",
        "publishedAt": "2023-02-28T07:05:02Z",
        "content": "With a net worth of $ 187 billion, Billionaire Elon Musk reclaimed his title as the world's richest person, according to Bloomberg Billionaires Index. Musk surpassed France's Bernard Arnault to regai… [+1858 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "tipranks.com",
        "title": "Tesla Stock: The Potential Catalysts That Could Send Shares Higher",
        "description": "After taking a break from its big year-to-date rally, Tesla (NASDAQ:TSLA) shares have resumed their upward trajectory and there is an upcoming catalyst that could sustain the uptick. On Wednesday (March 1), the EV leader will hold an investor day at the Gigaf…",
        "url": "https://biztoc.com/x/fbb0637bb9b0f558",
        "urlToImage": "https://c.biztoc.com/p/fbb0637bb9b0f558/og.webp",
        "publishedAt": "2023-02-28T06:30:08Z",
        "content": "After taking a break from its big year-to-date rally, Tesla (NASDAQ:TSLA) shares have resumed their upward trajectory and there is an upcoming catalyst that could sustain the uptick. On Wednesday (Ma… [+295 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Seeking Alpha"
        },
        "author": "Investor Trip",
        "title": "AMC: Another Short Squeeze Isn't Likely Anytime Soon",
        "description": "AMC Theatres was once one of my favorite short squeeze candidates but I've lost interest due to several key headwinds. Find out my take ahead of Q4 earnings.",
        "url": "https://seekingalpha.com/article/4582638-amc-stock-q4-earnings-preview-another-short-squeeze-isnt-likely-anytime-soon",
        "urlToImage": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1267416315/image_1267416315.jpg?io=getty-c-w1536",
        "publishedAt": "2023-02-28T06:13:31Z",
        "content": "Massimo Giachetti\r\nAMC Entertainment Holdings (NYSE:AMC) will report Q4 2022 earnings on February 28th, 2022 and hopefully provide more insight on the forward 2023 guidance and as well as the upcomin… [+4100 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Insurance Journal"
        },
        "author": "Admin",
        "title": "Tesla, Musk sued by shareholders over self-driving safety claims",
        "description": "Tesla Inc. and its Chief Executive Elon Musk were sued on Monday by shareholders who accused them of overstating the effectiveness and safety of their electric vehicles’ Autopilot and Full Self-Driving technologies. In a proposed class action filed in San …",
        "url": "https://www.insurancejournal.com/news/national/2023/02/28/709744.htm",
        "urlToImage": "https://www.insurancejournal.com/app/uploads/2023/02/Tesla-Bigstock-scaled.jpg",
        "publishedAt": "2023-02-28T06:08:23Z",
        "content": "New You can now listen to Insurance Journal articles!Tesla Inc. and its Chief Executive Elon Musk were sued on Monday by shareholders who accused them of overstating the effectiveness and safety of t… [+2067 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "New York Post"
        },
        "author": "David Propper",
        "title": "Musk once again richest person on the planet, overtaking French magnate",
        "description": "Musk, who owns Twitter and SpaceX, lost his wealthiest title in December to Arnault, who owns and runs LVMH, the world’s most massive luxury goods company.",
        "url": "https://nypost.com/2023/02/28/elon-musk-once-again-is-the-richest-person-on-the-planet/",
        "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/02/newspress-collage-25935646-1677562605610.jpg?quality=75&strip=all&1677544685&w=1024",
        "publishedAt": "2023-02-28T05:57:24Z",
        "content": "Hes back on top.\r\nTwitter and Tesla CEO Elon Musk regained his title as the richest person in the world Monday after he was stuck in second place the last two months, according to Bloomberg.\r\nThe ecc… [+899 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Slashdot.org"
        },
        "author": "feedfeeder",
        "title": "Elon Musk Is World's Richest Person Again After Tesla Stocks Surge 100% - NDTV",
        "description": "Elon Musk Is World's Richest Person Again After Tesla Stocks Surge 100%NDTV Elon Musk is the richest person in the world againCNN Elon Musk back in No. 1 spot on Bloomberg's billionaires listFox Business Five Things You Need to Know to Start Your DayBloomberg…",
        "url": "https://slashdot.org/firehose.pl?op=view&amp;id=170437047",
        "urlToImage": null,
        "publishedAt": "2023-02-28T05:52:37Z",
        "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "fool.com",
        "title": "Why Tesla Stock Jumped Monday",
        "description": "Tesla (TSLA 5.46%) shares are rising Monday as the company prepares for its upcoming Investor Day on March 1. The stock jumped nearly 6% and was holding on to a gain of 4.6% at 11:10 a.m. ET Monday morning. Investors are excited to hear what the company says …",
        "url": "https://biztoc.com/x/ba0aba06c5e7eec4",
        "urlToImage": "https://c.biztoc.com/p/ba0aba06c5e7eec4/og.webp",
        "publishedAt": "2023-02-28T05:48:06Z",
        "content": "Tesla (TSLA 5.46%) shares are rising Monday as the company prepares for its upcoming Investor Day on March 1. The stock jumped nearly 6% and was holding on to a gain of 4.6% at 11:10 a.m. ET Monday m… [+257 chars]"
        },
        {
        "source": {
        "id": "independent",
        "name": "Independent"
        },
        "author": "Josh Marcus",
        "title": "Elon Musk regains spot as richest person in world with $187.1bn net worth",
        "description": "Billionaire lost title last year as Tesla shares dipped",
        "url": "https://www.independent.co.uk/news/world/americas/elon-musk-net-worth-richest-tesla-share-price-b2290828.html",
        "urlToImage": "https://static.independent.co.uk/2023/01/17/19/DAVOS-ELON_MUSK_25882.jpg?quality=75&width=1200&auto=webp",
        "publishedAt": "2023-02-28T05:46:35Z",
        "content": "Sign up to our Evening Headlines email for your daily guide to the latest news\r\nSign up to our free US Evening Headlines email\r\nElon Musk has regained his spot as richest person in the world, with hi… [+1806 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Seeking Alpha"
        },
        "author": "SA Transcripts",
        "title": "Nickel Industries Limited (NICMF) FY 2022 Earnings Call Transcript",
        "description": "Nickel Industries Limited (NICMF) FY 2022 Earnings Conference Call February 28, 2023 7:00 PM ETCorporate ParticipantsJustin Werner - Managing DirectorConference Call ParticipantsAdam Baker...",
        "url": "https://seekingalpha.com/article/4582649-nickel-industries-limited-nicmf-fy-2022-earnings-call-transcript",
        "urlToImage": "https://static.seekingalpha.com/assets/og_image_1200-29b2bfe1a595477db6826bd2126c63ac2091efb7ec76347a8e7f81ba17e3de6c.png",
        "publishedAt": "2023-02-28T05:45:25Z",
        "content": "Nickel Industries Limited (NICMF) FY 2022 Earnings Conference Call February 28, 2023 7:00 PM ET\r\n Corporate Participants\r\n Justin Werner - Managing Director\r\n Conference Call Participants\r\n Adam Bake… [+32338 chars]"
        },
        {
        "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
        },
        "author": "ETtech",
        "title": "Elon Musk hiring AI researchers to develop OpenAI rival: report",
        "description": "Over the last few months, Musk has repeatedly criticized the company for installing safeguards that prevent ChatGPT from producing text that might offend users.",
        "url": "https://economictimes.indiatimes.com/tech/technology/elon-musk-hiring-ai-researchers-to-develop-openai-rival-report/articleshow/98293730.cms",
        "urlToImage": "https://img.etimg.com/thumb/msid-98293678,width-1070,height-580,imgsize-48874,overlay-ettech/photo.jpg",
        "publishedAt": "2023-02-28T05:42:37Z",
        "content": "Elon Musk has approached several artificial intelligence researchers in recent weeks to form a new lab which will work on developing an alternative to ChatGPT, according to US tech publication The In… [+2516 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "billboard.com",
        "title": "Lil Pump Taps Into the ‘Grand Theft Auto’ Metaverse",
        "description": "After dropping his EP Tesla just last week (Feb. 24), 22-year-old rapper Lil Pump is already gearing up for his next project, LP2, by tapping into the metaverse. By way of Grand Theft Auto, the “Gucci Gang” artist created his own virtual world that encompass …",
        "url": "https://biztoc.com/x/8280adb5d861ed83",
        "urlToImage": "https://c.biztoc.com/p/8280adb5d861ed83/og.webp",
        "publishedAt": "2023-02-28T05:42:04Z",
        "content": "After dropping his EP Tesla just last week (Feb. 24), 22-year-old rapper Lil Pump is already gearing up for his next project, LP2, by tapping into the metaverse. By way of Grand Theft Auto, the Gucci… [+306 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Moneycontrol"
        },
        "author": "Moneycontrol News",
        "title": "Tesla#39;s Investor Day: Solar energy, economic EV and robotaxis likely to be in Masterplan 3",
        "description": "Tesla's third Master Plan, which will include information about the company's new lower-cost car platform and its effort to grow to &quot;extreme size,&quot; is soon to be unveiled by Elon Musk.",
        "url": "https://www.moneycontrol.com/news/automobile/teslas-investor-day-solar-energyan-economic-ev-and-robotaxis-likely-to-be-in-masterplan-3-10172561.html",
        "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/01/Collage-Maker-08-Jan-2023-02.05-PM-770x435.jpg",
        "publishedAt": "2023-02-28T05:41:21Z",
        "content": "Tesla's Chief Executive Officer Elon Musk tweeted about convening Tesla's first Investor Day event. The event will take place on March 1st at Tesla's Gigafactory in Austin, Texas.\r\nMusk has said  in … [+2548 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Tech Times"
        },
        "author": "Inno Flores",
        "title": "Elon Musk Hires AI Researchers to Develop ChatGPT Rival",
        "description": "This comes after ChatGPT became popular and gained widespread attention in Silicon Valley.",
        "url": "https://www.techtimes.com/articles/288307/20230228/elon-musk-hires-ai-researchers-develop-chatgpt-rival.htm",
        "urlToImage": "https://1734811051.rsc.cdn77.org/data/images/full/422210/elon-musk-shareholder-lawsuit-trial-continues-in-san-francisco.jpg",
        "publishedAt": "2023-02-28T05:34:35Z",
        "content": "Tesla and Twitter Chief Executive Officer Elon Musk has reportedly recruited AI researchers for the past few weeks as he forms a new research lab. This is an effort to develop an alternative to Open … [+2611 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Motley Fool Australia"
        },
        "author": "James Mickleboro",
        "title": "3 ETFs for smart ASX investors in March",
        "description": "These ETFs provide investors with access to some of the best tech companies in the world...\nThe post 3 ETFs for smart ASX investors in March appeared first on The Motley Fool Australia.",
        "url": "https://www.fool.com.au/2023/02/28/3-etfs-for-smart-asx-investors-in-march/",
        "urlToImage": "https://www.fool.com.au/wp-content/uploads/2021/09/GettyImages-468909939-1-1200x675.jpg",
        "publishedAt": "2023-02-28T05:33:09Z",
        "content": "With a new month upon us, what better time to look at your portfolio and see if there’s room for a new addition or two.\r\nIf youre a fan of exchange traded funds (ETFs), then listed below are three th… [+1709 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "entrepreneur.com",
        "title": "Elon Musk Is the Richest Man In the World",
        "description": "After a brief stint at number 2, the billionaire retakes the top spot, according to the Bloomberg Billionaires Index. Well, that was quick. Elon Musk is now worth $187 billion, according to the latest installment of the Bloomberg Billionaires Index, making hi…",
        "url": "https://biztoc.com/x/6d17d2dac7e3b38a",
        "urlToImage": "https://c.biztoc.com/p/6d17d2dac7e3b38a/og.webp",
        "publishedAt": "2023-02-28T05:30:04Z",
        "content": "After a brief stint at number 2, the billionaire retakes the top spot, according to the Bloomberg Billionaires Index.Well, that was quick.Elon Musk is now worth $187 billion, according to the latest … [+308 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Robb Report"
        },
        "author": "Tlatham21",
        "title": "Elon Musk Has Regained His Title as the World’s Richest Person",
        "description": "The Tesla CEO is back on top after beating out Bernard Arnault.",
        "url": "https://robbreport.com/lifestyle/news/elon-musk-richest-person-again-1234808495/",
        "urlToImage": "https://robbreport.com/wp-content/uploads/2023/02/Elon-Musk-Rich.jpg?w=681&h=383&crop=1",
        "publishedAt": "2023-02-28T05:29:00Z",
        "content": "The volatility surrounding Elon Musk continues—but this time the outcome is positive for the Tesla CEO and Twitter owner.\r\nMusk has found himself back on top as the world’s richest person, according … [+2049 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "ndtv.com",
        "title": "Elon Musk Is World's Richest Person Again After Tesla Stocks Surge 100%",
        "description": "Elon Musk has reclaimed his title as the world's richest person, according to Bloomberg Billionaires Index. In December last year, Bernard Arnault, CEO of the French luxury brand Louis Vuitton, dethroned the Tesla and Twitter CEO from the top rank. Mr Musk wa…",
        "url": "https://biztoc.com/x/63f55d33b566315f",
        "urlToImage": "https://c.biztoc.com/p/63f55d33b566315f/og.webp",
        "publishedAt": "2023-02-28T05:18:05Z",
        "content": "Elon Musk has reclaimed his title as the world's richest person, according to Bloomberg Billionaires Index.In December last year, Bernard Arnault, CEO of the French luxury brand Louis Vuitton, dethro… [+313 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Slashdot.org"
        },
        "author": "feedfeeder",
        "title": "Elon Musk back in No. 1 spot on Bloomberg's billionaires list - Fox Business",
        "description": "Elon Musk back in No. 1 spot on Bloomberg's billionaires listFox Business Elon Musk is the richest person in the world againCNN Elon Musk is once again the richest person in the world: BloombergBusiness Insider Elon Musk Is World's Richest Person Again After …",
        "url": "https://slashdot.org/firehose.pl?op=view&amp;id=170436917",
        "urlToImage": null,
        "publishedAt": "2023-02-28T05:13:32Z",
        "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
        },
        {
        "source": {
        "id": "independent",
        "name": "Independent"
        },
        "author": "Vishwam Sankaran",
        "title": "Elon Musk hires team to build ChatGPT rival – report",
        "description": "Twitter boss had called ChatGPT an example of ‘training AI to be woke’",
        "url": "https://www.independent.co.uk/tech/elon-musk-chatgpt-rival-recruiting-b2290813.html",
        "urlToImage": "https://static.independent.co.uk/2023/02/27/02/newFile-1.jpg?quality=75&width=1200&auto=webp",
        "publishedAt": "2023-02-28T05:13:31Z",
        "content": "For free real time breaking news alerts sent straight to your inbox sign up to our breaking news emails\r\nSign up to our free breaking news emails\r\nTesla chief Elon Musk has reportedly approached AI e… [+2171 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "yahoo.com",
        "title": "Tesla $2.9 Billion Battery Materials Order Sends L&F Surging",
        "description": "South Korea’s L&F Co. jumped as much as 19% after winning a $2.9 billion order from Tesla Inc. and its affiliates to provide cathode materials, a key component in electric vehicle batteries. • None Elon Musk Regains His Spot as the World’s Richest Person • No…",
        "url": "https://biztoc.com/x/193ee38797e254c5",
        "urlToImage": "https://c.biztoc.com/p/193ee38797e254c5/og.webp",
        "publishedAt": "2023-02-28T05:02:06Z",
        "content": "South Koreas L&amp;F Co. jumped as much as 19% after winning a $2.9 billion order from Tesla Inc. and its affiliates to provide cathode materials, a key component in electric vehicle batteries.None E… [+297 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Streetsblog.org"
        },
        "author": "Blake Aued",
        "title": "Tuesday’s Headlines Welcome Our New Robot Overlords",
        "description": "<!-- FeaturedImageEnd -->The kind of AI that helps figure out where sidewalks and crosswalks should go, that is. Not the kind that drives cars.",
        "url": "https://usa.streetsblog.org/2023/02/28/tuesdays-headlines-welcome-our-new-robot-overlords/",
        "urlToImage": "https://usa.streetsblog.org/wp-content/uploads/sites/5/2022/10/3paint2-e1651091227175.jpg",
        "publishedAt": "2023-02-28T05:00:25Z",
        "content": "Path\r\nPath\r\nTuesday’s Headlines Welcome Our New Robot Overlords\r\n<ul><li>Artificial intelligence analyzing satellite photos can help cities decide where to build pedestrian infrastructure much more q… [+2499 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Business Insider South Africa"
        },
        "author": "Sindhu Sundar",
        "title": "Businessinsider.co.za | Elon Musk is once again the richest person in the world",
        "description": "Elon Musk is back atop the list of wealthiest billionaires, Bloomberg reports, trailed by luxury mogul Bernard Arnault and Amazon founder Jeff Bezos.",
        "url": "https://www.businessinsider.co.za/elon-musk-net-worth-passes-bernard-arnault-richest-person-bloomberg-2023-2",
        "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/941/df558ee85c8d4240ade5afe1fd969a4a.jpg",
        "publishedAt": "2023-02-28T04:53:21Z",
        "content": "Elon Musk is back on top of Bloomberg's list of wealthiest people in the world. \r\nMusk, the chief of companies including Tesla and Twitter, now has a net worth of $187.1 billion, according to Bloombe… [+1366 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The Boston Globe"
        },
        "author": "Claire Law",
        "title": "Dorchester man dead after Tesla involved in wrong-way crash in Washington, D.C.",
        "description": "Shortly before 8 a.m. on Feb. 21, Mohammed Islam was driving a 2019 Tesla Model 3 with four passengers headed southbound in the left lane on Connecticut Avenue, Northwest, when he crossed over the solid double yellow lines into oncoming traffic, officials sai…",
        "url": "https://www.bostonglobe.com/2023/02/27/metro/dorchester-man-dead-after-tesla-involved-wrong-way-crash-washington-dc/",
        "urlToImage": "https://www.bostonglobe.com/pf/resources/images/logo-bg.jpg?d=391",
        "publishedAt": "2023-02-28T04:47:52Z",
        "content": "A Dorchester man has died after the Tesla electric vehicle he was driving was involved in a wrong-way crash with three other vehicles last week in Washington, D.C., authorities said.\r\nMohammed Islam,… [+885 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Gadgets360.com"
        },
        "author": "Reuters",
        "title": "Elon Musk Assembling Team to Develop ChatGPT Rival, Held Talks With Former DeepMind AI Researcher: Report",
        "description": "Musk, who had co-founded OpenAI along with Silicon Valley investor Sam Altman in 2015 as a nonprofit startup, had left its board in 2018, but chimed in with his take on the chatbot, calling it \"scary good\".",
        "url": "https://www.gadgets360.com/internet/news/elon-musk-chatgpt-ai-chatbot-rival-artificial-intelligence-new-research-lab-igor-babuschkin-3820521",
        "urlToImage": "https://i.gadgets360cdn.com/large/openai_chatgpt_plus_subscription_unsplash_1675279843231.jpg",
        "publishedAt": "2023-02-28T04:43:09Z",
        "content": "Elon Musk has approached AI researchers in recent weeks about forming a new research lab to develop an alternative to OpenAI's ChatGPT, the Information reported on Monday, citing people with direct k… [+2287 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Business Standard"
        },
        "author": "BS Web Team",
        "title": "Elon Musk returns to the top, becomes richest person on the planet again",
        "description": "The rise in Musk's wealth can be attributed to the rally in Tesla stocks that has outpaced the rally in the Nasdaq 100 Index so far this year",
        "url": "https://www.business-standard.com/article/current-affairs/elon-musk-returns-to-the-top-becomes-richest-person-on-the-planet-again-123022800201_1.html",
        "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2022-06/14/full/1655170498-3944.jpg",
        "publishedAt": "2023-02-28T04:42:04Z",
        "content": "With his wealth rising over $50 billion so far in 2023, Elon Musk, Twitter chief and Tesla chief executive, on February 28 became the world's richest person again, according to the Bloomberg Billiona… [+1671 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "NDTV News"
        },
        "author": null,
        "title": "Elon Musk Is World's Richest Person Again After Tesla Stocks Surge",
        "description": "Elon Musk has regained his spot as the world's richest person, after briefly losing the title to France's Bernard Arnault.",
        "url": "https://www.ndtv.com/world-news/elon-musk-is-worlds-richest-person-again-after-tesla-stocks-surge-3820476",
        "urlToImage": "https://c.ndtvimg.com/2023-02/a8n20tko_elon-musk_625x300_28_February_23.jpg",
        "publishedAt": "2023-02-28T04:24:33Z",
        "content": "Elon Musk has regained his spot as the world's richest person, after briefly losing the title to France's Bernard Arnault.\r\nMusk's wealth has been buoyed by a nearly 70% surge in Tesla Inc.'s stock p… [+2562 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CleanTechnica"
        },
        "author": "Arthur Frederick (Fritz) Hasler",
        "title": "Can Tesla Open Enough Superchargers To Fulfill Needs Of New Teslas + Current Cars + Other EVs?",
        "description": "With Tesla producing a million cars per year in the US soon, and also opening up Superchargers to other EVs, how can Tesla open enough Superchargers to fulfill the charging needs of all of those new Teslas plus the needs of current Tesla cars plus the needs o…",
        "url": "https://cleantechnica.com/2023/02/27/can-tesla-open-enough-superchargers-to-fulfill-needs-of-new-teslas-current-cars-other-evs/",
        "urlToImage": "https://cleantechnica.com/files/2022/07/Tesla-Model-3-Supercharging-Florida-Zach-Shahan-logo-Bazaar-e1659640266606.png",
        "publishedAt": "2023-02-28T04:19:49Z",
        "content": "With Tesla producing a million cars per year in the US soon, and also opening up Superchargers to other EVs, how can Tesla open enough Superchargers to fulfill the charging needs of all of those new … [+7779 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The Online Citizen"
        },
        "author": "The Online Citizen",
        "title": "Twitter cuts more staff as Musk turmoil grows",
        "description": "by Glenn Chapman SAN FRANCISCO, UNITED STATES — Reports of more layoffs at Twitter landed on Monday as owner Elon Musk waded into a racism controversy that risked pushing advertisers further away from the struggling platform. Musk called US media “racist” on …",
        "url": "https://www.theonlinecitizen.com/2023/02/28/twitter-cuts-more-staff-as-musk-turmoil-grows/",
        "urlToImage": "https://www.theonlinecitizen.com/wp-content/uploads/2022/12/elon-musk-twitter.png",
        "publishedAt": "2023-02-28T04:18:36Z",
        "content": "by Glenn Chapman\r\nSAN FRANCISCO, UNITED STATES — Reports of more layoffs at Twitter landed on Monday as owner Elon Musk waded into a racism controversy that risked pushing advertisers further away fr… [+3839 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Wnd.com"
        },
        "author": "Stephen Moore",
        "title": "Scholars rank biggest-spending presidents as the greatest",
        "description": "Before President Joe Biden entered the White House, he consulted with several prominent historians about how to be a great commander in chief. Their answer: Grow government. Spend, spend, spend. Don't worry about blowing up the debt. It was the worst possible…",
        "url": "https://www.wnd.com/2023/02/scholars-rank-biggest-spending-presidents-greatest/",
        "urlToImage": "https://www.wnd.com/wp-content/uploads/2021/06/flags-americans-patriotic-memorial-day-veterans-military-defense-jpg.jpg",
        "publishedAt": "2023-02-28T04:06:22Z",
        "content": "Before President Joe Biden entered the White House, he consulted with several prominent historians about how to be a great commander in chief. Their answer: Grow government. Spend, spend, spend. Don'… [+3035 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The Straits Times"
        },
        "author": "cue",
        "title": "Elon Musk recruits team to develop OpenAI's ChatGPT rival",
        "description": "Musk has been recruiting Igor Babuschkin, a researcher who recently left Alphabet’s DeepMind AI unit.\n Read more at straitstimes.com.",
        "url": "https://www.straitstimes.com/world/united-states/elon-musk-recruits-team-to-develop-openais-chatgpt-rival",
        "urlToImage": "https://static1.straitstimes.com.sg/s3fs-public/styles/large30x20/public/articles/2023/02/28/2022-12-19T110114Z1098537425RC2HZT9EW2B9RTRMADP3NEURALINK-MUSK-USDA_0.JPG?VersionId=pzQAO6byaGAIB_iT_QZr54nhOnB24MZ5",
        "publishedAt": "2023-02-28T04:02:00Z",
        "content": "UNITED STATES Elon Musk has approached AI researchers in recent weeks about forming a new research lab to develop an alternative to OpenAIs ChatGPT, the Information reported on Monday, citing people … [+998 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Moneycontrol"
        },
        "author": "Reuters",
        "title": "Tesla#39;s German plant hits 4,000 cars per week ahead of schedule",
        "description": "The Berlin plant hit the production target three weeks ahead of a production schedule reviewed by Reuters.",
        "url": "https://www.moneycontrol.com/news/world/teslas-german-plant-hits-4000-cars-per-week-ahead-of-schedule-10172451.html",
        "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/07/Tesla-770x433.jpg",
        "publishedAt": "2023-02-28T04:01:19Z",
        "content": "Tesla's German plant in Brandenburg near Berlin is now producing 4,000 cars per week, the company said on Monday, quadrupling from May when Chief Executive Elon Musk had compared investment in Tesla'… [+1922 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Japan Today"
        },
        "author": null,
        "title": "Twitter cuts more staff as Musk turmoil grows",
        "description": "Reports of more layoffs at Twitter landed on Monday as owner Elon Musk waded into a racism controversy that risked pushing advertisers further away from the struggling platform. Musk called U.S. media &quot;racist&quot; on Sunday after multiple American newsp…",
        "url": "https://japantoday.com/category/tech/twitter-cuts-more-staff-as-musk-turmoil-grows",
        "urlToImage": null,
        "publishedAt": "2023-02-28T03:49:16Z",
        "content": "Reports of more layoffs at Twitter landed on Monday as owner Elon Musk waded into a racism controversy that risked pushing advertisers further away from the struggling platform.\r\nMusk called U.S. med… [+3793 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "theguardian.com",
        "title": "Elon Musk overstated Tesla’s autopilot and self-driving tech, new lawsuit says",
        "description": "Elon Musk is facing yet another lawsuit as shareholders of Tesla accuse the chief executive and his company of overstating the effectiveness and safety of their electric vehicles’ autopilot and full self-driving technologies. Shareholders have alleged in the …",
        "url": "https://biztoc.com/x/408438e48d073bd3",
        "urlToImage": "https://c.biztoc.com/p/408438e48d073bd3/og.webp",
        "publishedAt": "2023-02-28T03:40:09Z",
        "content": "Elon Musk is facing yet another lawsuit as shareholders of Tesla accuse the chief executive and his company of overstating the effectiveness and safety of their electric vehicles autopilot and full s… [+299 chars]"
        },
        {
        "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
        },
        "author": "Reuters",
        "title": "US stocks close slightly up after prior week's selloff",
        "description": "All three main stock indexes climbed more than 1% shortly after the opening bell, in part due to an easing in Treasury yields, and all three closed well off their session highs.",
        "url": "https://economictimes.indiatimes.com/markets/stocks/news/us-stocks-close-slightly-up-after-prior-weeks-selloff/articleshow/98290629.cms",
        "urlToImage": "https://img.etimg.com/thumb/msid-98290648,width-1070,height-580,imgsize-131606,overlay-etmarkets/photo.jpg",
        "publishedAt": "2023-02-28T03:32:39Z",
        "content": "Feb 27: U.S. stocks eked out a slight gain on Monday as investors engaged in some bargain hunting after last week's losses, the biggest percentage declines of 2023 for Wall Street's main benchmarks, … [+2987 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Sputnik International"
        },
        "author": "Sputnik International",
        "title": "Tesla Shareholders Sue Company Over Claims About Self-Driving Car Safety",
        "description": "WASHINGTON (Sputnik) - Tesla's shareholders are suing the electric car manufacturer over allegations that the company misled the public about the safety and efficacy of their self-driving vehicles, according to a class action complaint filed in the US Distric…",
        "url": "https://sputniknews.com/20230228/tesla-shareholders-sue-company-over-claims-about-self-driving-car-safety-1107860216.html",
        "urlToImage": "https://cdnn1.img.sputniknews.com/images/sharing/article/eng/1107860216.jpg?10961709001677555158",
        "publishedAt": "2023-02-28T03:32:06Z",
        "content": "\"[Tesla] made materially false and misleading statements regarding the Companys business, operations, and prospects.\" the filing said on Monday. \"Defendants had significantly overstated the efficacy,… [+70 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "marketwatch.com",
        "title": "South Korea’s L&F signs $2.9 billion supply deal with Tesla",
        "description": "South Korean battery-materials maker L&F Co. 066970, signed a $2.91 billion supply contract with Tesla Inc. TSLA, . L&F said in a regulatory filing Tuesday that it would provide high-nickel cathode materials worth 3.835 trillion won to the U.S. electric-vehic…",
        "url": "https://biztoc.com/x/9202f8f9aa681fda",
        "urlToImage": "https://c.biztoc.com/p/9202f8f9aa681fda/og.webp",
        "publishedAt": "2023-02-28T03:28:04Z",
        "content": "South Korean battery-materials maker L&amp;F Co. 066970, signed a $2.91 billion supply contract with Tesla Inc. TSLA, .L&amp;F said in a regulatory filing Tuesday that it would provide high-nickel ca… [+312 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Paul Tan's Automotive News"
        },
        "author": "Gerard Lye",
        "title": "Tesla stops rollout of Full Self-Driving Beta software – nearly 363,000 units of Model S, X, Y and 3 recalled",
        "description": "Tesla has announced it is temporarily stopping the rollout of its Full Self-Driving Beta (FSD Beta) software in the United States and Canada until a firmware update can be issued. This comes after the National […]\nThe post Tesla stops rollout of Full Self-Dri…",
        "url": "https://paultan.org/2023/02/28/tesla-stops-rollout-of-full-self-driving-beta-software/",
        "urlToImage": "https://paultan.org/image/2022/05/tesla-model-range-1200x675.jpg",
        "publishedAt": "2023-02-28T03:27:23Z",
        "content": "Tesla has announced it is temporarily stopping the rollout of its Full Self-Driving Beta (FSD Beta) software in the United States and Canada until a firmware update can be issued. This comes after th… [+2096 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Global News"
        },
        "author": "Gabe Stern",
        "title": "Tesla requests $330M more in tax breaks over new facility expansion in Nevada - National | Globalnews.ca",
        "description": "The new expansion of the Nevada facility is the product of a 2014 deal for when the company first came to the area on the promise of new jobs and major investments in the area.",
        "url": "https://globalnews.ca/news/9515875/tesla-tax-breaks-new-facility-expansion-nevada/",
        "urlToImage": "https://globalnews.ca/wp-content/uploads/2023/02/20230227180252-63fd42abd74bed5ad837d302jpeg.jpg?quality=85&strip=all&w=720&h=379&crop=1",
        "publishedAt": "2023-02-28T03:20:14Z",
        "content": "Tesla may receive over $300 million in tax abatements over the next two decades for a massive new expansion of its northern Nevada facility, the product of a 2014 deal for when the company first came… [+6221 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "marketwatch.com",
        "title": "Why Tesla investor Ross Gerber backed down from his activist push for a board seat",
        "description": "Tesla Inc. investor Ross Gerber backed down from his efforts to get a seat on the electric-vehicle company’s board after he got what he wanted. On Friday, after the market closed, Gerber said in a tweet that he would withdraw his nomination to join the Tesla …",
        "url": "https://biztoc.com/x/a86005bc4ab0c617",
        "urlToImage": "https://c.biztoc.com/p/a86005bc4ab0c617/og.webp",
        "publishedAt": "2023-02-28T03:10:11Z",
        "content": "Tesla Inc. investor Ross Gerber backed down from his efforts to get a seat on the electric-vehicle companys board after he got what he wanted.On Friday, after the market closed, Gerber said in a twee… [+309 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Wnd.com"
        },
        "author": "WND News Services",
        "title": "'No coincidence': Jesus on 'The Chosen' says revival may signal embrace of God on 'massive scale'",
        "description": "(FAITHWIRE) -- Jonathan Roumie — known for portraying Jesus on the hit series “The Chosen” — is swapping his first-century tunic for flower power patterns in the new movie, “Jesus Revolution.” The film, chronicling the Jesus Movement that swept Southern Calif…",
        "url": "https://www.wnd.com/2023/02/no-coincidence-jesus-chosen-says-revival-may-signal-embrace-god-massive-scale/",
        "urlToImage": "https://www.wnd.com/wp-content/uploads/2021/04/the-chosen.jpg",
        "publishedAt": "2023-02-28T03:06:58Z",
        "content": "On the set of \"The Chosen,\" from left, Kian Kavousi as James, George Harrison Xanthis as John, director Dallas Jenkins, and Jonathan Roumie as Jesus. (YouTube screenshot)\r\n(FAITHWIRE) -- Jonathan Rou… [+861 chars]"
        },
        {
        "source": {
        "id": "bloomberg",
        "name": "Bloomberg"
        },
        "author": "Heesu Lee",
        "title": "Tesla $2.9 Billion Battery Materials Order Sends L&F Surging",
        "description": "South Korea’s L&F Co. jumped as much as 19% after winning a $2.9 billion order from Tesla Inc. and its affiliates to provide cathode materials, a key component in electric vehicle batteries.",
        "url": "https://www.bloomberg.com/news/articles/2023-02-28/l-f-wins-2-9-billion-cathode-materials-order-from-tesla",
        "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ipDG84r7J0tw/v0/1200x800.jpg",
        "publishedAt": "2023-02-28T03:06:52Z",
        "content": "South Koreas \r\nL&amp;F Co. jumped as much as 19% after winning a $2.9 billion order from \r\nTesla Inc. and its affiliates to provide cathode materials, a key component in electric vehicle batteries.\r\n… [+265 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "watcher.guru",
        "title": "Elon Musk Reportedly Recruiting Team to Develop OpenAI ChatGPT Rival",
        "description": "OpenAI’s ChatGPT, an artificial intelligence [AI] chatbot has been taking the world by storm. ChatGPT managed to garner over 100 million users in just two months of its launch. Additionally, it has more than 13 million daily visitors. Thanks to this, it soon …",
        "url": "https://biztoc.com/x/1035a475a9830187",
        "urlToImage": "https://c.biztoc.com/p/1035a475a9830187/og.webp",
        "publishedAt": "2023-02-28T03:06:06Z",
        "content": "OpenAIs ChatGPT, an artificial intelligence [AI] chatbot has been taking the world by storm. ChatGPT managed to garner over 100 million users in just two months of its launch. Additionally, it has mo… [+296 chars]"
        },
        {
        "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
        },
        "author": "Reuters",
        "title": "Tesla, Elon Musk sued by shareholders over self-driving safety claims",
        "description": "In a proposed class action filed in San Francisco federal court, shareholders said Tesla defrauded them over four years with false and misleading statements that concealed how its technologies, suspected as a possible cause of multiple fatal crashes, \"created…",
        "url": "https://economictimes.indiatimes.com/tech/technology/tesla-elon-musk-sued-by-shareholders-over-self-driving-safety-claims/articleshow/98290038.cms",
        "urlToImage": "https://img.etimg.com/thumb/msid-98290101,width-1070,height-580,imgsize-224966,overlay-ettech/photo.jpg",
        "publishedAt": "2023-02-28T03:04:38Z",
        "content": "Tesla Inc and its Chief Executive Elon Musk were sued on Monday by shareholders who accused them of overstating the effectiveness and safety of their electric vehicles' Autopilot and Full Self-Drivin… [+2006 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Motley Fool Australia"
        },
        "author": "Sebastian Bowen",
        "title": "Surging Tesla share price propels Elon Musk to world’s richest person again",
        "description": "Here's how Elon Musk got his fortune back. \nThe post Surging Tesla share price propels Elon Musk to world’s richest person again appeared first on The Motley Fool Australia.",
        "url": "https://www.fool.com.au/2023/02/28/surging-tesla-share-price-propels-elon-musk-to-worlds-richest-person-again/",
        "urlToImage": "https://www.fool.com.au/wp-content/uploads/2022/02/charging-3-16.9-1200x675.jpg",
        "publishedAt": "2023-02-28T02:56:45Z",
        "content": "The share market moves around a lot. We, investors, know this, since enduring the volatility of the share market is one of the hardest parts of investing. But shares going up and down have more conse… [+2458 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "benzinga.com",
        "title": "Elon Musk To Reportedly Develop ChatGPT Rival With Help From Former Google AI Scientist",
        "description": "Tesla, SpaceX, and Twitter CEO Elon Musk reportedly made recruiting efforts in recent weeks in order to form a new lab that will emerge as a rival to OpenAI’s ChatGPT. What Happened: Musk approached Igor Babuschkin, a researcher formerly with Google Parent Al…",
        "url": "https://biztoc.com/x/e7f9560fb680be27",
        "urlToImage": "https://c.biztoc.com/p/e7f9560fb680be27/og.webp",
        "publishedAt": "2023-02-28T02:56:04Z",
        "content": "Tesla, SpaceX, and Twitter CEO Elon Musk reportedly made recruiting efforts in recent weeks in order to form a new lab that will emerge as a rival to OpenAIs ChatGPT.What Happened: Musk approached Ig… [+313 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Marketscreener.com"
        },
        "author": "MarketScreener",
        "title": "South Korea's L&F Signs $2.9 Billion Supply Deal With Tesla",
        "description": "(marketscreener.com) \n By Kwanwoo Jun \n\n\n South Korean battery-materials maker L&F Co. signed a $2.91 billion supply contract with Tesla Inc. \n\n L&F said in a regulatory filing Tuesday that it would provide high-nickel cathode materials worth 3.835 trillion w…",
        "url": "https://www.marketscreener.com/quote/stock/L-F-CO-LTD-6496607/news/South-Korea-s-L-F-Signs-2-9-Billion-Supply-Deal-With-Tesla-43103603/?utm_medium=RSS&utm_content=20230228",
        "urlToImage": "https://www.marketscreener.com/images/twitter_MS_fdgris.png",
        "publishedAt": "2023-02-28T02:55:00Z",
        "content": "By Kwanwoo Jun \r\nSouth Korean battery-materials maker L&amp;F Co. signed a $2.91 billion supply contract with Tesla Inc. \r\nL&amp;F said in a regulatory filing Tuesday that it would provide high-nicke… [+984 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Wnd.com"
        },
        "author": "Randy DeSoto, The Western Journal",
        "title": "'Jesus Revolution' more than doubles industry estimates at box office on opening weekend",
        "description": "The film \"Jesus Revolution\" more than doubled industry estimates, taking in over $15 million at the weekend box office and earning a third place finish overall. Deadline reported that the story about the Jesus movement in the late 1960s and 70s was forecasted…",
        "url": "https://www.wnd.com/2023/02/jesus-revolution-doubles-industry-estimates-box-office-opening-weekend/",
        "urlToImage": "https://www.wnd.com/wp-content/uploads/2023/02/Jesus-Revolution-1.jpg",
        "publishedAt": "2023-02-28T02:52:29Z",
        "content": "The film \"Jesus Revolution\" more than doubled industry estimates, taking in over $15 million at the weekend box office and earning a third place finish overall.\r\nDeadline reported that the story abou… [+4700 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MarketWatch"
        },
        "author": "Kwanwoo Jun",
        "title": "Dow Jones Newswires: South Korea’s L&F signs $2.9 billion supply deal with Tesla",
        "description": "L&F said in a regulatory filing Tuesday that it would provide high-nickel cathode materials worth 3.835 trillion won to the U.S. electric-vehicle giant.",
        "url": "https://www.marketwatch.com/story/south-korea-s-l-f-signs-2-9b-supply-deal-with-tesla-e0ff2b25",
        "urlToImage": "https://mw3.wsj.net/mw5/content/logos/mw_logo_social.png",
        "publishedAt": "2023-02-28T02:40:00Z",
        "content": "South Korean battery-materials maker L&amp;F Co. \r\n 066970,\r\n +10.81%\r\nsigned a $2.91 billion supply contract with Tesla Inc. \r\n TSLA,\r\n +5.46%\r\n.\r\nL&amp;F said in a regulatory filing Tuesday that it… [+910 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Yahoo Entertainment"
        },
        "author": "Heesu Lee and Shinhye Kang",
        "title": "Tesla $2.9 Billion Battery Materials Order Sends L&F Surging",
        "description": "(Bloomberg) -- South Korea’s L&F Co. jumped as much as 19% after winning a $2.9 billion order from Tesla Inc. and its affiliates to provide cathode materials...",
        "url": "https://finance.yahoo.com/news/tesla-2-9-billion-battery-023841766.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/2um5JUMZNHBkryjnA_z.bg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_technology_68/a4d4ba0576145eddb25d694d94c1b40f",
        "publishedAt": "2023-02-28T02:38:41Z",
        "content": "(Bloomberg) -- South Koreas L&amp;F Co. jumped as much as 19% after winning a $2.9 billion order from Tesla Inc. and its affiliates to provide cathode materials, a key component in electric vehicle b… [+1050 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "yahoo.com",
        "title": "Tesla, Musk sued by shareholders over self-driving safety claims",
        "description": "Tesla Inc and its Chief Executive Elon Musk were sued on Monday by shareholders who accused them of overstating the effectiveness and safety of their electric vehicles' Autopilot and Full Self-Driving technologies. In a proposed class action filed in San Fran…",
        "url": "https://biztoc.com/x/abc601933acf2953",
        "urlToImage": "https://c.biztoc.com/p/abc601933acf2953/og.webp",
        "publishedAt": "2023-02-28T02:38:11Z",
        "content": "Tesla Inc and its Chief Executive Elon Musk were sued on Monday by shareholders who accused them of overstating the effectiveness and safety of their electric vehicles' Autopilot and Full Self-Drivin… [+308 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Wnd.com"
        },
        "author": "Johnathan Jones, The Western Journal",
        "title": "Trump must agree to new ultimatum to appear on Republican debate stage",
        "description": "Republican National Committee Chairwoman Ronna McDaniel will require all 2024 GOP presidential contenders to sign a pledge to back the party’s nominee if they wish to participate in primary debates. That includes former President Donald Trump, who was the fir…",
        "url": "https://www.wnd.com/2023/02/trump-must-agree-new-ultimatum-appear-debate-stage/",
        "urlToImage": "https://www.wnd.com/wp-content/uploads/2020/09/chris-wallace-donald-trump-first-debate-jpg.jpg",
        "publishedAt": "2023-02-28T02:25:29Z",
        "content": "Republican National Committee Chairwoman Ronna McDaniel will require all 2024 GOP presidential contenders to sign a pledge to back the partys nominee if they wish to participate in primary debates.\r\n… [+2448 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "reuters.com",
        "title": "Tesla, Musk sued by shareholders over self-driving safety claims",
        "description": "and its Chief Executive Elon Musk were sued on Monday by shareholders who accused them of overstating the effectiveness and safety of their electric vehicles' Autopilot and Full Self-Driving technologies. In a proposed class action filed in San Francisco fede…",
        "url": "https://biztoc.com/x/7193009e9f30d4f0",
        "urlToImage": "https://c.biztoc.com/p/7193009e9f30d4f0/og.webp",
        "publishedAt": "2023-02-28T02:24:06Z",
        "content": "Tesla Inc (TSLA.O) and its Chief Executive Elon Musk were sued on Monday by shareholders who accused them of overstating the effectiveness and safety of their electric vehicles' Autopilot and Full Se… [+319 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CNET"
        },
        "author": "Daniel Van Boom",
        "title": "This Bored Ape NFT Key Just Sold for $1.6M",
        "description": "An 18-year-old esports pro won this mysterious key NFT in a gaming competition -- then sold it for 1,000 ether.",
        "url": "https://www.cnet.com/culture/this-bored-ape-nft-key-just-sold-for-1-6m/",
        "urlToImage": "https://www.cnet.com/a/img/resize/b502953b72edc44bc8a461380058c014c17cdec6/hub/2023/02/28/3a684200-dde5-4b56-ba45-48ac5ce6a8a6/screen-shot-2023-02-28-at-11-24-51-am.png?auto=webp&fit=crop&height=630&width=1200",
        "publishedAt": "2023-02-28T02:22:45Z",
        "content": "NFTs are down, but not yet out. Harkening back to the bull run of 2021, when strange NFTs sold for mystifying prices, an NFT of a key sold for $1.6 million (1,000 ether) on Monday. As with most big-m… [+2849 chars]"
        },
        {
        "source": {
        "id": "google-news",
        "name": "Google News"
        },
        "author": null,
        "title": "Elon Musk Reclaims The Title Of World's Richest Person - NDTV",
        "description": "<ol><li>Elon Musk Reclaims The Title Of World's Richest Person  NDTV\r\n</li><li>Elon Musk becomes world's richest again on Tesla shares surge | Mint  Mint\r\n</li><li>Elon Musk is world's richest person again after 100% Tesla stock surge  Hindustan Times\r\n</li><…",
        "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiWmh0dHBzOi8vd3d3Lm5kdHYuY29tL3dvcmxkLW5ld3MvZWxvbi1tdXNrLXJlY2xhaW1zLXRoZS10aXRsZS1vZi13b3JsZHMtcmljaGVzdC1tYW4tMzgyMDMyONIBYGh0dHBzOi8vd3d3Lm5kdHYuY29tL3dvcmxkLW5ld3MvZWxvbi1tdXNrLXJlY2xhaW1zLXRoZS10aXRsZS1vZi13b3JsZHMtcmljaGVzdC1tYW4tMzgyMDMyOC9hbXAvMQ?oc%3D5&gl=FR&hl=en-US&pc=n&src=1",
        "urlToImage": null,
        "publishedAt": "2023-02-28T02:22:00Z",
        "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "HYPEBEAST"
        },
        "author": "info@hypebeast.com (Hypebeast)",
        "title": "Elon Musk Regains Richest Person in the World Title as Tesla Stock Surges",
        "description": "According to reports, Elon Musk has regained his spot as the world's richest person. Claiming the title once again, the Tesla CEO, SpaceX CEO and Chief Engineer, The Boring Company Founder, Neuralink and OpenAI Co-Founder, and the Twitter owner lost the cover…",
        "url": "https://hypebeast.com/2023/2/tesla-stock-surge-elon-musk-richest-person-in-the-world-title-again-info",
        "urlToImage": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F02%2Ftesla-stock-surge-elon-musk-richest-person-in-the-world-title-again-info-tw.jpg?w=960&cbr=1&q=90&fit=max",
        "publishedAt": "2023-02-28T02:21:30Z",
        "content": "According to reports, Elon Musk has regained his spot as the world’s richest person. Claiming the title once again, the Tesla\r\n CEO, SpaceX CEO and Chief Engineer, The Boring Company Founder, Neurali… [+858 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Seeking Alpha"
        },
        "author": "SA Transcripts",
        "title": "Lincoln Educational Services Corporation (LINC) Q4 2022 Earnings Call Transcript",
        "description": "Lincoln Educational Services Corporation (NASDAQ:NASDAQ:LINC) Q4 2022 Earnings Conference Call February 27, 2023 10:00 AM ETCompany ParticipantsMichael Polyviou - Investor RelationsScott...",
        "url": "https://seekingalpha.com/article/4582580-lincoln-educational-services-corporation-linc-q4-2022-earnings-call-transcript",
        "urlToImage": "https://static.seekingalpha.com/assets/og_image_1200-29b2bfe1a595477db6826bd2126c63ac2091efb7ec76347a8e7f81ba17e3de6c.png",
        "publishedAt": "2023-02-28T02:18:09Z",
        "content": "Lincoln Educational Services Corporation (NASDAQ:LINC) Q4 2022 Earnings Conference Call February 27, 2023 10:00 AM ET\r\n Company Participants\r\n Michael Polyviou - Investor Relations\r\n Scott Shaw - Pre… [+39919 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Business Today"
        },
        "author": "Reuters",
        "title": "Tesla, Musk sued by shareholders over self-driving safety claims",
        "description": "The share price also fell 5.7% on Feb. 16 after NHTSA forced a recall of more than 362,000 Tesla vehicles equipped with Full Self-Driving beta software because they could be unsafe around intersections.",
        "url": "https://www.businesstoday.in/auto/story/tesla-musk-sued-by-shareholders-over-self-driving-safety-claims-371666-2023-02-28",
        "urlToImage": "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202302/teslap1200-sixteen_nine_0-sixteen_nine.jpg",
        "publishedAt": "2023-02-28T02:14:38Z",
        "content": "Tesla Inc and its Chief Executive Elon Musk were sued on Monday by shareholders who accused them of overstating the effectiveness and safety of their electric vehicles' Autopilot and Full Self-Drivin… [+1909 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "NDTV News"
        },
        "author": null,
        "title": "Elon Musk Reclaims The Title Of World's Richest Person",
        "description": "In December last year, Bernard Arnault, CEO of the French luxury brand Louis Vuitton, dethroned the Tesla and Twitter CEO from the top rank.",
        "url": "https://www.ndtv.com/world-news/elon-musk-reclaims-the-title-of-worlds-richest-man-3820328",
        "urlToImage": "https://c.ndtvimg.com/2023-01/e3p66s1o_elon-musk-afp-650_650x400_26_January_23.jpg",
        "publishedAt": "2023-02-28T02:14:23Z",
        "content": "Elon Musk's net worth fell by over $200 billion between November and December.\r\nElon Musk has reclaimed his title as the world's richest person, according to Bloomberg Billionaires Index. \r\nIn Decemb… [+1608 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "NDTV News"
        },
        "author": null,
        "title": "Elon Musk Recruits Team To Develop ChatGPT Rival: Report",
        "description": "Elon Musk has approached AI researchers in recent weeks about forming a new research lab to develop an alternative to OpenAI's ChatGPT, the Information reported on Monday, citing people with direct knowledge of the effort.",
        "url": "https://www.ndtv.com/world-news/elon-musk-recruits-team-to-develop-chatgpt-rival-report-3820327",
        "urlToImage": "https://c.ndtvimg.com/2023-02/1tqbf3ms_elon-musk_625x300_28_February_23.jpg",
        "publishedAt": "2023-02-28T02:14:14Z",
        "content": "Elon Musk has approached AI researchers in recent weeks about forming a new research lab to develop an alternative to OpenAI's ChatGPT, the Information reported on Monday, citing people with direct k… [+1138 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Wnd.com"
        },
        "author": "Richard Moorhead, The Western Journal",
        "title": "Prominent Fox News journalist reveals he's dealing with serious problem: 'Altered my life and mind forever'",
        "description": "Reporting from the front lines of Russia's invasion of Ukraine has left one Fox News journalist with lasting trauma, he revealed Saturday. Trey Yingst disclosed the effects of his experience in an opinion piece for USA Today. The journalist -- who previously …",
        "url": "https://www.wnd.com/2023/02/prominent-fox-journalist-reveals-dealing-post-traumatic-stress-altered-life-mind-forever/",
        "urlToImage": "https://www.wnd.com/wp-content/uploads/2022/01/TV-television-camera-operator-videographer-news-media-reporters-lens-journalists-filming-movies-pixabay.jpg",
        "publishedAt": "2023-02-28T02:05:30Z",
        "content": "Reporting from the front lines of Russia's invasion of Ukraine has left one Fox News journalist with lasting trauma, he revealed Saturday.\r\nTrey Yingst disclosed the effects of his experience in an o… [+2876 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Theregister.com"
        },
        "author": "Katyanna Quach",
        "title": "Tesla hits the brakes on rollout of Full Self-Driving code to new users",
        "description": "Those that signed up for the $15,000 package told to queue behind those waiting for safety upgrade\nTesla has hit the brakes on the rollout of its Full Self-Driving Beta software to new customers, while it delivers an update to faulty code in existing at least…",
        "url": "https://www.theregister.com/2023/02/28/tesla_has_to_fix_safety/",
        "urlToImage": "https://regmedia.co.uk/2017/09/04/tesla_photo_via_shutterstock.jpg",
        "publishedAt": "2023-02-28T02:01:06Z",
        "content": "Tesla has hit the brakes on the rollout of its Full Self-Driving Beta software to new customers, while it delivers an update to faulty code in existing at least 362,758 cars already using the softwar… [+2115 chars]"
        },
        {
        "source": {
        "id": "associated-press",
        "name": "Associated Press"
        },
        "author": "Gabe Stern",
        "title": "Nevada board to vote on $330M in additional Tesla tax breaks",
        "description": "RENO, Nev. (AP) — Tesla may receive over $300 million in tax abatements over the next two decades for a massive new expansion of its northern Nevada facility, the product of a 2014 deal for when the company first came to the area on the promise of new jobs an…",
        "url": "https://apnews.com/article/tesla-nevada-elon-musk-2dbd1f41f7b2656661a4bea6299d12b9",
        "urlToImage": "https://storage.googleapis.com/afs-prod/media/ced915ed327145b7ab4061dec3e8ff74/3000.webp",
        "publishedAt": "2023-02-28T01:59:40Z",
        "content": "RENO, Nev. (AP) Tesla may receive over $300 million in tax abatements over the next two decades for a massive new expansion of its northern Nevada facility, the product of a 2014 deal for when the co… [+6118 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The Guardian"
        },
        "author": "Kari Paul and agencies",
        "title": "Elon Musk overstated Tesla’s autopilot and self-driving tech, new lawsuit says",
        "description": "Shareholders sue the Twitter CEO again, alleging they were defrauded with false claims of the vehicles’ capabilitiesElon Musk is facing yet another lawsuit as shareholders of Tesla accuse the chief executive and his company of overstating the effectiveness an…",
        "url": "https://www.theguardian.com/technology/2023/feb/27/elon-musk-tesla-lawsuit-autopilot",
        "urlToImage": "https://i.guim.co.uk/img/media/507c6ba18333b1c786cb97ce07c6f6b26ee0d77a/1672_911_3263_1959/master/3263.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=2171f7b68cb1083483c7cd631554058f",
        "publishedAt": "2023-02-28T01:59:06Z",
        "content": "Elon Musk is facing yet another lawsuit as shareholders of Tesla accuse the chief executive and his company of overstating the effectiveness and safety of their electric vehicles autopilot and full s… [+2380 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "cnbc.com",
        "title": "Stocks making the biggest moves midday: Union Pacific, Fisker, Tesla, Zillow and more",
        "description": "Check out the companies making headlines in midday trading. Union Pacific – Union Pacific's stock gained more than 10% after the company announced that its current CEO would step down in 2023. Bank of America upgraded the railroad operator to a buy from neutr…",
        "url": "https://biztoc.com/x/558741a0559d8389",
        "urlToImage": "https://c.biztoc.com/p/558741a0559d8389/og.webp",
        "publishedAt": "2023-02-28T01:56:05Z",
        "content": "Check out the companies making headlines in midday trading.Union Pacific Union Pacific's stock gained more than 10% after the company announced that its current CEO would step down in 2023. Bank of A… [+305 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Freerepublic.com"
        },
        "author": "Nation and State",
        "title": "Elon Musk Regains \"World's Richest Man\" Spot After Losing the Position Briefly to LVMH’s Bernard Arnault",
        "description": "Elon Musk has regained his spot as the world's richest man, unseating LVMH's Bernard Arnault who briefly assumed the position this year after Tesla's stock had taken a beating along with Musk's net worth.Bezos, Gates, and Buffett aren't even close...Thanks to…",
        "url": "https://freerepublic.com/focus/f-chat/4134425/posts",
        "urlToImage": null,
        "publishedAt": "2023-02-28T01:54:29Z",
        "content": "Skip to comments.\r\nElon Musk Regains \"World's Richest Man\" Spot After Losing the Position Briefly to LVMHs Bernard Arnault Nation and State ^\r\n | 02/27/2023\r\n | Tyler Durden\r\nPosted on 02/27/2023 5:5… [+3055 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Marketscreener.com"
        },
        "author": "MarketScreener",
        "title": "S.Korea's L&F wins $2.9 billion order from Tesla its affiliates",
        "description": "(marketscreener.com) South Korea's L&F Co Ltd said on Tuesday it has won an order worth 3.83 trillion won from Tesla Inc and its affiliates. https://www.marketscreener.com/quote/stock/L-F-CO-LTD-6496607/news/S-Korea-s-L-F-wins-2-9-billion-order-from-Tesla-its…",
        "url": "https://www.marketscreener.com/quote/stock/L-F-CO-LTD-6496607/news/S-Korea-s-L-F-wins-2-9-billion-order-from-Tesla-its-affiliates-43103506/?utm_medium=RSS&utm_content=20230228",
        "urlToImage": "https://img.zonebourse.com/reuters/2023-01/2023-01-02T171844Z_1_LYNXMPEJ010AO_RTROPTP_3_AUTOS-ELECTRIC-NORWAY.JPG",
        "publishedAt": "2023-02-28T01:51:01Z",
        "content": "L&amp;F Co plans to supply cathode materials to Tesla starting January 2024 and through until December 2025, the company said in a regulatory filing. \r\n($1 = 1,316.9400 won)\r\n (Reporting by Choonsik … [+49 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CNA"
        },
        "author": null,
        "title": "S Korea's L&F wins $2.9 billion order from Tesla its affiliates",
        "description": "SEOUL : South Korea's L&F Co Ltd said on Tuesday it has won an order worth 3.83 trillion won ($2.91 billion) from Tesla Inc and its affiliates. L&F Co plans to supply cathode materials to Tesla starting January 2024 and through until December 2025, the compan…",
        "url": "https://www.channelnewsasia.com/business/s-koreas-lf-wins-29-billion-order-tesla-its-affiliates-3310651",
        "urlToImage": "https://onecms-res.cloudinary.com/image/upload/s--LVtdelJ---/fl_relative,g_south_east,l_one-cms:core:watermark:reuters,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/one-cms/core/2023-02-28t015101z_1_lynxmpej1r02l_rtroptp_3_tesla-lawsuit.jpg?itok=D86AkqfB",
        "publishedAt": "2023-02-28T01:51:01Z",
        "content": "We know it's a hassle to switch browsers but we want your experience with CNA to be fast, secure and the best it can possibly be.\r\nTo continue, upgrade to a supported browser or, for the finest exper… [+30 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "International Business Times"
        },
        "author": "Daniel Lee",
        "title": "How To Get Into The Top Universities Of Your Choice (Apart From Cheat)",
        "description": "Sometimes the news agenda throws up stories at the same time, which then sheds light on the need for something else which is coming along.",
        "url": "https://www.ibtimes.com/how-get-top-universities-your-choice-apart-cheat-3672118",
        "urlToImage": "https://d.ibtimes.com/en/full/4425806/sylvester-lewis.jpg",
        "publishedAt": "2023-02-28T01:46:21Z",
        "content": "This article uses affiliate links, which means if you purchase products through these links, we may earn a commission. Click here to see our T&amp;C. For licensing please click here.\r\nSometimes the n… [+4317 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "benzinga.com",
        "title": "Tesla, Elon Musk Face Shareholders' Class Action Lawsuit Over Autopilot, Full Self-Driving Tech",
        "description": "Shareholders of Tesla Inc TSLA sued the automaker and CEO Elon Musk on Monday, alleging that both overstated the effectiveness and safety of the company's Autopilot and Full Self-Driving technologies. What Happened: The proposed class action lawsuit was filed…",
        "url": "https://biztoc.com/x/aa53bcc522168477",
        "urlToImage": "https://c.biztoc.com/p/aa53bcc522168477/og.webp",
        "publishedAt": "2023-02-28T01:46:05Z",
        "content": "Shareholders of Tesla Inc TSLA sued the automaker and CEO Elon Musk on Monday, alleging that both overstated the effectiveness and safety of the company's Autopilot and Full Self-Driving technologies… [+310 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "GeekWire"
        },
        "author": "Lisa Stiffler",
        "title": "Seattle teen reveals how much carbon the ultra-rich emit from their private jets",
        "description": "A Seattle teen is creating a bit of turbulence with a website tallying the carbon emissions of the ultra-rich traveling on private jets. Akash Shendure totaled up last year’s jet emissions for 163 famous individuals from the worlds of business, tech, entertai…",
        "url": "https://www.geekwire.com/2023/seattle-teen-reveals-how-much-carbon-the-ultra-rich-emit-from-their-private-jets/",
        "urlToImage": "https://cdn.geekwire.com/wp-content/uploads/2023/02/Top-emitters-private-jets.jpg",
        "publishedAt": "2023-02-28T01:41:41Z",
        "content": "The ClimateJets site tallies carbon emitted from the private jets flown by ultra-rich people. \r\nA Seattle teen is creating a bit of turbulence with a website tallying the carbon emissions of the ultr… [+3514 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Marketscreener.com"
        },
        "author": "MarketScreener",
        "title": "Elon Musk recruits team to develop OpenAI's ChatGPT rival - The Information",
        "description": "(marketscreener.com) Elon Musk has approached AI\nresearchers in recent weeks about forming a new research lab to\ndevelop an alternative to OpenAI's ChatGPT, the Information\nreported on Monday, citing people with direct knowledge of the\neffort.\n Tesla and Twit…",
        "url": "https://www.marketscreener.com/quote/stock/TESLA-INC-6344549/news/Elon-Musk-recruits-team-to-develop-OpenAI-s-ChatGPT-rival-The-Information-43103495/?utm_medium=RSS&utm_content=20230228",
        "urlToImage": "https://www.marketscreener.com/images/twitter_MS_fdgris.png",
        "publishedAt": "2023-02-28T01:39:24Z",
        "content": "Feb 27 (Reuters) - Elon Musk has approached AI\r\nresearchers in recent weeks about forming a new research lab to\r\ndevelop an alternative to OpenAI's ChatGPT, the Information\r\nreported on Monday, citin… [+1110 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "GlobeNewswire"
        },
        "author": "Future Market Insights Global and Consulting Pvt. Ltd.",
        "title": "Battery Swapping Charging Infrastructure Market will reach a value of US$ 1359.43 Million by 2033 at a CAGR of 21% | Future Market Insights, Inc.",
        "description": "Rise in the prevalence of electric mobility deployment, technological advancements are pushing the Battery Swapping Charging Infrastructure Market growth. North America to be one of the key regions for the Battery Swapping Charging Infrastructure market Rise …",
        "url": "https://www.globenewswire.com/news-release/2023/02/28/2616609/0/en/Battery-Swapping-Charging-Infrastructure-Market-will-reach-a-value-of-US-1359-43-Million-by-2033-at-a-CAGR-of-21-Future-Market-Insights-Inc.html",
        "urlToImage": "https://ml.globenewswire.com/Resource/Download/915d2f9c-7dc6-40c7-995c-2ba168208baa?size=1",
        "publishedAt": "2023-02-28T01:30:00Z",
        "content": "DUBAI, United Arab Emirates, Feb. 27, 2023 (GLOBE NEWSWIRE) -- The global Battery Swapping Charging Infrastructure market size is expected to surpass an impressive valuation of USD 202.07 million in … [+8855 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Yahoo Entertainment"
        },
        "author": "Future Market Insights Global and Consulting Pvt. Ltd.",
        "title": "Battery Swapping Charging Infrastructure Market will reach a value of US$ 1359.43 Million by 2033 at a CAGR of 21% | Future Market Insights, Inc.",
        "description": "Rise in the prevalence of electric mobility deployment, technological advancements are pushing the Battery Swapping Charging Infrastructure Market growth...",
        "url": "https://finance.yahoo.com/news/battery-swapping-charging-infrastructure-market-013000123.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/qP4r51hLByRzlY33mD2ISw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03MzA-/https://media.zenfs.com/en/globenewswire.com/433e6507c3cf94b90d194380426a7629",
        "publishedAt": "2023-02-28T01:30:00Z",
        "content": "Future Market Insights Global and Consulting Pvt. Ltd.\r\nRise in the prevalence of electric mobility deployment, technological advancements are pushing the Battery Swapping Charging Infrastructure Mar… [+9217 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "FRANCE 24 English"
        },
        "author": "FRANCE24",
        "title": "Twitter cuts more staff as Musk turmoil grows",
        "description": "Musk called US media \"racist\" on Sunday after multiple American newspapers announced they would stop publishing a popular comic strip whose creator called Black people a hate group.\n\nMusk, chief of electric car company Tesla and Twitter, made his comment in r…",
        "url": "https://www.france24.com/en/live-news/20230228-twitter-cuts-more-staff-as-musk-turmoil-grows",
        "urlToImage": "https://s.france24.com/media/display/29bf7eb8-b707-11ed-b2db-005056a90321/w:1280/p:16x9/Part-GTY-1395371342-1-1-2.jpg",
        "publishedAt": "2023-02-28T01:28:13Z",
        "content": "San Francisco (AFP) Reports of more layoffs at Twitter landed on Monday as owner Elon Musk waded into a racism controversy that risked pushing advertisers further away from the struggling platform. M… [+3809 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Wnd.com"
        },
        "author": "Johnathan Jones, The Western Journal",
        "title": "31-year-old former N.Y. Mets pitching prospect dies suddenly",
        "description": "Former New York Mets minor league pitcher Matt Pobereyko died at the age of 31 on Sunday of a suspected heart attack. NBC News reported Pobereyko was in his apartment in a Chicago suburb on Friday when he collapsed. He died two days later and his family is se…",
        "url": "https://www.wnd.com/2023/02/31-year-old-former-mets-pitching-prospect-dies-sudden-heart-attack/",
        "urlToImage": "https://www.wnd.com/wp-content/uploads/2023/02/matt.jpg",
        "publishedAt": "2023-02-28T01:17:30Z",
        "content": "Former New York Mets minor league pitcher Matt Pobereyko died at the age of 31 on Sunday of a suspected heart attack.\r\nNBC News reported Pobereyko was in his apartment in a Chicago suburb on Friday w… [+3241 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Moneycontrol"
        },
        "author": "Reuters",
        "title": "Tesla, Elon Musk sued by shareholders over self-driving safety claims",
        "description": "In a proposed class action filed in San Francisco federal court, shareholders said Tesla defrauded them over four years with false and misleading statements that concealed how its technologies, suspected as a possible cause of multiple fatal crashes, &quot;cr…",
        "url": "https://www.moneycontrol.com/news/world/tesla-elon-musk-sued-by-shareholders-over-self-driving-safety-claims-10171441.html",
        "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/06/ElonMusk-770x433.jpg",
        "publishedAt": "2023-02-28T01:16:54Z",
        "content": "Tesla Inc and its Chief Executive Elon Musk were sued on Monday by shareholders who accused them of overstating the effectiveness and safety of their electric vehicles' Autopilot and Full Self-Drivin… [+1909 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "benzinga.com",
        "title": "Tesla, Apple, AMC, Occidental, Zoom: Top 5 Trending Stocks",
        "description": "Major Wall Street indices closed in the green on Monday after investors and traders began the week on an optimistic note following the worst trading week this year. Easing bond yields too added to the optimism. The Nasdaq Composite closed 0.63% higher, while …",
        "url": "https://biztoc.com/x/6295efe24aa0f543",
        "urlToImage": "https://c.biztoc.com/p/6295efe24aa0f543/og.webp",
        "publishedAt": "2023-02-28T01:04:05Z",
        "content": "Major Wall Street indices closed in the green on Monday after investors and traders began the week on an optimistic note following the worst trading week this year. Easing bond yields too added to th… [+301 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Wnd.com"
        },
        "author": "Peter LaBarbera",
        "title": "Biden border crisis bringing invasion of gang members and 'cartel affiliates'",
        "description": "The unprecedented southern border crisis created by President Biden's lax policies on illegal immigration is causing a \"silent invasion of military age men\" working with Mexican cartels, says the sheriff of Kinney County, Texas, which abuts the U.S.-Mexico bo…",
        "url": "https://www.wnd.com/2023/02/biden-border-crisis-bringing-invasion-gang-members-cartel-affiliates/",
        "urlToImage": "https://www.wnd.com/wp-content/uploads/2023/02/illegals-immigration-immigrants-border-human-smuggling-pickup-truck-jpg.jpg",
        "publishedAt": "2023-02-28T01:02:49Z",
        "content": "People hide in a truck bed uncovered by Operation Lone Star Task Force in Kinney County, Texas. (Kinney County Sheriff's Office)\r\nThe unprecedented southern border crisis created by President Biden's… [+9702 chars]"
        }
        ]
    constructor() {
        super();
        console.log("hello hi this is news monkey and components");
        this.state = {
            articles: this.article,
            loading: false
        }
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <h2>News Monkey - Top Headline</h2>
                    <div className='row' key={element.url}>
                    {this.state.articles.map((element) => {
                         return   <div className='col-md-4'>
                                <Newsvalue title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                    })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsapp