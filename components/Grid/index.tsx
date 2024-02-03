'use client'
import * as stylex from "@stylexjs/stylex"
import { colors, spacing } from "../../app/globalTokens.stylex"
import DownArrow from "../assets/DownArrow"
import { useEffect, useState } from "react"
import ThumbUp from "../assets/ThumbUp"
import ThumbDown from "../assets/ThumbDown"
import Image from "next/image"
import { formatDateDistanceToNow } from "@/utils/formatDate"
import { usePeopleData } from "../hooks/useFetchPeople"
import Loading from "../loading/Loading"

export default function Grid() {
  const [dropdown, setDropdown] = useState(false)
  const [list, setList] = useState(false)
  const [thumbUp, setThumbUp] = useState(false)
  const [thumbDown, setThumbDown] = useState(false)
  const [voted, setVoted] = useState(false)

  const { data, loading, error } = usePeopleData()

  const resetValues = () => {
    setThumbDown(false)
    setThumbUp(false)
  }

  const handleVoteClick = () => {
    if (voted) {
      setVoted(false)
      resetValues()
      return
    }
    setVoted(true)
    resetValues()
  }

  const selectedThumbUp = () => {
    if (voted) {
      return
    }
    setThumbUp(!thumbUp)
    setThumbDown(false)
  }

  const selectedThumbDown = () => {
    if (voted) {
      return
    }
    setThumbDown(!thumbDown)
    setThumbUp(false)
  }

  return (
    <main {...stylex.props(s.main)}>
      <div {...stylex.props(s.heading)}>
        <div {...stylex.props(s.headingLeft)}>
          <h2>Previous Rulings</h2>
        </div>
        <div {...stylex.props(s.headingRight)}>
          <ul {...stylex.props(s.headingUnorder)} onClick={() => setDropdown(!dropdown)}>
            <li {...stylex.props(s.headingList)}>{list ? 'List' : 'Grid'} <span {...stylex.props(s.headingListTitle)}> <DownArrow /> </span></li>
          </ul>
          <ul {...stylex.props(s.headingUnorderDropdown, !dropdown && s.closeDropdown)}>
            <li {...stylex.props(s.headingList, s.listFc)} onClick={() => { setList(true), setDropdown(false) }}>List</li>
            <li {...stylex.props(s.headingList)} onClick={() => { setList(false), setDropdown(false) }} >Grid</li>
          </ul>
        </div>
      </div>

      <div {...stylex.props(s.overFlow)}>
        <div {...stylex.props(s.overFlowList, list ? s.listContainer : s.gridContainer)}>
          {loading && <Loading />}
          {error && <p>Hubo un Error</p>}
          {data.map((person) => {
            return (
              <div {...stylex.props(s.container)} key={person._id}>
                <div {...stylex.props(list ? s.wrapper : s.wrapperM)}>

                  <div {...stylex.props(list ? s.voted : s.votedM)}>

                    <div {...stylex.props(list ? s.votedLeft : s.votedLeftM)}>
                      {person.positivePercentage > person.negativePercentage ?
                        <button {...stylex.props(s.votedCardButtonIcon, s.thumbUp)} aria-label="thumbs up">
                          <ThumbUp />
                        </button>
                        :
                        <button {...stylex.props(s.votedCardButtonIcon, s.thumbDown)} aria-label="thumbs down">
                          <ThumbDown />
                        </button>}
                    </div>

                    <div {...stylex.props(s.description)}>
                      <h1 {...stylex.props(list ? s.descriptionH1 : s.descriptionH1M)}>{person.name}</h1>
                      <p>{person.description}</p>
                    </div>

                  </div>

                  <div {...stylex.props(s.vote)}>

                    <div {...stylex.props(s.voteParagraph)}>
                      <div {...stylex.props(s.voteP)}>
                        <p>{formatDateDistanceToNow(person.lastUpdated)}</p>
                      </div>
                    </div>

                    <div {...stylex.props(list ? s.voteBottons : s.voteBottonsM)}>
                      <button onClick={selectedThumbUp} {...stylex.props(list ? s.cardButtonIcon : s.cardButtonIconM, s.thumbUp, thumbUp && s.thumbUpOutline)} aria-label="thumbs up">
                        <ThumbUp />
                      </button>
                      <button onClick={selectedThumbDown} {...stylex.props(list ? s.cardButtonIcon : s.cardButtonIconM, s.thumbDown, thumbDown && s.thumbUpOutline)} aria-label="thumbs down">
                        <ThumbDown />
                      </button>
                      <button  {...stylex.props(list ? s.voteButton : s.voteButtonM)} disabled={thumbUp || thumbDown === true ? false : voted ? false : true} onClick={handleVoteClick} aria-label="vote button">
                        {voted ? 'Vote Again' : 'Vote Now'}
                      </button>
                    </div>

                    <div {...stylex.props(s.imageWrapper)}>
                      <Image
                        {...stylex.props(list ? s.imgBackground : s.imgBackgroundM)}
                        src={person.picture}
                        width={400}
                        height={400}
                        alt={person.name}
                        role="none" />
                    </div>

                    <div {...stylex.props(s.porcentage)}>
                      <div {...stylex.props(s.porcentageLeft(person.positivePercentage))}>
                        <span {...stylex.props(s.porcentageLeftIcon)}><ThumbUp /></span>
                        <span {...stylex.props(s.porcentageText)}>{person.positivePercentage}</span>
                      </div>
                      <div {...stylex.props(s.porcentageRight(person.negativePercentage))}>
                        <span {...stylex.props(s.porcentageText)}>{person.negativePercentage}</span>
                        <span {...stylex.props(s.porcentageIcon)}><ThumbDown /></span>
                      </div>
                    </div>

                    <div {...stylex.props(list ? s.bgLinear : s.bgLinearM)}></div>
                  </div>

                </div>
              </div>
            )
          })}

        </div>
      </div>
    </main>
  )
}

