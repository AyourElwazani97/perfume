import styles from "../styles/Home.module.scss";
import Hero from "../components/Hero";
import About from "../components/About";
import Testimonial from "../components/Testimonial";
export default function Home() {
  return (
    <div className={styles.container}>
      <Hero styles={styles} />
      <About styles={styles} />
      <Testimonial styles={styles} />
    </div>
  );
}
