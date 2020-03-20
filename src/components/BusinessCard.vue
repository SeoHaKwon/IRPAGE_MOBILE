<template>
  <div class="wrap">
    <div class="content">
      <strong class="title">본인 확인을 위해<br>
  명함 촬영이 필요합니다.</strong>
      <p class="sub">재직 중인 <span>금융기관</span>의 명함을 준비해주세요</p>
  <div class="text-wrap">
    <strong>명함의 정보가 식별 가능하도록<br>
    촬영해 주세요</strong>
    <p>금융기관에 소속된 임직원만 가입할 수 있습니다.</p>
    <p>정확하지 않은 정보이거나 본인의 명함이 아닐 경우<br>서비스 이용에 제한을 받을 수 있습니다.</p>
  </div>
  </div>
  <a href="#" class="btn-bottom active">
    명함 촬영
  </a>
</div>
</template>
<script>
</script>
<style lang="scss" scoped>
 .wrap {
   height:100%;
   overflow: auto;
   padding-bottom:110px;
 }
 .content {
   .title {
     display:inline-block;
     width:100%;
      margin-top:62px;
      margin-bottom:18px;
      font-weight: 500;
      font-size: 21px;
      line-height: 26px;
      text-align: center;
      letter-spacing: -0.5px;
      color: #313439;
   }
   .sub {
      margin-bottom: 48px;
      padding-bottom: 216px;
      font-size: 16px;
      line-height: 26px;
      text-align: center;
      letter-spacing: -0.5px;
      color: #545454;
      background:url(../assets/bg/bg_card.png) no-repeat right bottom;
     span {
       color:#ea5659;
     }
   }
   .text-wrap {
     position: relative;
     padding-left:34px;
    strong {
      display:inline-block;
      margin-bottom:20px;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.5px;
      color: #545454;
    }
    p{
      position:relative;
      padding-left:6px;
      font-size: 12px;
      line-height: 18px;
      letter-spacing: -0.5px;
      color: #8E8E93;
      + p {
        margin-top:10px;
      }
      &::after {
        display:block;
        position:absolute;
        left:0;
        top:0;
        content:"*";
      }
    }
    &::after {
      display:block;
      position:absolute;
      right:0;
      top:6px;
      width:127px;
      height:1px;
      background-color:#545454;
      content:"";
    }
   }
 }
.btn-bottom {
  position: fixed;
  left:0;
  bottom:0;
  width:100%;
  padding:13px 0 53px 0;
  background-color:#0C318B;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: #FFFFFF;
  z-index: 10;
  &.active {
    background-color:#0C318B;
  }
}
 </style>
