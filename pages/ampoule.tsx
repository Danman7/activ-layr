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

export default function AmpoulePage() {
  const [currentImage, setCurrentImage] = useState("/product-ampoule.png");

  return (
    <Layout>
      <Head>
        <title>ActivLayr Premium Intensive Collagen Ampoule Mist 100ml</title>
      </Head>

      <main>
        <div className={styles.productBox}>
          <div className={styles.gallery}>
            <div className={styles.galleryThumbs}>
              <Thumb
                url="/product-ampoule.png"
                currentImage={currentImage}
                setCurrentImage={setCurrentImage}
              />

              <Thumb
                url="/ampoule/product-img_ampoule-mist-02.jpg.webp"
                currentImage={currentImage}
                setCurrentImage={setCurrentImage}
              />

              <Thumb
                url="/ampoule/product-img_ampoule-mist-04.png.webp"
                currentImage={currentImage}
                setCurrentImage={setCurrentImage}
              />

              <Thumb
                url="/ampoule/product-img_ampoule-mist-03.png.webp"
                currentImage={currentImage}
                setCurrentImage={setCurrentImage}
              />
            </div>

            <img className={styles.currentImage} src={currentImage}></img>
          </div>
          <div className={styles.productDetails}>
            <h1>ActivLayr Premium Intensive Collagen Ampoule Mist 100ml</h1>
            <p>Kолагенов спрей за пръскане върху колагеновата маска</p>
            <p style={{ color: "red" }}>
              Може да се използва отделно за добра хидратация или заедно с маски
              activLayr Cheeck, activLayr Eye & Smile Line или activLayr
              Forehead & Neck, според техните инструкции.
            </p>
            <div className={styles.price}>70 лв</div>
            <Accordion preExpanded={[1]}>
              <AccordionItem uuid={1}>
                <AccordionItemHeading>
                  <AccordionItemButton>Основни Ползи</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>Колагенов спрей за пръскане върху колагеновата маска.</p>
                  <p>
                    Доставя колаген директно до дермалните слоеве (2,5 mm),
                    където съставките наистина работят!
                  </p>

                  <p>
                    Тайната идва от технологията за доставяне на съставките до
                    дермалните слоеве. Какво означава това? Резултатите се
                    появяват благодарение на дълбокото проникване на 100%
                    натурални съставки. Сега можете да получите по-стегнат и
                    светъл тен, без да се налага да прибягвате до инвазивни
                    лечения.
                  </p>

                  <p>
                    Лесна за нанасяне, мощна формула, подходяща за всеки тип
                    кожа, без алкохол и етерични масла!
                  </p>

                  <p>Неинвазивен | Незабавно усвояване | Продължителен ефект</p>

                  <p>Използване:</p>

                  <ul>
                    <li>
                      измийте кожата с вода и любимия си пенлив продукт, след
                      което избършете с кърпа;
                    </li>
                    <li>нанесете върху чиста и суха кожа с лек масаж.</li>
                    <li>
                      нанесете заедно с маски activLayr Cheeck, activLayr Eye &
                      Smile Line или activLayr Forehead & Neck, според техните
                      инструкции.
                    </li>
                  </ul>

                  <p>Основни ползи:</p>
                  <ul>
                    <li>Овлажнява</li>
                    <li>Водоразтворим</li>
                    <li>Незабавно усвояване</li>
                  </ul>
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
                    Стъпка 4: поставете маската с бялата страна (с колаген) към
                    кожата;
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
                    Стъпка 4: поставете маската с бялата страна (с колаген) към
                    кожата;
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
                  <p>
                    Хидролизиран колагенов екстракт, ниацинамид, пропандиол,
                    екстракт от портулак, екстракт от центела азиатска, екстракт
                    от смокиня (Ficus carica), хидрогенирано лецитин, натриев
                    хиалуронат, натриев цитрат, аденозин, лимонена киселина,
                    дисустановена EDTA, вода (Aqua), бутилен гликол, керамид NP,
                    глицерин, хидролизиран еластин, хидролизиран колаген,
                    хидролизиран хиалуронова киселина, нонапептид-1, ацетилиран
                    натриев хиалуронат, ацетил-хексапептид-8, меден трипептид-1,
                    трипептид-1, палмитоил тетрапептид-7, палмитоил трипептид-1,
                    палмитоил пентапептид-4, хексапептид-9, 1,2-хександиол,
                    хидроксиацетофенон, етилхексилглицерин, каприлил гликол.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
    </Layout>
  );
}
