import './style.scss';
import Link from 'next/link';
import React from 'react';
type Props = {
  title1?: string;
  title2?: string;
  home?: string;
  pages?: string;
  currentpage?: any;
};

function BreadCrumb({
  title1,
  title2 = "null",
  home = "home",
  pages = "pages",
  currentpage,
}: Props) {
  return (
    <div className="bread-crumb">
      <div className="bread-crumb__container">
        <h2>
          {title1} <span> {title2}</span>
        </h2>
        <nav className="address">
          <ol>
            <li>
              <Link href="/">{home}</Link>
            </li>
            <li>
              <Link href="/pages">{pages}</Link>
            </li>
            <li>
              <Link href="/store">{currentpage}</Link>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}

export default BreadCrumb;
