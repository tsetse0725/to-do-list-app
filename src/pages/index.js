import Header from "@/components/Header";
import TodoInput from "@/components/TodoInput";
import Tabs from "@/components/Tabs";
import TodoList from "@/components/TodoList";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Header />
        <TodoInput />
        <Tabs />
        <TodoList />
        <Footer />
      </div>
    </div>
  );
}
