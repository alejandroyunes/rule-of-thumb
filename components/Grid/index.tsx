'use client'
import * as stylex from "@stylexjs/stylex"
import { colors, spacing } from "../../app/globalTokens.stylex"
import DownArrow from "../assets/DownArrow"
import { useState } from "react"
import ThumbUp from "../assets/ThumbUp"
import ThumbDown from "../assets/ThumbDown"
import Image from "next/image"
import img from '../assets/imgs/Kanye-West.jpg'


export default function Grid() {
  const [dropdown, setDropdown] = useState(true)

  const handleClick = () => {
    console.log('click')
  }

  return (
    <main>
      <div {...stylex.props(s.heading)}>
        <div {...stylex.props(s.headingLeft)}>
          <h2>Previous Rulings</h2>
        </div>
        <div {...stylex.props(s.headingRight)}>
          <ul {...stylex.props(s.headingUnorder)} onClick={() => setDropdown(!dropdown)}>
            <li {...stylex.props(s.headingList)}>Grid <span {...stylex.props(s.headingListTitle)}> <DownArrow /> </span></li>
          </ul>
          <ul {...stylex.props(s.headingUnorderDropdown, dropdown && s.closeDropdown)}>
            <li {...stylex.props(s.headingList, s.listFc)}>List</li>
            <li {...stylex.props(s.headingList)}>Grid</li>
          </ul>
        </div>
      </div>

      <div {...stylex.props(s.wrapper)}>

        <div {...stylex.props(s.voted)}>

          <button {...stylex.props(s.votedCardButtonIcon, s.thumbUp)} aria-label="thumbs up">
            <ThumbUp />
          </button>
          {/* <button {...stylex.props(s.cardButtonIcon, s.thumbDown)} aria-label="thumbs down">
            <ThumbDown />
              </button> */}
        </div>

        <div {...stylex.props(s.description)}>
          <h1>Kenye West</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, debitis!</p>
        </div>

        <div {...stylex.props(s.vote)}>

          <div {...stylex.props(s.voteParagraph)}>
            <div {...stylex.props(s.voteP)}>
              <p>one month ago</p>
            </div>
          </div>

          <div {...stylex.props(s.voteBottons)}>
            <button {...stylex.props(s.cardButtonIcon, s.thumbUp)} aria-label="thumbs up">
              <ThumbUp />
            </button>
            <button {...stylex.props(s.cardButtonIcon, s.thumbDown)} aria-label="thumbs down">
              <ThumbDown />
            </button>
            <button {...stylex.props(s.voteButton)}>
              Vote Now
            </button>
          </div>

          <div {...stylex.props(s.imageWrapper)}>
            <Image
              {...stylex.props(s.imgBackground)}
              src={img}
              alt=""
              role="none" />
          </div>

          <div {...stylex.props(s.porcentage)}>
            <div {...stylex.props(s.porcentageLeft)}>
              <span {...stylex.props(s.porcentageLeftIcon)}><ThumbUp /></span>
              <span {...stylex.props(s.porcentageText)}>25.5%</span>
            </div>
            <div {...stylex.props(s.porcentageRight)}>
              <span {...stylex.props(s.porcentageText)}>74.5%</span>
              <span {...stylex.props(s.porcentageIcon)}><ThumbDown /></span>
            </div>
          </div>

          <div {...stylex.props(s.bgLinear)}></div>
        </div>

      </div>



    </main>
  )
}

