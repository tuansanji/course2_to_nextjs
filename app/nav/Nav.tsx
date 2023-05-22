"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import "./nav.scss";
const Nav = () => {
  const pathname = usePathname();
  return (
    <nav>
      <div className="nav">
        <div className="nav__logo">
          <Link href="/">
            <Image
              width={40}
              height={40}
              objectFit="cover"
              src={
                "https://upload.wikimedia.org/wikipedia/vi/thumb/9/91/FC_Barcelona_logo.svg/363px-FC_Barcelona_logo.svg.png"
              }
              alt=""
            />
          </Link>
        </div>

        <div className={"nav__menu nav__open"}>
          <ul className="ul__nav">
            <li className="menu__item">
              <Link
                className={
                  pathname.startsWith("/") && pathname.endsWith("/")
                    ? "active a1"
                    : "a1"
                }
                href="/"
              >
                Home
              </Link>
              {/* <HomeChild /> */}
            </li>
            <li className="menu__item">
              <Link
                className={pathname.startsWith("/pages") ? "active a1" : "a1"}
                href="/pages"
              >
                Pages
              </Link>
              {/* <PagesChild /> */}
            </li>
            <li className="menu__item">
              <Link
                className={
                  pathname.startsWith("/overview") ? "active a1" : "a1"
                }
                href="/overview"
              >
                Overview
              </Link>
            </li>
            <li className="menu__item">
              <Link
                className={
                  pathname.startsWith("/community") ? "active a1" : "a1"
                }
                href="/community"
              >
                Community
              </Link>
            </li>
            <li className="menu__item">
              <Link
                className={pathname.startsWith("/store") ? "active a1" : "a1"}
                href="/store"
              >
                Store
              </Link>
            </li>
            <li className="menu__item">
              <Link
                className={pathname.startsWith("blog") ? "active a1" : "a1"}
                href="/blog"
              >
                Blog
              </Link>
            </li>
            <li className="menu__item">
              <Link
                className={pathname.startsWith("/contact") ? "active a1" : "a1"}
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div id="store-icon">
            {/* <span>{listShoppingCart.length}</span>
          <FontAwesomeIcon icon={["fas", "store"]} />
          <ListShoppingChild /> */}
          </div>
          <div className="nav__language">
            <span>VI</span>
            <span style={{ color: "#e4a101" }}>|</span>
            <span>EN</span>
          </div>
          <div className="form-group">
            <Link
              href="/register"
              className={
                pathname.startsWith("/register")
                  ? "active register"
                  : "register"
              }
            >
              Register
            </Link>
            <Link
              href="/login"
              className={
                pathname.startsWith("/login") ? "active login" : "login"
              }
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
