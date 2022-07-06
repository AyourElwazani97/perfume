import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Lottie from "lottie-web";
import ARROW from "../public/arrow.json";
function Hero({ styles }) {
  const ProductName = useRef(null);
  const ArrowContainer = useRef(null);
  useEffect(() => {
    const rotatedText = ProductName.current;
    rotatedText.innerHTML = rotatedText.textContent.replace(
      /\S/g,
      '<span class="rotatedSpan">$&</span>'
    );
    const rotatedSpans = document.querySelectorAll(".rotatedSpan");
    rotatedSpans.forEach((letter, i) => {
      letter.style.transform = "rotate(" + i * 25 + "deg)";
    });
    
  }, []);
  useEffect(() => {
    Lottie.loadAnimation({
      container: ArrowContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: ARROW,
    });
    Lottie.setSpeed(.5);
    return () => {
      Lottie.destroy();
    };
  },[])
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
                <a>home</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Shop</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Testimonial</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div ref={ProductName} className={styles.Product_Name}>
        {" "}
        Jorge Di Profumo{" "}
      </div>
      <div className={styles._hero_child}>
        <div>
          <Image src="/prod.png" width={400} height={400} alt="" />
        </div>
        <div className={styles._hero_child_circle}>
          <h2>Let&apos;em follow your smell</h2>
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
              <sup>ــــــــــــــــــــــــ</sup>Smell is a word, Jorge Di
              Profumo is literature.
            </p>
          </div>
        </div>
      </div>
      <div className={styles._hero_orderbtn}>
        <span ref={ArrowContainer}></span>
      </div>
    </div>
  );
}

export default Hero;
