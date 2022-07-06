import { useEffect } from "react";
import "../styles/globals.scss";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const CustomCursor = () => {
      document.addEventListener("mousemove", (e) => {
        const X = e.clientX;
        const Y = e.clientY;
        const cursor = document.getElementById("customCursor");
        cursor.style.left = `${X}px`;
        cursor.style.top = `${Y}px`;
      });
    };
    CustomCursor();
  }, []);
  return (
    <div>
      <div id="customCursor"></div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
