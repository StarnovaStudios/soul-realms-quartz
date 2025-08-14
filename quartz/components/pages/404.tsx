import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname

  return (
    <article class="popover-hint">
      <h1>⚠ Rift Detected | 404 Page Not Found</h1>
      {/* <p>{i18n(cfg.locale).pages.error.notFound}</p> */}
      <p>
        The page you seek lies beyond the Void.
        Either the knowledge has been hidden or
        this fragment of the Realm has yet to be woven into existence.
      </p>
      <p>
        Travelers speak of realms shifting, gates sealing, and memories fading. 
        Are you in the right place?
      </p>
      <a href={baseDir}>{i18n(cfg.locale).pages.error.home}</a>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
