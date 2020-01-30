<template>
  <div class="wrap swiper-wrap ">
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
    <a href="#" class="btn-bottom">
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
          clickable: true
        }
      }
    }
  }
}
</script>
<style lang="scss">
.swiper-wrap {
  .swiper-container {
    height:100%;
    .swiper-pagination {
      left:0;
      top:0;
      bottom:auto;
      span {
        background-color:#E5E5EA;
        opacity: 1;
        &.swiper-pagination-bullet-active {
          background-color:#E91E63;
        }
      }
    }
  }
  .swiper-slide {
    position:relative;
    padding-top:20px;
    text-align: center;
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
      margin-bottom:36px;
      font-size: 14px;
      line-height: 22px;
      letter-spacing: -0.5px;
      color: #545454;
    }
  }
}
</style>
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

</style>
