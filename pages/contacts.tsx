import Head from "next/head";
import styles from "@/styles/Shared.module.css";
import Layout from "@/components/layout";
import Image from "next/image";

export default function ForheadAndNeckPage() {
  return (
    <Layout>
      <Head>
        <title>Контакти</title>
      </Head>

      <main className={styles.about}>
        <h1>Контакти</h1>
        <h2>ActivLayr</h2>
        <ul className={styles.footerList}>
          <li className={styles.listTitle}>Контакт</li>
          <li>
            Телефон: <br />
            <strong>
              <a href="tel:+359893337878">+359 89 333 78 78</a>
            </strong>
          </li>

          <li>
            Електронна Поща: <br />
            <strong>
              <a href="mailto:customer@activ-layr.bg">customer@activ-layr.bg</a>
            </strong>
          </li>
        </ul>
      </main>
    </Layout>
  );
}
