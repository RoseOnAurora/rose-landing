import type { NextPage } from 'next'
import Head from 'next/head'
import { FaTwitter, FaTelegram, FaGithub, FaDiscord, FaBook } from 'react-icons/fa'
import { SiMedium } from 'react-icons/si'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rose</title>
        <meta name="description" content="rose.fi" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌹</text></svg>" />
      </Head>

      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div>
              <p className="title has-text-white is-size-1">
                Rose
              </p>
              <p className="subtitle has-text-white">
                The liquidity layer for Aurora. 🌹
              </p>
              <p>
                <a href="https://app.rose.fi">
                  <button className="button">
                    Launch App
                  </button>
                </a>
              </p>
              <p className="subtitle has-text-white mt-5">
                <a href="https://twitter.com/roseonaurora" className="mr-3"><FaTwitter/></a>
                <a href="https://medium.com/@roseonaurora" className="mr-3"><SiMedium/></a>
                <a href="https://t.me/RoseOnAurora" className="mr-3"><FaTelegram/></a>
                <a href="https://github.com/RoseOnAurora" className="mr-3"><FaGithub/></a>
                <a href="https://discord.gg/dG6mWH4rHj" className="mr-3"><FaDiscord/></a>
                <a href="https://docs.rose.fi"><FaBook/></a>
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Home
