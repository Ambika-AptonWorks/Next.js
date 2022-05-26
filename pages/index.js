import Head from "next/head";
import Userinfo from "../components/Userinfo";
import styles from "../styles/Home.module.css";

export default function Home({ users}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div>
        <h3 className={styles.title}>Welcome</h3>
      </div>
      <Userinfo users={users} />
    </div>
  );
}
export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await res.json();
  return { props: { users ,} };
}
