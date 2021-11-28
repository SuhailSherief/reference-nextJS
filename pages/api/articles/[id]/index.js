import { articles } from './../../../../data'

export default function handler({ query : { id }}, res) {
        const filteredarticle = articles.filter(article => article.id === id)

        if(filteredarticle.length > 0)
        {
            res.status(200).json(filteredarticle[0])
        }
        else
        {
            res.status(404).json({msg: `Article number ${id} was not found`})
        }
  }