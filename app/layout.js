import SmoothScroller from "@/src/components/Lenis/Lenis";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import { LogoProvider } from "@/src/context/LogoContext";
import { ScrollSnapProvider } from "@/src/context/ScrollSnapContext";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import "../src/styles/globals.css";
import MouseStalker from "@/src/components/MouseStalker/MouseStalker";

const ZenKakuGothicNew = Zen_Kaku_Gothic_New({
  display: 'swap',
  weight: ['400','700'],
  preload:false,
})


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={ZenKakuGothicNew.className}>
        <ScrollSnapProvider>
          <MouseStalker />
          <Header />
          <SmoothScroller />
          <main>{children}</main>
          <Footer />
        </ScrollSnapProvider>
      </body>
    </html>
  );
}
