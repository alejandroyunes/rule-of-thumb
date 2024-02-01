import Hero from "@/components/Hero"
import { DesktopNav } from "@/components/nav/desktop"
import { MobileNav } from "@/components/nav/mobile"
import * as stylex from "@stylexjs/stylex"
import { spacing } from "./globalTokens.stylex"
import Banner from "@/components/banner"
import BannerSubmit from "@/components/bannerSubmit"

export default function Home() {
  return (
    <>
      <div {...stylex.props(s.desktopNav)}>
        <DesktopNav />
      </div>
      <div {...stylex.props(s.mobileNav)}>
        <MobileNav />
      </div>
      <Hero />
      <Banner />
      <BannerSubmit />
    </>
  )
}

const s = stylex.create({
  desktopNav: {
    display: {
      default: "block",
      ["@media (max-width: 1100px)"]: "none"
    },
  },
  mobileNav: {
    display: {
      default: "none",
      "@media (max-width: 1100px)": "block"
    },
  }
})