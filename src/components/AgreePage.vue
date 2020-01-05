<template>
  <div class="wrap">
    <div class="header">
      <a href="#" class="btn-link"></a>
      <strong>약관동의</strong>
    </div>
    <div class="content">
    <div class="check-section">
      <div class="all">
        <p class="check-box">
          <input type="checkbox">
          <span>전체동의</span>
          <button class="btn-view">보기</button>
        </p>
      </div>
        <p class="check-box">
          <input type="checkbox">
          <span>(필수) 이용약관</span>
          <button class="btn-view">보기</button>
        </p>
        <p class="check-box">
          <input type="checkbox">
          <span>(필수) 개인정보 수집 및 이용 안내</span>
          <button class="btn-view">보기</button>
        </p>
                <p class="check-box">
          <input type="checkbox">
          <span>(필수) 제 3자 제공동의</span>
          <button class="btn-view">보기</button>
        </p>
        <p class="check-box">
          <input type="checkbox">
          <span>(선택) 제 3자 제공, 처리위탁 동의</span>
          <button class="btn-view">보기</button>
        </p>
                <p class="check-box">
          <input type="checkbox">
          <span>(선택) 마케팅 활용 동의</span>
          <button class="btn-view">보기</button>
        </p>
    </div>
    </div>
    <a href="#" class="btn-bottom active">
      동의하기
    </a>
  </div>
</template>
 <style lang="scss" scoped>
 .wrap {
   height:100%;
   padding-bottom:100px;
   .content {
     padding:0 34px;
   }
 }
 .header {
   position: relative;;
   padding-top:14px;
   margin-bottom:56px;
   text-align: center;
   .btn-link {
     display:inline-block;
     position:absolute;
     left:34px;
     top:22px;
     width:10px;
     height:10px;
     transform: rotate(45deg);
     border:2px solid #000;
     border-top:none;
     border-right:none;
     -webkit-tap-highlight-color:transparent;
   }
   strong {
      font-weight: 500;
      font-size: 18px;
      line-height: 26px;
     }
   }
    .btn-bottom {
      display:block;
      position:absolute;
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
      &.active {
        background-color:#D1D1D6;
      }
    }
    .all {
      padding-bottom:16px;
      margin-bottom:20px;
      border-bottom:1px solid rgba(#313439 , .2);
      span{
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.01em;
        text-transform: uppercase;
        color: #1B1D20;
      }
    }
    .check-box {
      position:relative;
      padding-right:46px;
      .btn-view {
        position: absolute;
        right:0;
        top:50%;
        font-size: 13px;
        line-height: 24px;
        text-align: right;
        letter-spacing: -0.01em;
        text-transform: uppercase;
        color: #8E8E93;
        transform: translateY(-50%);
        background:none;
      }
      input {
        position:absolute;
        left:0;
        top:0;
        width:calc(100% - 47px);
        height:100%;
        opacity: 0;
        &:checked {
          & + span {
            background:url(../assets/btn/btn_check_on.png) no-repeat left center;
          }
        }
      }
      span {
        padding-left:24px;
        background:url(../assets/btn/btn_check.png) no-repeat left center;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.01em;
        text-transform: uppercase;
        color: #545454;
      }
      & +.check-box {
        margin-top:33px;
      }
    }
 </style>
<script>
export default {
  name: 'FirstPage'
}
