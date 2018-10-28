<template>
  <body>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <h2>Essential Links</h2>
      <button class="btn btn-primary" @click="btnAlart">AAA</button>
      <ul>
        <li>
          <a href="https://vuejs.org" target="_blank">
            Core Docs
          </a>
        </li>
        <li>
          <a href="https://forum.vuejs.org" target="_blank">
            Forum
          </a>
        </li>
        <li>
          <a href="https://chat.vuejs.org" target="_blank">
            Community Chat
          </a>
        </li>
        <li>
          <a href="https://twitter.com/vuejs" target="_blank">
            Twitter
          </a>
        </li>
        <br>
        <li>
          <a href="http://vuejs-templates.github.io/webpack/" target="_blank">
            Docs for This Template
          </a>
        </li>
      </ul>
      <h2>Ecosystem</h2>
      <ul>
        <li>
          <a href="http://router.vuejs.org/" target="_blank">
            vue-router
          </a>
        </li>
        <li>
          <a href="http://vuex.vuejs.org/" target="_blank">
            vuex
          </a>
        </li>
        <li>
          <a href="http://vue-loader.vuejs.org/" target="_blank">
            vue-loader
          </a>
        </li>
        <li>
          <a href="https://github.com/vuejs/awesome-vue" target="_blank">
            awesome-vue
          </a>
        </li>
      </ul>
    </div>
    <div class="row">
      <div class="col-12">
        <table class="table">
          <thead>
            <tr>
              <th>幣別</th>
              <th>說明</th>
              <th>總額</th>
              <th>換算</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in dataList">
              <td>{{ item.code }}</td>
              <td>{{ item.description }}</td>
              <td>{{ item.rate }}</td>
              <td>{{ item.rate_float }}</td>  
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </body>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      dataList: {}
    }
  },
  methods: {
    btnAlart () {
      alert('XXX'); 
    }
  },
  mounted: function() {
    axios
    .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => {
      console.log(response);
      this.dataList = response.data.bpi;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
