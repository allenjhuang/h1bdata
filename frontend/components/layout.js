import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";

export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <>
      <nav>
        <a href="#" className="brand">
          <span>H1B Data</span>
        </a>

        <input id="bmenub" type="checkbox" className="show" />
        <label htmlFor="bmenub" className="burger pseudo button">
          menu
        </label>

        <div className="menu">
          <a href="#" className="pseudo button icon-picture">
            Demo
          </a>
          <a href="#" className="button icon-puzzle">
            Plugins
          </a>
        </div>
      </nav>

      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <main>{children}</main>
      </div>
    </>
  );
}
