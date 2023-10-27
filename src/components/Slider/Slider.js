import React, { useEffect } from 'react';
import './Slider.css';

export const Slider = (props) => {
  useEffect(() => {
    const sliderLine = document.querySelector('.slider');
    let offset = 0;
    const buttonNext = document.querySelector('.button-next');
    const buttonPrev = document.querySelector('.button-prev');

    if (buttonPrev) {
      buttonPrev.style.display = 'none';
    }

    if (buttonNext && buttonPrev) {
      buttonNext.addEventListener('click', () => {
        offset += 309;
        if (offset > 1136) {
          buttonNext.style.display = 'none';
        }
        if (offset > 0) {
          buttonPrev.style.display = 'flex';
        }
        if (offset > 1236) {
          offset = 0;
        }
        sliderLine.style.left = -offset + 'px';
      });

      buttonPrev.addEventListener('click', () => {
        offset -= 309;
        if (offset === 0) {
          buttonPrev.style.display = 'none';
        }
        if (offset < 8035) {
          buttonNext.style.display = 'flex';
        }
        if (offset < 0) {
          offset = 1235;
        }
        sliderLine.style.left = -offset + 'px';
      });
    }
  }, []);

  return (
    <section className="home">
      <div className="home__container">
        <button className="button-next">
          <figure className="circle-for-desktop">
            <svg className="arrow-for-desktop">
              <use href="src/assets/images/triphouse.svg#arrow" />
            </svg>
          </figure>
        </button>
        <button className="button-prev">
          <figure className="circle-for-desktop">
            <svg className="arrow-for-desktop arrow-js">
              <use href="src/assets/images/triphouse.svg#arrow" />
            </svg>
          </figure>
        </button>
        <h2 className="home__title">Homes guests loves</h2>
        <div className="slider-container">
          <div className="home__advantages slider">
            {props.data.map(({ imageUrl, name, city, country }) => (
              <div className="home__advantages--item" key={name}>
                <figure className="home__advantages--img-wrapper">
                  <img src={imageUrl} alt="Hotel img" />
                </figure>
                <p className="apartments">{name}</p>
                <p className="apartments-location">
                  {city}, {country}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
