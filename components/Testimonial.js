import React from "react";

function Testimonial({ styles }) {
  return (
    <div id="testimonial" className={styles._testimonial}>
      <div>
        <h1>Testimonial</h1>
      </div>
      <div className={styles._testimonial_child}>
        <div className={styles._testimonial_child_whitePapper}></div>
      </div>
    </div>
  );
}

export default Testimonial;
