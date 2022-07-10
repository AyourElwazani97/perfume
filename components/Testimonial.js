import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
function Testimonial({ styles }) {
  return (
    <div id="testimonial" className={styles._testimonial}>
      <div>
        <h1>Testimonial</h1>
      </div>
      <div className={styles._testimonial_child}>
        <div className={styles._testimonial_child_whitePapper}>
          <div>
            <img src="./girl.jpg" width={100} height={100} alt="" />
          </div>
          <div>
            <h4>ILHAM ESSABTI</h4>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br /> Illum, minus? Deserunt molestiae labore illum.
            </p>
          </div>
          <div className={styles._testimonial_child_whitePapper_next_Prev}>
            <span>
              <AiOutlineArrowLeft size={30} />
            </span>
            <span>
              <AiOutlineArrowRight size={30} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
