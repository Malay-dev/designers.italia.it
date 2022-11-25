import * as React from "react"
import "../scss/styles.scss"
import "../js/globals"

import Skiplinks from "../components/skiplinks/skiplinks"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import BackToTopEl from "../components/back-to-top/back-to-top"
import HeaderSlim from "../components/header-slim/header-slim"
import HeaderPre from "../components/header-pre/header-pre"
import NavWrapper from "../components/nav-wrapper/nav-wrapper"
import HeaderCenter from "../components/header-center/header-center"
import HeaderNav from "../components/header-nav/header-nav"
import LastUpdate from "../components/last-update/last-update"
import Feedback from "../components/feedback/feedback"

import Hero from "../components/hero/hero"
import SectionIntro from "../components/section-intro/section-intro"
import TitleText from "../components/title-text/title-text"
import Highlight from "../components/highlight/highlight"
import HighlightCards from "../components/highlight-cards/highlight-cards"

import HeaderData from "../data/header.yaml"
import FooterData from "../data/footer.yaml"
import skipLinksData from "../data/skiplinks.yaml"

const Template = ({children,Pagedata}) => {
  return (
    <>
      <Skiplinks data={skipLinksData.skiplinks}/>
      <Header data={HeaderData}>
        <HeaderPre data={HeaderData.headerPre}/>
        <HeaderSlim data={HeaderData.headerSlim}/>
        <NavWrapper>
          <HeaderCenter data={HeaderData.headerCenter}/>
          <HeaderNav data={HeaderData.navbar} page={Pagedata.seo.name}/>
        </NavWrapper>
      </Header>
      <main id="main">

        { Pagedata.components.hero && <Hero {...Pagedata.components.hero}></Hero>}
        { Pagedata.components.sectionIntro && <SectionIntro {...Pagedata.components.sectionIntro}/>}

        { Pagedata.components.titleText && <TitleText {...Pagedata.components.titleText}/>}

        { Pagedata.components.highlightCardsLoop && Pagedata.components.highlightCardsLoop.map((hlc,index) => {
          return(
            <HighlightCards key={"hcl-"+index} {...hlc}/>
          )
        })}

        { Pagedata.components.highlightsLoop && Pagedata.components.highlightsLoop.map((hl,index) => {
          return(
            <Highlight key={"hl-"+index} {...hl}/>
          )
        })}

        {children}
        {Pagedata.lastUpdate ? <LastUpdate {...Pagedata.lastUpdate} /> : null }
        <Feedback/>
      </main>
      <Footer {...FooterData.footer}>
      </Footer>
      <BackToTopEl
        positionTop={0}
        scrollLimit={100}
        duration={800}
        easing="easeInOutSine"
      />
    </>
	)
}

export default Template