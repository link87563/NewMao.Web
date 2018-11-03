<template>
  <div class="container">
    <div class="form-group">
      <!-- <div class="form-inline"> -->
        <h3 class="text-left">標題</h3>
        <button class="btn btn-primary float-right" @click.prevent="submit">送出</button>
      <!-- </div> -->
      <input type="text" class="form-control">
    </div>
    <div class="form-group">
      <h3 class="text-left">標籤</h3>
      <select class="form-control">
        <option value=""></option>
        <option v-for="item in selectOptions.tabList" :value="item.code_id" :key="item.code_id">{{ item.code_name }}</option>
      </Select>
    </div>
    <div>
      <ckeditor type="classic" v-model="article.content"></ckeditor>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Article',
  components: {
    
  },
  data() {
    return {
      selectOptions: {
          tabList: [
          {
            code_id: 1,
            code_name: '狗狗'
          },
          {
            code_id: 2,
            code_name: '貓貓'
          },
        ]
      },
      article: {}
    }
  },
  methods: {
    submit() {
      console.log(this.article)
    }
  },
  mounted() {
    
  }
}
</script>
