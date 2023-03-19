import Head from "next/head";
import Layout from "@/components/layout";

import styles from "@/styles/Home.module.css";

export default function ForheadAndNeckPage() {
  return (
    <Layout>
      <Head>
        <title>За Нас</title>
      </Head>

      <main className={styles.about}>
        <h1>За Нас</h1>
        <p>
          В Activ Layr, ние вярваме в ползите от корейската козметика и затова
          сме се посветили да предлагаме безопасни и ефективни продукти, които
          са произведени с най-високите стандарти на качество.
        </p>

        <p>
          Ние сме тук, за да ви помогнем да постигнете най-добрите резултати,
          които не само подобряват здравето и красотата на кожата ви, но и
          превъзхождат вашите очакванията.
        </p>

        <p>Благодарим ви, че избрахте Activ-Layr! </p>

        <div className={styles.product}>
          <div className={styles.description}>
            <h2>Ангажимент на марката:</h2>
            <p>
              Марката ActivLayr гарантира качество, чистота и ефективност на
              своите продукти, предлагайки с увереност, че ще бъдат получени
              изключителни резултати.
            </p>
          </div>
          <div className={styles.productImage}>
            <img src="/about-01.jpg" />
          </div>
        </div>

        <div className={styles.product}>
          <div className={styles.productImage}>
            <img src="/about-02.png" />
          </div>
          <div className={styles.description}>
            <h2>Ценности на марката:</h2>
            <p>Персонализиране | Почтеност | Иновация</p>
          </div>
        </div>

        <div className={styles.product}>
          <div className={styles.description}>
            <h2>Нашата история:</h2>
            <p>
              ActivLayr въвежда технологията за electrospinning в индустрията за
              красота и грижа за кожата чрез активен филм, направен от ултрафини
              биоактивни влакна. ActivLayr представлява напредък в системата за
              трансдермално доставяне, като има способността да подобрява
              ефективността на процедурите за грижа за кожата в световен мащаб.
              Ние си поставихме за цел да надхвърлим границите, създавайки
              уникална платформа, която позволява на активните съставки да
              проникнат дълбоко в кожата, което води до безпрецедентно ниво на
              ефективност.
            </p>
          </div>
          <div className={styles.productImage}>
            <img src="/about-03.jpg" />
          </div>
        </div>
      </main>
    </Layout>
  );
}
