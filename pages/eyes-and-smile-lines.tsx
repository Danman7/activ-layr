import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import Layout from "@/components/layout";
import styles from "@/styles/Shared.module.css";
import Thumb from "@/components/Thumb";

export default function EyesAndSmileLinePage() {
  const [currentImage, setCurrentImage] = useState("/product-eye.webp");

  return (
    <Layout>
      <Head>
        <title>
          ActivLayr Premium Intensive Collagen Film (Околоочен контур и линии на
          смеха, 4 двойни комплекта)
        </title>
      </Head>

      <main>
        <div className={styles.productBox}>
          <div className={styles.gallery}>
            <div className={styles.galleryThumbs}>
              <Thumb
                url="/product-eye.webp"
                currentImage={currentImage}
                setCurrentImage={setCurrentImage}
              />

              <Thumb
                url="/eyes/product-img_eye-and-smile-lines-01.png.webp"
                currentImage={currentImage}
                setCurrentImage={setCurrentImage}
              />

              <Thumb
                url="/eyes/product-img_eye-and-smile-lines-04.png.webp"
                currentImage={currentImage}
                setCurrentImage={setCurrentImage}
              />

              <Thumb
                url="/eyes/product-img_eye-and-smile-lines-02.jpg.webp"
                currentImage={currentImage}
                setCurrentImage={setCurrentImage}
              />
            </div>

            <img className={styles.currentImage} src={currentImage}></img>
          </div>
          <div className={styles.productDetails}>
            <h1>
              ActivLayr Premium Intensive Collagen Film (Околоочен контур и
              линии на смеха, 4 двойни комплекта)
            </h1>
            <p>
              Висок клас колагенова маска за oколоочния контур и линиите на
              смеха
            </p>
            <div className={styles.price}>70 лв</div>

            <Accordion preExpanded={[1]}>
              <AccordionItem uuid={1}>
                <AccordionItemHeading>
                  <AccordionItemButton>Основни Ползи</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <ul>
                    <li>
                      Маски с колаген, хидролизиран колаген и 0,14% хиалуронова
                      киселина.
                    </li>
                    <li>
                      Тайната идва от технологията за доставяне на съставките до
                      дермалните слоеве. Какво означава това? Резултатите се
                      появяват благодарение на дълбокото проникване на 100%
                      натурални съставки. Сега можете да получите по-стегнат и
                      светъл тен, без да се налага да прибягвате до инвазивни
                      лечения.
                    </li>
                    <li>
                      Първият продукт в света, който използва технологията на
                      electrospinning
                    </li>
                    <li>Клинично доказано намалява броя и обема на бръчките</li>
                    <li>
                      Комплексът от колаген и хиалуронова киселина се абсорбира
                      моментално, а активните съставки се доставят до кожата
                    </li>
                    <li>100% чист морски колаген от Нова Зеландия</li>
                    <li>
                      Колагенът ActivLayr идва от Sanford, със 130-годишна
                      традиция в Нова Зеландия
                    </li>
                    <li>
                      Лесна за нанасяне, мощна формула, подходяща за всеки тип
                      кожа, без алкохол и етерични масла
                    </li>
                    <li>
                      Високо концентриран колаген! Съдържа: 99,86% колаген,
                      хидролизиран колаген и 0,14% хиалуронова киселина
                    </li>
                    <li>
                      Колагеновите влакна се разтварят незабавно в контакт с
                      Mist ActivLayr, като успяват да подобрят собствената си
                      колагенова структура
                    </li>
                    <li>
                      Революционната формула доставя съставките директно в
                      дермата
                    </li>
                    <li>
                      Най-новата технология извършва 2,5 mm дермално предаване
                      на колаген и активни вещества в рамките на един час
                    </li>
                  </ul>
                  <div>
                    <Image
                      className={styles.check}
                      src="/check.svg"
                      alt="Phone icon"
                      width={24}
                      height={24}
                    />
                    Намалява появата на бръчки с до 19%
                  </div>
                  <div>
                    <Image
                      className={styles.check}
                      src="/check.svg"
                      alt="Phone icon"
                      width={24}
                      height={24}
                    />
                    По-хидратирана кожа със 249,3%
                  </div>
                  <div>
                    <Image
                      className={styles.check}
                      src="/check.svg"
                      alt="Phone icon"
                      width={24}
                      height={24}
                    />
                    Подобрява еластичността на кожата със 76,1%
                  </div>
                  <div>
                    <Image
                      className={styles.check}
                      src="/check.svg"
                      alt="Phone icon"
                      width={24}
                      height={24}
                    />
                    Мигновен лифтинг ефект до 37%
                  </div>

                  <p>
                    {" "}
                    Неинвазивен | Незабавно усвояване | Продължителен ефект | Не
                    е тестван върху животни
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Описание и инструкции
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <Image
                    src="/pdf.svg"
                    alt="pdf download"
                    width={24}
                    height={24}
                  />
                  <a className={styles.pdfLink} href="/HowtoUseActivLayr.pdf">
                    HowtoUseActivLayr
                  </a>

                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/N0vuz_TxlGs"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Употреба спрямо типа кожа
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <strong>За суха кожа</strong>
                  <div>
                    Стъпка 1: измийте кожата с вода и любимия си пенлив продукт,
                    след което избършете с кърпа;
                  </div>
                  <div>
                    Стъпка 2: напръскайте с Mist ActivLayr равномерно върху
                    цялата кожа;
                  </div>
                  <div>
                    Стъпка 3: отлепете прозрачния филм, прикрепен към
                    колагеновата маска;
                  </div>
                  <div>
                    Стъпка 4: поставете маската под очите или отстрани на
                    устните с бялата страна (с колаген) към кожата;
                  </div>
                  <div>
                    Стъпка 5: отстранете втория филм, оставяйки маската
                    нанесена;
                  </div>
                  <div>
                    Стъпка 6: напръскайте със спрей Mist ActivLayr за интензивно
                    усвояване;
                  </div>
                  <div>
                    Стъпка 7: отстранете маската, след като разтворът се
                    абсорбира в кожата.
                  </div>

                  <strong>За мазна кожа</strong>
                  <div>
                    Стъпка 1: измийте кожата с вода и любимия си пенлив продукт,
                    след което избършете с кърпа;
                  </div>
                  <div>
                    Стъпка 2: напръскайте с Mist ActivLayr равномерно върху
                    цялата кожа;
                  </div>
                  <div>
                    Стъпка 3: отлепете прозрачния филм, прикрепен към
                    колагеновата маска;
                  </div>
                  <div>
                    Стъпка 4: поставете маската под очите или отстрани на
                    устните с бялата страна (с колаген) към кожата;
                  </div>
                  <div>
                    Стъпка 5: отстранете втория филм, оставяйки маската
                    нанесена;
                  </div>
                  <div>
                    Стъпка 6: отстранете маската, след като разтворът се
                    абсорбира в кожата.
                  </div>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Състав</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>Колаген, хидролизиран колаген, хиалуронова киселина.</p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
    </Layout>
  );
}
