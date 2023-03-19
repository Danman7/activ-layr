import styles from "@/styles/Shared.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footerWrapper}>
        <ul className={styles.footerList}>
          <li className={styles.listTitle}>Продукти</li>
          <li>
            <a href="ampoule">Mist ActivLayr Premium Intensive Collagen</a>
          </li>
          <li>
            <a href="forhead-and-neck">
              Collagen Film (Чело и шия, 4 двойни комплекта)
            </a>
          </li>
          <li>
            <a href="cheeks">Collagen Film (Лице, 4 двойни комплекта)</a>
          </li>
          <li>
            <a href="eyes-and-smile-lines">
              Collagen Film (Околоочен контур и линии на смеха, 4 двойни
              комплекта)
            </a>
          </li>
        </ul>

        <ul className={styles.footerList}>
          <li className={styles.listTitle}>Полезни връзки</li>
          <li>
            <a href="about">За нас</a>
          </li>
          <li>
            <a href="contacts">Контакти</a>
          </li>
          <li>
            <a href="terms-and-conditions">Правила и условия</a>
          </li>
        </ul>

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
      </div>
    </footer>
  );
}
