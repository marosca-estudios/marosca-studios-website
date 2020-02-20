import React from 'react'
import Link from 'styledComponents/Link'
import { Section } from 'styledComponents/Section'
import { Nav } from 'styledComponents/Nav'
import { Margin, Row, JustifyBetween } from 'styledComponents/Common'

const Home = () => {

  return (
    <Section>
      <Nav>
        <Margin margin={5}>
          <Row>
            <JustifyBetween>
              <Link>
                MAROSCA STUDIOS
              </Link>
            </JustifyBetween>
          </Row>
        </Margin>
      </Nav>
    </Section>
  )
}

export default Home
