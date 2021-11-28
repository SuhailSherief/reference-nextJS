import { useRouter } from 'next/router'
import Link from 'next/link'
import { server } from './../../../config/index'
import { articles } from '../../../data'
import Meta from '../../../components/Meta'

const article = ({post}) => {
    // const router = useRouter()
    // const { id } = router.query
    return (
        <>
            <Meta title={post.title} />
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link href='/'>Go Back</Link>
        </>
    )
}

export default article

// Using server side props ext api

// export const getServerSideProps = async (context) => {
//     const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const post = await res.json()
// 
//     return {
//         props: {
//             post
//         },
//     }
// }

// Using static props and paths ext api

// export const getStaticProps = async (context) => {
//     const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const post = await res.json()
// 
//     return {
//         props: {
//             post
//         },
//     }
// }
// export const getStaticPaths = async () => {
//     const res = await fetch(`http://jsonplaceholder.typicode.com/posts/`)
//     const posts = await res.json()
// 
//     const ids = posts.map( post => post.id)
//     const paths = ids.map(id => ({ params: {id: id.toString()}}))
//     return {
//         paths,
//         fallback: false,
//     }
// }

// Using static props and paths custom api

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`)
    const post = await res.json()

    return {
        props: {
            post
        },
    }
}
export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles/`)
    const posts = await res.json()

    const ids = posts.map( post => post.id)
    const paths = ids.map(id => ({ params: {id: id.toString()}}))
    return {
        paths,
        fallback: false,
    }
}