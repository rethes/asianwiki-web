// import libraries
import * as React from "react";

// styles
import "./LatestContent.scss";

// interfaces
import { LatestContentProps } from "./interfaces";

/**
 * Renders the news article
 *
 * param {array} arrayValues
 *
 * @returns {JSX}
 */
const arrayValueList = arrayValues =>
  arrayValues.map((arrayValue, index) => {
    return (
      <div className="news-article" key={index}>
        <img
          src={arrayValue.image}
          className="news-article__image"
          alt="News Article"
        />
        <p className="news-article__title">{arrayValue.title}</p>
        <p className="news-article__date">{arrayValue.publishedDate}</p>
      </div>
    );
  });

export const LatestContent = (props: LatestContentProps) => {
  const { news } = props;
  const limitNews = news.slice(0, 5);

  limitNews.sort((a, b) =>
    new Date(a.publishedDate) < new Date(b.publishedDate) ? 1 : -1
  );

  return (
    <div className="news-section">
      <div className="header">
        <h2 className="header-panel__heading">Latest News</h2>
      </div>
      {arrayValueList(limitNews)}
    </div>
  );
};

export default LatestContent;
