import Head from 'next/head'
import ArticleList from '../components/ArticleList'
import { server } from './../config/index'

export default function Home({articles}) {
  return (
    <div>
      <Head>
      <title>LofiCafe</title>
        <meta name='lofi.cafe' content='Chill to lofi beats'/>
      </Head>
      <h1>Welcome to next</h1>
      <ArticleList articles = {articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles/`)
  const articles = await res.json()

  return{
    props: {
      articles
    },
  }
}