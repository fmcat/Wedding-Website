import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "header-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log({data});
  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}


const Header = ({ siteTitle, siteDescription }) => (
  <header
    style={{
      height: 0,
      paddingBottom: '59%',
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `5rem 1.0875rem`,
	textShadow: `#67b6d7 5px 0 30px`,
      }}
    >
      <h1 style={{ margin: 0  }}>
          {siteTitle}
      </h1>
      <p style={{paddingTop: '16px'}}>Mountain View Grand, October 17, 2020</p>
    </div>
      <Image />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
