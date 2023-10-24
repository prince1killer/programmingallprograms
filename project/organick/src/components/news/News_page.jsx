import React from 'react'
import './News.css'

function News_page() {
    let headerbg = sessionStorage.getItem('headerbg')
    let title = sessionStorage.getItem("title")
  return (
    <div className='news_page'>
        <div className='news_page_header' style={{backgroundImage:headerbg}}>
          <div className="news_page_title">
            <div className='news_page_title_top'><span>Posted On:</span> January 6, 2022 By  <i class="fa-solid fa-user"></i>Rachi Card</div>
            <div className='news_pages_title_middle'>{title}</div>
            <p>Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>
          </div>
        </div>
        <div className="news_page_content news_page_box">
          <p>Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than friction technology.</p>
          <h1>Preferred Form of Vitamin D?</h1>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
          <ul>
            <li>Publishing packages and web pageLorem Ipsum as their default</li>
            <li>Content here, content here', making it look like readable</li>
            <li>Packages and web pageLorem Ipsum as their default</li>
          </ul>
          <div className='news_page_content_box'>
            <p>“The first rule of any organic used in a business is that nature applied to an efficient operation will magnify the efficiency. The second is that organic applied to an inefficient operation will magnify the health.”</p>
          </div>
          <div className='news_pages_title_bottom'>
            <h2>Make perfect organic product with us</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            <ol>
              <li>Publishing packages and web pageLorem Ipsum as their default</li>
              <li>Content here, content here', making it look like readable</li>
              <li>Packages and web pageLorem Ipsum as their default</li>
              <li>more-or-less normal distribution of letters</li>
            </ol>
          </div>
        </div>

    </div>
  )
}

export default News_page