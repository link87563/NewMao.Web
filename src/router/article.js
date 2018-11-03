import ArticleList from '@/components/Article/ArticleList'
import Article from '@/components/Article/Article'
import ArticleView from '@/components/Article/ArticleView'

export default [
  {
    path: '/ArticleList',
    name: 'ArticleList',
    component: ArticleList
  },
  {
    path: '/Article/create',
    name: 'Article',
    component: Article
  },
  {
    path: '/Article/edit',
    name: 'Article',
    component: Article
  },
  {
    path: '/ArticleView',
    name: 'ArticleView',
    component: ArticleView
  }
]