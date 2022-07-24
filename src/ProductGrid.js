import React from "react";
import { ProductImage } from "./ProductImage";

export const ProductGrid = ({
  heading,
  cta1,
  p1Name,
  p1Img,
  p1Price,
  p2Name,
  p2Img,
  p2Price,
  p3Name,
  p3Img,
  p3Price,
  p4Name,
  p4Img,
  p4Price,
}) => (
  <section className="product-grid">
    <h2 className="product-grid__title">{heading}</h2>
    <div className="product-grid__wrapper">
      <div className="product">
        <div className="product__info">
          <div className="product__image">
            <ProductImage image={p1Img} />
          </div>
          <h1 className="product__name">{p1Name}</h1>
          <h4 className="product__price">{p1Price}</h4>
        </div>
        <button className="product__button">{cta1}</button>
      </div>
      <div className="product">
        <div className="product__info">
          <div className="product__image">
            <ProductImage image={p2Img} />
          </div>
          <h1 className="product__name">{p2Name}</h1>
          <h4 className="product__price">{p2Price}</h4>
        </div>
        <button className="product__button">{cta1}</button>
      </div>
      <div className="product">
        <div className="product__info">
          <div className="product__image">
            <ProductImage image={p3Img} />
          </div>
          <h1 className="product__name">{p3Name}</h1>
          <h4 className="product__price">{p3Price}</h4>
        </div>
        <button className="product__button">{cta1}</button>
      </div>
      <div className="product">
        <div className="product__info">
          <div className="product__image">
            <ProductImage image={p4Img} />
          </div>
          <h1 className="product__name">{p4Name}</h1>
          <h4 className="product__price">{p4Price}</h4>
        </div>
        <button className="product__button">{cta1}</button>
      </div>
    </div>
  </section>
);
