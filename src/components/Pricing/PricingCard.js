import React from "react";
import { Card } from "flowbite-react";

const PricingCard = ({ Recommended, fee, price, stratgy, bluebtn }) => {
  return (
    <Card className={!bluebtn ? "max-w-sm pricing-card-wrapper" : "max-w-sm pricing-card-wrapper main-card-border-color"} >
      {Recommended && (
        <div className="flex justify-end">
          <div class="w-[127px] h-[26px] px-2.5 bg-green-100 rounded-[99px] flex justify-end items-center gap-2">
            <div class="w-3 h-3 bg-emerald-600 rounded-full"></div>
            <div class="text-center text-emerald-900 text-xs font-medium font-['Inter'] leading-[18px]">
              {Recommended}
            </div>
          </div>
        </div>
      )}

      <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
        {fee}
      </h5>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-3xl font-semibold">$</span>
        <span className="text-5xl font-extrabold tracking-tight">{price}</span>
        <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
          /month
        </span>
      </div>
      <ul className="my-7 space-y-5">
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-blue-700"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
            {stratgy}
          </span>
        </li>
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-blue-700"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
            20GB Cloud storage
          </span>
        </li>
        <li className="flex space-x-3">
          <svg
            className="h-5 w-5 shrink-0 text-blue-700"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
            Integration help
          </span>
        </li>
        <li className="flex space-x-3 line-through decoration-gray-500">
          <svg
            className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500">
            Sketch Files
          </span>
        </li>
        <li className="flex space-x-3 line-through decoration-gray-500">
          <svg
            className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500">
            API Access
          </span>
        </li>
        <li className="flex space-x-3 line-through decoration-gray-500">
          <svg
            className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500">
            Complete documentation
          </span>
        </li>
        <li className="flex space-x-3 line-through decoration-gray-500">
          <svg
            className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500">
            24×7 phone & email support
          </span>
        </li>
      </ul>
      {bluebtn ? (
        <button
          type="button"
          className="px-5 py-2.5 rounded-lg bg-gradient-to-br from-indigo-400 to-blue-500 border border-gray-200 justify-center items-center gap-2 inline-flex text-white text-sm font-medium font-['Inter'] leading-[21px]"
        >
          Current Plan
        </button>
      ) : (
        <button
          type="button"
          className="px-5 py-2.5 rounded-lg  border border-gray-200 justify-center items-center gap-2 inline-flex text-gray-800 text-sm font-medium font-['Inter'] leading-[21px]"
        >
          Current Plan
        </button>
      )}
    </Card>
  );
};

export default PricingCard;
