<style scope>
  #mainview{
    max-width:750px;
    min-width:320px;
    margin:0 auto;
    margin-top:-3.2rem;
  }
  ul li{
    list-style:none;
  }
  .selects{
    width:100%;
    height:1.24rem;
    line-height:1.24rem;
    border:1px solid red;
    box-sizing:border-box;
    position:relative;
    padding:0.19rem 0;
    background:#fff;
  }
  .selects ul {
    float:left;
    height:1.2rem;
    padding-top:.3rem;
    width:38%;
    border-bottom:1px solid #CCCCCC;
  }

  .selects ul:first-child p{
    border-right: 1px solid #CCCCCC;
  }
  .selects p{
    font-family:'微软雅黑';
    font-size:.5rem;
    height:1rem;
    line-height:1rem;
  }
  .detail{
    display:none;
  }
  .hot{
    height:1rem;
    margin-top:3rem;
  }
  .hot ul{
    margin-top:-3rem;
    margin-left:1.2rem;
  }
  .hot ul li{
    float: left;
    margin-left:0.3rem;
    width:35%;
    height:1rem;
    line-height:1rem;
    background-color: #CCCCCC;
    border-radius: 0.05rem;
  }
  .hot p{
    font-size:0.5rem;
    width:3rem;
    margin-top:-1rem;
    color:#1a1a1a;
  }

  .hot ul li a{
    font-size:0.4rem;
    color:#2A2A2A;
  }
  .cou-list{
    margin-top:0;
  }
  .cou-list ul li{
    width:100%;
    height:5rem;
    padding-top:.5rem;
  }
  .cou-list ul li a{
    font-size:.3rem;
  }
  .cou-list ul li img{
    float:left;
    width:47%;
    height:90%;
  }
</style>
<template>
    <div id="mainview">
      <section class="selects">
        <ul>
          <p>全部地区</p>
          <span class="icon"></span>
        </ul>
        <ul>
          <p>全部项目</p>
          <span class="icon"></span>
        </ul>
      </section>
      <section class="detail">
        <ul class="country">
          <li>全部地区</li>
          <li><span>美国</span>
            <ul class="city">
              <li><a>洛杉矶</a></li>
              <li><a>加州</a></li>
              <li><a>好莱坞</a></li>
            </ul>
          </li>
          <li><span>中国</span>
            <ul class="city">
              <li>洛杉矶</li>
              <li>加州</li>
              <li>好莱坞</li>
            </ul>
          </li>
        </ul>
        <ul class="project">
          <li>全部项目</li>
          <li>移民服务</li>
          <li>留学服务</li>
        </ul>
      </section>
      <section class="hot">
        <p>热门：</p>
        <ul>
          <li><a>美国移民服务</a></li>
          <li><a>美国留学服务</a></li>
        </ul>
      </section>
      <section class="cou-list">
        <ul>
          <li>
            <a>
            <img src="../../../static/img/expert4.jpg"/>
              <h6>Jason</h6>
              <span>美国-投资移民</span>
              <p>10年专业经验，主要从事澳洲地区投资移民</p>
            </a>
          </li>
          <li>
            <a>
              <img src="../../../static/img/expert4.jpg"/>
              <h6>Jason</h6>
              <span>美国-投资移民</span>
              <p>10年专业经验，主要从事澳洲地区投资移民</p>
            </a>
          </li>
          <li>
            <a>
              <img src="../../../static/img/expert4.jpg"/>
              <h6>Jason</h6>
              <span>美国-投资移民</span>
              <p>10年专业经验，主要从事澳洲地区投资移民</p>
            </a>
          </li>
        </ul>
      </section>
    </div>
</template>
<script>
    export default {
      name: 'app',
      data () {
        return {

        }
      },
    }
</script>
