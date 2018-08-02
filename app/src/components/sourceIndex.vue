<template>
  <div>
    <main>
      <section class="banner">
        <img src="../../static/img/banner@2x.png" />
      </section>
      <div class="container">
      <section class="m-address">
        <h4>会议目的地</h4>
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide class="address-slide">
            <img src="../../static/img/beijing.png" />
            <p>北京</p>
          </swiper-slide>
          <swiper-slide class="address-slide">
            <img src="../../static/img/nanjing.png" />
            <p>南京</p>
          </swiper-slide>
          <swiper-slide class="address-slide">
            <img src="../../static/img/qingdao.png" />
            <p>青岛</p>
          </swiper-slide>
          <swiper-slide class="address-slide">
          <img src="../../static/img/beijing.png" />
          <p>北京</p>
          </swiper-slide>
          <swiper-slide class="address-slide">
            <img src="../../static/img/nanjing.png" />
            <p>南京</p>
          </swiper-slide>
          <swiper-slide class="address-slide">
            <img src="../../static/img/qingdao.png" />
            <p>青岛</p>
          </swiper-slide>
        </swiper>
        <div class="swiper-scrollbar" slot="scrollbar"></div>
        <div class="hot-city">
          <span>上海</span>
          <span>宁波</span>
          <span>苏州</span>
          <span>青岛</span>
          <span>昆明</span>
          <span>南京</span>
        </div>
      </section>
      <section class="m-service">
        <img src="../../static/img/site.png" />
        <img src="../../static/img/service.png" />
        <img src="../../static/img/policy.png" />
      </section>
      <section class="new-source">
        <div class="n-head">
          <span class="line"></span>
          <span class="title">新入驻资源</span>
          <span class="line"></span>
        </div>
        <div class="n-message">
          <p><img src="../../static/img/ad-icon.png" /><i>[北京]</i> &nbsp;北京活动摄影公司</p>
          <p>主营业务：摄影/摄像、设备租赁</p>
        </div>
        <div class="n-message">
          <p><img src="../../static/img/ad-icon.png" /><i>[北京]</i> &nbsp;北京活动摄影公司</p>
          <p>主营业务：摄影/摄像、设备租赁</p>
        </div>
      </section>
      <section class="source-article">
        <div class="s-head">
          <span class="s-title">资源推荐</span>
          <span class="s-right">查看全部</span>
        </div>
        <swiper :options="swiperArt" ref="mySwiper">
          <swiper-slide class="adv-slide">
            <article>
              <aside>
                <img src="../../static/img/adv-qd.png"/>
                <h5>Pick青岛这5家酒店 夏日还怕不时髦</h5>
                <p>二十五度有风有浪的夜晚，啤酒飘香，坐拥半亩海洋的万种温热。唯有来了这里，才发现经典和前沿和谐地交融着，褪掉平日工作的疲乏。簇拥仲夏的馈赠对海风与啤酒的热爱，不分年龄、身份和阶层，激发着团队的灵感。如同璀璨星空般悬浮在半空中，而这璀璨的外表下集合了一座城市的精彩。
                </p>
              </aside>
            </article>
          </swiper-slide>
        </swiper>
      </section>
      <section class="require-issue">
        <div class="s-head">
          <span class="s-title">需求发布</span>
          <span class="s-right">更多需求</span>
        </div>
        <div class="r-list">
          <div class="l-detail">
            <p><a>[北京]李先生讯号容纳100人的酒店场地</a>
              <i>2018-05-06</i></p>
          </div>
          <div class="l-detail">
            <p><a>[北京]王嘉伟寻找鲜花、礼品、租赁staffs类服务啦啊啦</a>
              <i>2018-05-06</i>
            </p>
          </div>
          <div class="l-detail">
            <p><a>[北京]李先生讯号容纳100人的酒店场地</a>
              <i>2018-05-06</i></p>
          </div>
          <div class="l-detail">
            <p><a>[北京]李先生讯号容纳100人的酒店场地</a>
              <i>2018-05-06</i></p>
          </div>
          <div class="l-detail">
            <p><a>[北京]王嘉伟寻找鲜花、礼品、租赁类服务啦啊啦</a>
              <i>2018-05-06</i>
            </p>
          </div>
        </div>
        <div class="r-button">
        <div class="site">发布场地需求</div>
        <div class="service">发布服务需求</div>
        </div>
      </section>
      <section class="source-in">
        <div class="i-head">
          <span>资源店入驻</span>
        </div>
        <img src="../../static/img/foot.png"/>
      </section>
      </div>
      <input type="range" class="slider-block" id="slider" max="18" min="6" step="1" value="10" @change="moveChange()">

    </main>
    <footer>
      <ul class="f-message">
        <li>关于会链接</li>
        <li>联系会链接</li>
        <li>商务合作</li>
        <li>商务合作</li>
      </ul>
      <p>会链接网络科技有限公司版权所有 京ICP备17032464号<br/>www.hweelink.com</p>
    </footer>
  </div>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  export default {
    name: "sourceIndex",
    data(){
      return{
        swiperOption:{
          notNextTick:true,
          autoplay:true,
          loop:true,
          speed:1000,
          width:150,
          height:250,
          direction:'horizontal',
          grabCursor:true,
          setWrapperSize:true,
          autoHeight:true,
          scrollbar:'.swiper-scrollbar',
          mousewheelControl:true,
          observeParents:true,
          debugger:true,
        },
        swiperArt:{
          notNextTick:true,
          autoplay:true,
          loop:true,
          speed:1000,
          direction:'horizontal',
          grabCursor:true,
          setWrapperSize:true,
          autoHeight:true,
          scrollbar:'.swiper-scrollbar',
          mousewheelControl:true,
          observeParents:true,
          debugger:true,
        }
      }
    },
    created:function(){},
    methods:{
      moveChange(){
        console.log(this)
      },
    },
    components:{
      swiper,
      swiperSlide
    }
  }
