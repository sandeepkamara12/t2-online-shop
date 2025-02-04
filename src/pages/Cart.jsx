import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/common/Breadcrumbs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductColor from "../components/Products/ProductColor";
import ProductReview from "../components/Products/product/ProductReview";
import { removeItemFromCart, updateItemInCart } from "../store/cartSlice";
import { Link } from 'react-router-dom';

const Cart = () => {
    const sizeChart = useSelector((state) => state.sizes.sizes);
    const cartProductsInfo = useSelector((state) => state.cart.carts);
    const [openModal, setOpenModal] = useState(false);
    const [userCartProducts, setUserCartProducts] = useState([]);
    const [userId, setUserId] = useState(null);
    const [payableAmount, setPayableAmount] = useState({ subTotal: null, shippingCharges: null, total: null });
    const dispatch = useDispatch();

    const updateUserAndWishlistAndCart = () => {
        if (typeof window !== "undefined") {
            const userData = localStorage.getItem("data");
            if (userData) {
                /* Get User Information */
                const parsedData = JSON.parse(userData);
                setUserId(parsedData.userId);

                /* Get Cart Information */
                setUserCartProducts(cartProductsInfo?.cart);
            } else {
                setUserId(null);
            }
        }
    };

    useEffect(() => {
        updateUserAndWishlistAndCart();
    }, []);

    const updateItemQuantity = (e, itemId) => {
        // const inputValue = e.target.value;
        const newQuantity = parseInt(e.target.value, 10);
        if (isNaN(newQuantity) || newQuantity <= 0) return;
        dispatch(updateItemInCart({ productId: itemId, quantity: newQuantity }))
    };

    const updateAmount = () => {
        let subTotal = userCartProducts.reduce((total, item) => {
            const itemPrice = item.salePrice || item.price;
            return total + item.quantity * itemPrice;
        }, 0);
        subTotal = parseFloat(subTotal.toFixed(2));
        const shippingCharges = subTotal < 500 ? 10 : 0;
        const totalPayableAmount = subTotal + shippingCharges;
        setPayableAmount(prev => ({ ...prev, subTotal: subTotal, shippingCharges: shippingCharges, total: totalPayableAmount }));
    }

    useEffect(() => {
        updateUserAndWishlistAndCart();
    }, [userId, cartProductsInfo?.cart]);

    useEffect(() => {
        updateAmount();
    }, [userId, cartProductsInfo?.cart, userCartProducts]);

    const removeItemFromCarts = (cartId) => {
        dispatch(removeItemFromCart({ cartId: cartId }));
    };

    const closeModalFn = () => {
        document.body.classList.remove('modal-open');
        document.body.classList.remove('adjust-padding');
        setOpenModal(false);
    };

    const openModalFn = () => {
        document.body.classList.add('modal-open');
        document.body.classList.add('adjust-padding');
        setOpenModal(true);
    };
    return (
        <>
            <main className="main">
                <Breadcrumbs />
                <div className="page-content">
                    <div className="cart">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-9">
                                    <table className="table table-cart table-mobile">
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                                <th></th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {userCartProducts?.length > 0 &&
                                                userCartProducts?.map((item) => {
                                                    let itemPrice = !item?.salePrice
                                                        ? item?.price
                                                        : item?.salePrice;
                                                    return (
                                                        <tr key={`cart-${item?.id}`} data-id={item?.id}>
                                                            <td className="product-col">
                                                                <div className="product">
                                                                    <figure className="product-media">
                                                                        <Link href="#">
                                                                            <img
                                                                                src={`/${item?.image}`}
                                                                                width="100"
                                                                                height="100"
                                                                                alt="Product image"
                                                                            />
                                                                        </Link>
                                                                    </figure>
                                                                    <div className="flex flex-column layout-three">
                                                                        <h3 className="product-title">
                                                                            <a href="#">{item?.name}</a>
                                                                        </h3>
                                                                        <div
                                                                            className={`ratings-container wishlist-product-rating`}
                                                                        >
                                                                            <ProductReview
                                                                                reviewCount={item?.review_count}
                                                                                rating={item?.rating}
                                                                            />
                                                                        </div>
                                                                        <div className={`product-size mb-0`}>
                                                                            {sizeChart.length > 0 &&
                                                                                sizeChart?.map((size) => {
                                                                                    return (
                                                                                        <a
                                                                                            title=""
                                                                                            className={`text-uppercase ${item?.size?.includes(
                                                                                                size?.name
                                                                                            )
                                                                                                ? "active"
                                                                                                : "disabled"
                                                                                                }`}
                                                                                            key={size?.name}
                                                                                        >
                                                                                            {size?.name}
                                                                                        </a>
                                                                                    );
                                                                                })}
                                                                        </div>

                                                                        <ProductColor
                                                                            productColors={item?.color}
                                                                            layout={"none"}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="price-col">
                                                                <div className={`product-price`}>
                                                                    {!item?.salePrice ? (
                                                                        `$${item?.price}`
                                                                    ) : (
                                                                        <>
                                                                            <span className="new-price">
                                                                                ${item?.salePrice}
                                                                            </span>
                                                                            <span className="old-price">
                                                                                ${item?.price}
                                                                            </span>
                                                                            <div className="d-block price-percentage col-12 p-0">{parseFloat(((item?.price - item?.salePrice) / item?.price) * 100).toFixed(0) + '% OFF'}</div>
                                                                        </>
                                                                    )}
                                                                </div>
                                                            </td>
                                                            <td className="quantity-col">
                                                                <div className="cart-product-quantity">
                                                                    <input
                                                                        type="number"
                                                                        className="form-control"
                                                                        value={item?.quantity}
                                                                        id={`item_quantity_${item?.productId}`}
                                                                        onChange={(e) =>
                                                                            updateItemQuantity(e, item?.productId)
                                                                        }
                                                                        min="1"
                                                                        max="10"
                                                                        step="1"
                                                                        data-decimals="0"
                                                                        required
                                                                    />
                                                                </div>
                                                            </td>
                                                            <td className="total-col">
                                                                ${parseFloat((item?.quantity * itemPrice).toFixed(2))}
                                                            </td>
                                                            <td className="remove-col">
                                                                <button
                                                                    className="btn-remove"
                                                                    onClick={() =>
                                                                        removeItemFromCarts(item?.id)
                                                                    }
                                                                >
                                                                    <svg
                                                                        width="20"
                                                                        height="20"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        strokeWidth={1.5}
                                                                        stroke="currentColor"
                                                                        className="size-6"
                                                                    >
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                                                        />
                                                                    </svg>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                        </tbody>
                                    </table>

                                    <div className="cart-bottom">
                                        <div className="cart-discount">
                                            <form action="#">
                                                <div className="input-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        required
                                                        placeholder="coupon code"
                                                    />
                                                    <div className="input-group-append">
                                                        <button
                                                            className="btn btn-outline-primary-2"
                                                            type="submit"
                                                        >
                                                            <i className="icon-long-arrow-right"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <aside className="col-lg-3">
                                    <div className="position-sticky" style={{ "top": "120px" }}>
                                        <div className="summary summary-cart">
                                            <h3 className="summary-title">Cart Total</h3>

                                            <table className="table table-summary">
                                                <tbody>
                                                    <tr className="summary-subtotal">
                                                        <td>Subtotal:</td>
                                                        <td>${payableAmount?.subTotal}</td>
                                                    </tr>
                                                    <tr className="summary-shipping">
                                                        <td>Shipping:</td>
                                                        <td></td>
                                                    </tr>
                                                    {
                                                        payableAmount?.subTotal < 500 ?
                                                            <tr className="">
                                                                <td colSpan={2} className="text-left h-auto pb-1">To get free shipping, update your cart amount to $500.</td>
                                                            </tr>
                                                            : ''
                                                    }
                                                    {
                                                        payableAmount?.subTotal < 500 ?
                                                            <tr className="summary-shipping-row">
                                                                <td>
                                                                    <div className="custom-control custom-radio pl-0">
                                                                        <input
                                                                            type="radio"
                                                                            id="flat-shipping"
                                                                            name="shipping"
                                                                            // checked="checked"
                                                                            className="custom-control-input"
                                                                        />
                                                                        <label
                                                                            // className="custom-control-label"
                                                                            htmlFor="flat-shipping"
                                                                        >
                                                                            Flat Shipping
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>${payableAmount?.shippingCharges}</td>
                                                            </tr>
                                                            :
                                                            <tr className="summary-shipping-row">
                                                                <td>
                                                                    <div className="custom-control custom-radio pl-0">
                                                                        <input
                                                                            type="radio"
                                                                            id="free-shipping"
                                                                            name="shipping"
                                                                            // checked="checked"
                                                                            className="custom-control-input"
                                                                        />
                                                                        <label
                                                                            className="free-shipping"
                                                                            htmlFor="free-shipping"
                                                                        >
                                                                            Free Shipping
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td className="free-shipping">${payableAmount?.shippingCharges}</td>
                                                            </tr>
                                                    }
                                                    <tr className="summary-total">
                                                        <td>Total:</td>
                                                        <td>${payableAmount?.total}</td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <Link
                                                href="/checkout"
                                                className="btn btn-outline-primary-2 btn-order btn-block"
                                            >
                                                PROCEED TO CHECKOUT
                                            </Link>
                                        </div>

                                        <Link
                                            href="/"
                                            className="btn btn-outline-dark-2 btn-block mb-3"
                                        >
                                            <span>CONTINUE SHOPPING</span>
                                            <i className="icon-refresh"></i>
                                        </Link>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <button id="scroll-top" title="Back to Top">
                <i className="icon-arrow-up"></i>
            </button>

            {/* <Modal openModal={openModal} closeModalFn={closeModalFn}>
                <div className="form-box">
                    <div className="form-tab">
                        <ul className="nav nav-pills nav-fill" role="tablist">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    id="signin-tab"
                                    data-toggle="tab"
                                    href="#signin"
                                    role="tab"
                                    aria-controls="signin"
                                    aria-selected="true"
                                >
                                    Sign In
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    id="register-tab"
                                    data-toggle="tab"
                                    href="#register"
                                    role="tab"
                                    aria-controls="register"
                                    aria-selected="false"
                                >
                                    Register
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content" id="tab-content-5">
                            <div
                                className="tab-pane fade show active"
                                id="signin"
                                role="tabpanel"
                                aria-labelledby="signin-tab"
                            >
                                <Login closeModalFn={closeModalFn} />
                            </div>
                            <div
                                className="tab-pane fade"
                                id="register"
                                role="tabpanel"
                                aria-labelledby="register-tab"
                            >
                                <Register />
                            </div>
                        </div>
                    </div>
                </div>
            </Modal> */}
        </>
    );
}

export default Cart