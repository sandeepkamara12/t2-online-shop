import React, { useEffect, useRef, useState } from "react";
import Breadcrumbs from "../components/common/Breadcrumbs";
import ProductFilters from "../components/Products/ProductFilters";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../store/productSlice";
import Product from "../components/Products/product/Product";
import ShopSidebar from "../components/Products/ShopSidebar";
import NoContent from "../components/common/NoContent";

const Shop = () => {
  const products = useSelector((state) => state.products.filteredProducts);
  const cartProducts = useSelector((state) => state.cart.carts?.cart);
  const dispatch = useDispatch();
  let totalProducts = products?.length;
  const [layout, setLayout] = useState("three");
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const [clearFilter, setClearFilter] = useState(false);

  const [filters, setFilters] = useState({
    category: [],
    size: [],
    color: [],
    brand: [],
    price: { min: 0, max: 5000 },
    sort: "",
  });
  const [isItemAddedToCart, setIsItemAddedToCart] = useState({
    isAdded: false,
    content: null,
  });
  const loaderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isLoading) {
          setIsLoading(true);
          setTimeout(() => {
            const newCount = Math.min(visibleCount + 6, totalProducts);
            setVisibleCount(newCount);
            setIsLoading(false);
          }, 1000);
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [totalProducts, visibleCount, isLoading]);

  useEffect(() => {
    if (
      filters?.category?.length === 0 &&
      filters?.size?.length === 0 &&
      filters?.brand?.length === 0 &&
      filters?.color?.length === 0 &&
      filters?.sort === "" &&
      filters?.price?.min == 0 &&
      filters?.price?.max == 5000
    ) {
      setVisibleCount(6);
      setClearFilter(false);
    } else {
      setClearFilter(true);
    }
    dispatch(
      filter({
        category: filters?.category,
        size: filters?.size,
        color: filters?.color,
        brand: filters?.brand,
        price: filters?.price,
        sort: filters?.sort,
      })
    );
  }, [
    filters?.category,
    filters?.size,
    filters?.color,
    filters?.brand,
    filters?.price,
    filters?.sort,
    dispatch,
  ]);

  useEffect(() => {
    if (visibleCount > totalProducts) {
      setVisibleCount(totalProducts);
    }
  }, [products, totalProducts, visibleCount]);



  useEffect(() => {
    if (isItemAddedToCart?.content) {
      let userCartData = isItemAddedToCart?.content;
      let updatedQuantity =
        cartProducts?.length > 0 &&
        cartProducts?.filter((item) =>
          item?.productId == userCartData?.products?.id ? item?.quantity : ""
        );
      if (updatedQuantity !== null) {
        if (updatedQuantity[0]?.quantity < 10) {
          toast.success(
            <span>
              <strong>{userCartData?.products?.name}</strong>
              <strong className="toast-quantity">
                Quantity: {updatedQuantity[0]?.quantity}
              </strong>{" "}
              has been added to the cart!
            </span>,
            {
              position: "top-right",
              autoClose: 1000,
              className: "toast-content",
            }
          );
        } else {
          toast.error(
            <span>
              <strong>{userCartData?.products?.name}</strong>
              You cannot add more than{" "}
              <strong className="d-inline-block">
                {updatedQuantity[0]?.quantity}
              </strong>{" "}
              items to the cart!
            </span>,
            {
              position: "top-right",
              autoClose: 1000,
              className: "toast-content",
            }
          );
        }
      }
    }
    setIsItemAddedToCart(false);
  }, [isItemAddedToCart]);

  return (
    <main className="main">
      <Breadcrumbs />
      <ToastContainer />
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-xl-9">
              <ProductFilters
                setLayout={setLayout}
                layout={layout}
                productVisibleCount={visibleCount}
                totalProducts={totalProducts}
                setFilters={setFilters}
                filters={filters}
                setClearFilter={setClearFilter}
                clearFilter={clearFilter}
              />
              <div
                className={`products py-4 layout-${layout} ${layout === "three"
                  ? !totalProducts
                    ? "mx-0 row"
                    : "row"
                  : ""
                  }`}
              >
                {products?.length > 0 ? (
                  products
                    ?.slice(0, visibleCount)
                    .map((product, index) => (
                      <Product
                        product={product}
                        key={index}
                        layout={layout}
                        setIsItemAddedToCart={setIsItemAddedToCart}
                      />
                    ))
                ) : (
                  <NoContent />
                )}
              </div>

              {visibleCount < products.length && (
                <i
                  ref={loaderRef}
                  className="icon-spinner d-block text-center text-lg rotate-icon"
                ></i>
              )}
            </div>
            <ShopSidebar
              clearFilter={clearFilter}
              setClearFilter={setClearFilter}
              setFilters={setFilters}
              filters={filters}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Shop;
