<template>
  <div class="wrap">
    <swiper :options="swiperOption">
      <swiper-slide>
        <strong class="tit">IR정보 받아보기</strong>
        <p class="sub">LG디스플레이의 IR정보, 뉴스 등을<br>
        알림을 통해 빠르게 받아 볼 수 있습니다.</p>
        <div class="slide-img">
          <img src="../assets/img/img_slide01.svg" alt="">
        </div>
      </swiper-slide>
      <swiper-slide>
        <strong class="tit">문의하기</strong>
        <p class="sub">IR담당자에게 회사에 대해 궁금한 내용을<br>
문의하고 답변을 받아 볼 수 있습니다.</p>
        <div class="slide-img">
          <img src="../assets/img/img_slide02.svg" alt="">
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination">
      </div>
    </swiper>
    <a href="#" class="btn-bottom active">
      시작하기
    </a>
</div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="dot swiper-pagination-bullet">${index}</span>`
          }
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
 .wrap {
   height:100%;
   overflow: auto;
   padding-top:76px;
   padding-bottom:136px;
 }
 .btn-bottom {
  position: fixed;
  left:0;
  bottom:0;
  width:100%;
  padding:13px 0 53px 0;
  background-color:#E91E63;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: #FFFFFF;
  z-index: 10;
  &.active {
    background-color:#D1D1D6;
  }
}
.swiper-container {
  padding-top:20px;
  height:100%;
}
.wrap .swiper-pagination {
  left:0;
  top:0;
  bottom:auto;
  .swiper-pagination-bullet {
    width:8px;
    height:8px;
  }
}
.swiper-slide {
  text-align: center;
  .slide-img {
    padding-left:33px;
  }
  .tit {
    display:inline-block;
    margin-bottom:8px;
    font-weight: 500;
    font-size: 26px;
    line-height: 34px;
    text-align: center;
    letter-spacing: -0.5px;
    color: #E91E63;
  }
  .sub {
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.5px;
    color: #545454;
  }
}

</style>
