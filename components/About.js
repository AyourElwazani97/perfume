import gsap from "gsap";
import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const About = ({ styles }) => {
  return (
    <div className={styles._about} id="about">
      <div>
        <h1>About JDP...</h1>
      </div>
      <div className={styles._about_child}>
        <div className={styles._about_child_imageHandler}>
          <Image
            id="heroImage"
            src="/prodsolo.png"
            width={215}
            height={492}
            alt=""
          />
        </div>
        <div className={styles._about_child_content}>
          <div>
            <h2>For Men...</h2>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              minus? Deserunt molestiae labore illum perferendis quidem aperiam
              optio, amet accusamus vitae vero. Deleniti ab consequuntur veniam
              expedita magnam perferendis repellat?
            </p>
          </div>
          <div>
            <a href="#order">
              <button>order now</button>
            </a>
          </div>
          <div className={styles._about_child_content_stars}>
            <span>
              <AiFillStar size={30} color={"#e9c63a"} />
            </span>
            <span>
              <AiFillStar size={30} color={"#e9c63a"} />
            </span>
            <span>
              <AiFillStar size={30} color={"#e9c63a"} />
            </span>
            <span>
              <AiFillStar size={30} color={"#e9c63a"} />
            </span>
            <span>
              <AiOutlineStar size={30} color={""} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
