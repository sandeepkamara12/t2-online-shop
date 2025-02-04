import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductColor from '../components/Products/ProductColor';
import ProductReview from '../components/Products/product/ProductReview';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { removeItemToWishlists } from '../store/wishlistSlice';
import NoContent from '../components/common/NoContent';

const Wishlist = () => {
    const wishlist = useSelector((state) => state.wishlist.wishlist.wishlist);
    const products = useSelector((state) => state.products.products);
    const sizeChart = useSelector((state) => state.sizes.sizes);
    const [wishlistProducts, setWishlistProducts] = useState([]);
    const [visibleCount, setVisibleCount] = useState(2);
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();
    const loaderRef = useRef(null);

    let totalProducts = wishlistProducts?.length;
    useEffect(() => {
        const currentLoader = loaderRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting && !isLoading) {
                    setIsLoading(true);
                    setTimeout(() => {
                        const newCount = Math.min(visibleCount + 2, totalProducts);
                        setVisibleCount(newCount);
                        setIsLoading(false);
                    }, 1000);
                }
            },
            { threshold: 1.0 }
        );

        if (currentLoader) observer.observe(currentLoader);
        return () => {
            if (currentLoader) observer.unobserve(currentLoader);
        };
    }, [totalProducts, visibleCount, isLoading]);

    useEffect(() => {
        if (typeof window !== undefined) {
            const userData = localStorage.getItem("data");
            if (userData) {
                // Get all the product ids from wishlist table so we can get the same products from products table below
                const wishlistProductIds = wishlist?.map((item) => item?.productId);
                const wishlistProducts = products?.filter((product) =>
                    wishlistProductIds?.includes(product?.id)
                );
                setWishlistProducts(wishlistProducts);
            }
        }
    }, []);
    const removeProductFromWishlist = (productId) => {
        dispatch(removeItemToWishlists({ productId: productId }));
        let tr = document.querySelector(`table tbody tr[data-id="${productId}"]`);

        if (tr) {
            tr.remove();
        }
    };
    return (
        <main className="main">
            <Breadcrumbs />

            <div className="page-content layout-three">
                <div className="container">
                    {wishlist?.length > 0 ? (
                        <>
                            <table className="table table-wishlist table-mobile">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {wishlistProducts?.length > 0 &&
                                        wishlistProducts
                                            ?.slice(0, visibleCount)
                                            .map((wishlist) => {
                                                return (
                                                    <tr key={wishlist?.id} data-id={wishlist?.id}>
                                                        <td className="product-col">
                                                            <div className="product">
                                                                <figure className="product-media">
                                                                    <a href="#">
                                                                        <img
                                                                            src={`/${wishlist?.image}`}
                                                                            alt="Product image"
                                                                            width="276"
                                                                            height="287"
                                                                        />
                                                                    </a>
                                                                </figure>
                                                                <div>
                                                                    {wishlist?.quantity == 0 && (
                                                                        <span className={`status out-of-stock`}>
                                                                            {wishlist?.quantity == 0 &&
                                                                                "Out of Stock"}
                                                                        </span>
                                                                    )}
                                                                    <h3 className="product-title">
                                                                        <a href="#">{wishlist?.name}</a>
                                                                    </h3>
                                                                    <div
                                                                        className={`ratings-container wishlist-product-rating`}
                                                                    >
                                                                        <ProductReview
                                                                            reviewCount={wishlist?.review_count}
                                                                            rating={wishlist?.rating}
                                                                        />
                                                                    </div>

                                                                    <div className={`product-size mb-0`}>
                                                                        {sizeChart.length > 0 &&
                                                                            sizeChart?.map((size) => {
                                                                                return (
                                                                                    <a
                                                                                        title=""
                                                                                        className={`text-uppercase ${wishlist?.size?.includes(
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
                                                                        productColors={wishlist?.color}
                                                                        layout={"none"}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="price-col">
                                                            <div className="product-price mb-0">
                                                                {wishlist?.salePrice ? (
                                                                    <>
                                                                        <div className="new-price">
                                                                            ${wishlist?.salePrice}
                                                                        </div>
                                                                        <div className="old-price">
                                                                            ${wishlist?.price}
                                                                        </div>
                                                                        <div className="d-block price-percentage col-12 p-0">{parseFloat(((wishlist?.price - wishlist?.salePrice) / wishlist?.price) * 100).toFixed(0) + '% OFF'}</div>
                                                                    </>
                                                                ) : (
                                                                    `$${wishlist?.price}`
                                                                )}
                                                            </div>
                                                        </td>
                                                        <td className="remove-col">
                                                            <button
                                                                className="btn-remove"
                                                                onClick={() =>
                                                                    removeProductFromWishlist(wishlist?.id)
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
                            {visibleCount < wishlistProducts.length && (
                                <i
                                    ref={loaderRef}
                                    className="icon-spinner d-block text-center text-lg rotate-icon"
                                ></i>
                            )}
                        </>
                    ) : (
                        <NoContent />
                    )}
                </div>
            </div>
        </main>
    )
}

export default Wishlist