const s = stylex.create({
  main: {
    margin: '0 24px'
  },
  overFlow: {
    margin: {
      default: null,
      '@media (max-width: 900px)': `${spacing.xs} 0`,
    },
    width: {
      default: null,
      '@media (max-width: 900px)': 'auto'
    },
    maxWidth: {
      default: null,
      '@media (max-width: 900px)': '100%',
    },
    overflowX: {
      default: null,
      '@media (max-width: 900px)': 'scroll'
    }
  },

  overFlowList: {
    position: 'relative',
    maxWidth: 1100,
    display: {
      default: 'block',
      '@media (max-width: 900px)': 'inline-grid'
    },
    gridAutoFlow: {
      default: 'none',
      '@media (max-width: 900px)': 'column'
    },
    gridGap: `${spacing.xxs}`,
    listStyle: 'none',
  },

  gridContainer: {
    display: 'grid',
    margin: '0 auto',
    gridTemplateColumns: {
      default: '1fr 1fr 1fr',
      '@media (max-width: 1100px)': '1fr 1fr',
      '@media (max-width: 900px)': '1fr',
    },
  },
  listContainer: {
    display: 'grid',
    gridTemplateColumns: {
      default: '1fr',
      '@media (max-width: 900px)': '1fr'
    },
    margin: '0 auto',
  },
  container: {
    maxWidth: {
      default: 1100,
      '@media (max-width: 900px)': 400
    },
  },
  wrapper: {
    display: 'grid',
    gridTemplateColumns: {
      default: '1fr .3fr',
      '@media (max-width: 900px)': 'none',
    },
    gridTemplateRows: {
      default: 'none',
      '@media (max-width: 900px)': '1fr 1fr'
    },
    maxWidth: {
      default: 1100,
      '@media (max-width: 900px)': 400,
    },
    margin: '0 auto 24px',
    paddingRight: 24,
    position: 'relative',
    height: {
      default: 250,
      '@media (max-width: 900px)': 528,
    },
    width: {
      default: null,
      '@media (max-width: 900px)': 320
    }
  },
  wrapperM: {
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
    maxWidth: 400,
    margin: '0 auto 24px',
    paddingRight: 24,
    position: 'relative',
    height: 528,
    width: {
      default: 348,
      '@media (max-width: 900px)': 320
    }
  },
  voted: {
    display: 'flex',
    zIndex: 5,
    marginTop: {
      default: null,
      '@media (max-width: 900px)': 90
    }
  },
  votedM: {
    display: 'flex',
    zIndex: 5,
    marginTop: 90
  },
  description: {
    color: colors.white,
    zIndex: 5,
    marginRight: 16
  },
  descriptionH1: {
    padding: 0,
    margin: {
      default: '24px 0',
      '@media (max-width: 900px)': 0,
    }
  },
  descriptionH1M: {
    padding: 0,
    margin: 0
  },
  votedLeft: {
    marginRight: {
      default: '30%',
      '@media (max-width: 900px)': '2%',
    }
  },
  votedLeftM: {
    marginRight: '2%'
  },
  vote: {
    color: colors.white,
    paddingBottom: 80,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end'
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
    justifyContent: {
      default: null,
      '@media (max-width: 900px)': 'flex-end'
    }
  },
  voteBottonsM: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  cardButtonIcon: {
    width: {
      default: '80px',
      '@media (max-width: 900px)': '50px'
    },
    height: '50px',
    cursor: 'pointer',
    border: 'none',
    marginRight: 8,
    zIndex: 5
  },
  cardButtonIconM: {
    width: '50px',
    height: '50px',
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
  thumbUpOutline: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: colors.white
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
    width: {
      default: '100%',
      '@media (max-width: 900px)': '120px'
    },
    borderColor: colors.white,
    backgroundColor: 'rgba(0, 0, 0, .3)',
    color: colors.white,
    fontSize: '1rem',
    zIndex: 5,
    cursor: 'pointer'
  },
  voteButtonM: {
    padding: '.5rem 1rem',
    borderStyle: 'solid',
    borderWidth: 2,
    width: '120px',
    borderColor: colors.white,
    backgroundColor: 'rgba(0, 0, 0, .3)',
    color: colors.white,
    fontSize: '1rem',
    zIndex: 5,
    cursor: 'pointer',
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
  porcentageLeft: (positivePercentage) => ({
    display: 'flex',
    width: `${positivePercentage}%`,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0 .25rem 0 0',
    backgroundColor: 'rgba(60, 187, 180, .8)',
    color: colors.white,
    fontWeight: 300,
    paddingLeft: 24
  }),
  porcentageLeftIcon: {
    paddingRight: 8
  },
  porcentageText: {
    color: colors.white,
    paddingRight: 8,
    fontSize: {
      default: '1.25rem',
      "@media (max-width: 900px)": '1rem'
    }
  },
  porcentageRight: (negativePercentage) => ({
    paddingLeft: '1rem',
    paddingRight: 24,
    display: 'flex',
    alignItems: 'center',
    width: `${negativePercentage}%`,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(249, 173, 29, .8)',
  }),
  porcentageRightNumber: {
    fontSize: {
      default: '2rem',
      "@media (max-width: 900px)": '1.25rem'
    },
    fontWeight: 400,
    color: 'rgba(70, 70, 70, 1)',
    paddingRight: 4
  },
  porcentageIcon: {
    fontSize: {
      default: '2rem',
      "@media (max-width: 900px)": '1.25rem'
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
    background: {
      default: 'linear-gradient(90deg, rgba(209,208,208,0.2) 0%, rgba(122,118,118,1) 26%, rgba(104,99,99,1) 46%, rgba(144,139,139,1) 100%, rgba(178,178,178,1) 100%)',
      '@media (max-width: 900px)': 'rgba(0,0,0, 0.3)'
    },
    zIndex: 2,
    height: {
      default: 250,
      '@media (max-width: 900px)': 528
    },
  },
  bgLinearM: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
    height: 528,
    background: 'rgba(0,0,0, 0.3)',
  },
  imgBackground: {
    width: {
      default: 260,
      '@media (max-width: 900px)': '100%'
    },
    height: {
      default: 250,
      '@media (max-width: 900px)': 528
    },
    objectFit: 'cover'
  },
  imgBackgroundM: {
    width: '100%',
    height: 528,
    objectFit: 'cover'
  },
  //header
  heading: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    maxWidth: '1100px',
    margin: '24px auto',
    zIndex: 6,
  },
  headingLeft: {
    fontSize: '1.25rem'
  },
  headingRight: {
    display: {
      default: 'block',
      '@media (max-width: 900px)': 'none'
    }
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
    cursor: 'pointer',
    zIndex: 6,
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
    margin: 0,
    cursor: 'pointer'
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
    zIndex: 6,
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