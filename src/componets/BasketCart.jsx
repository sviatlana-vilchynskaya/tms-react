import React from 'react';
import { object } from 'prop-types';
// Helpers
import viewNumber from '../helpers/viewNumber';
// Styles
import useStyles from '../styles/components/BasketCart';
// Components
import Button from './Button';


const BasketCart = ({ product }) => {
  const classes = useStyles();
  return (
    <>
      <div id="Content" className="container">
        <div className={`${classes.content} row`}>
          <div className={classes.img}>
            <img src={product.imageLink} alt="" />
          </div>
          <div className={classes.title}>
            <p className={classes.product__text}>{product.title}</p>
            <p
              className={classes.product__description}
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </div>
          <div className={classes.product__price}>
            <p>{viewNumber(product.price.value)}</p>
            <Button product={product} />
          </div>
        </div>
      </div>
    </>
  );
};

BasketCart.propTypes = {
  product: object.isRequired,
};
export default BasketCart;
