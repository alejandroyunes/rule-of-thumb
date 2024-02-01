import Image from "next/image"
import * as stylex from "@stylexjs/stylex"
import { globalTokens as $, colors, spacing, text } from "../../app/globalTokens.stylex"
import heroImg from '../assets/imgs/pope-francis.png'

export default function Hero() {
  return (
    <header  {...stylex.props(s.hero)}>
      <Image
        {...stylex.props(s.heroImage)}
        src={heroImg}
        alt="Pope Francis"
        width={0}
        height={0}
        fill={true}
        sizes="(min-width: 750px) 1440px, 100vw"
      />
    </header>
  )
}

const s = stylex.create({
  hero: {
    position: 'relative',
    overflow: 'hidden',
    height: '80vw',
    minHeight: '35rem',
    maxHeight: '38rem',
    marginBottom: '2rem'
  },
  heroImage: {
    position: 'absolute',
    left: '-35vw',
    width: '160vw',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  },
})