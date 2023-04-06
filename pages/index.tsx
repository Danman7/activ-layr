import Head from "next/head";
import Link from "next/link";

import styles from "@/styles/Home.module.css";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>ActivLayr</title>
        <meta
          name="description"
          content="Highly concentrated collagen delivered in whole! 99.86% is collagen. 99.86% Collagen (including hydrolyzed collagen), 0.14% hyaluronic acid Innovative technology of ActivLayr!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.videoContainer}>
        <iframe
          width="100%"
          height={750}
          src="https://www.youtube.com/embed/N0vuz_TxlGs?rel=0&amp;autoplay=1&amp;mute=1&amp;loop=1"
          title="Masca Premium Collagen ActivLayr"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <main>
        <div className={styles.productsOverview}></div>
        <h2 className={styles.subtitle}>Революционни Продукти</h2>

        <div className={styles.product}>
          <div className={styles.description}>
            <h2>Mist ActivLayr Premium Intensive Collagen Ampoule 100ml</h2>
            <p>
              Доставя колаген директно до дермалните слоеве (2,5 mm), където
              съставките наистина работят!
            </p>

            <p>Неинвазивен | Незабавно усвояване | Продължителен ефект</p>
            <Link href="ampoule" className={styles.buttonLink}>
              Детайли
            </Link>
          </div>
          <div className={styles.productImage}>
            <Link href="ampoule">
              <img src="/ampoule-mist.webp" alt="ampoule-mist" />
            </Link>
          </div>
        </div>

        <div className={styles.product}>
          <div className={styles.productImage}>
            <Link href="forhead-and-neck">
              <img src="/forehead-and-neck.webp" alt="forehead-and-neck" />
            </Link>
          </div>

          <div className={styles.description}>
            <h2>
              ActivLayr Premium Intensive Collagen Film (Чело и шия, 4 двойни
              комплекта)
            </h2>
            <p>Висок клас колагенова маска за чело и шия</p>
            <strong>Прилага се само заедно с Mist ActivLayr</strong>

            <p>
              Доставя колаген директно до дермалните слоеве (2,5 mm), където
              съставките наистина работят!
            </p>

            <p>Неинвазивен | Незабавно усвояване | Продължителен ефект</p>
            <Link href="forhead-and-neck" className={styles.buttonLink}>
              Детайли
            </Link>
          </div>
        </div>

        <div className={styles.product}>
          <div className={styles.description}>
            <h2>
              ActivLayr Premium Intensive Collagen Film (Лице, 4 двойни
              комплекта)
            </h2>
            <p>Висок клас колагенова маска за лице</p>
            <strong>Прилага се само заедно с Mist ActivLayr</strong>

            <p>
              Доставя колаген директно до дермалните слоеве (2,5 mm), където
              съставките наистина работят!
            </p>

            <p>Неинвазивен | Незабавно усвояване | Продължителен ефект</p>
            <Link href="cheeks" className={styles.buttonLink}>
              Детайли
            </Link>
          </div>
          <div className={styles.productImage}>
            <Link href="cheeks">
              <img src="/cheeck.jpg" alt="cheeck" />
            </Link>
          </div>
        </div>

        <div className={styles.product}>
          <div className={styles.productImage}>
            <Link href="eyes-and-smile-lines">
              <img src="/eye-and-smile-lines.jpg" alt="eye-and-smile-lines" />
            </Link>
          </div>

          <div className={styles.description}>
            <h2>
              ActivLayr Premium Intensive Collagen Film (Околоочен контур и
              линии на смеха, 4 двойни комплекта)
            </h2>
            <p>
              Висок клас колагенова маска за околоочен контур и линии на смеха.
            </p>
            <strong>Прилага се само заедно с Mist ActivLayr</strong>

            <p>
              Доставя колаген директно до дермалните слоеве (2,5 mm), където
              съставките наистина работят!
            </p>

            <p>Неинвазивен | Незабавно усвояване | Продължителен ефект</p>
            <Link href="eyes-and-smile-lines" className={styles.buttonLink}>
              Детайли
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
