import React from 'react'
import './News.css'

function News_page() {
    let headerbg = sessionStorage.getItem('headerbg')
    let title = sessionStorage.getItem("title")
  return (
    <div className='news_page'>
        <div className='news_page_header' style={{backgroundImage:headerbg}}>
          <div className="news_page_title">
            <div><span>Posted On:</span> January 6, 2022 By  <i class="fa-solid fa-user"></i>Rachi Card</div>
          </div>
        </div>
    </div>
  )
}

export default News_page