<template>
    <div class="row">
      <div class="col-12">
      <table class="table table-hover">
        <thead>
          <tr class="table-success">
            <th>序</th>
            <th>觀看人氣</th>
            <th>標題</th>
            <th>發表人</th>
            <th>發表時間</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in articleList" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ item.hot }}</td>
            <td>
              <router-link :to="{ path: '/ArticleView' }">{{ item.title }}</router-link>
            </td>
            <td>{{ item.userName }}</td>
            <td>{{ item.updatedDate }}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ArticleTable',
  props: {
    articleList: {
      type: [ Array, Object ],
      required: false,
      default() {
        return {};
      }
    },
  },
  data() {
    return {
      
    }
  }
}
</script>
