import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  constructor(){
    super()
    this.state = {
       "articles": [
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Robb Report"
    //     },
    //     "author": "Justin Ray",
    //     "title": "How a California Couple Almost Got Away With a $1 Billion Ponzi Scheme That Ensnared Warren Buffett",
    //     "description": "The story behind Jeff Carpoff's wide-scale fraud.",
    //     "url": "https://robbreport.com/lifestyle/news/jeff-carpoff-fraud-solar-panels-1234842072/",
    //     "urlToImage": "https://robbreport.com/wp-content/uploads/2023/05/GettyImages-622853820-1.jpg?w=681&h=383&crop=1",
    //     "publishedAt": "2023-05-10T22:37:17Z",
    //     "content": "One of largest fraud schemes in California history involves solar panels, muscle cars, a paint company, Warren Buffet’s Berkshire Hathaway Inc., and even “Mr. Worldwide” himself, the rapper Pitbull. … [+2578 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "The Daily Dot"
    //     },
    //     "author": "Phil West",
    //     "title": "‘Someone tell me what this means?’: Tesla owner catches woman bending, or ‘marking,’ her license plate",
    //     "description": "A Tesla owner took to TikTok to show footage of a woman bending her license plate, leaving the creator— and a number of commenters—to wonder why. \n\n\nTikToker Krisscee (@krisscee) posted the video on Saturday. It has gotten an astonishing 20.6 million views si…",
    //     "url": "https://www.dailydot.com/news/tesla-license-plate-bending/",
    //     "urlToImage": "https://uploads.dailydot.com/2023/05/SYMYZLVi-tesla-plate-bending-tiktok.jpg?auto=compress&fm=pjpg",
    //     "publishedAt": "2023-05-10T22:01:02Z",
    //     "content": "A Tesla owner took to TikTok to show footage of a woman bending her license plate, leaving the creator and a number of commentersto wonder why. \r\nTikToker Krisscee (@krisscee) posted the video on Sat… [+2339 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "OilPrice.com"
    //     },
    //     "author": "Alex Kimani",
    //     "title": "Oil Demand In Transport Sector May Drop By Up To 50% By 2050",
    //     "description": "With the global energy transition in full swing, few clean energy sectors, if any, are expanding faster than the electric car market. A decade ago, a grand total of 130,000 EVs were sold globally; fast forward to the present, and nearly a similar number are s…",
    //     "url": "https://oilprice.com/Energy/Energy-General/Oil-Demand-In-Transport-Sector-May-Drop-By-Up-To-50-By-2050.html",
    //     "urlToImage": "https://d32r1sh890xpii.cloudfront.net/article/718x300/2023-05-10_2pr3znazx4.jpg",
    //     "publishedAt": "2023-05-10T22:00:00Z",
    //     "content": "While the U.S. clean energy…\r\nAs more and more coal…\r\nOil prices began to slip…\r\nBy Alex Kimani - May 10, 2023, 5:00 PM CDTWith the global energy transition in full swing, few clean energy sectors, i… [+9019 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Biztoc.com"
    //     },
    //     "author": "wsj.com",
    //     "title": "Robinhood to Launch 24-Hour Trading on Weekdays in Stocks and ETFs",
    //     "description": "Users of Robinhood Markets ’ popular app will soon be able to trade Tesla shares in the middle of the night. Robinhood said Wednesday that it will offer 24-hour trading of selected stocks and exchange-traded funds, five days a week. The move is part of a grow…",
    //     "url": "https://biztoc.com/x/928289f4dfeb676c",
    //     "urlToImage": "https://c.biztoc.com/p/928289f4dfeb676c/og.webp",
    //     "publishedAt": "2023-05-10T21:42:04Z",
    //     "content": "Users of Robinhood Markets popular app will soon be able to trade Tesla shares in the middle of the night.Robinhood said Wednesday that it will offer 24-hour trading of selected stocks and exchange-t… [+230 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Biztoc.com"
    //     },
    //     "author": "thestreet.com",
    //     "title": "Tesla Rival Volkswagen Has More Bad News on Its Electric Vehicles",
    //     "description": "Vehicle recalls can be inconvenient and frustrating for car owners, and Tesla has been cited in a recent study by iSeeCars.com as having four of the top five models that are most likely to be recalled over a 30-year span. Of course, if Tesla's over-the-air so…",
    //     "url": "https://biztoc.com/x/20cb1ab389eb34aa",
    //     "urlToImage": "https://c.biztoc.com/p/20cb1ab389eb34aa/og.webp",
    //     "publishedAt": "2023-05-10T21:40:10Z",
    //     "content": "Vehicle recalls can be inconvenient and frustrating for car owners, and Tesla has been cited in a recent study by iSeeCars.com as having four of the top five models that are most likely to be recalle… [+306 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Electrek"
    //     },
    //     "author": "Peter Johnson",
    //     "title": "VW general meeting interrupted by activists, cake thrown over EV pace and China labor",
    //     "description": "On Wednesday, several activist groups briefly interrupted Volkswagen’s annual general meeting. One claimed VW is “making climate-damaging decisions,” and the other says the automaker uses forced labor to build cars in China.\nCake was thrown from an unknown pa…",
    //     "url": "https://electrek.co/2023/05/10/vw-general-meeting-interrupted-cake-thrown-evs-in-china/",
    //     "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2023/05/VW-China-EVs.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    //     "publishedAt": "2023-05-10T21:35:30Z",
    //     "content": "On Wednesday, several activist groups briefly interrupted Volkswagen’s annual general meeting. One claimed VW is “making climate-damaging decisions,” and the other says the automaker uses forced labo… [+3112 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Biztoc.com"
    //     },
    //     "author": "benzinga.com",
    //     "title": "Robinhood Q1 Earnings Highlights: Revenue And EPS Beat, 24-Hour Trading Launch Featuring Select Stocks Such As Tesla",
    //     "description": "Trading platform company Robinhood Markets Inc HOOD reported first-quarter financial results after the market close Wednesday. Here are the key highlights. What Happened: Robinhood reported first-quarter revenue of $441 million, up 16% quarter-over-quarter. T…",
    //     "url": "https://biztoc.com/x/1e98a2e29e0fdd3d",
    //     "urlToImage": "https://c.biztoc.com/p/1e98a2e29e0fdd3d/og.webp",
    //     "publishedAt": "2023-05-10T21:30:21Z",
    //     "content": "Trading platform company Robinhood Markets Inc HOOD reported first-quarter financial results after the market close Wednesday. Here are the key highlights.What Happened: Robinhood reported first-quar… [+319 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Electrek"
    //     },
    //     "author": "Fred Lambert",
    //     "title": "Panasonic delays Tesla 4680 battery cell production",
    //     "description": "Panasonic announced that it is delaying volume production of the Tesla 4680 battery cell in order to introduce “performance improvement measures.”\n more…\nThe post Panasonic delays Tesla 4680 battery cell production appeared first on Electrek.",
    //     "url": "https://electrek.co/2023/05/10/panasonic-delays-tesla-4680-battery-cell-production/",
    //     "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2021/10/Tesla-4680-Battery-cell.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    //     "publishedAt": "2023-05-10T21:24:59Z",
    //     "content": "Panasonic announced that it is delaying volume production of the Tesla 4680 battery cell in order to introduce “performance improvement measures.”\r\nBack in 2020, Tesla unveiled its 4680 battery cell,… [+1881 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Biztoc.com"
    //     },
    //     "author": "beincrypto.com",
    //     "title": "From Genesis to Dominance: The Evolution of Bitcoin",
    //     "description": "In 2009, the world witnessed the birth of Bitcoin (BTC) – an enigmatic invention by the pseudonymous Satoshi Nakamoto. This revolutionary digital currency laid the foundation for a financial paradigm shift, transforming the way we perceive and transact value.…",
    //     "url": "https://biztoc.com/x/1975fca6c391ecdc",
    //     "urlToImage": "https://c.biztoc.com/p/1975fca6c391ecdc/og.webp",
    //     "publishedAt": "2023-05-10T21:20:05Z",
    //     "content": "In 2009, the world witnessed the birth of Bitcoin (BTC) an enigmatic invention by the pseudonymous Satoshi Nakamoto. This revolutionary digital currency laid the foundation for a financial paradigm s… [+311 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Biztoc.com"
    //     },
    //     "author": "wsj.com",
    //     "title": "Robinhood to Launch 24-Hour Trading on Weekdays in Stocks and ETFs - WSJ",
    //     "description": "Users of Robinhood Markets ’ popular app will soon be able to trade Tesla shares in the middle of the night. Robinhood said Wednesday that it will offer 24-hour trading of selected stocks and exchange-traded funds, five days a week. The move is part of a grow…",
    //     "url": "https://biztoc.com/x/b8788218440ec7ca",
    //     "urlToImage": "https://c.biztoc.com/p/b8788218440ec7ca/og.webp",
    //     "publishedAt": "2023-05-10T21:18:09Z",
    //     "content": "Users of Robinhood Markets popular app will soon be able to trade Tesla shares in the middle of the night.Robinhood said Wednesday that it will offer 24-hour trading of selected stocks and exchange-t… [+230 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Freerepublic.com"
    //     },
    //     "author": "KCRA",
    //     "title": "Elk Grove father says he’s grateful to be alive after Tesla catches fire near Highway 99",
    //     "description": "An Elk Grove father said he is thankful to be alive after his Tesla caught fire Saturday while he was driving. “It’s just all gone,” Bishal Malla said. “I’m just so lucky to be alive.” Malla said he had been out running errands nearby and was about to get on …",
    //     "url": "https://freerepublic.com/focus/f-chat/4152269/posts",
    //     "urlToImage": null,
    //     "publishedAt": "2023-05-10T21:09:59Z",
    //     "content": "Skip to comments.\r\nElk Grove father says hes grateful to be alive after Tesla catches fire near Highway 99KCRA ^\r\n | May 8, 2023\r\n | Lee Anne Denyer \r\nPosted on 05/10/2023 2:09:59 PM PDT by nickcarra… [+4323 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Biztoc.com"
    //     },
    //     "author": "wsj.com",
    //     "title": "Robinhood to Launch 24-Hour Trading on Weekdays in Stocks and ETFs",
    //     "description": "Users of Robinhood Markets’ popular app will soon be able to trade Tesla shares in the middle of the night. Robinhood plans to announce Wednesday that it will offer 24-hour trading of selected stocks and exchange-traded funds, five days a week. The move is pa…",
    //     "url": "https://biztoc.com/x/15bc8438a2037fbb",
    //     "urlToImage": "https://c.biztoc.com/p/15bc8438a2037fbb/og.webp",
    //     "publishedAt": "2023-05-10T21:02:23Z",
    //     "content": "Users of Robinhood Markets popular app will soon be able to trade Tesla shares in the middle of the night.Robinhood plans to announce Wednesday that it will offer 24-hour trading of selected stocks a… [+243 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Biztoc.com"
    //     },
    //     "author": "wsj.com",
    //     "title": "Robinhood to Launch 24-Hour Trading on Weekdays in Stocks and ETFs",
    //     "description": "Users of Robinhood Markets’ popular app will soon be able to trade Tesla shares in the middle of the night. Robinhood plans to announce Wednesday that it will offer 24-hour trading of selected stocks and exchange-traded funds, five days a week. The move is pa…",
    //     "url": "https://biztoc.com/x/c369976a69165573",
    //     "urlToImage": "https://c.biztoc.com/p/c369976a69165573/og.webp",
    //     "publishedAt": "2023-05-10T20:34:04Z",
    //     "content": "Users of Robinhood Markets popular app will soon be able to trade Tesla shares in the middle of the night.Robinhood plans to announce Wednesday that it will offer 24-hour trading of selected stocks a… [+243 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Electrek"
    //     },
    //     "author": "Michelle Lewis",
    //     "title": "The annual US health cost of oil and gas production is $77B – here’s how we fix that",
    //     "description": "The US oil and gas sector was responsible for $77 billion in total health impacts in 2016, according to a newly released study.\n more…\nThe post The annual US health cost of oil and gas production is $77B – here’s how we fix that appeared first on Electrek.",
    //     "url": "https://electrek.co/2023/05/10/us-health-oil-gas/",
    //     "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2023/05/pexels-photo-9252093.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    //     "publishedAt": "2023-05-10T20:26:10Z",
    //     "content": "Photo by Juan Mt on Pexels.com\r\nThe US oil and gas sector was responsible for $77 billion in total health impacts in 2016, according to a newly released study.\r\nFew studies have measured the effects … [+4208 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "WGN TV Chicago"
    //     },
    //     "author": "Andy Koval",
    //     "title": "'It was my work': Teen bragged to friend after Aréanah Preston slaying, prosecutors allege",
    //     "description": "CHICAGO — A 16-year-old bragged to a friend about the slaying of 24-year-old Chicago police officer Aréanah Preston after the shooting, prosecutors allege. Judge David Kelly granted the prosecution's request for no bail Wednesday afternoon, citing a \"mountain…",
    //     "url": "https://wgntv.com/news/chicagocrime/it-was-my-work-teen-bragged-to-friend-after-areanah-preston-slaying-prosecutors-allege/",
    //     "urlToImage": "https://wgntv.com/wp-content/uploads/sites/5/2023/05/Areanah-Preston-1.jpg?w=1280",
    //     "publishedAt": "2023-05-10T20:18:07Z",
    //     "content": "CHICAGO A 16-year-old bragged to a friend about the slaying of 24-year-old Chicago police officer Aréanah Preston after the shooting, prosecutors allege.\r\nJudge David Kelly granted the prosecution’s … [+4650 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Columbia.edu"
    //     },
    //     "author": "Columbia Business School",
    //     "title": "Five Things You Need to Know to Start Your Day",
    //     "description": "Marketing\r\n\n \n Tuesday, May 2, 2023 - 15:00\r\n\n \n Elon Musk’s Tesla plan falls flat, Credit Suisse lures clients with higher deposit rates and the crypto fallout ensnares a US bank. —  Kristine Aquino\r\n\n\nTo catch up on the trading day in the UK and Europe, che…",
    //     "url": "https://www8.gsb.columbia.edu/news/node/14312",
    //     "urlToImage": null,
    //     "publishedAt": "2023-05-10T20:10:21Z",
    //     "content": "Musk falls flat\r\nElon Musk’s much-hyped third Master Plan for Tesla fell flat after failing to offer any firm detail on the company’s long-awaited next generation of electric cars — especially a chea… [+4183 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Yahoo Entertainment"
    //     },
    //     "author": "Sean O'Kane",
    //     "title": "Fisker's Debut SUV Delayed by Lingering Software Problems",
    //     "description": "(Bloomberg) -- Fisker Inc. is facing delays delivering its debut electric SUV to customers because of software integration problems, people familiar with the...",
    //     "url": "https://finance.yahoo.com/news/fiskers-debut-suv-delayed-lingering-133639406.html",
    //     "urlToImage": "https://s.yimg.com/ny/api/res/1.2/cUKL2g4s5Ly0sh3Rrnu1Rw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_markets_842/364c31f0d0e97bc0dff5bb15ab3862f7",
    //     "publishedAt": "2023-05-10T20:09:27Z",
    //     "content": "(Bloomberg) -- Fisker Inc. is facing delays delivering its debut electric SUV to customers because of software integration problems, people familiar with the matter said.\r\nMost Read from Bloomberg\r\nT… [+3139 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Biztoc.com"
    //     },
    //     "author": "techcrunch.com",
    //     "title": "Google adding Cisco, Microsoft and Zoom (audio) conferencing to Android Auto",
    //     "description": "Google announced Wednesday that it’s working with Cisco, Microsoft and Zoom to bring conferencing into vehicles via Android Auto — a feature that may just keep folks from attempting to drive while balancing their phone on their lap with a video conferencing a…",
    //     "url": "https://biztoc.com/x/7a11875ed58fa445",
    //     "urlToImage": "https://c.biztoc.com/p/7a11875ed58fa445/og.webp",
    //     "publishedAt": "2023-05-10T20:06:26Z",
    //     "content": "Google announced Wednesday that its working with Cisco, Microsoft and Zoom to bring conferencing into vehicles via Android Auto a feature that may just keep folks from attempting to drive while balan… [+303 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "techcrunch",
    //     "name": "TechCrunch"
    //     },
    //     "author": "Rebecca Bellan",
    //     "title": "Google is bringing YouTube to more cars, starting with Polestar",
    //     "description": "Google announced Wednesday at its I/O event that all cars with Google built-in will have YouTube available, starting with Polestar vehicles in the coming weeks. The expansion of YouTube’s availability comes as more new vehicles today feature high-tech infotai…",
    //     "url": "https://techcrunch.com/2023/05/10/google-is-bringing-youtube-to-more-cars-starting-with-polestar/",
    //     "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/05/final_youtube_polestar.png?resize=1200,675",
    //     "publishedAt": "2023-05-10T20:01:06Z",
    //     "content": "Google announced Wednesday at its I/O event that all cars with Google built-in will have YouTube available, starting with Polestar vehicles in the coming weeks.\r\nThe expansion of YouTube’s availabili… [+3084 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "techcrunch",
    //     "name": "TechCrunch"
    //     },
    //     "author": "Rebecca Bellan",
    //     "title": "Google adding Cisco, Microsoft and Zoom (audio) conferencing to Android Auto",
    //     "description": "Google announced Wednesday that it’s working with Cisco, Microsoft and Zoom to bring conferencing into vehicles via Android Auto — a feature that may just keep folks from attempting to drive while balancing their phone on their lap with a video conferencing a…",
    //     "url": "https://techcrunch.com/2023/05/10/google-adding-cisco-microsoft-and-zoom-audio-conferencing-to-android-auto/",
    //     "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/05/final_zoom_androidauto.png?resize=1200,675",
    //     "publishedAt": "2023-05-10T20:00:17Z",
    //     "content": "Google announced Wednesday that it’s working with Cisco, Microsoft and Zoom to bring conferencing into vehicles via Android Auto a feature that may just keep folks from attempting to drive while bala… [+1185 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "the-verge",
    //     "name": "The Verge"
    //     },
    //     "author": "Andrew J. Hawkins",
    //     "title": "Google is bringing YouTube, Waze, and Zoom to cars with native Android software",
    //     "description": "Cars with native Android software are getting more features, including YouTube, Zoom, Waze, and video games, the company announced during its I/O conference.",
    //     "url": "https://www.theverge.com/2023/5/10/23717309/google-android-built-in-car-youtube-waze-zoom-io",
    //     "urlToImage": "https://cdn.vox-cdn.com/thumbor/tYFgYyaOdmZbJxc8ZdCtCAZO_qM=/0x0:1600x806/1200x628/filters:focal(800x403:801x404)/cdn.vox-cdn.com/uploads/chorus_asset/file/24644748/image_1.png",
    //     "publishedAt": "2023-05-10T20:00:00Z",
    //     "content": "Google is bringing YouTube, Waze, and Zoom to cars with native Android software\r\nGoogle is bringing YouTube, Waze, and Zoom to cars with native Android software\r\n / People who own vehicles with Googl… [+7239 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "PCMag.com"
    //     },
    //     "author": "Emily Dreibelbis",
    //     "title": "Google: 'Sorry, I Was Driving' Is No Longer an Excuse for Missing Video Calls",
    //     "description": "Android Auto users will soon be able to join calls with Microsoft Teams, WebEx, and Zoom. Plus, more updates to the Google built-in dash experience from I/O.\nFor better or worse, Google's latest Android Auto update makes time spent in the car more productive …",
    //     "url": "https://uk.pcmag.com/cars-auto/146784/google-sorry-i-was-driving-is-no-longer-an-excuse-for-missing-video-calls",
    //     "urlToImage": "https://sm.pcmag.com/t/pcmag_uk/news/g/google-sor/google-sorry-i-was-driving-is-no-longer-an-excuse-for-missin_2rn3.1200.jpg",
    //     "publishedAt": "2023-05-10T20:00:00Z",
    //     "content": "For better or worse, Google's latest Android Auto update makes time spent in the car more productive thanks to a new integration with Microsoft Teams, WebEx by Cisco, and Zoom.\r\n\"Soon youll be able t… [+2976 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "PCMag.com"
    //     },
    //     "author": "Emily Dreibelbis",
    //     "title": "Google: 'Sorry, I Was Driving' Is No Longer an Excuse for Missing Video Calls",
    //     "description": "Android Auto users will soon be able to join calls with Microsoft Teams, WebEx, and Zoom. Plus, more updates to the Google built-in dash experience from I/O.\nFor better or worse, Google's latest Android Auto update makes time spent in the car more productive …",
    //     "url": "https://me.pcmag.com/en/cars-auto/16852/google-sorry-i-was-driving-is-no-longer-an-excuse-for-missing-video-calls",
    //     "urlToImage": "https://sm.pcmag.com/t/pcmag_me/news/g/google-sor/google-sorry-i-was-driving-is-no-longer-an-excuse-for-missin_z5m4.1200.jpg",
    //     "publishedAt": "2023-05-10T20:00:00Z",
    //     "content": "For better or worse, Google's latest Android Auto update makes time spent in the car more productive thanks to a new integration with Microsoft Teams, WebEx by Cisco, and Zoom.\r\n\"Soon youll be able t… [+2976 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Biztoc.com"
    //     },
    //     "author": "marketwatch.com",
    //     "title": "Senators ask Tesla to end forced arbitration, saying it helps company hide discrimination and safety claims",
    //     "description": "Seven U.S. senators urged Tesla CEO Elon Musk this week to end his company’s use of forced-arbitration agreements, citing numerous reports of discrimination against workers and safety concerns about the company’s vehicles. The senators included six Democrats …",
    //     "url": "https://biztoc.com/x/225f950fe6dac8d3",
    //     "urlToImage": "https://c.biztoc.com/p/225f950fe6dac8d3/og.webp",
    //     "publishedAt": "2023-05-10T19:54:04Z",
    //     "content": "Seven U.S. senators urged Tesla CEO Elon Musk this week to end his companys use of forced-arbitration agreements, citing numerous reports of discrimination against workers and safety concerns about t… [+309 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Freerepublic.com"
    //     },
    //     "author": "DAILY MAIL AUSTRALIA",
    //     "title": "Aussie driver exposes huge problem with electric vehicles as he is forced to order a tow truck for his $128k Mercedes after breakdown",
    //     "description": "Eddy May's electric Mercedes-Benz suffered flat tyre. Vehicle did not come with spare. Many have questioned why EVs do not have spare tyres . ... An Australian driver has revealed one of the struggles of owning an electric car - the fact they don't come with …",
    //     "url": "https://freerepublic.com/focus/f-news/4152234/posts",
    //     "urlToImage": null,
    //     "publishedAt": "2023-05-10T19:32:26Z",
    //     "content": "Skip to comments.\r\nAussie driver exposes huge problem with electric vehicles as he is forced to order a tow truck for his $128k Mercedes after breakdownDAILY MAIL AUSTRALIA ^\r\n | 10 May 2023 \r\n | ELI… [+5815 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "the-times-of-india",
    //     "name": "The Times of India"
    //     },
    //     "author": "Reuters",
    //     "title": "Lithium producers Allkem, Livent to combine in $10.6 billion deal",
    //     "description": "Combining U.S.-based Livent and Australia-based Allkem creates an industry powerhouse on four continents that executives hope will bring more heft and skills needed to boost supply of the metal to an increasingly hungry automotive sector, including Tesla Inc,…",
    //     "url": "https://economictimes.indiatimes.com/news/international/business/lithium-producers-allkem-livent-to-combine-in-10-6-billion-deal/articleshow/100143246.cms",
    //     "urlToImage": "https://img.etimg.com/thumb/msid-100143236,width-1070,height-580,imgsize-165194,overlay-economictimes/photo.jpg",
    //     "publishedAt": "2023-05-10T19:22:46Z",
    //     "content": "Lithium companies Allkem Ltd and Livent Corp said on Wednesday they will combine in an all-stock $10.6 billion deal to create the world's third-largest producer of the metal used to make electric veh… [+3719 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Motley Fool"
    //     },
    //     "author": "newsfeedback@fool.com (Catherine Brock)",
    //     "title": "Who is Elon Musk?",
    //     "description": "Meet controversial billionaire and business leader Elon Musk and learn about the role he's played in Paypal, Tesla, and OpenAI.",
    //     "url": "https://www.fool.com/investing/how-to-invest/famous-investors/elon-musk-investments/who-is-elon-musk/",
    //     "urlToImage": "https://m.foolcdn.com/media/dubs/images/Elon_Roadster.width-600.jpg",
    //     "publishedAt": "2023-05-10T19:18:15Z",
    //     "content": "Elon Musk is an eccentric billionaire, entrepreneur, business leader, and investor. He's also the world's highest paid CEO and the world's second-richest person -- thanks to a net worth that exceeds … [+10239 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Biztoc.com"
    //     },
    //     "author": "businessinsider.com",
    //     "title": "Less than half of car dealerships had any electric cars at all last year",
    //     "description": "A majority of Toyota and Honda dealerships reported last year not having a single EV available for sale on their lots. Toyota Carmakers are relying on their dealers to sell electric vehicles. But less than half of car dealerships had any EVs on their lots las…",
    //     "url": "https://biztoc.com/x/76540ad5d6b9733d",
    //     "urlToImage": "https://c.biztoc.com/p/76540ad5d6b9733d/og.webp",
    //     "publishedAt": "2023-05-10T19:08:07Z",
    //     "content": "A majority of Toyota and Honda dealerships reported last year not having a single EV available for sale on their lots.ToyotaCarmakers are relying on their dealers to sell electric vehicles.But less t… [+306 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Biztoc.com"
    //     },
    //     "author": "businessinsider.com",
    //     "title": "Elon Musk teases a Tesla Cybertruck tool rack with futuristic shovels",
    //     "description": "Elon Musk teased a new Cybertruck feature at a Tesla event on Monday. Tesla on YouTube Tesla teased a potential new Cybertruck accessory at an event for its lithium refinery on Monday. Elon Musk drove into the ceremony in a Cybertruck that was outfitted with …",
    //     "url": "https://biztoc.com/x/66f827cc6e0811ef",
    //     "urlToImage": "https://c.biztoc.com/p/66f827cc6e0811ef/og.webp",
    //     "publishedAt": "2023-05-10T19:08:07Z",
    //     "content": "Elon Musk teased a new Cybertruck feature at a Tesla event on Monday.Tesla on YouTubeTesla teased a potential new Cybertruck accessory at an event for its lithium refinery on Monday.Elon Musk drove i… [+246 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Biztoc.com"
    //     },
    //     "author": "yahoo.com",
    //     "title": "Microsoft reveals the A.I. skills that will be ‘crucial’ to landing any job in the future",
    //     "description": "Whether it's the bot that takes your job or a \"next-generation copilot\" one thing's for sure—artificial intelligence is set to change the game. More from Fortune: 5 side hustles where you may earn over $20,000 per year—all while working from home Looking to m…",
    //     "url": "https://biztoc.com/x/b5839d4f9dcbcd50",
    //     "urlToImage": "https://c.biztoc.com/p/b5839d4f9dcbcd50/og.webp",
    //     "publishedAt": "2023-05-10T19:06:05Z",
    //     "content": "Whether it's the bot that takes your job or a \"next-generation copilot\" one thing's for sureartificial intelligence is set to change the game.More from Fortune: 5 side hustles where you may earn over… [+311 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Thehillstimes.in"
    //     },
    //     "author": "The Hills Times",
    //     "title": "Govt to examine WhatsApp’s breach of privacy: Minister",
    //     "description": "NEW DELHI, May 10 (PTI): The government will investigate a claim that WhatsApp accessed the microphone of smartphone users while the phone was not in use, minister of state for Electronics and Information Technology Rajeev Chandrasekhar said on Wednesday. In …",
    //     "url": "https://thehillstimes.in/business/govt-to-examine-whatsapps-breach-of-privacy-minister",
    //     "urlToImage": "https://thehillstimes.in/wp-content/uploads/2023/05/Govt-to-examine-WhatsApps-breach-of-privacy-Minister.jpg",
    //     "publishedAt": "2023-05-10T19:05:51Z",
    //     "content": "NEW DELHI, May 10 (PTI): The government will investigate a claim that WhatsApp accessed the microphone of smartphone users while the phone was not in use, minister of state for Electronics and Inform… [+2784 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Biztoc.com"
    //     },
    //     "author": "observer.com",
    //     "title": "Tesla’s EV Rivals Post Record Losses Amid a Bleak Economy and a Price War",
    //     "description": "It’s challenging time to run a startup in a capital-intensive industry like electric vehicle manufacturing. High interest rates, a funding drought, and a price war started by Tesla make it difficult for EV makers to fund operations and grow sales. This week, …",
    //     "url": "https://biztoc.com/x/2f6d009cc43e1998",
    //     "urlToImage": "https://c.biztoc.com/p/2f6d009cc43e1998/og.webp",
    //     "publishedAt": "2023-05-10T19:04:07Z",
    //     "content": "Its challenging time to run a startup in a capital-intensive industry like electric vehicle manufacturing. High interest rates, a funding drought, and a price war started by Tesla make it difficult f… [+296 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Investing.com"
    //     },
    //     "author": "Reuters",
    //     "title": "Panasonic delays production of new Tesla battery to improve performance",
    //     "description": "Panasonic delays production of new Tesla battery to improve performance",
    //     "url": "https://www.investing.com/news/stock-market-news/panasonic-delays-production-of-new-tesla-battery-to-improve-performance-3079066",
    //     "urlToImage": "https://i-invdn-com.investing.com/news/LYNXNPEE250OB_L.jpg",
    //     "publishedAt": "2023-05-10T19:01:33Z",
    //     "content": "By Hyunjoo Jin and Kiyoshi Takenaka\r\nSAN FRANCISCO/TOKYO (Reuters) - Panasonic (OTC:PCRFY) said on Wednesday that it will delay the commercial production of its 4680 battery cells championed by Tesla… [+1610 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "MarketWatch"
    //     },
    //     "author": "Levi Sumagaysay",
    //     "title": "Senators ask Tesla to end forced arbitration, saying it helps company hide discrimination and safety claims",
    //     "description": "Democrats' letter to Elon Musk comes after recent reintroduction of the FAIR Act, which seeks to end mandatory arbitration for workers and consumers.",
    //     "url": "https://www.marketwatch.com/story/senators-ask-tesla-to-end-forced-arbitration-saying-it-helps-company-hide-discrimination-and-safety-claims-7fb2a900",
    //     "urlToImage": "https://images.mktw.net/im-704909/social",
    //     "publishedAt": "2023-05-10T19:00:00Z",
    //     "content": "Seven U.S. senators urged Tesla CEO Elon Musk this week to end his companys use of forced-arbitration agreements, citing numerous reports of discrimination against workers and safety concerns about t… [+310 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Biztoc.com"
    //     },
    //     "author": "benzinga.com",
    //     "title": "You Don't Need Coding Experience Or A Tech Background To Land This AI Job Paying Well Over 6 Figures A Year",
    //     "description": "So you are pretty sure artificial intelligence is the future and you want a job in AI before it takes yours, but you don't know how to code or have a background in technology. Not to worry! There's a new job you are likely qualified for, and it's paying hundr…",
    //     "url": "https://biztoc.com/x/0ba2a5828621a96a",
    //     "urlToImage": "https://c.biztoc.com/p/0ba2a5828621a96a/og.webp",
    //     "publishedAt": "2023-05-10T18:55:35Z",
    //     "content": "So you are pretty sure artificial intelligence is the future and you want a job in AI before it takes yours, but you don't know how to code or have a background in technology. Not to worry! There's a… [+308 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Biztoc.com"
    //     },
    //     "author": "reuters.com",
    //     "title": "Panasonic delays production of new Tesla battery to improve performance",
    //     "description": "SAN FRANCISCO/TOKYO, May 10 (Reuters) - Panasonic (6752.T) said on Wednesday that it will delay the commercial production of its 4680 battery cells championed by Tesla CEO Elon Musk and begin operations during the April to September period in 2024, later than…",
    //     "url": "https://biztoc.com/x/3bd4f263e094f72c",
    //     "urlToImage": "https://c.biztoc.com/p/3bd4f263e094f72c/og.webp",
    //     "publishedAt": "2023-05-10T18:54:05Z",
    //     "content": "SAN FRANCISCO/TOKYO, May 10 (Reuters) - Panasonic (6752.T) said on Wednesday that it will delay the commercial production of its 4680 battery cells championed by Tesla CEO Elon Musk and begin operati… [+309 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Autoblog"
    //     },
    //     "author": "Insider",
    //     "title": "Elon Musk teases a Tesla Cybertruck tool rack with futuristic shovels",
    //     "description": "Filed under:\n Lamborghini,First Drives,Coupe,Luxury,Off-Road Vehicles,Performance\n Continue reading Elon Musk teases a Tesla Cybertruck tool rack with futuristic shovels\nElon Musk teases a Tesla Cybertruck tool rack with futuristic shovels originally appeared…",
    //     "url": "https://www.autoblog.com/2023/05/10/elon-musk-teases-a-tesla-cybertruck-tool-rack-with-futuristic-shovels/",
    //     "urlToImage": "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://media.zenfs.com/en/insider_articles_922/2729bff12ca5bfc57512b8b869c69c2f",
    //     "publishedAt": "2023-05-10T18:54:00Z",
    //     "content": "Elon Musk teased a new Cybertruck feature at a \r\n Tesla event on Monday. \r\n Tesla on YouTube\r\nElon Musk on Monday teased what appeared to be a tool rack for Tesla's highly anticipated Cybertruck.\r\nMu… [+2206 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "business-insider",
    //     "name": "Business Insider"
    //     },
    //     "author": "Grace Kay",
    //     "title": "Elon Musk teases a Tesla Cybertruck tool rack with futuristic shovels",
    //     "description": "Elon Musk drove a Cybertruck outfitted with a black rack into a ceremony for Tesla's new lithium refinery in Texas.",
    //     "url": "https://www.businessinsider.com/tesla-teases-cybertruck-tool-rack-futuristic-shovels-windshield-wiper-2023-5",
    //     "urlToImage": "https://i.insider.com/645bc306d391de0019bd64d9?width=1200&format=jpeg",
    //     "publishedAt": "2023-05-10T18:52:42Z",
    //     "content": "Elon Musk teased a new Cybertruck feature at a Tesla event on Monday.Tesla on YouTube\r\n<ul>\n<li>Tesla teased a potential new Cybertruck accessory at an event for its lithium refinery on Monday.</li>\n… [+2536 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "CNA"
    //     },
    //     "author": null,
    //     "title": "Panasonic delays production of new Tesla battery to improve performance",
    //     "description": "SAN FRANCISCO/TOKYO : Panasonic said on Wednesday that it will delay the commercial production of its 4680 battery cells championed by Tesla CEO Elon Musk and begin operations during the April to September period in 2024, later than previously scheduled, as t…",
    //     "url": "https://www.channelnewsasia.com/business/panasonic-delays-production-new-tesla-battery-improve-performance-3479911",
    //     "urlToImage": "https://onecms-res.cloudinary.com/image/upload/s--X0S0OXwy--/fl_relative,g_south_east,l_one-cms:core:watermark:reuters,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/one-cms/core/2023-05-10t184636z_1_lynxmpej490v7_rtroptp_3_panasonic-tesla.jpg?itok=dg7DF2EO",
    //     "publishedAt": "2023-05-10T18:46:36Z",
    //     "content": "SAN FRANCISCO/TOKYO : Panasonic said on Wednesday that it will delay the commercial production of its 4680 battery cells championed by Tesla CEO Elon Musk and begin operations during the April to Sep… [+1537 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Marketscreener.com"
    //     },
    //     "author": "MarketScreener",
    //     "title": "Panasonic delays production of new Tesla battery to improve performance",
    //     "description": "(marketscreener.com) Panasonic said on Wednesday that it will delay the commercial production of its 4680 battery cells championed by Tesla CEO Elon Musk and begin operations during the April to September period in 2024, later than previously scheduled, as th…",
    //     "url": "https://www.marketscreener.com/quote/stock/TESLA-INC-6344549/news/Panasonic-delays-production-of-new-Tesla-battery-to-improve-performance-43807379/?utm_medium=RSS&utm_content=20230510",
    //     "urlToImage": "https://img.zonebourse.com/reuters/2022-06/2022-06-03T063417Z_1_LYNXMPEI5207M_RTROPTP_3_PANASONIC-AUTOS-BATTERIES.JPG",
    //     "publishedAt": "2023-05-10T18:46:36Z",
    //     "content": "SAN FRANCISCO/TOKYO (Reuters) - Panasonic said on Wednesday that it will delay the commercial production of its 4680 battery cells championed by Tesla CEO Elon Musk and begin operations during the Ap… [+1707 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Yahoo Entertainment"
    //     },
    //     "author": "Hyunjoo Jin and Kiyoshi Takenaka",
    //     "title": "Panasonic delays production of new Tesla battery to improve performance",
    //     "description": "Panasonic said on Wednesday that it will delay the commercial production of its 4680 battery cells championed by Tesla CEO Elon Musk and begin operations...",
    //     "url": "https://finance.yahoo.com/news/panasonic-delays-production-tesla-battery-184636470.html",
    //     "urlToImage": "https://media.zenfs.com/en/reuters-finance.com/e06d49176cbe52127677b30e42d90d9d",
    //     "publishedAt": "2023-05-10T18:46:36Z",
    //     "content": "By Hyunjoo Jin and Kiyoshi Takenaka\r\nSAN FRANCISCO/TOKYO (Reuters) - Panasonic said on Wednesday that it will delay the commercial production of its 4680 battery cells championed by Tesla CEO Elon Mu… [+1702 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Yahoo Entertainment"
    //     },
    //     "author": "Ramish Cheema",
    //     "title": "20 Best Cities for Singles in their 30s",
    //     "description": "In this piece, we will take a look at the 20 best cities for singles in their 30s. For more cities, take a look at 5 Best Cities for Singles in their 30s...",
    //     "url": "https://finance.yahoo.com/news/20-best-cities-singles-30s-184548963.html",
    //     "urlToImage": "https://s.yimg.com/ny/api/res/1.2/FJtSTT9fqhu0jzdYzzIknA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDE-/https://media.zenfs.com/en/insidermonkey.com/2f8804707f534637e552ee6b2f548d94",
    //     "publishedAt": "2023-05-10T18:45:48Z",
    //     "content": "In this piece, we will take a look at the 20 best cities for singles in their 30s. For more cities, take a look at 5 Best Cities for Singles in their 30s. \r\nDating in today's age is quite different f… [+9353 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Electrek"
    //     },
    //     "author": "Patrick Campanale",
    //     "title": "This 800W solar kit with 60A MPPT controller powers your home or shed at new low of $1,042 in New Green Deals",
    //     "description": "If you’ve held off on picking up a solar system until you found a deal with a bit more power than normal, now’s your chance. Today, we’re tracking a new all-time low on an that includes a 60A MPPT controller which will power most battery types. With enough ou…",
    //     "url": "https://electrek.co/2023/05/10/acopower-800w-solar-kit-more-new-green-deals/",
    //     "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2023/05/800w-solar-panel-kit.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    //     "publishedAt": "2023-05-10T18:44:46Z",
    //     "content": "If you’ve held off on picking up a solar system until you found a deal with a bit more power than normal, now’s your chance. Today, we’re tracking a new all-time low on an 800W solar power system tha… [+7098 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "PCMag.com"
    //     },
    //     "author": "Rob Pegoraro",
    //     "title": "Google Touts Android Progress Beyond Phones, Teases XR Platform",
    //     "description": "Google says its work on Android tablets has paved the way for foldable big-screen phones like the upcoming Pixel Fold. And it offers a vague but intriguing hint about its extended reality ambitions.\nAndroid began life as a smartphone operating system, but Goo…",
    //     "url": "https://uk.pcmag.com/android/146775/google-touts-android-progress-beyond-phones-teases-xr-platform",
    //     "urlToImage": "https://sm.pcmag.com/t/pcmag_uk/news/g/google-tou/google-touts-android-progress-beyond-phones-teases-xr-platfo_92xp.1200.jpg",
    //     "publishedAt": "2023-05-10T18:39:16Z",
    //     "content": "Android began life as a smartphone operating system, but Google took some time during its I/O developer conference today to brag a little about how that platform has fared beyond phones. \r\nTabletshis… [+2038 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "PCMag.com"
    //     },
    //     "author": "Rob Pegoraro",
    //     "title": "Google Touts Android Progress Beyond Phones, Teases XR Platform",
    //     "description": "Google says its work on Android tablets has paved the way for foldable big-screen phones like the upcoming Pixel Fold. And it offers a vague but intriguing hint about its extended reality ambitions.\nAndroid began life as a smartphone operating system, but Goo…",
    //     "url": "https://me.pcmag.com/en/android/16844/google-touts-android-progress-beyond-phones-teases-xr-platform",
    //     "urlToImage": "https://sm.pcmag.com/t/pcmag_me/news/g/google-tou/google-touts-android-progress-beyond-phones-teases-xr-platfo_krx7.1200.jpg",
    //     "publishedAt": "2023-05-10T18:39:16Z",
    //     "content": "Android began life as a smartphone operating system, but Google took some time during its I/O developer conference today to brag a little about how that platform has fared beyond phones. \r\nTabletshis… [+2038 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Daily Mail"
    //     },
    //     "author": "Sam Tonkin",
    //     "title": "Is Elon Musk morphing Twitter into WhatsApp?",
    //     "description": "Even before he bought Twitter for $44 billion (£38 billion) last year, Elon Musk had long discussed his plans to create a mysterious 'everything app' or 'X' for users worldwide.",
    //     "url": "https://www.dailymail.co.uk/sciencetech/article-12069579/Is-Elon-Musk-morphing-Twitter-WhatsApp.html",
    //     "urlToImage": "https://i.dailymail.co.uk/1s/2023/05/10/19/70831039-0-image-a-17_1683742505859.jpg",
    //     "publishedAt": "2023-05-10T18:32:27Z",
    //     "content": "He often speaks of his disdain for WhatsApp, but is Elon Musk looking to morph Twitter into something similar?\r\nWell, the answer is yes and no.\r\nThere's no doubt the billionaire Tesla and SpaceX CEO … [+14638 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Jalopnik"
    //     },
    //     "author": "Adam Ismail",
    //     "title": "Ford's Jim Farley Says GM Ditching CarPlay 'Isn't Customer Centric'",
    //     "description": "There’s nothing like some healthy inter-corporate ribbing, particularly between Detroit’s Big Three. General Motors revealed in March that it will eliminate Apple’s CarPlay and Google’s Android Auto from its future lineup, because it believes it can deliver a…",
    //     "url": "https://jalopnik.com/ford-jim-farly-gm-ditching-carplay-not-customer-centric-1850424176",
    //     "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/447ccbee994b98913a7dfafb526c988e.jpg",
    //     "publishedAt": "2023-05-10T18:30:00Z",
    //     "content": "Theres nothing like some healthy inter-corporate ribbing, particularly between Detroits Big Three. General Motors revealed in March that it will eliminate Apples CarPlay and Googles Android Auto from… [+4261 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Biztoc.com"
    //     },
    //     "author": "observer.com",
    //     "title": "How Warren Buffett and Elon Musk Become Frenemies: A Timeline",
    //     "description": "Warren Buffett and Elon Musk, two of the most successful and wealthiest businessmen on the planet, have a history of not liking each other very much. In the years leading up to the pandemic, the two billionaires often clashed in the media over everything from…",
    //     "url": "https://biztoc.com/x/49bd017f16fd3426",
    //     "urlToImage": "https://c.biztoc.com/p/49bd017f16fd3426/og.webp",
    //     "publishedAt": "2023-05-10T18:22:14Z",
    //     "content": "Warren Buffett and Elon Musk, two of the most successful and wealthiest businessmen on the planet, have a history of not liking each other very much. In the years leading up to the pandemic, the two … [+303 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Daily Mail"
    //     },
    //     "author": "Alyssa Guzman",
    //     "title": "Dramatic moment Tesla erupts into flames on California highway after it began to 'shake'",
    //     "description": "Bishal Malla, of Elk Grove, was driving down Highway 99 near Cosumnes River Boulevard when he started to feel his electric vehicle begin to shake and found smoke billowing from it.",
    //     "url": "https://www.dailymail.co.uk/news/article-12069231/Dramatic-moment-Tesla-erupts-flames-California-highway-began-shake.html",
    //     "urlToImage": "https://i.dailymail.co.uk/1s/2023/05/10/19/70830397-0-image-a-17_1683741763961.jpg",
    //     "publishedAt": "2023-05-10T18:11:24Z",
    //     "content": "Another Tesla dramatically erupted in flames on a California highway after it began to 'shake.' \r\nBishal Malla, of Elk Grove, was driving down Highway 99 near Cosumnes River Boulevard when he started… [+6522 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Notebookcheck.net"
    //     },
    //     "author": "Daniel Zlatev",
    //     "title": "Cheaper BYD Seal facelift lands to take on its Model 3 refresh competitor that Tesla denies",
    //     "description": "Tesla was forced to deny a report that it will start production of the 2023 Project Highland Model 3 refresh on June 1 at the Shanghai Gigafactory. Meanwhile, BYD outed a facelift of the Model 3's main competitor - the Seal sedan - that is cheaper and offers …",
    //     "url": "https://www.notebookcheck.net/Cheaper-BYD-Seal-facelift-lands-to-take-on-its-Model-3-refresh-competitor-that-Tesla-denies.716567.0.html",
    //     "urlToImage": "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/byd_seal_champion.jpg",
    //     "publishedAt": "2023-05-10T18:10:00Z",
    //     "content": "While Tesla is gearing up to unveil its 2023 Model 3 refresh that will test the limits of its production costs voodoo, its main competitor BYD already announced a new, cheaper version of the Model 3'… [+2537 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "business-insider",
    //     "name": "Business Insider"
    //     },
    //     "author": "Alexa St. John",
    //     "title": "Less than half of car dealerships had any electric cars at all last year — and it's giving buyers a hard time",
    //     "description": "A majority of Toyota and Honda dealerships reported not having a single EV available for sale last year, the Sierra Club found.",
    //     "url": "https://www.businessinsider.com/car-dealerships-electric-vehicle-inventory-shortage-automakers-2023-5",
    //     "urlToImage": "https://i.insider.com/6438a9d9f62706001942f445?width=1200&format=jpeg",
    //     "publishedAt": "2023-05-10T17:58:14Z",
    //     "content": "A majority of Toyota and Honda dealerships reported last year not having a single EV available for sale on their lots.Toyota\r\n<ul>\n<li>Carmakers are relying on their dealers to sell electric vehicles… [+2335 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "menshealth.com"
    //     },
    //     "author": "Brad Lanphear",
    //     "title": "The 16 Best Automatic Watches for Men in 2023, Tested by Style Editors",
    //     "description": "These timeless tickers are powered by your body.",
    //     "url": "https://www.menshealth.com/style/g43838945/best-automatic-watches/",
    //     "urlToImage": "https://hips.hearstapps.com/hmg-prod/images/mh-5-9-watches-645bd2073e4e0.png?crop=1.00xw:1.00xh;0,0&resize=1200:*",
    //     "publishedAt": "2023-05-10T17:56:00Z",
    //     "content": "THE BEST automatic \r\nwatches tell time accurately, yes, but they also offer much more style and charm than a typical smartwatch can. First, these-self winding timepieces tick more times per second th… [+2884 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Biztoc.com"
    //     },
    //     "author": "thestreet.com",
    //     "title": "At Last! Some Good News from Rivian",
    //     "description": "Rivian is now alone in the galaxy of EV startups, most of which want to become the next Tesla. The young electric-vehicle manufacturer, based in Irvine, Calif., has just sent positive signals to investors after a cascade of bad news among its peers. Most of t…",
    //     "url": "https://biztoc.com/x/ede494b92691ef82",
    //     "urlToImage": "https://c.biztoc.com/p/ede494b92691ef82/og.webp",
    //     "publishedAt": "2023-05-10T17:52:19Z",
    //     "content": "Rivian is now alone in the galaxy of EV startups, most of which want to become the next Tesla.The young electric-vehicle manufacturer, based in Irvine, Calif., has just sent positive signals to inves… [+321 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Yahoo Entertainment"
    //     },
    //     "author": "Caleb Naysmith",
    //     "title": "Elon Musk Says Neuralink Is The Only Way To Survive And Compete With AI",
    //     "description": "Elon Musk, the genius behind SpaceX and Tesla Inc., has declared that humanity must embrace the merging of man and machine if we hope to survive in a world...",
    //     "url": "https://finance.yahoo.com/news/elon-musk-says-neuralink-only-174506347.html",
    //     "urlToImage": "https://media.zenfs.com/en/Benzinga/4ef508e7bb244cb1c878d17662ddd86c",
    //     "publishedAt": "2023-05-10T17:45:06Z",
    //     "content": "Elon Musk, the genius behind SpaceX and Tesla Inc., has declared that humanity must embrace the merging of man and machine if we hope to survive in a world dominated by artificial intelligence (AI).\r… [+5332 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "fox-news",
    //     "name": "Fox News"
    //     },
    //     "author": "Associated Press",
    //     "title": "Florida driver in 116-mph fatal house crash sentenced to 27 years",
    //     "description": "A Florida driver responsible for crashing his Tesla into a house while going 116-mph has been sentenced to 27 years. The man killed two people who were inside the home in 2021.",
    //     "url": "https://www.foxnews.com/us/florida-driver-116-mph-fatal-house-crash-sentenced-27-years",
    //     "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/06/ALL_CUSTOM_FS_LOCAL_NEWS_FL_CRIME.png",
    //     "publishedAt": "2023-05-10T17:34:14Z",
    //     "content": "A Florida man who was driving his Tesla at least 116 mph before crashing into a house and killing two people in 2021 has been sentenced to 27 years in prison.\r\nVaughn Mongan, 45, of Palm Harbor, was … [+844 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Github.com"
    //     },
    //     "author": "l4rz",
    //     "title": "Reverse engineering Dell iDRAC to get rid of GPU throttling",
    //     "description": "Unsupported GPUs in Dell C4130 get throttled, here&#39;s how to prevent this from happening. - GitHub - l4rz/reverse-engineering-dell-idrac-to-get-rid-of-gpu-throttling: Unsupported GPUs in Dell C4...",
    //     "url": "https://github.com/l4rz/reverse-engineering-dell-idrac-to-get-rid-of-gpu-throttling",
    //     "urlToImage": "https://opengraph.githubassets.com/d6f1cf67015a22bdabaf0fd426c837939bb5a2e068da50b6d2b20e7008fc388f/l4rz/reverse-engineering-dell-idrac-to-get-rid-of-gpu-throttling",
    //     "publishedAt": "2023-05-10T17:29:28Z",
    //     "content": "TL;DR\r\nUnsupported GPUs in Dell C4130 get throttled, here's how to prevent this from happening.\r\nThe problem\r\nDell PowerEdge C4130 (\"C4130\") is a versatile platform, accomodating up to four GPUs per … [+14574 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Futurism"
    //     },
    //     "author": "Victor Tangermann",
    //     "title": "Cybertruck Prototype Gets Stuck in Field",
    //     "description": "Pull Over Now A Tesla Cybertruck prototype decided to stop and smell the roses during a test journey. The oddly shaped vehicle was spotted by eagle-eyed onlookers outside Corpus Christi, Texas, earlier this week, Electrek reports, near where the company celeb…",
    //     "url": "https://futurism.com/the-byte/cybertruck-prototype-stuck-field",
    //     "urlToImage": "https://wp-assets.futurism.com/2023/05/cybertruck-prototype-stuck-field.jpg",
    //     "publishedAt": "2023-05-10T17:26:56Z",
    //     "content": "Tesla is still struggling to get production going.\r\nPull Over Now\r\nA Tesla Cybertruck prototype decided to stop and smell the roses during a test journey.\r\nThe oddly shaped vehicle was spotted by eag… [+2107 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "SlashGear"
    //     },
    //     "author": "staff@slashgear.com (Nikshep Myle)",
    //     "title": "10 Apple Watch Ultra Features That Will Change How You Use Your Smartwatch",
    //     "description": "The Apple Watch Ultra is the newest of Apple&amp;#39;s stunning lineup of wearables. Here are the Apple Watch Ultra features that will redefine your smartwatch.",
    //     "url": "https://www.slashgear.com/1282122/apple-watch-ultra-features-change-how-use-smartwatch/",
    //     "urlToImage": "https://www.slashgear.com/img/gallery/10-apple-watch-ultra-features-that-will-change-how-you-use-your-smartwatch/l-intro-1683739001.jpg",
    //     "publishedAt": "2023-05-10T17:20:42Z",
    //     "content": "Despite being handy, most smartwatches won't give you the freedom to leave your smartphone behind. However, the Ultra can help you head out without cramming your pockets with a phone, wallet, or even… [+1166 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Biztoc.com"
    //     },
    //     "author": "yahoo.com",
    //     "title": "Ex-Tesla worker seeks third trial in race bias case after $3.2 million award",
    //     "description": "A Black former Tesla Inc factory worker has accused the electric automaker's lawyers of \"egregious misconduct\" after a jury awarded him $3.2 million in a race bias case, and asked for a third trial so he can seek more money. Lawyers for plaintiff Owen Diaz sa…",
    //     "url": "https://biztoc.com/x/02eae1f81eb1d6e3",
    //     "urlToImage": "https://c.biztoc.com/p/02eae1f81eb1d6e3/og.webp",
    //     "publishedAt": "2023-05-10T17:14:09Z",
    //     "content": "A Black former Tesla Inc factory worker has accused the electric automaker's lawyers of \"egregious misconduct\" after a jury awarded him $3.2 million in a race bias case, and asked for a third trial s… [+280 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Daily Mail"
    //     },
    //     "author": "Melissa Koenig",
    //     "title": "Did American inventor Nikola Tesla herald the rise of AI?",
    //     "description": "Nikola Tesla may have predicted the rise of artificial intelligence in a recently-resurfaced magazine article from June 1900 in which he writes about machines with their 'own mind.'",
    //     "url": "https://www.dailymail.co.uk/news/article-12069033/Did-American-inventor-Nikola-Tesla-herald-rise-AI.html",
    //     "urlToImage": "https://i.dailymail.co.uk/1s/2023/05/10/18/70827293-0-image-a-16_1683738053912.jpg",
    //     "publishedAt": "2023-05-10T17:01:05Z",
    //     "content": "American inventor Nikola Tesla may have predicted the rise of artificial intelligence more than 120 years ago.\r\nIn a recently-resurfaced magazine article from June 1900, the Austrian-born inventor wr… [+5232 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Motley Fool"
    //     },
    //     "author": "newsfeedback@fool.com (Motley Fool Transcribing)",
    //     "title": "Li Auto (LI) Q1 2023 Earnings Call Transcript",
    //     "description": "LI earnings call for the period ending March 31, 2023.",
    //     "url": "https://www.fool.com/earnings/call-transcripts/2023/05/10/li-auto-li-q1-2023-earnings-call-transcript/",
    //     "urlToImage": "https://g.foolcdn.com/editorial/images/1/featured-transcript-logo-template-2023-01-12.jpg",
    //     "publishedAt": "2023-05-10T17:00:27Z",
    //     "content": "Image source: The Motley Fool.\r\nLi Auto (LI 15.34%)Q1 2023 Earnings CallMay 10, 2023, 8:00 a.m. ET\r\nContents:\r\n<ul><li>Prepared Remarks</li><li>Questions and Answers</li><li>Call Participants</li></u… [+34092 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "CNET"
    //     },
    //     "author": "Dan Avery",
    //     "title": "These States Charge EV Drivers for Not Pumping Gas",
    //     "description": "At least 32 state levy an additional registration fee for EVs and hybrids.",
    //     "url": "https://www.cnet.com/roadshow/news/these-states-charge-electric-vehicle-drivers-up-to-220-for-not-pumping-gas/",
    //     "urlToImage": "https://www.cnet.com/a/img/resize/66735bc7a070ec0035ff671bf37da7c5961668c3/hub/2023/04/27/f9d7c731-8834-4637-8f1a-d18154297b9e/gettyimages-102416417.jpg?auto=webp&fit=crop&height=675&width=1200",
    //     "publishedAt": "2023-05-10T17:00:08Z",
    //     "content": "Electric vehicle owners in Texas may soon have to pay an additional fee to register their zero-emission cars. A bill authorizing a yearly $200 EV tax cleared both houses in April and is awaiting Gov.… [+7655 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Yahoo Entertainment"
    //     },
    //     "author": "Yousef Saba and Rachna  Uppal",
    //     "title": "Lucid losses put Saudi Arabia's EV strategy in the headlamps",
    //     "description": "Lucid's electric vehicles are often displayed prominently at public events and financial conferences in Saudi Arabia to symbolise its crown prince's multi...",
    //     "url": "https://finance.yahoo.com/news/lucid-losses-put-saudi-arabias-165239466.html",
    //     "urlToImage": "https://media.zenfs.com/en/reuters.com/d32e8ae76e21984710258e78d7f77254",
    //     "publishedAt": "2023-05-10T16:52:39Z",
    //     "content": "By Yousef Saba and Rachna Uppal\r\nDUBAI (Reuters) - Lucid's electric vehicles are often displayed prominently at public events and financial conferences in Saudi Arabia to symbolise its crown prince's… [+3178 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Biztoc.com"
    //     },
    //     "author": "hollywoodreporter.com",
    //     "title": "“Nice Tesla (You’re Welcome)”: A Roundup of WGA Strike Protest Signs",
    //     "description": "The Writers Guild of America called a strike after midnight on May 2, and a little more than 12 hours later, picket lines popped up in L.A. and New York outside studios, networks and streamers’ headquarters. A quick survey of the scenes revealed clear (and so…",
    //     "url": "https://biztoc.com/x/437645d62200ce9c",
    //     "urlToImage": "https://c.biztoc.com/p/437645d62200ce9c/og.webp",
    //     "publishedAt": "2023-05-10T16:48:07Z",
    //     "content": "The Writers Guild of America called a strike after midnight on May 2, and a little more than 12 hours later, picket lines popped up in L.A. and New York outside studios, networks and streamers headqu… [+319 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Marketscreener.com"
    //     },
    //     "author": "Reuters",
    //     "title": "Lucid losses put Saudi Arabia's EV strategy in the headlamps",
    //     "description": "(marketscreener.com) Lucid's electric vehicles are\noften displayed prominently at public events and financial\nconferences in Saudi Arabia to symbolise its crown prince's\nmulti-billion dollar \"Vision 2030\".\n The electric car maker is among the biggest U.S. inv…",
    //     "url": "https://www.marketscreener.com/quote/commodity/WTI-2355639/news/Lucid-losses-put-Saudi-Arabia-s-EV-strategy-in-the-headlamps-43806711/?utm_medium=RSS&utm_content=20230510",
    //     "urlToImage": "https://img.zonebourse.com/reuters/2016-12/2016-12-22T094525Z_3_LYNXMPECBL063_RTROPTP_2_MEXICO-USA-OIL.JPG",
    //     "publishedAt": "2023-05-10T16:47:02Z",
    //     "content": "DUBAI, May 10 (Reuters) - Lucid's electric vehicles are\r\noften displayed prominently at public events and financial\r\nconferences in Saudi Arabia to symbolise its crown prince's\r\nmulti-billion dollar … [+3195 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Jneurosci.org"
    //     },
    //     "author": "Doehler, J., Northall, A., Liu, P., Fracasso, A., Chrysidou, A., Speck, O., Lohmann, G., Wolbers, T., Kuehn, E.",
    //     "title": "The 3D Structural Architecture of the Human Hand Area Is Nontopographic",
    //     "description": "The functional topography of the human primary somatosensory cortex hand area is a widely studied model system to understand sensory organization and plasticity. It is so far unclear whether the underlying 3D structural architecture also shows a topographic o…",
    //     "url": "https://www.jneurosci.org/content/43/19/3456?rss=1",
    //     "urlToImage": "https://www.jneurosci.org/sites/default/files/highwire/jneuro/43/19.cover-source.jpg",
    //     "publishedAt": "2023-05-10T16:30:23Z",
    //     "content": "Introduction\r\nIn the mammalian brain, the topographic architecture of the primary somatosensory cortex (S1) is often studied as a model system to understand cortical functional organization and plast… [+14478 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "OilPrice.com"
    //     },
    //     "author": "OilPrice.com",
    //     "title": "Wind Generates More Power Than Gas In The UK For 3 Straight Months",
    //     "description": "The UK’s growing fleet of wind turbines generated more electricity than gas-fired power stations in the first three months of this year, according to new data released by Drax. Almost a third (32.4 per cent) of the UK’s electricity was supplied from wind powe…",
    //     "url": "https://oilprice.com/Latest-Energy-News/World-News/For-The-First-Time-Ever-Wind-Generates-More-Power-Than-Gas-In-UK-For-3-Straight.html",
    //     "urlToImage": "https://d32r1sh890xpii.cloudfront.net/news/718x300/2023-05-10_faypzr5uku.jpg",
    //     "publishedAt": "2023-05-10T16:30:00Z",
    //     "content": "Hegemony is surprisingly closely tied…\r\nYoung climate-concerned voters are one…\r\nBy City A.M - May 10, 2023, 11:30 AM CDTThe UK’s growing fleet of wind turbines generated more electricity than gas-fi… [+2190 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Biztoc.com"
    //     },
    //     "author": "techcrunch.com",
    //     "title": "Twitter now allows you to react to DMs with a wide range of emojis",
    //     "description": "Twitter now allows you to react to DMs with a wide range of emojis Twitter has introduced a new feature that lets users choose almost any emoji to react to a direct message in a conversation. Previously, the company allowed you to react to only the most recen…",
    //     "url": "https://biztoc.com/x/b9ba86c02f2ae521",
    //     "urlToImage": "https://c.biztoc.com/p/b9ba86c02f2ae521/og.webp",
    //     "publishedAt": "2023-05-10T16:28:13Z",
    //     "content": "Twitter now allows you to react to DMs with a wide range of emojisTwitter has introduced a new feature that lets users choose almost any emoji to react to a direct message in a conversation. Previous… [+283 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Energycentral.com"
    //     },
    //     "author": "[Energy Central] Henry Craver",
    //     "title": "We don't drive like Norwegians",
    //     "description": "Scrolling through my newsfeed this morning, I came across this big article in the New York Times detailing the success of electric vehicles in Norway. As a proponent of the electric transition, I was excited to have my worries about possible growing pains ass…",
    //     "url": "https://energycentral.com/c/ee/we-dont-drive-norwegians",
    //     "urlToImage": "https://energycentral.com/sites/default/files/styles/og_meta/public/ece/node_main/2023/5/dreamstime_xs_68138914_0.jpg?itok=ho9FbmIi",
    //     "publishedAt": "2023-05-10T16:27:09Z",
    //     "content": "Scrolling through my newsfeed this morning, I came across this big article in the New York Times detailing the success of electric vehicles in Norway. As a proponent of the electric transition, I was… [+3198 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Electrek"
    //     },
    //     "author": "Fred Lambert",
    //     "title": "Tesla slashes Supercharger prices across Europe",
    //     "description": "Tesla has slashed Supercharger prices across most markets in Europe as energy prices are stabilizing downward following the crisis.\n more…\nThe post Tesla slashes Supercharger prices across Europe appeared first on Electrek.",
    //     "url": "https://electrek.co/2023/05/10/tesla-slashes-supercharger-prices-europe/",
    //     "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2021/07/Teslas-Supercharging.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    //     "publishedAt": "2023-05-10T16:27:08Z",
    //     "content": "Tesla has slashed Supercharger prices across most markets in Europe as energy prices are stabilizing downward following the crisis.\r\nOne of the biggest advantages of electric vehicles remains that th… [+1120 chars]"
    //     }
       ]
      
        
     }
  }

  async componentDidMount(){
    console.log("cdn");
    let url = "https://newsapi.org/v2/everything?q=apple&from=2023-05-09&to=2023-05-09&sortBy=popularity&apiKey=88a58dec3d474689a73361c0f8050948";
    let data = await fetch(url);
    let passdata  = await data.json();
    console.log(passdata)
    this.setState({articles: passdata.articles})
  }


  render() {
    return (
      <div className='container my-3'>
        <div className="row">
          {this.state.articles.map((ele)=>{
            return <div className='col-md-4' key={ele.url}> 
              {/* <Newsitem imageUrl={ele.urlToImage} title={ele.title} /> */}
              <div className="card" style={{width: "18rem"}} >
                    <img src={ele.urlToImage} className="card-img-top" alt="image" />
                    <div className="card-body">
                        <h5 className="card-title">{ele.title}</h5>
                        <p className="card-text">{ele.description}</p>
                        <a href={ele.url} className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default News