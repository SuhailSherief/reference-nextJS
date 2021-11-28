import articleStyle from './../styles/Article.module.css'
import Link from 'next/link'

const ArticleItem = ({article}) => {
    return (
            <Link href='/article/[id]' as={`/article/${article.id}`}>
                <a className={articleStyle.card}>
                    <h1>{article.title} &rarr;</h1>
                    <p>{article.body}</p>
                </a>
            </Link>
    )
}

export default ArticleItem
