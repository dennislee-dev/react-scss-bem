import React from 'react';

import caret from './images/caret.svg';

export const ProductDesc = ({ name, description, rating, features, shade }) => (
  <section>
    <h2 className="product-desc__name">{name}</h2>
    <p className="product-desc__desc">{description}</p>
    <figure className="product-desc__rating">
      <img className="product-desc__rating-image" src={rating} alt="Product Rating" />
      <img src={caret} alt="View All Ratings" />
    </figure>
    <section className="product-desc__features-wrapper">
      <div className="product-desc__feature">
        <h4 className="product-desc__feature-name">Benefits</h4>
        <p className="product-desc__feature-desc">{features.benefits}</p>
      </div>
      <div className="product-desc__feature">
        <h4 className="product-desc__feature-name">Finish</h4>
        <p className="product-desc__feature-desc">{features.finish}</p>
      </div>
      <div className="product-desc__feature">
        <h4 className="product-desc__feature-name">Coverage</h4>
        <p className="product-desc__feature-desc">{features.coverage}</p>
      </div>
      <div className="product-desc__feature">
        <h4 className="product-desc__feature-name">Key Ingredients</h4>
        <p className="product-desc__feature-desc">
          {features.keyIngredients} <a href="http://www.clinique.com">More</a>
        </p>
      </div>
    </section>
    <section className="product-desc__shade">
      <span>{shade.name}</span>
      <div className="product-desc__shade-color-wrapper" style={{ background: shade.color }}></div>
    </section>
  </section>
);
