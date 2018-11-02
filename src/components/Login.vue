<template>
  <body>
    <div class="container">
      <div class="d-flex justify-content-center h-100">
        <div class="card">
          <div class="card-header">
            <h3>Sign In</h3>
            <div class="d-flex justify-content-end social_icon">
              <span><i class="fab fa-facebook-square"></i></span>
              <span><i class="fab fa-google-plus-square"></i></span>
              <span><i class="fab fa-twitter-square"></i></span>
            </div>
          </div>
          <div class="card-body">
            <form>
              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fas fa-user"></i></span>
                </div>
                <input type="text" 
                      class="form-control" 
                      placeholder="username"
                      v-model="login.username">
              </div>
              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fas fa-key"></i></span>
                </div>
                <input type="password" 
                      class="form-control" 
                      placeholder="password"
                      v-model="login.password">
              </div>
              <div class="row align-items-center remember">
                <input type="checkbox">Remember Me
              </div>
              <div class="form-group">
                <!-- <input type="submit" value="Login" class="btn float-right login_btn"> -->
                <button class="btn float-right login_btn"
                        @click.prevent="btnLogin">Login</button>
              </div>
            </form>
          </div>
          <div class="card-footer">
            <div class="d-flex justify-content-center links">
              Don't have an account?
              <!-- <a href="#">Sign Up</a> -->
              <router-link :to="{ path: '#' }">Sign Up</router-link>
            </div>
            <div class="d-flex justify-content-center">
              <!-- <a href="#">Forgot your password?</a> -->
              <router-link :to="{ path: '#' }">Forgot your password?</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      login: {}
    }
  },
  methods: {
    btnLogin(){
      alert(this.login);
      console.log(this.login)
    }
  },
  mounted() {

  }
}
</script>

<style scoped>
@import '../assets/css/Login';
</style>
