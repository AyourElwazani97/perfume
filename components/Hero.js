import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Lottie from "lottie-web";
import ARROW from "../public/arrow.json";
import gsap, { Sine } from "gsap";
import SplitText from "../utils/Split3.min";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
function Hero({ styles }) {
  const productName = useRef(null);
  const ArrowContainer = useRef(null);
  const heroTitle = useRef(null);
  const hero_child_circle = useRef(null);
  const hero_orderbtn = useRef(null);
  const f = useRef(null);
  gsap.registerPlugin(SplitText, ScrollToPlugin);
  useEffect(() => {
    const rotatedText = productName.current;
    rotatedText.innerHTML = rotatedText.textContent.replace(
      /\S/g,
      '<span class="rotatedSpan">$&</span>'
    );
    const rotatedSpans = document.querySelectorAll(".rotatedSpan");
    rotatedSpans.forEach((letter, i) => {
      letter.style.transform = "rotate(" + i * 25 + "deg)";
    });

    // GSAP ANIMATION START HERE
    const split2 = new SplitText(".nav_links", {
      type: "words,chars",
    });
    const splitH1 = new SplitText(heroTitle.current, {
      type: "words,chars",
    });
    //splite text under hero title
    const split = new SplitText(f.current, {
      type: "lines",
      linesClass: "lineChildren",
    });
    const splitParent = new SplitText(f.current, {
      type: "lines",
      linesClass: "lineParent",
    });
    const tl = gsap.timeline();
    tl.from(split2.chars, {
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      duration: 1.5,
      stagger: 0.1,
    })
      .from(
        splitH1.words,
        {
          opacity: 0,
          scale: 0,
          y: 80,
          rotationX: 180,
          transformOrigin: "0% 40% -50",
          ease: "back",
          stagger: 0.01,
          duration: 1.5,
        },
        0.5
      )
      .to(
        split.lines,
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          ease: Sine.easeOut,
          duration: 1.5,
        },
        1.5
      )
      .to(
        "#heroImage",
        {
          opacity: 1,
          clipPath: "inset(0% 0%)",
          duration: 1.5,
          ease: Sine.easeOut,
        },
        0.5
      )
      .to(hero_child_circle.current, {
        opacity: 1,
        width: "25%",
        background: "#000",
        duration: 1.5,
      })
      .fromTo(
        hero_orderbtn.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: Sine.easeOut }
      )
      .fromTo(
        productName.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: Sine.easeOut }
      );
  }, []);
  useEffect(() => {
    Lottie.loadAnimation({
      container: ArrowContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: ARROW,
    });
    Lottie.setSpeed(0.5);
    return () => {
      Lottie.destroy();
    };
  }, []);
  const ToAbout = () => {
    return gsap.to(window, { duration: 2, scrollTo: "#about" });
  };
  return (
    <div className={styles._hero}>
      <header>
        <nav>
          <div>
            <h1 className="nav_links">Perfume</h1>
          </div>
          <ul>
            <li className="nav_links">
              <Link href="#">
                <a>home</a>
              </Link>
            </li>
            <li className="nav_links">
              <Link href="#About">
                <a>About</a>
              </Link>
            </li>
            <li className="nav_links">
              <Link href="#Shop">
                <a>Shop</a>
              </Link>
            </li>
            <li className="nav_links">
              <Link href="#Testimonial">
                <a>Testimonial</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div ref={productName} className={styles.Product_Name}>
        {" "}
        Jorge Di Profumo{" "}
      </div>
      <div className={styles._hero_child}>
        <div className={styles._hero_child_imageHandler}>
          <Image
            id="heroImage"
            src="/prod.png"
            width={400}
            height={400}
            alt=""
          />
        </div>
        <div ref={hero_child_circle} className={styles._hero_child_circle}>
          <h2>Let Them Follow Your Smell</h2>
        </div>
        <div className={styles._hero_child_content}>
          <div>
            <h1 ref={heroTitle}>
              jorge
              <br /> di
              <br /> profumo
            </h1>
          </div>
          <div>
            <p ref={f}>
              <sup>ــــــــــــــــــــــــ</sup>Smell is a word, Jorge Di
              Profumo is literature.
            </p>
          </div>
        </div>
      </div>
      <div
        className={styles._hero_orderbtn}
        ref={hero_orderbtn}
        onClick={ToAbout}
      >
        <span ref={ArrowContainer}></span>
      </div>
    </div>
  );
}

export default Hero;
