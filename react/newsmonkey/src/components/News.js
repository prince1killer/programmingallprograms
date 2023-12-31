import React , { Component } from 'react'
import { Newsitem } from './Newsitem'
import './Style.css'
export class News extends Component{
    constructor() {
        super();
        console.log("hello i am using constructor in main news");
        this.state = {
          status: "ok",
          totalResults: 38,
          articles: [
            {
              source: { id: "al-jazeera-english", name: "Al Jazeera English" },
              author: "Al Jazeera",
              title:
                "‘Oldest and most complete’ mummy found in Egypt - Al Jazeera English",
              description:
                "The 4,300-year-old mummy was found covered in layers of gold near the Step Pyramid at Saqqara.",
              url: "https://www.aljazeera.com/news/2023/1/27/oldest-complete-mummy-found-egypt",
              urlToImage:
                "https://www.aljazeera.com/wp-content/uploads/2023/01/AP23026457881767.jpg?resize=1920%2C1440",
              publishedAt: "2023-01-27T08:15:34Z",
              content:
                "Egyptian archaeologists have uncovered a Pharaonic tomb near the capital, Cairo, containing what may be the oldest and most complete mummy yet to be discovered in the country.\r\nThe 4,300-year-old mum… [+2180 chars]",
            },
            {
              source: { id: null, name: "CNBC" },
              author: "Jihye Lee",
              title:
                "Adani shares plunge further as it weighs legal action against short seller firm - CNBC",
              description:
                "Adani Group companies' stock prices dropped for a second consecutive trading session after Hindenburg announced its short position in the conglomerate's firms.",
              url: "https://www.cnbc.com/2023/01/27/adani-shares-drop-further-as-group-warns-of-legal-action.html",
              urlToImage:
                "https://image.cnbcfm.com/api/v1/image/107127522-1664558505555-gettyimages-1127534595-20190225_DLI-SV-MN_Rising-005.jpeg?v=1674802849&w=1920&h=1080",
              publishedAt: "2023-01-27T07:00:49Z",
              content:
                "Chairman and founder of the Adani Group, Gautam Adani, at the News18 Rising India Summit on Feb. 25, 2019, in New Delhi, India. Since becoming a billionaire in 2008, Adani is now one of the richest p… [+3407 chars]",
            },
            {
              source: { id: null, name: "CNBC" },
              author: "Jihye Lee",
              title:
                "Asia-Pacific stocks rise as Tokyo’s inflation nears 42-year high - CNBC",
              description:
                "Stocks in the Asia-Pacific traded higher on Friday as traders digested inflation data for Japan's capital city that neared the highest since mid-1981.",
              url: "https://www.cnbc.com/2023/01/27/asia-pacific-markets-wall-streets-gains.html",
              urlToImage:
                "https://image.cnbcfm.com/api/v1/image/107184879-1674786584834-gettyimages-1244188700-AFP_32M22V3.jpeg?v=1674786674&w=1920&h=1080",
              publishedAt: "2023-01-27T06:51:00Z",
              content:
                "Wall Street analysts are divided on Tesla after the electric car company's latest quarterly results.\r\nTesla reported a beat on both earnings and revenue for the fourth quarter, and assuaged investor … [+1788 chars]",
            },
            {
              source: { id: null, name: "The Moscow Times" },
              author: "Daria Andriievska for AFP",
              title:
                "Russian Missiles Kill 11 in Ukraine After Tank Pledge - The Moscow Times",
              description:
                "A blistering wave of Russian strikes targeting Ukraine's energy infrastructure killed 11 people on Thursday, a day after Germany and the United States pledged heavy tanks for Kyiv.",
              url: "https://www.themoscowtimes.com/2023/01/26/russian-missiles-kill-11-in-ukraine-after-tank-pledge-a80051",
              urlToImage:
                "https://static.themoscowtimes.com/image/og/b8/80051__b86ece4a7f0a30f0280d6b08980572dd.jpg",
              publishedAt: "2023-01-27T06:41:45Z",
              content:
                "A blistering wave of Russian strikes targeting Ukraine's energy infrastructure killed 11 people on Thursday, a day after Germany and the United States pledged heavy tanks for Kyiv.\r\nThe stepped-up mi… [+4743 chars]",
            },
            {
              source: { id: null, name: "SamMobile" },
              author: "SamMobile, Asif Iqbal Shaik",
              title:
                "Corning and Samsung confirm Galaxy S23 features Gorilla Glass Victus 2 - SamMobile - Samsung news",
              description:
                "Usually, Samsung is the first in the smartphone industry to incorporate Corning's new Gorilla Glass protection. A few months ago, ...",
              url: "https://www.sammobile.com/news/samsung-confirm-galaxy-s23-gorilla-glass-victus-2/",
              urlToImage:
                "https://www.sammobile.com/wp-content/uploads/2023/01/Samsung-Galaxy-S23-Series-720x405.jpg",
              publishedAt: "2023-01-27T06:22:00Z",
              content:
                "Usually, Samsung is the first in the smartphone industry to incorporate Cornings new Gorilla Glass protection. A few months ago, Corning unveiled Gorilla Glass Victus 2 and promised that it would be … [+1218 chars]",
            },
            {
              source: { id: null, name: "ESPN" },
              author: "Jeff Borzello",
              title:
                "Billy Packer, 82, longtime Final Four basketball analyst, dies - ESPN",
              description:
                "Longtime college basketball commentator Billy Packer, the voice of the NCAA tournament for more than 30 years, died Thursday night. He was 82.",
              url: "https://www.espn.com/mens-college-basketball/story/_/id/35535286/billy-packer-82-long-final-four-basketball-analyst-dies",
              urlToImage:
                "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0127%2Fr1123045_2_1296x1296_1%2D1.jpg",
              publishedAt: "2023-01-27T05:48:45Z",
              content:
                "Longtime college basketball commentator Billy Packer, the voice of the NCAA tournament for more than 30 years, died Thursday night. He was 82.\r\nPacker's two sons, Mark and Brandt, announced the news … [+5730 chars]",
            },
            {
              source: { id: null, name: "Eurasiantimes.com" },
              author: "Tanmay Kadam",
              title:
                "How To Kill An Abrams! Russian ‘Experts’ Issue A Guidebook On Where & How To Destroy The US Main Battle Tank - EurAsian Times",
              description:
                "An image has resurfaced showing vulnerabilities of the American-made M1 Abrams Tanks with instructions on where to hit the Abrams tanks and with what weapons. The image is being circulated by and among Russian netizens shortly after the US agreed to supply Uk…",
              url: "https://eurasiantimes.com/how-to-kill-an-abrams-russian-experts-issue-a-guidebook-on-where-how-to-destroy-the-us-main-battle-tank/",
              urlToImage:
                "https://eurasiantimes.com/wp-content/uploads/2023/01/Whwre-to-hit-Abrams.jpg",
              publishedAt: "2023-01-27T05:25:30Z",
              content:
                "An image has resurfaced on social media showing vulnerabilities of the American-made M1 Abrams Tanks with instructions on where to hit the tank and using what weapons. \r\nUS President Joe Biden, on Ja… [+5100 chars]",
            },
            {
              source: { id: null, name: "BBC News" },
              author: "https://www.facebook.com/bbcnews",
              title:
                "Peru unrest: Police to dismantle roadblocks set by protesters - BBC",
              description:
                "The government says security forces will take down barricades set up by opponents of President Dina Boluarte.",
              url: "https://www.bbc.com/news/world-latin-america-64421312",
              urlToImage:
                "https://ichef.bbci.co.uk/news/1024/branded_news/183F1/production/_128431399_gettyimages-1246575740.jpg",
              publishedAt: "2023-01-27T04:51:15Z",
              content:
                "Roadblocks set up across Peru by demonstrators demanding the resignation of the country's president will be dismantled, officials have said.\r\nPolice and the military are preparing to mount a joint op… [+2543 chars]",
            },
            {
              source: { id: null, name: "Yahoo Entertainment" },
              author: "Jori Epstein",
              title:
                "Cowboys give Mike McCarthy huge vote of confidence, while Kellen Moore's status is much more murky - Yahoo Sports",
              description:
                "Dallas is running it back with its head coach for another season, but a shake-up elsewhere on staff has already begun.",
              url: "https://sports.yahoo.com/cowboys-give-mike-mccarthy-huge-vote-of-confidence-while-kellen-moores-status-is-much-more-murky-032508883.html",
              urlToImage:
                "https://s.yimg.com/ny/api/res/1.2/lUwR50zYHBCyQdV_yxbG0g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04NDY-/https://s.yimg.com/os/creatr-uploaded-images/2023-01/d2b6a350-9df0-11ed-b77e-818afb37259d",
              publishedAt: "2023-01-27T03:25:00Z",
              content:
                "Jerry Jones and Mike McCarthy met this week to discuss the Dallas Cowboys future.\r\nJones, the team owner, didnt simply express confidence in head coach McCarthys ability to win in 2023. Jones summone… [+6201 chars]",
            },
            {
              source: { id: "cnn", name: "CNN" },
              author:
                "Eric Levenson, Melissa Alonso, Jamiel Lynch, Christina Maxouris",
              title:
                "5 former Memphis officers indicted on murder and kidnapping charges in Tyre Nichols' death as nation braces for release of police video - CNN",
              description:
                "Five former Memphis police officers who were fired for their actions during the arrest of Tyre Nichols earlier this month were indicted on charges including murder and kidnapping, Shelby County District Attorney Steve Mulroy announced Thursday.",
              url: "https://www.cnn.com/2023/01/26/us/tyre-nichols-memphis-thursday/index.html",
              urlToImage:
                "https://media.cnn.com/api/v1/images/stellar/prod/230125184201-02-tyre-nichols.jpg?c=16x9&q=w_800,c_fill",
              publishedAt: "2023-01-27T03:16:00Z",
              content:
                "Five former Memphis police officers who were fired for their actions during the arrest of Tyre Nichols earlier this month were indicted on charges including murder and kidnapping, Shelby County Distr… [+9876 chars]",
            },
            {
              source: { id: null, name: "The Guardian" },
              author: "Guardian staff reporter",
              title:
                "Concerns over escalating violence after Israeli forces kill nine Palestinians during West Bank raid - The Guardian",
              description:
                "Palestinian militants fired rockets from Gaza on Friday morning, to which Israel responded with missile strikes",
              url: "https://www.theguardian.com/world/2023/jan/27/concerns-over-escalating-violence-after-israeli-forces-kill-nine-palestinians-during-west-bank-raid",
              urlToImage:
                "https://i.guim.co.uk/img/media/2f858821492fbe4c089bd657fd7680da9d584386/0_257_5616_3370/master/5616.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=1b3777404df47a9869bd8933113ddd7c",
              publishedAt: "2023-01-27T02:59:00Z",
              content:
                "Washington has raised concern over the escalation in Israeli-Palestinian violence after Israeli forces on Thursday killed nine Palestinians during a West Bank raid in the deadliest single day in the … [+4695 chars]",
            },
            {
              source: { id: null, name: "CNBC" },
              author: "Evelyn Cheng",
              title:
                "Here's where mainland Chinese traveled overseas for the Lunar New Year - CNBC",
              description:
                "Travel booking site Trip.com ranked the top overseas destinations for travelers from mainland China during the first four days of the Lunar New Year holiday.",
              url: "https://www.cnbc.com/2023/01/27/heres-where-mainland-chinese-traveled-overseas-for-the-lunar-new-year.html",
              urlToImage:
                "https://image.cnbcfm.com/api/v1/image/107184876-1674783119100-gettyimages-1457953515-vp1_2195_b8d47c6d-4a55-4510-a5e2-732296f38aec.jpeg?v=1674787524&w=1920&h=1080",
              publishedAt: "2023-01-27T02:45:00Z",
              content:
                "BEIJING Travelers from mainland China stuck close to home in Asia during the Lunar New Year, the first holiday after Beijing relaxed its Covid-related border controls.\r\nHong Kong and Macao were the m… [+1407 chars]",
            },
            {
              source: { id: null, name: "YouTube" },
              author: null,
              title:
                "Half Moon Bay mass shooting suspect says he was bullied at job in television interview - KPIX CBS SF Bay Area",
              description:
                "Team coverage on the latest developments in the Half Moon Bay mass shooting investigation (1-26-2023)",
              url: "https://www.youtube.com/watch?v=wqrt-N-OGNw",
              urlToImage: "https://i.ytimg.com/vi/wqrt-N-OGNw/maxresdefault.jpg",
              publishedAt: "2023-01-27T01:56:04Z",
              content: null,
            },
            {
              source: { id: null, name: "YouTube" },
              author: null,
              title:
                "Best Plays From NBA All-Star Starter Luka Doncic | 2022-23 NBA Season - NBA",
              description:
                "Luka Doncic is making his 4th #NBAAllStar appearance. Drafted as the 3rd overall pick in the 2018 NBA Draft out of Slovenia, Luka has three All-NBA First Tea...",
              url: "https://www.youtube.com/watch?v=fytzeKzoh7g",
              urlToImage: "https://i.ytimg.com/vi/fytzeKzoh7g/maxresdefault.jpg",
              publishedAt: "2023-01-27T01:47:51Z",
              content: null,
            },
            {
              source: { id: null, name: "CBS Sports" },
              author: "",
              title:
                "2023 NFL playoffs picks: Eagles beat 49ers in NFC title game thriller, Bengals edge Chiefs in AFC Championship - CBS Sports",
              description:
                "Wondering who's going to be playing in Super Bowl LVII? You've come to the right place to find out",
              url: "https://www.cbssports.com/nfl/news/2023-nfl-playoffs-picks-eagles-beat-49ers-in-nfc-title-game-thriller-bengals-edge-chiefs-in-afc-championship/",
              urlToImage:
                "https://sportshub.cbsistatic.com/i/r/2023/01/24/39c4011a-21f9-44d0-8a93-a15400e9dfd5/thumbnail/1200x675/a258f3cf7ad15f448435d868ea5f84fa/hurts4.jpg",
              publishedAt: "2023-01-27T01:22:21Z",
              content:
                "Maybe it was just me, but did anyone else experience deja vu over the weekend?\r\nThe 49ers, Chiefs and Bengals all won during a divisional round that ended with the Cowboys running the dumbest play po… [+15313 chars]",
            },
            {
              source: { id: null, name: "YouTube" },
              author: null,
              title:
                "Prince Andrew booted from Buckingham Palace | 7NEWS - 7NEWS Australia",
              description:
                "Controversial member of the royal family Prince Andrew has reportedly been booted from Buckingham Palace. There’s now growing widespread speculation as to wh...",
              url: "https://www.youtube.com/watch?v=vP4g-3B9rMw",
              urlToImage: "https://i.ytimg.com/vi/vP4g-3B9rMw/maxresdefault.jpg",
              publishedAt: "2023-01-27T01:02:23Z",
              content: null,
            },
            {
              source: { id: null, name: "YouTube" },
              author: null,
              title:
                "Has Earth's Core Stopped Spinning? | January 27, 2023 - CNN 10",
              description: null,
              url: "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DSbSGWs_ZmmE",
              urlToImage: null,
              publishedAt: "2023-01-27T01:00:10Z",
              content:
                "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later",
            },
            {
              source: { id: null, name: "BBC News" },
              author: "https://www.facebook.com/bbcnews",
              title:
                "Asteroid 2023 BU: Space rock passes closer than some satellites - BBC",
              description:
                "About the size of a bus, the space rock whipped over the southern tip of South America.",
              url: "https://www.bbc.com/news/science-environment-64411469",
              urlToImage:
                "https://ichef.bbci.co.uk/news/1024/branded_news/7FC8/production/_128421723_gettyimages-1365125730.jpg",
              publishedAt: "2023-01-27T00:57:17Z",
              content:
                "Now it's over, we can say it: a biggish asteroid passed by Earth a short while ago.\r\nAbout the size of a minibus, the space rock, known as 2023 BU, whipped over the southern tip of South America just… [+3514 chars]",
            },
            {
              source: { id: null, name: "YouTube" },
              author: null,
              title: "Dead Space Remake Video Review - GameSpot",
              description: null,
              url: "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DRW8vYfi1bQ0",
              urlToImage: null,
              publishedAt: "2023-01-27T00:51:01Z",
              content:
                "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later",
            },
            {
              source: { id: "abc-news", name: "ABC News" },
              author: "Will McDuffie",
              title:
                "Kemp declares state of emergency after protests, mobilizes National Guard - ABC News",
              description:
                "Police arrested six people Saturday after demonstrations escalated in Atlanta.",
              url: "https://abcnews.go.com/US/kemp-declares-state-emergency-after-protests-mobilizes-national/story?id=96701465",
              urlToImage:
                "https://s.abcnews.com/images/US/brian-kemp-ap-jt-230126_1674778839241_hpMain_16x9_992.jpg",
              publishedAt: "2023-01-27T00:49:41Z",
              content:
              "Georgia Gov. Brian Kemp declared a state of emergency Thursday in response to ongoing protests in downtown Atlanta.\r\nKemp ordered the state's defense department to mobilize up to 1,000 state National… [+2235 chars]",
            },
          ],
        };
      }
      async componentDidMount(){
          let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=88a58dec3d474689a73361c0f8050948&pageSize=5&page=${1}`;
          let data = await fetch(url);
          let parsedData = await data.json();
          console.log(parsedData)
          this.setState({articles:parsedData.articles})
      }
      handlePreClick = async () => {
        console.log("pre")
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=88a58dec3d474689a73361c0f8050948&pageSize=5&page=${this.state.page - 1}`;
          let data = await fetch(url);
          let parsedData = await data.json();
          console.log(parsedData)
        this.setState({
          page: this.state - 1,
          articles: parsedData.articles,
        })  
      } 
      handleNextClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=88a58dec3d474689a73361c0f8050948&pageSize=5&page=${this.state.page + 1}`;
        console.log("next")
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({
          page: this.state + 1,
          articles: parsedData.articles,
        })
    } 
      render(){
        return(
          <div className='container my-1'>
                <h2>News Monkey - Top Headlines</h2>
                <div className='row'>
                {this.state.articles.map((element)=>{
                  return <div className='col-md-4'key={element.url}>
                    <Newsitem  title={element.title?element.title.slice(0,45):""} description={element.description} imageUrl={!element.urlToImage?"https://th.bing.com/th?id=ORMS.98d775b43d84a71fd3f7dc39dd975c9b&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1&p=0":element.urlToImage} newsUrl={element.url}/>    
                   </div>                     
                })}
                </div>
                <div  className='page d-flex justify-content-between'>
                  <button  type="button" onClick={this.handlePreClick} className='btn btn-success '> Pre</button>
                  <button type="button" onClick={this.handleNextClick} className='btn btn-success'> Next</button>
                </div>
            </div>
        )
    }
}