import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home = ({ buildTimestamp }) => {
  return (
    <p>
      Hello From my next.js app!
      App built at: {buildTimestamp}
    </p>
  )
}

export const getStaticProps = () => {
  return {
    props: {
      buildTimestamp: Date.now()
    }
  }
}

export default Home;
