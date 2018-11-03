<template>
  <div>
    <!-- 最新領養 -->
    <div class="container">
      <div class="col-md-12">
        <h2>最新領養</h2>
        <!-- <p>Lorem Ipsum pagination consumpim in definiction.</p> -->
      </div>
      <div class="row">
      <!-- Swiper -->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="row">
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-img"><img src="https://img.gaadicdn.com/images/carexteriorimages/upcoming/360x240/Jeep/Jeep-Renegade/047.jpg"></div>
                        <div class="card-body">
                            <h5>Renault KWID</h5>
                            <h4 class="pt-1 pb-2">Rs. 5.44-6.77 Lac</h4>
                          
                            <button type= "button" class="btn btn-outline-danger btn-block btn-sm">Lets Judge it.</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-img"><img src="https://img.gaadicdn.com/images/carexteriorimages/upcoming/360x240/Jeep/Jeep-Renegade/047.jpg"></div>
                        <div class="card-body">
                            <h5>Renault KWID</h5>
                            <h4 class="pt-1 pb-2">Rs. 5.44-6.77 Lac</h4>
                          
                            <button type= "button" class="btn btn-outline-danger btn-block btn-sm">Lets Judge it.</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-img"><img src="https://img.gaadicdn.com/images/carexteriorimages/upcoming/360x240/Jeep/Jeep-Renegade/047.jpg"></div>
                        <div class="card-body">
                            <h5>Renault KWID</h5>
                            <h4 class="pt-1 pb-2">Rs. 5.44-6.77 Lac</h4>
                          
                            <button type= "button" class="btn btn-outline-danger btn-block btn-sm">Lets Judge it.</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-img"><img src="https://img.gaadicdn.com/images/carexteriorimages/upcoming/360x240/Jeep/Jeep-Renegade/047.jpg"></div>
                        <div class="card-body">
                            <h5>Renault KWID</h5>
                            <h4 class="pt-1 pb-2">Rs. 5.44-6.77 Lac</h4>
                          
                            <button type= "button" class="btn btn-outline-danger btn-block btn-sm">Lets Judge it.</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div class="swiper-slide">
              <div class="row">
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-img"><img src="https://img.gaadicdn.com/images/carexteriorimages/upcoming/360x240/Jeep/Jeep-Renegade/047.jpg"></div>
                        <div class="card-body">
                            <h5>Renault KWID</h5>
                            <h4 class="pt-1 pb-2">Rs. 5.44-6.77 Lac</h4>
                          
                            <button type= "button" class="btn btn-outline-danger btn-block btn-sm">Lets Judge it.</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-img"><img src="https://img.gaadicdn.com/images/carexteriorimages/upcoming/360x240/Jeep/Jeep-Renegade/047.jpg"></div>
                        <div class="card-body">
                            <h5>Renault KWID</h5>
                            <h4 class="pt-1 pb-2">Rs. 5.44-6.77 Lac</h4>
                          
                            <button type= "button" class="btn btn-outline-danger btn-block btn-sm">Lets Judge it.</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-img"><img src="https://img.gaadicdn.com/images/carexteriorimages/upcoming/360x240/Jeep/Jeep-Renegade/047.jpg"></div>
                        <div class="card-body">
                            <h5>Renault KWID</h5>
                            <h4 class="pt-1 pb-2">Rs. 5.44-6.77 Lac</h4>
                          
                            <button type= "button" class="btn btn-outline-danger btn-block btn-sm">Lets Judge it.</button>
                        </div>
                    </div>
                </div>
                <!-- <div class="col-md-3">
                    <div class="card">
                        <div class="card-img"><img src="https://img.gaadicdn.com/images/carexteriorimages/upcoming/360x240/Jeep/Jeep-Renegade/047.jpg"></div>
                        <div class="card-body">
                            <h5>Renault KWID</h5>
                            <h4 class="pt-1 pb-2">Rs. 5.44-6.77 Lac</h4>
                          
                            <button type= "button" class="btn btn-outline-danger btn-block btn-sm">Lets Judge it.</button>
                        </div>
                    </div>
                </div> -->
              </div>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
          <!-- Add Arrows -->
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>

      </div>
    </div>
    <!-- 熱門討論 -->
    <div class="col-md-12">
      <h2>熱門討論</h2>
    </div>
    <div class="container">
       <article-table :articleList="articleList"></article-table>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import ArticleTable from './Common/ArticleTable'

export default {
  name: 'Home',
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
        }
      ]
    }
  },
  mounted(){
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  },
  created(){
    
  }
}
</script>

<style scoped>
@import '../assets/css/Home';
</style>
