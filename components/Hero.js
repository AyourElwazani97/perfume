import React from "react";
import gsap from "gsap";
import Link from "next/link";
function Hero({ styles }) {
  return (
    <div>
      <nav>
        <div>
          <h1>Perfume</h1>
        </div>
        <ul>
          <li>
            <Link href="#">
              <a>
                <li>home</li>
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>
                <li>About</li>
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>
                <li>Shop</li>
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>
                <li>Testimonial</li>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Hero;
