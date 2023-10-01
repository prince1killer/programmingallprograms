import React from 'react'

let myDate = new Date();

let month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];



function News_contain(props) {
    return (
        <div className="home_news_contain_box" style={{backgroundImage:`url(images/${props.img})`}}>
            <div className="home_news_contain_date"><span>{myDate.getDate()}</span> <span>{month[myDate.getMonth()]}</span></div>
            <div className="home_news_contain_value">
                <div className="news_user"><i className="fa-solid fa-user"></i>By Rachi Card</div>
                <div className="news_title">The Benefits of Vitamin D & How to Get It</div>
                <div className="news_content_shot">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</div>
                <button>Read More <i className="fa-solid fa-circle-arrow-right"></i></button>
            </div>
        </div>
    )
}

export default News_contain