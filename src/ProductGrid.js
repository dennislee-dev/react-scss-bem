import React from 'react';
import { ProductImage } from './ProductImage';

export const ProductGrid = ({ heading, cta1, p1Name, p1Img, p1Price, p2Name, p2Img, p2Price, p3Name, p3Img, p3Price, p4Name, p4Img, p4Price }) =>
  <section>
      <h2>{heading}</h2>
      <div>
        <ProductImage image={p1Img} />
        <div>
            <h1>{p1Name}</h1>
            <h4>{p1Price}</h4>
            <button>{cta1}</button>
        </div>
      </div>
      <div>
        <ProductImage image={p2Img} />
        <div>
            <h1>{p2Name}</h1>
            <h4>{p2Price}</h4>
            <button>{cta1}</button>
        </div>
      </div>
      <div>
        <ProductImage image={p3Img} />
        <div>
            <h1>{p3Name}</h1>
            <h4>{p3Price}</h4>
            <button>{cta1}</button>
        </div>
      </div>
      <div>
        <ProductImage image={p4Img} />
        <div>
            <h1>{p4Name}</h1>
            <h4>{p4Price}</h4>
            <button>{cta1}</button>
        </div>
      </div>
  </section>
