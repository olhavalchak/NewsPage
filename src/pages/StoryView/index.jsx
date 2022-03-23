import React from "react";

export const StoryView = ({ isActive, setActive, chosenNews }) => {

  return (
    <div className={isActive ? 'story-page active' : 'story-page'} onClick={() => setActive(false)}>
      <div className="story-container" onClick={(e) => e.stopPropagation()}>
        <div className="news-container"  >
          <div className="news-content">
            <div className="date">{chosenNews.publishedAt}</div>
            <h3 className="tite">{chosenNews.title}</h3>
            <div className="desc">{chosenNews.description}</div>
            <div className="desc">{chosenNews.content}</div>
          </div>
        </div>
      </div>
    </div>
  )
};
