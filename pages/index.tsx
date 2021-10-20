import type { NextPage } from 'next'
import Head from 'next/head'
import { FaTwitter, FaMedium, FaTelegram } from 'react-icons/fa'

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
                We are BUIDLing, stay tuned! 🌹
              </p>
              <p className="subtitle has-text-white">
                <a href="https://twitter.com/roseonaurora" className="mr-3"><FaTwitter/></a>
                <a href="https://medium.com/@roseonaurora" className="mr-3"><FaMedium/></a>
                <a href="https://t.me/RoseOnAurora"><FaTelegram/></a>
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Home
