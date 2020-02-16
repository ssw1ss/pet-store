/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"

import SEO from "../components/SEO"

const Heading = ({ sx, ...props }) => (
  <div sx={{ variant: "MyComp", ...sx }} {...props} />
)

const IndexPage = ({ data }) => {
  return (
    <div>
      <SEO title="Home" />
      <Heading sx={{ fontSize: "2rem" }}>Products</Heading>
      <div>
        {data.allShopifyProduct.nodes.map(({ id, title, metafields }) => (
          <div key={id} style={{ background: metafields[0].value }}>
            {title}
          </div>
        ))}
      </div>
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    allShopifyProduct {
      nodes {
        id
        title
        metafields {
          value
        }
      }
    }
  }
`
