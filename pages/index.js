import styles from "../styles/Home.module.scss";
import Hero from "../components/Hero";
import About from "../components/About";
export default function Home() {
  return (
    <div className={styles.container}>
      <Hero styles={styles} />
      <About styles={styles} />
    </div>
  );
}
