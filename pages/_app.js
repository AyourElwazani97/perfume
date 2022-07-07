import { useEffect, useRef } from "react";
import "../styles/globals.scss";
function MyApp({ Component, pageProps }) {
  const customCursor = useRef(null);
  useEffect(() => {
    const CustomCursor = () => {
      document.addEventListener("mousemove", (e) => {
        const X = e.clientX;
        const Y = e.clientY;
        customCursor.current.style.left = `${X}px`;
        customCursor.current.style.top = `${Y}px`;
      });
    };
    // when mouse in on links or buttons
    const disableCUstomCursorOnLinks = () => {
      const links = document.querySelectorAll("a");
      links.forEach((each) => {
        each.addEventListener("mouseover", () => {
          customCursor.current.style.display = "none";
        });
        each.addEventListener("mouseleave", () => {
          customCursor.current.style.display = "flex";
        });
      });
    };
    const disableCUstomCursorOnButtons = () => {
      const btns = document.querySelectorAll("button");
      btns.forEach((each) => {
        each.addEventListener("mouseover", () => {
          customCursor.current.style.display = "none";
        });
        each.addEventListener("mouseleave", () => {
          customCursor.current.style.display = "flex";
        });
      });
    };
    const disableCustomcursoronlinkto = () => {
      const btntoabt = document.getElementById("buttontoabt");
      if (btntoabt) {
        btntoabt.addEventListener("mouseover", () => {
          customCursor.current.style.display = "none";
        });
        btntoabt.addEventListener("mouseleave", () => {
          customCursor.current.style.display = "flex";
        });
      } else {
        return null;
      }
    };
    CustomCursor();
    disableCUstomCursorOnLinks();
    disableCUstomCursorOnButtons();
    disableCustomcursoronlinkto();
  }, []);
  return (
    <div>
      <div id="customCursor" ref={customCursor}></div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
