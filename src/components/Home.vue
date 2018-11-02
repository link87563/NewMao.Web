<template>
  <div class="container">
    <div class="col-md-12">
      <h2>Top Lists of Safest Car</h2>
      <p>Lorem Ipsum pagination consumpim in definiction.</p>
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
</template>

<script>
import Swiper from 'swiper'

export default {
  name: 'Home',
  data() {
    return {

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
.divider {
  border: 1px solid #ccc;
}

img {
  width:100%;
}

.swiper-container {
  width: 100%;
  height: 400px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>
