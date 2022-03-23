import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api";
import { StoryView, UserInfo } from "../index";

export const MainView = () => {
  const [searchInput, setSearchInput] = useState('');
  const [isNewsActive, setIsNewsActive] = useState(false);
  const [isUserInfoActive, setIsUserInfoActive] = useState(false);
  const [chosenNews, setChosenNews] = useState('');
  const key = localStorage.getItem('key');
  const [news, setNews] = useState([]);
  useEffect(() => {
    api.getNews(key)
      .then((result) => {
        setNews(result.articles);
      });
  }, []);
  const getNews = () => {
    api.getSpecificNews(key, searchInput)
      .then((result) => {
        setNews(result.articles);
      });
  };
  const onNewsButtonClick = (item) => {
    setIsNewsActive(true);
    setChosenNews(item);
  };
  return (
    <div className="main-container">
      <div className="search-container">
        <div className="input-container">
          <input type="text" placeholder="Search topics..." value={searchInput} onChange={(event) => setSearchInput(event.target.value)}/>
          <button type="button" onClick={getNews}> Search</button>
        </div>
        <div className="profile-info">
          <button type="button" onClick={() => setIsUserInfoActive(true)} > 
            User Info
          </button>
        </div>
      </div>
      <div className="main-box">
        {news ? news.map((item, index) => (
          <div className="news-container" key={index} >
            <img src={item.urlToImage}
              title="Title of image" width='200px' className="image"></img>
            <div className="news-content">
              <div className="date">{item.publishedAt}</div>
              <h3 className="tite">{item.title}</h3>
              <div className="desc">{item.description}</div>
              <button className="link-button" onClick={() =>onNewsButtonClick(item)}>
                go to
              </button>
            </div>
          </div>
        ))
          : () => (
            <div>loarding</div>
          )}

      </div>
      { !!news ?  (
        <StoryView isActive={isNewsActive} setActive={setIsNewsActive} chosenNews={chosenNews}/>
      ) : (
        <div>loarding</div>
      )
      }
      <UserInfo  isActive={isUserInfoActive} setActive={setIsUserInfoActive}/>
    </div>
  )
};
