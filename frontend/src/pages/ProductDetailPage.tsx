'use client';

import { useState, useCallback } from 'react';
import { productDummyData } from '../assets/assest';
import { useParams } from 'react-router-dom';
import type { Product } from '../types';
import Rating from '../components/common/Rating';

const ProductDetailPage = () => {
  const { id } = useParams();

  const product: Product | undefined = productDummyData.find(
    (p) => p?.id === id
  );

  const [thumbnail, setThumbnail] = useState(product?.images[0] || '');

  const handleThumbnailChange = useCallback((image: string) => {
    setThumbnail(image);
  }, []);

  const handleAddToCart = useCallback(() => {
    // Add cart logic here
    console.log('Added to cart:', product?.id);
  }, [product?.id]);

  const handleBuyNow = useCallback(() => {
    // Add buy now logic here
    console.log('Buy now:', product?.id);
  }, [product?.id]);

  if (!product) {
    return (
      <div
        className="max-w-6xl w-full px-6 py-8"
        style={{ background: 'var(--color-bg)' }}
      >
        <div className="text-center">
          <h1
            className="text-2xl font-medium"
            style={{ color: 'var(--color-text)' }}
          >
            Product Not Found
          </h1>
          <p className="mt-2" style={{ color: 'var(--color-text-secondary)' }}>
            The product you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  const discountPercentage = Math.round(
    ((product.mrp - product.price) / product.mrp) * 100
  );

  return (
    <div
      className="max-w-6xl w-full px-6 py-4"
      style={{ background: 'var(--color-bg)' }}
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Product Images Section */}
        <div className="flex gap-4 lg:flex-1 max-w-lg">
          {/* Thumbnail Images */}
          <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailChange(image)}
                className={`border-2 w-16 h-16 lg:w-20 lg:h-20 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg flex-shrink-0 backdrop-blur-sm ${
                  thumbnail === image
                    ? 'border-border   scale-105'
                    : 'border-border hover:border-border-focus bg-surface'
                }`}
                style={{
                  background:
                    thumbnail === image
                      ? 'var(--color-primary-light)'
                      : 'var(--color-surface)',
                  borderColor:
                    thumbnail === image
                      ? 'var(--color-primary)'
                      : 'var(--color-border)',
                }}
                aria-label={`View product image ${index + 1}`}
              >
                <img
                  src={image}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 p-3"
                />
              </button>
            ))}
          </div>

          {/* Main Product Image */}
          <div
            className="rounded-2xl overflow-hidden flex justify-center items-center w-80 h-80 lg:w-96 lg:h-96 glass border shadow-lg"
            style={{
              background: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
              boxShadow: 'var(--color-shadow-lg)',
            }}
          >
            <img
              src={thumbnail}
              alt={product.name}
              className="max-w-[90%] max-h-[90%] object-contain rounded-xl transition-all duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="lg:flex-1 lg:max-w-lg">
          <div className="space-y-4">
            <h1
              className="text-2xl lg:text-3xl font-semibold leading-tight"
              style={{ color: 'var(--color-text)' }}
            >
              {product.name}
            </h1>

            <Rating product={product} />

            {/* Pricing Section */}
            <div
              className="glass p-6 rounded-2xl shadow-md border"
              style={{
                background: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
                boxShadow: 'var(--color-shadow-md)',
              }}
            >
              <div className="flex items-center gap-3 flex-wrap">
                <span
                  className="text-2xl lg:text-3xl font-bold"
                  style={{ color: 'var(--color-text)' }}
                >
                  ${product.price}
                </span>
                <span
                  className="text-lg line-through"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  ${product.mrp}
                </span>
                <span
                  className="text-sm font-medium px-3 py-1 rounded-full"
                  style={{
                    background: 'var(--color-success-light)',
                    color: 'var(--color-success-dark)',
                  }}
                >
                  {discountPercentage}% off
                </span>
              </div>
              <p
                className="text-sm mt-2"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                (inclusive of all taxes)
              </p>
            </div>

            {/* Product Description */}
            <div className="space-y-4">
              <h2
                className="text-lg font-semibold"
                style={{ color: 'var(--color-text)' }}
              >
                About This Product
              </h2>
              <div
                className="glass border rounded-2xl p-6 shadow-sm"
                style={{
                  background: 'var(--color-surface)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <ul className="space-y-3">
                  {product.description
                    .split('. ')
                    .filter(Boolean)
                    .map((desc, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ background: 'var(--color-primary)' }}
                        ></span>
                        <span
                          className="text-sm leading-relaxed"
                          style={{ color: 'var(--color-text-secondary)' }}
                        >
                          {desc.trim()}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={handleAddToCart}
                className="flex-1 py-4 px-6 font-medium rounded-xl transition-all duration-300 hover:shadow-lg active:scale-95 glass border"
                style={{
                  background: 'var(--color-surface)',
                  color: 'var(--color-text)',
                  borderColor: 'var(--color-border)',
                  boxShadow: 'var(--color-shadow-sm)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    'var(--color-border-focus)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                }}
                aria-label={`Add ${product.name} to cart`}
              >
                Add to Cart
              </button>

              <button
                onClick={handleBuyNow}
                className="flex-1 py-4 px-6 font-medium rounded-xl transition-all duration-300 hover:shadow-lg active:scale-95 bg-primary text-white"
                style={{
                  boxShadow: 'var(--color-shadow-colored)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = 'var(--color-shadow-lg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow =
                    'var(--color-shadow-colored)';
                }}
                aria-label={`Buy ${product.name} now`}
              >
                Buy Now
              </button>
            </div>

            {/* Additional Product Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div
                className="flex items-center gap-3 p-3 rounded-xl glass border"
                style={{
                  background: 'var(--color-surface)',
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: 'var(--color-success-light)' }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: 'var(--color-success)' }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="font-medium">Free Shipping</span>
              </div>
              <div
                className="flex items-center gap-3 p-3 rounded-xl glass border"
                style={{
                  background: 'var(--color-surface)',
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: 'var(--color-info-light)' }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: 'var(--color-info)' }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="font-medium">30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
