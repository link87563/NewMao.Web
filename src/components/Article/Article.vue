<template>
  <div class="container">
    <div>
      <button class="btn btn-danger float-right" @click.prevent="btnCancel">取消</button>
      <button class="btn btn-primary float-right" @click.prevent="submit">送出</button>
    </div>
    <div class="form-group">
      <!-- <div class="form-inline"> -->
        <h3 class="text-left">標題</h3>
      <!-- </div> -->
      <input type="text" class="form-control" v-model="article.title">
    </div>
    <div class="form-group">
      <h3 class="text-left">分類</h3>
      <select class="form-control" v-model="article.sort">
        <option value=""></option>
        <option v-for="item in selectOptions.tabList" 
                :value="item.code_id" 
                :key="item.code_id">{{ item.code_name }}</option>
      </Select>
    </div>
    <div>
      <textarea id="editor" rows="10" cols="80" ></textarea>
    </div>
  </div>
</template>

<script>
import CKEDITOR from 'CKEDITOR'

export default {
  name: 'Article',
  data() {
    return {
      selectOptions: {
          tabList: [
          {
            code_id: 1,
            code_name: '狗'
          },
          {
            code_id: 2,
            code_name: '貓'
          },
        ]
      },
      article: {}
    }
  },
  methods: {
    submit() {
      this.article.content = CKEDITOR.instances.editor.getData();
      console.log(this.article)
    },
    btnCancel() {

    }
  },
  mounted() {
    CKEDITOR.replace("editor", { height: '400px', width: '100%', toolbar: 'full'});
    var editor = CKEDITOR.instances.editor2;
  }
}
</script>
