import React from 'react'
import './News.css'
import NewsContain from '../NewsContain'

function News() {
  return (
    <div className='news'>
        <div className='news_header'>
            <h2>Recent News</h2>
        </div>
        <div className='news_content'>
            <NewsContain img={"Imagenews1.png"} title={"The Benefits of Vitamin D & How to Get It"} dis={"Simply dummy text of the printing and typesetting industry. Lorem Ipsum"}/>
            <NewsContain img={"Imagenews2.png"} title={"Our Favorite Summertime Tomato"} dis={"Simply dummy text of the printing and typesetting industry. Lorem Ipsum"}/>
            <NewsContain img={"photonews3.png"} title={"Benefits of Vitamin C & How to Get It"} dis={"Simply dummy text of the printing and typesetting industry. Lorem Ipsum"}/>
            <NewsContain img={"photonews4.png"} title={"Research More Organic Foods"} dis={"Simply dummy text of the printing and typesetting industry. Lorem Ipsum"}/>
            <NewsContain img={"photonews5.png"} title={"Everyday Fresh Fruites"} dis={"Simply dummy text of the printing and typesetting industry. Lorem Ipsum"}/>
            <NewsContain img={"photonews6.png"} title={"Don’t Use Plastic Product! it’s Kill Nature"} dis={"Simply dummy text of the printing and typesetting industry. Lorem Ipsum"}/>
        </div>
    </div>
  )
}

export default News