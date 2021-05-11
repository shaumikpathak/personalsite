import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link}>{data.title}</a></h3>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
      </header>
      <div className="slider">
        <span id="slide-1" />
        <span id="slide-2" />
        <span id="slide-3" />
        <div className="image-container">
          <a href={data.link} className="image">
            <img src={`${process.env.PUBLIC_URL}${data.image1}`} alt={data.title} />
            <img src={`${process.env.PUBLIC_URL}${data.image2}`} alt={data.title} />
            <img src={`${process.env.PUBLIC_URL}${data.image3}`} alt={data.title} />
            <img src={`${process.env.PUBLIC_URL}${data.image4}`} alt={data.title} />
          </a>
        </div>
        <div className="buttons">
          <a href="#slide-1"> </a>
          <a href="#slide-2"> </a>
          <a href="#slide-3"> </a>
        </div>
      </div>
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image1: PropTypes.string.isRequired,
    image2: PropTypes.string.isRequired,
    image3: PropTypes.string.isRequired,
    image4: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
