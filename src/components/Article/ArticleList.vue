<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <router-link :to="{ path: '/Article/create' }" 
                      class="btn btn-primary float-right">新增文章</router-link>
        </div>
      </div>
    </div>
  
    <div class="col-9">
      <article-table :articleList="articleList"></article-table>
    </div>
    <div class="col-3">
      <div class="card gedf-card">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
      <div class="card gedf-card">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import ArticleTable from '../Common/ArticleTable'

export default {
  name: 'ArticleList',
  components: {
    articleTable: ArticleTable
  },
  data() {
    return {
      articleList: [
        {
          title: '請問 這是狐狸還是博美？',
          userName: 'User1',
          hot: 4,
          updatedDate: '2018/11/03 11:20:30'
        },
        {
          title: '法鬥狗皮膚是否容易搔癢',
          userName: 'User2',
          hot: 5,
          updatedDate: '2018/10/30 11:20:30'
        },
        {
          title: '這是哪一類的貓？',
          userName: 'User3',
          hot: 42,
          updatedDate: '2018/10/28 11:20:30'
        },
        {
          title: '幫兒子找小女友❤',
          userName: 'User4',
          hot: 34,
           updatedDate: '2018/9/27 11:20:30'
        },
        {
          title: '請問 這是狐狸還是博美？',
          userName: 'User1',
          hot: 4,
          updatedDate: '2018/11/03 11:20:30'
        },
        {
          title: '法鬥狗皮膚是否容易搔癢',
          userName: 'User2',
          hot: 5,
          updatedDate: '2018/10/30 11:20:30'
        },
        {
          title: '這是哪一類的貓？',
          userName: 'User3',
          hot: 42,
          updatedDate: '2018/10/28 11:20:30'
        },
        {
          title: '幫兒子找小女友❤',
          userName: 'User4',
          hot: 34,
           updatedDate: '2018/9/27 11:20:30'
        }
      ]
    }
  },
  mounted() {

  }
}
</script>