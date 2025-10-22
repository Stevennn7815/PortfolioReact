// src/FaviconIcon.js
import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { renderToStaticMarkup } from "react-dom/server";

const FaviconIcon = () => <FaLaptopCode size={64} color="#00c9a7" />;

export const getFaviconSvg = () => {
  const svgString = renderToStaticMarkup(<FaviconIcon />);
  return `data:image/svg+xml,${encodeURIComponent(svgString)}`;
};
