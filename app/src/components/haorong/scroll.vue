<style>
  .news__item {
    height: 80px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
  }
</style>
<template>
  <div v-scroll="loadMore">
    <ul class="news">
      <li class="news__item" v-for="(news, index) in newslist">
        {{index}}-{{news.title}}
      </li>
    </ul>
  </div>

</template>
<script>
  export default{
    data(){
      return {
        newslist: [
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'}
        ]
      }
    },
    directives: {
      scroll: {
        bind: function (el, binding) {
          window.addEventListener('scroll', () => {
            if (document.body.scrollTop + window.innerHeight >= el.clientHeight) {
              console.log('load data');
            }
          })
        }
      }
    },
    methods: {
      moreFn: function (itemIndex) {
        // console.log(this.nowPage)
        this.$http.jsonp(this.url + itemIndex*10).then(function (response) {
          this.games=this.games.concat(response.body);
          this.switchShow=!this.switchShow;
        }, function (response) {
          console.log(response)
        });
      },
      getMore: function () {
        this.switchShow=!this.switchShow;
        this.nowPage++;
        this.moreFn(this.nowPage);
      },
      init: function () {
        this.moreFn(this.nowPage);
      }
    },
    directives: {// 自定义指令
      scroll: {
        bind: function (el, binding){
          window.addEventListener('scroll', function () {
            if(document.body.scrollTop + window.innerHeight >= el.clientHeight) {
              var fnc = binding.value;
              fnc();
            }
          })
        }
      }
    },
    created:function(){
      window.addEventListener('scroll', ()=> {
        if(document.body.scrollTop + window.innerHeight >= el.clientHeight) {
          let fnc = binding.value;
          fnc();
        }
      })
    },
  }
</script>
