import * as React from "react"
import Template from "../templates/default"
import {Seo} from "../components/seo/seo"
import Icon from "../components/icon/icon"
import Button from "../components/button/button"
import Section from "../components/section/section"

const HomePage = () => {
	return (
	  <Template>
      <Section>
        <h1>Page content</h1>
        <p>Maecenas vel efficitur felis. In elementum scelerisque molestie. Integer ac ex quis erat vestibulum vestibulum ut vitae erat. Ut enim ipsum, euismod luctus nunc sit amet, elementum convallis enim. Nunc turpis dolor, aliquam sed metus in, aliquet dignissim augue. Mauris eros massa, blandit eget tortor ac, ornare pellentesque ante. Ut pretium accumsan elit, at ultrices nisl. Quisque pulvinar nibh nisi, id elementum sem faucibus nec. Vivamus commodo placerat elit, ac dignissim nibh sodales ac. Pellentesque consectetur nisi erat, vel dignissim elit eleifend feugiat. Pellentesque enim eros, convallis id ante quis, iaculis vulputate enim.</p>
      </Section>
      <Section
        bgColor="muted"
      >
        <h2>Section muted</h2>
        <Icon icon="sprites.svg#it-tool" size="lg" bg="light" color="success"></Icon>
        <Button
          btnStyle="primary"
          iconLeft={
            <Icon icon="sprites.svg#it-tool" size="sm" color="light"/>
          }>
          Label del bottone con icona a sinistra
        </Button>
        <Button
          btnStyle="primary"
          iconRight={
            <Icon icon="sprites.svg#it-tool" size="sm" color="light"/>
          }>
          Label del bottone con icona a destra
        </Button>
        <Button
          btnStyle="primary"
          size="lg"
          iconRounded
          iconLeft={
            <Icon icon="sprites.svg#it-tool" size="sm" color="primary"/>
          }>
          Label del bottone con icona stondata a sinistra
        </Button>
        <Button
          btnStyle="primary"
          iconRounded
          srOnly="Testo per screen reader"
          iconLeft={
            <Icon icon="sprites.svg#it-tool" size="sm" color="primary"/>
          }>
        </Button>
        <Button
          role="button"
          url="#"
          btnStyle="secondary">
            Label del link
        </Button>
      </Section>
      <Section
        bgColor="neutral"
        whiteText={true}
      >
        <h2>Section neutral</h2>
        <p>Maecenas vel efficitur felis. In elementum scelerisque molestie. Integer ac ex quis erat vestibulum vestibulum ut vitae erat. Ut enim ipsum, euismod luctus nunc sit amet, elementum convallis enim. Nunc turpis dolor, aliquam sed metus in, aliquet dignissim augue. </p>
      </Section>
      <Section
        bgImage="https://picsum.photos/1280/720?image=811"
        whiteText={true}
      >
        <h2>Section with background image</h2>
        <p>Maecenas vel efficitur felis. In elementum scelerisque molestie. Integer ac ex quis erat vestibulum vestibulum ut vitae erat. Ut enim ipsum, euismod luctus nunc sit amet, elementum convallis enim. Nunc turpis dolor, aliquam sed metus in, aliquet dignissim augue. </p>
      </Section>
	  </Template>
	)
 }
 export default HomePage

 export const Head = () => (
	<Seo
    title = "Designers Italia | Il punto di riferimento per la progettazione dei servizi pubblici digitali"
    description = "Il punto di riferimento per la progettazione dei servizi pubblici digitali">
  </Seo>
 )