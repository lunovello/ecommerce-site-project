import { useReducer, useEffect, useContext, Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import productScreenStyle from './ProductScreen.module.css';
import Rating from '../../components/Rating/Rating';
import LoadingBox from '../../components/LoadingBox/LoadingBox';
import ErrorBox from '../../components/ErrorBox/ErrorBox';
import Devices from './Devices';
import { Store } from '../../Store';
import FeaturedItems from '../../components/FeaturedItems/FeaturedItems';
import QuantityBox from '../../components/QuantityBox/QuantityBox';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        product: action.payload.product,
        devices: action.payload.devices,
        loading: false,
        error: false,
      };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function ProductScreen(props) {
  const [productQty, setProductQty] = useState(1);
  const params = useParams();
  const { slug } = params;
  const [{ loading, error, product, devices }, dispatch] = useReducer(reducer, {
    product: [],
    devices: [],
    loading: true,
    error: '',
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/products/${slug}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
    setProductQty(1);
  }, [slug]);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  const addToCartHandler = async () => {
    const itemExists = cart.cartItems.find((x) => x._id === product._id);
    const quantity = itemExists ? itemExists.quantity + productQty : productQty;
    const { data } = await axios.get(`/api/products/${slug}`);
    if (data.quantityInStock < quantity) {
      window.alert('Sorry, Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity: quantity },
    });
  };

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <Fragment>
      <ErrorBox error={error} />

      <FeaturedItems mainTitle="Related Items" />
    </Fragment>
  ) : (
    <div className={productScreenStyle.productScreenContainer}>
      <div className={productScreenStyle.productContainer}>
        <img
          className={productScreenStyle.productImage}
          src={product.image}
          alt="product"
        />
        <div className={productScreenStyle.productDetails}>
          <h4 className={productScreenStyle.productTitle}>{product.name}</h4>
          <h5 className={productScreenStyle.productArtist}>{product.artist}</h5>
          <p className={productScreenStyle.productDescription}>
            {product.description}
          </p>
          <Rating
            class={productScreenStyle.productRating}
            rating={product.rating}
            numReviews={product.numReviews}
          />
          <div className={productScreenStyle.productOptionsContainer}>
            <QuantityBox
              value={productQty}
              setQty={setProductQty}
              quantityBoxContainerStyle={
                productScreenStyle.productQuantityContainer
              }
              quantityBoxLabelStyle={productScreenStyle.productQuantityLabel}
              quantityBoxInputStyle={productScreenStyle.productQuantity}
            />
            <Devices
              devices={devices}
              className={productScreenStyle.productDeviceContainer}
            />
            <h5 className={productScreenStyle.productPrice}>
              ${product.price}
            </h5>
            <button
              className={productScreenStyle.productButton}
              onClick={addToCartHandler}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <FeaturedItems mainTitle="Related Items" />
    </div>
  );
}

export default ProductScreen;
