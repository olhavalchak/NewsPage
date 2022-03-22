import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { selectKey } from '../../lib/redux/selectors';
import { api } from "../../api";

export const MainView = () => {
  const key = useSelector(selectKey);
  const [news, setNews] = useState([])
  useEffect(() => {
    api.getNews(`619aeec4f8554b30bc1452282936f7ee`)
      .then((result) => {
        setNews(result.articles);
      });
  }, [key]);
  return (
    <div className="main-container">
      <div className="main-box">
        {news ? news.map((item) => (
          <div className="news-container">
            <img src={item.urlToImage}
              title="Title of image" width='200px' className="image"></img>
            <div className="news-content">
              <div className="date">{item.publishedAt}</div>
              <h3 className="tite">{item.title}</h3>
              <div className="desc">{item.description}</div>
              <button className="link-button">
                <a className="link" href={item.url}>go to</a>
              </button>
            </div>
          </div>
        ))
          : () => (
            <div>loarding</div>
          )}

      </div>
    </div>
  )
};
