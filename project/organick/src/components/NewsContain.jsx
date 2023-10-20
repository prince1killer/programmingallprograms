import React from 'react'

let myDate = new Date();

let month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];




function News_contain(props) {
    let img = props.img;
    let newstitle = props.title;
    let newsDis = props.dis;
    const newsRoad = () => {
    
        sessionStorage.setItem("headerbg",`url(images/${img})`)
        sessionStorage.setItem("title",newstitle)
        // sessionStorage.setItem("dis",newsDis)
    
        window.location.href="./newsp"
    }


    return (
        <div className="home_news_contain_box" style={{backgroundImage:`url(images/${img})`}}>
            <div className="home_news_contain_date"><span>{myDate.getDate()}</span> <span>{month[myDate.getMonth()]}</span></div>
            <div className="home_news_contain_value">
                <div className="news_user"><i className="fa-solid fa-user"></i>By Rachi Card</div>
                <div className="news_title">{newstitle}</div>
                <div className="news_content_shot">{newsDis}</div>
                <button onClick={newsRoad}>Read More <i className="fa-solid fa-circle-arrow-right"></i></button>
            </div>
        </div>
    )
}

export default News_contain