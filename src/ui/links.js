/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"
import { Link as ThemedLink } from "theme-ui"

const Link = props => <ThemedLink as={GatsbyLink} {...props} />

const ExternalLink = props => <ThemedLink {...props} />

export { Link, ExternalLink }
