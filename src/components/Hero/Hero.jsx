"use client";

import { motion } from "framer-motion";
import { useLogo } from "@/src/context/LogoContext";
import BackgroundText from "./BackgroundText/BackgroundText";
import styles from "./Hero.module.css";
import Image from "next/image";
import { useEffect } from "react";

const textAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

const descriptionAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 1.5, duration: 0.6 } },
};

export default function Hero() {
  const title = "CHAIRMAN";
  const { setLogo } = useLogo();

  useEffect(() => {
    setLogo("/images/companyLogo.png"); // 初期ロゴを設定
  }, []);

  return (
    <section className={styles.heroContainer}>
      <BackgroundText />
      <div className={styles.textContainer}>
        <h1 className={styles.companyName}>
          {title.split("").map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={textAnimation}
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
        </h1>
        <motion.p
          className={styles.companyDescription}
          initial="hidden"
          animate="visible"
          variants={descriptionAnimation}
        >
          CHAIRMANはSNSマーケティングを通じて
        </motion.p>
        <motion.p
          className={styles.companyDescription}
          initial="hidden"
          animate="visible"
          variants={descriptionAnimation}
        >
          ビジネスチャンスや新たな価値を創造します
        </motion.p>
      </div>
      <div className={styles.phoneContainer}>
        <div className={styles.mockupContainer}>
          <Image
            className={styles.mockup}
            src="/images/iphone-mockup.png"
            width={396}
            height={704}
            alt="iphoneのモック画像"
            priority
          />
          <div className={styles.videoContainer}>
            <video
              className={styles.video}
              src="/videos/CHAIRMAN.mp4"
              autoPlay
              muted
              loop
              preload="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}