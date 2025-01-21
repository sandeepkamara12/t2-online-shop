// import Image from "next/image";
import React, { useEffect, useState } from "react";
import ProductImage from "./ProductImage";
import ProductCategory from "./ProductCategory";
import ProductTitle from "./ProductTitle";
import ProductDescription from "./ProductDescription";
// import ProductThumbnails from "./ProductThumbnails";
// import ProductWishlist from "./ProductWishlist";
import ProductReview from "./ProductReview";
import { useSelector, useDispatch } from "react-redux";
import ProductColor from "./ProductColor";
import ProductSize from "./ProductSize";
import ProductBrand from "./ProductBrand";
import QuickView from "./QuickView";
// import ProductBrand from "./ProductBrand";
import { addItemToCart, removeItemToCart } from "../../../store/cartSlice";
// import 0 from "next/link";

const Product = ({ product, layout, setIsItemAddedToCart }) => {
  // const cartProducts = useSelector((state) => state.cart.carts?.cart);
  const dispatch = useDispatch();

  const [userId, setUserId] = useState(null);
  // const getAllCarts = useSelector(state=>state.cart.carts.carts)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = localStorage.getItem("data");
      if (userData) {
        /* Get User Information */
        const parsedData = JSON.parse(userData);
        setUserId(parsedData.userId);
      }
    }

    // Initialize Magnific Popup with Vanilla JavaScript
    const quickViewButton = document.querySelector(".btn-quickview");
    const modalContent = document.getElementById("quick-view-modal");

    if (quickViewButton) {
      quickViewButton.addEventListener("click", (e) => {
        e.preventDefault();
        modalContent.style.display = "block";
        // Open Magnific Popup
        openQuickViewModal(modalContent);
      });
    }
  }, []);

  const openQuickViewModal = (modalContent) => {
    // Dynamically show the modal
    const magnificPopup = window.$.magnificPopup;
    magnificPopup.open({
      items: {
        src: modalContent,
        type: "inline",
      },
      mainClass: "mfp-ajax-product",
      preloader: false,
      removalDelay: 350,
      callbacks: {
        open: function () {
          document.body.style.overflowX = "visible";
        },
        close: function () {
          document.body.style.overflowX = "hidden";
        },
      },
    });
  };

  const addItemToUserCart = (userCartData) => {
    if (!userId) return;
    if (userCartData) {
      dispatch(addItemToCart(userCartData));
      setIsItemAddedToCart({ isAdded: true, content: userCartData });
    }
  };

  return (
    <>
      <div id="quick-view-modal" style={{ display: "none" }}>
        <QuickView />
      </div>

      <div
        className={`product product-list ${
          layout === "three" ? "col-12 col-sm-6 col-md-4 text-center" : ""
        }`}
        data-id={product?.id}
        key={product?.id}
      >
        <div
          className={`row ${
            layout === "three" ? "flex-column align-items-center" : ""
          }`}
        >
          <div
            className={`${
              layout === "three" ? "col-12" : "col-12 col-sm-5 col-md-3"
            }`}
          >
            <ProductImage
              productColors={product?.color}
              layout={layout}
              productId={product?.id}
              quantity={product?.quantity}
              createdAt={product?.createdAt}
              image={product?.image}
              badge={product?.badge}
            />
          </div>
          <div
            className={`${
              layout === "three" ? "col-12" : "col-12 col-sm-7 col-md-9"
            }`}
          >
            <div className="row">
              <div
                className={`${
                  layout === "three"
                    ? "col-12 order-last"
                    : "col-12 col-md-5 col-lg-4 order-last"
                }`}
              >
                <div
                  className={`product-list-action ${
                    layout === "three" ? "pt-0" : "pt-2 pt-md-3"
                  }`}
                >
                  <div
                    className={`product-price ${layout === "three" ? "" : ""}`}
                  >
                    {!product?.salePrice ? (
                      `$${product?.price}`
                    ) : (
                      <>
                        <span className="new-price">${product?.salePrice}</span>
                        <span className="old-price">${product?.price}</span>
                        <span className="ml-3 d-inline-block price-percentage">
                          {parseFloat(
                            ((product?.price - product?.salePrice) /
                              product?.price) *
                              100
                          ).toFixed(0) + "% OFF"}
                        </span>
                      </>
                    )}
                  </div>
                  <div
                    className={`ratings-container ${
                      layout === "three" ? "" : ""
                    }`}
                  >
                    <ProductReview
                      reviewCount={product?.review_count}
                      rating={product?.rating}
                    />
                  </div>
                  <div
                    className={`product-action ${
                      layout === "three" ? "d-none" : ""
                    }`}
                  >
                    <a
                      href="#quick-view-modal"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                    <a
                      href="#"
                      className="btn-product btn-compare"
                      title="Compare"
                    >
                      <span>compare</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => addItemToUserCart({ products: product })}
                    className={`btn-product btn-cart ${
                      layout === "three" ? "" : ""
                    } ${product?.badge === "out-stoke" ? "disabled" : ""}`}
                  >
                    <span>add to cart</span>
                  </button>
                </div>
              </div>

              <div
                className={`${
                  layout === "three" ? "col-12" : "col-md-7 col-lg-8"
                }`}
              >
                <div className="product-body product-action-inner">
                  {/* <ProductWishlist /> */}
                  <div className={`product-cat text-capitalize`}>
                    <ProductCategory category={product?.category} />
                  </div>
                  <ProductTitle title={product?.name} />
                  <div
                    className={`product-content ${
                      layout === "three" ? "d-none" : ""
                    }`}
                  >
                    <ProductDescription description={product?.description} />
                  </div>
                  {/* <ProductBrand brand={product?.brand} layout={layout} /> */}
                  <ProductSize layout={layout} productSize={product?.size} />
                  {/* <ProductColor productColors={product?.color} layout={layout} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="products mb-3">
      <div className="row justify-content-center">
          <div className="col-6">
              <div className="product product-7 text-center">
                  <figure className="product-media">
                      <span className="product-label label-new">New</span>
                      <a href="product.html">
                          <Image src="/product-4.jpg" alt="Product image" className="product-image" width="100" height="100" />
                      </a>

                      <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                      </div>

                      <div className="product-action">
                          <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                      </div>
                  </figure>

                  <div className="product-body">
                      <div className="product-cat">
                          <a href="#">Women</a>
                      </div>
                      <h3 className="product-title"><a href="product.html">Brown paperbag waist pencil skirt</a></h3>
                      <div className="product-price">
                          $60.00
                      </div>
                      <div className="ratings-container">
                          <div className="ratings">
                              <div className="ratings-val" style={{width: "20%"}}></div>
                          </div>
                          <span className="ratings-text">( 2 Reviews )</span>
                      </div>

                      <div className="product-nav product-nav-thumbs">
                          <a href="#" className="active">
                              <Image src="/product-4-thumb.jpg" alt="product desc" width="100" height="100" />
                          </a>
                          <a href="#">
                              <Image src="/product-4-2-thumb.jpg" alt="product desc" width="100" height="100" />
                          </a>
                          <a href="#">
                              <Image src="/product-4-3-thumb.jpg" alt="product desc" width="100" height="100" />
                          </a>
                      </div>
                  </div>
              </div>
          </div>
          
      </div>
  </div> */}
    </>
  );
};

export default Product;
