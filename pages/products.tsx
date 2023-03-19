import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Products.module.css";
import Layout from "@/components/layout";

export default function ForheadAndNeckPage() {
  return (
    <Layout>
      <Head>
        <title>ActivLayr Продукти</title>
      </Head>

      <main>
        <h1>Продукти</h1>

        <div className={styles.productList}>
          <div className={styles.product}>
            <Link href="ampoule">
              <img src="/product-ampoule.png" alt="ampoule" />

              <div className={styles.productDescription}>
                <h3>Activ Layr</h3>
                <p>Mist ActivLayr Premium Intensive Collagen Ampoule 100ml</p>
                <div className={styles.price}>70 лв</div>
              </div>
            </Link>
          </div>

          <div className={styles.product}>
            <Link href="forhead-and-neck">
              <img src="/product-forhead.jpg" alt="forehead-and-neck" />

              <div className={styles.productDescription}>
                <h3>Activ Layr</h3>
                <p>
                  ActivLayr Premium Intensive Collagen Film (Чело и шия, 4
                  двойни комплекта)
                </p>
                <div className={styles.price}>100 лв</div>
              </div>
            </Link>
          </div>

          <div className={styles.product}>
            <Link href="cheeks">
              <img src="/product-cheeks.jpg" alt="cheeks" />

              <div className={styles.productDescription}>
                <h3>Activ Layr</h3>
                <p>
                  ActivLayr Premium Intensive Collagen Film (Лице, 4 двойни
                  комплекта)
                </p>
                <div className={styles.price}>100 лв</div>
              </div>
            </Link>
          </div>

          <div className={styles.product}>
            <Link href="eyes-and-smile-lines">
              <img src="/product-eye.webp" alt="eyes and smile lines" />

              <div className={styles.productDescription}>
                <h3>Activ Layr</h3>
                <p>
                  ActivLayr Premium Intensive Collagen Film (Околоочен контур и
                  линии на смеха, 4 двойни комплекта)
                </p>
                <div className={styles.price}>70 лв</div>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
