<template>
  <div class="container-fluid gedf-wrapper">
    <div class="row">
      <div class="col-md-9 gedf-main">
        <!-- content -->
        <div class="alert alert-success">
          <h3 class="text-left">【{{ article.sort }}】 {{ article.title }}</h3>
            <!-- <hr> -->
        </div>
        <div class="card gedf-card" v-for="(item,index) in articleList">
          <div class="card-header">
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex justify-content-between align-items-center">
                <div class="mr-2">
                  <img class="rounded-circle" width="45" :src="item.img" alt="">
                </div>
                <div class="ml-2">
                  <div class="h5 m-0 text-left">{{ item.name }}</div>
                  <div class="h7 text-muted">{{ index + 1 }}樓 | {{ item.createdDate }}</div>
                </div>
              </div>
              <div>
                <div class="dropdown">
                  <button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fa fa-ellipsis-h"></i>
                  </button>
                  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                    <div class="h6 dropdown-header">Configuration</div>
                    <a class="dropdown-item" href="#">Save</a>
                    <a class="dropdown-item" href="#">Hide</a>
                    <a class="dropdown-item" href="#">Report</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body">
              <!-- <div class="text-muted h7 mb-2"> <i class="far fa-clock"></i>10 min ago</div> -->
              <!-- <a class="card-link" href="#">
                  <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adip.</h5>
              </a> -->
              <p class="card-text">
                  <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae nulla rem eos ipsa praesentium esse magnam nemo dolor
                  sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste voluptates. -->
                  {{ item.content }}
              </p>
          </div>
          <div class="card-footer">
              <a href="#" class="card-link"><i class="fab fa-gratipay"></i> Like</a>
              <a href="#" class="card-link"><i class="fa fa-comment"></i> Comment</a>
              <a href="#" class="card-link"><i class="fas fa-share"></i> Share</a>
          </div>
        </div>
        <!-- content end -->

        <!-- post -->
        <div class="card gedf-card">
          <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" id="posts-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="true">
                  Make a publication</a>
              </li>
              <!-- <li class="nav-item">
                <a class="nav-link" id="images-tab" data-toggle="tab" role="tab" aria-controls="images" aria-selected="false" href="#images">Images</a>
              </li> -->
            </ul>
          </div>
          <div class="card-body">
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
                <div class="form-group">
                    <label class="sr-only" for="message">post</label>
                    <textarea id="editor" rows="3" placeholder="What are you thinking?"></textarea>
                </div>
              </div>
              <!-- <div class="tab-pane fade" id="images" role="tabpanel" aria-labelledby="images-tab">
                <div class="form-group">
                  <div class="custom-file">
                    <input type="file" class="custom-file-input" id="customFile">
                    <label class="custom-file-label" for="customFile">Upload image</label>
                  </div>
                </div>
                <div class="py-4"></div>
              </div> -->
            </div>
            <div class="btn-toolbar justify-content-between">
              <div class="btn-group">
                <button type="submit" class="btn btn-primary">share</button>
              </div>
              <div class="btn-group">
                <button id="btnGroupDrop1" type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">
                  <i class="fa fa-globe"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="btnGroupDrop1">
                  <a class="dropdown-item" href="#"><i class="fa fa-globe"></i> Public</a>
                  <a class="dropdown-item" href="#"><i class="fa fa-users"></i> Friends</a>
                  <a class="dropdown-item" href="#"><i class="fa fa-user"></i> Just me</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- post end -->

      </div>
      <!-- right side -->
      <div class="col-md-3">
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
      <!-- right side end -->
    </div>
  </div>
</template>

<script>

import CKEDITOR from 'CKEDITOR'

export default {
  name: 'ArticleView',
  data() {
    return {
      article: {
        articleId: 1,
        title: 'Single Dog Conv',
        sort: 'Dog',
        countSee: 100,
      },
      articleList: [
        {
          articleDetailId: 1,
          articleId: 1,
          createdDate: '2018/11/11 01:19:30',
          name: 'Test1',
          img: 'https://picsum.photos/50/50',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
          articleDetailId: 2,
          articleId: 1,
          createdDate: '2018/11/11 03:19:30',
          name: 'Test2',
          img: 'https://i0.wp.com/tricksmaze.com/wp-content/uploads/2017/04/Stylish-Girls-Profile-Pictures-36.jpg?resize=300%2C300&ssl=1',
          content: 'obcaecati hic, molestias minima iste voluptates.'
        },
        {
          articleDetailId: 3,
          articleId: 1,
          createdDate: '2018/11/11 03:19:30',
          name: 'Test3',
          img: 'https://picsum.photos/50/50',
          content: 'example text to build on the card.'
        },
      ]
    }
  },
  mounted() {
    CKEDITOR.replace("editor", { height: '100px', width: '100%', toolbar: 'full'});
    var editor = CKEDITOR.instances.editor2;
  }
}
</script>

<style scoped>
.h7 {
  font-size: 0.8rem;
}

.gedf-wrapper {
  margin-top: 0.97rem;
}

@media (min-width: 770px) {
  .gedf-main {
    padding-left: 4rem;
    padding-right: 4rem;
  }
  .gedf-card {
    margin-bottom: 2.77rem;
  }
}

 .dropdown-toggle::after {
  content: none;
  display: none;
}
</style>
