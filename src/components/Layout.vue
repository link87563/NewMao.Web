<template>
  <div id="layout">
    <my-nav></my-nav>
    <div class="content-wrapper">
      <div class="container-fluid">
        <form class="form fixed-page-title">
          <div class="x-title x-title-top">
            <h5>
              <router-link ></router-link>
            </h5>
            <div class="pull-right">
              <component :is="componentId"></component>
            </div>
          </div>
        </form>
        <div class="print-section">
          <!-- <div class="print-title">
            <img src="" alt="">
          </div> -->
          <!-- <h5 class="page-title"></h5> -->
          <router-view></router-view>
        </div>
      </div>
    </div>
    <footer class="sticky-footer">
      <div class="container">
        <div class="text-center">
          <p class="mt-2">Copyright © All Rights Reserved 2020 | Template Design & Development by</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Nav from '@/components/Nav'

export default {
  name: 'Layout',
  components: {
    myNav: Nav
  }
}
</script>