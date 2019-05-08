import React from 'react';
import PropTypes from 'prop-types';
import { generate } from 'shortid';
import Item from './purchase/Item';
import Button from './purchase/Button';
import './Purchase.scss';

const Purchase = ({
  artwork: { orientation, colors, title, details, formats, src }
}) => (
  <section className="artwork-purchase">
    <div className={`artwork-purchase-container flex-${orientation}`}>
      <div className="artwork-framed flex">
        <img className={orientation} src={src.framed} />
      </div>
      <section className="flex">
        <div className="artwork-description">
          <h1 style={{ color: colors.background }}>{title}</h1>
          <p>{details.type} — Edition of 30</p>
          <p>
            Giclée fine art print on premium archival smooth paper, 290 gsm,
            21.5 mil. Print includes a white border for framing. Frame not
            included.
          </p>
          <ul>
            {formats.map(format => (
              <Item key={generate()} format={format} />
            ))}
          </ul>
          <Button />
        </div>
      </section>
    </div>
  </section>
);

Purchase.propTypes = {
  artwork: PropTypes.object.isRequired
}

export default Purchase;