import React from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
function Hero({ styles }) {
  return (
    <div className={styles._hero}>
      <header>
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
      </header>
      <div className={styles._hero_child}>
        <div>
          <Image src="/prod.png" width={400} height={400} alt="" />
        </div>
        <div className={styles._hero_child_content}>
          <div>
            <h1>
              jorge
              <br /> di
              <br /> profumo
            </h1>
          </div>
          <div>
            <p>
              lorem zedjkze dzeijdzejd
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
