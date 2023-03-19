import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/Shared.module.css";
import { NavLink } from "./NavLink";

export default function Header() {
  const [sideMenuVisible, setSideMenuVisible] = useState(false);

  return (
    <>
      {sideMenuVisible && (
        <aside>
          <div
            className={styles.overlay}
            onClick={() => setSideMenuVisible(false)}
          />
          <nav>
            <Link href="/products">
              <span>Продукти</span>
            </Link>
            <Link href="/about">
              <span>За Нас</span>
            </Link>
            <Link href="/contacts">
              <span>Контакти</span>
            </Link>
          </nav>
        </aside>
      )}

      <header>
        <div className={styles.phoneLink}>
          <a href="tel:+359893337878">
            <Image src="/phone.svg" alt="Phone icon" width={24} height={24} />
            +359 89 333 78 78
          </a>
        </div>
        <Link href="/">
          <Image
            className={styles.hideOnMobile}
            src="/logo.svg"
            alt="ActivLayr Logo"
            width={185}
            height={76}
            priority
          />
        </Link>
        <div
          className={styles.hamburger}
          onClick={() => setSideMenuVisible(true)}
        >
          <span className={styles.hamburgerPart1}></span>
          <span className={styles.hamburgerPart2}></span>
          <span className={styles.hamburgerPart3}></span>
        </div>
        <Link href="/">
          <Image
            className={styles.showOnMobile}
            src="/logo.svg"
            alt="ActivLayr Logo"
            width={111.96}
            height={46}
            priority
          />
        </Link>
        <div className={styles.hideOnMobile}>
          <NavLink href="/products">
            <span>Продукти</span>
          </NavLink>
          <NavLink href="/about">
            <span>За Нас</span>
          </NavLink>
          <NavLink href="/contacts">
            <span>Контакти</span>
          </NavLink>
        </div>
      </header>
    </>
  );
}