const s = stylex.create({
  wrapper: {
    display: 'grid',
    gridTemplateColumns: '.4fr 1fr .3fr',
    maxWidth: 1100,
    margin: '0 auto 24px',
    paddingRight: 24,
    position: 'relative',
    height: 230,
  },
  voted: {
    display: 'flex',
    zIndex: 5
  },
  description: {
    color: colors.white,
    zIndex: 5
  },
  vote: {
    color: colors.white,
  },
  voteParagraph: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  voteP: {
    display: 'flex',
    zIndex: 5,
    color: colors.white,
  },
  voteBottons: {
    display: 'flex',
  },
  cardButtonIcon: {
    width: '50px',
    height: '35px',
    cursor: 'pointer',
    border: 'none',
    marginRight: 8,
    zIndex: 5
  },
  votedCardButtonIcon: {
    width: '46px',
    height: '46px',
    cursor: 'pointer',
    border: 'none',
    marginRight: 8
  },
  thumbUp: {
    backgroundColor: {
      default: 'rgba(60, 187, 180, .8)',
      ':hover': 'rgba(60, 187, 180, 1)',
    },
  },
  thumbDown: {
    backgroundColor: {
      default: 'rgba(249, 173, 29, .8)',
      ':hover': 'rgba(249, 173, 29, 1)',

    }
  },
  voteButton: {
    padding: '.5rem 1rem',
    borderStyle: 'solid',
    borderWidth: 2,
    width: '100%',
    borderColor: colors.white,
    backgroundColor: 'rgba(0, 0, 0, .3)',
    color: colors.white,
    fontSize: '1rem',
    zIndex: 5
  },
  //bottom section
  porcentage: {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    width: '100%',
    maxWidth: 1100,
    height: '3rem',
    margin: '0 auto',
    left: 0,
    right: 0,
    zIndex: 5
  },
  porcentageLeft: {
    display: 'flex',
    width: '30%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0 .25rem 0 0',
    backgroundColor: 'rgba(60, 187, 180, .8)',
    color: colors.white,
    fontWeight: 300,
    paddingLeft: 24
  },
  porcentageLeftIcon: {
    paddingRight: 8
  },
  porcentageText: {
    color: colors.white,
    paddingRight: 8,
    fontSize: {
      default: '1.25rem',
      "@media (max-width: 756px)": '1rem'
    }
  },
  porcentageRight: {
    paddingLeft: '1rem',
    paddingRight: 24,
    display: 'flex',
    alignItems: 'center',
    width: '70%',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(249, 173, 29, .8)',
  },
  porcentageRightNumber: {
    fontSize: {
      default: '2rem',
      "@media (max-width: 756px)": '1.25rem'
    },
    fontWeight: 400,
    color: 'rgba(70, 70, 70, 1)',
    paddingRight: 4
  },
  porcentageIcon: {
    fontSize: {
      default: '2rem',
      "@media (max-width: 756px)": '1.25rem'
    },
    fontWeight: 300,
    color: 'rgba(70, 70, 70, 1)'
  },


  //background img
  imageWrapper: {
    maxWidth: 1100,
    position: 'absolute',
    top: 0,
    left: 0,
    objectFit: 'cover',
  },

  bgLinear: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'linear-gradient(90deg, rgba(209,208,208,0.2) 0%, rgba(122,118,118,1) 52%, rgba(144,139,139,1) 100%, rgba(178,178,178,1) 100%)',
    zIndex: 2,
    height: 230,
  },

  imgBackground: {
    width: 260,
    height: 230,
    objectFit: 'cover'
  },
  heading: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    maxWidth: '1100px',
    margin: '24px auto',
    padding: '0 24px'
  },
  headingLeft: {
    fontSize: '1.25rem'
  },
  headingRight: {
  },
  headingUnorder: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: colors.black,
    paddingLeft: 0,
    position: 'relative',
    display: 'flex',
    margin: '0 1px 0',
    width: 120,
    cursor: 'pointer'
  },
  headingList: {
    listStyleType: 'none',
    padding: '10px 20px 10px 24px',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: colors.black,
    ':first-child': {
      borderWidth: 0,
    },
    margin: 0
  },
  listFc: {
    borderRightStyle: 'solid',
    borderRightWidth: 2,
    borderRightColor: colors.black,
    borderLeftStyle: 'solid',
    borderLeftWidth: 2,
    borderLeftColor: colors.black,
  },
  headingUnorderDropdown: {
    position: 'absolute',
    zIndex: 4,
    backgroundColor: colors.white,
    margin: 0,
    padding: 0,
    width: 119,
  },
  headingListTitle: {
    paddingLeft: 24
  },
  mobileNav: {
    display: {
      default: "none",
      "@media (max-width: 1100px)": "block"
    },
  },
  closeDropdown: {
    display: 'none'
  }
})