</script>

<style scoped>
  body{
    color:#f7f7f7;
  }
  .container{
    width:7rem;
    margin:0 auto;
  }
  .banner{
    background-color:#ffffff;
  }
  .banner img{
    width:7.5rem;
  }
  .m-address{
    background-color:#ffffff;
    padding:.75rem 0 0 0rem;
  }

  .m-address h4{
    font-size:.44rem;
    color:#333333;
  }
  .swiper-container{
    margin-top:.6rem;
  }
  .address-slide img{
    width:2.46rem;
  }
  .address-slide p{
    width:2.46rem;
    font-size:.32rem;
    color:#333333;
    padding-left:.2rem;
  }
  .m-address .hot-city span{
    font-size:.3rem;
    color:#333333;
    width:.35rem;
    padding-right:.15rem;
    text-align: center;
    border-right:.03rem solid #333333;
  }
  .m-address .hot-city span:last-child{
    border:none;
  }
  .m-service{
    background-color:#ffffff;
    margin-top:.2rem;
    padding:.9rem 0;
  }
  .m-service img{
    width:2.1rem;
  }
  .new-source{
    background-color:#ffffff;
    margin-top:.2rem;
  }
  .new-source .n-head .title{
    padding-top:.4rem;
    text-align:center;
    font-size:.4rem;
    color:#333333;
  }
  .new-source .n-head .line{
    width:2rem;
    display:inline-block;
    border-top:.01rem solid #d5ece7;
    /*margin-left:.3rem;*/
    vertical-align: 8%;
  }
  .new-source .n-message{
    font-size:.26rem;
    color:#666666;
    text-align: center;
    padding-top:.3rem;
  }
  .new-source .n-message:last-child{
    padding-bottom:.5rem;
  }
  .new-source .n-message i{
    font-style: normal;
    color:#333333;
    padding-left:.15rem;
  }
  .new-source .n-message p img{
    width:.22rem;
  }
  .n-message p:first-child{
    margin-left:-.2rem;
  }
  .source-article{
    margin:.2rem 0 .5rem 0;
    background-color:#ffffff;
  }
  .s-head{
    display:flex;
    justify-content: space-between;
    padding-top:.3rem;
  }
  .s-head .s-title{
    font-size:.44rem;
    font-weight: bold;
    color:#333333;
  }
  .s-head .s-right{
    background:url("../../static/img/select-icon.png") no-repeat 1.4rem .1rem;
    background-size:.16rem .26rem;
    font-size:.3rem;
    color:#9b9b9b;
    padding-right:.4rem;
  }
  .adv-slide article aside img{
    width:6.8rem;
  }
  .adv-slide article aside h5{
    font-size:.32rem;
    color:#333333;
  }
  .adv-slide article aside p{
    width:6.8rem;
    height:1.1rem;
    font-size:.28rem;
    color:#666666;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box; /** 将对象作为伸缩盒子模型显示 **/
    -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
    -webkit-line-clamp: 3; /** 显示的行数 **/
    overflow: hidden;
  }
  .r-list{
    padding-top:.3rem;
  }
  .l-detail{
    padding-top:.3rem;
  }
  .r-list .l-detail p{
    vertical-align: top;
  }
  .r-list .l-detail p a{
    font-size:.32rem;
    font-weight: bold;
    color:#333333;
    display:block;
    height:.5rem;
    line-height:.5rem;
    white-space:nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .r-list .l-detail i{
    font-style: normal;
    font-size:.26rem;
    color:#9b9b9b;
    display:block;
  }
  .require-issue .r-button{
    margin-top:.7rem;
    display:-webkit-flex;
    -webkit-box-orient: horizontal;
  }
  .site, .service{
    background-color:#f5f5f5;
    font-size:.28rem;
    color:#000000;
    width:3.2rem;
    height:.9rem;
    line-height:.9rem;
    text-align:center;
  }
  .service{
    margin-left:.4rem;
  }
  .source-in .i-head{
    font-size:.44rem;
    font-weight: bold;
    color:#333333;
    margin-top:.9rem;
  }
  .source-in img{
    width:7rem;
    margin:.8rem 0 1rem 0;
  }
  footer{
    background-color:#000000;
  }
  .f-message{
    padding-top:.5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:space-between;
  }
  .f-message li{
    width:3rem;
    border:.01rem solid #787878;
    color:#787878;
    font-size:.33rem;
    height:.84rem;
    line-height:.84rem;
    text-align: center;
    margin:.2rem .3rem;
  }
  footer p{
    font-size:.28rem;
    color:#787878;
    text-align: center;
    padding:.5rem 0;
  }

  input[type="range"] {
    -webkit-box-shadow: 0 1px 0 0px #eeeeee, 0 1px 0 #10e6ae inset, 0px 2px 10px 0px #10e6ae inset, 1px 0px 2px rgba(16, 230, 174, 0.4) inset, 0 0px 1px rgba(0, 0, 0, 0.6) inset;
    margin-top: 2px;
    background-color: #eeeeee;
    border-radius: 15px;
    width: 400px;
    -webkit-appearance: none;
    height:10px;
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    cursor: default;
    top: -5px;
    height: .5rem;
    width: .5rem;
    transform: translateY(-4px);
    background: none repeat scroll 0 0 #eeeeee;
    border-radius: 15px;
    -webkit-box-shadow: 0 -1px 1px #7a7a7a inset;
  }
</style>
