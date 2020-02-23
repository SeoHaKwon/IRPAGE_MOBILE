<template>
    <div class="wrap">
    <h1 class="logo">
      <img src="../assets/logo/logo.png" alt="">
    </h1>
    <strong class="tit">
      LG디스플레이 IR앱에서 <br>
      투자정보/소식을 받아보고, <br>
      IR담당자와<br>소통할 수 있습니다.
    </strong>
    <p class="sub">투자자님의 정보확인을 위해 본인인증을 진행합니다. </p>
    <a href="#" class="btn-bottom">
      인증하기
    </a>
    <span class="member">이미 회원이신가요?</span>
  </div>
</template>
  <style lang="scss" scoped>
    .wrap {
      display:flex;
      flex-direction: column;
      height:100%;
      padding:22px 34px 100px 22px;
    }
    .logo {
      margin-bottom:40px;
    }
    .tit {
      font-weight: 500;
      font-size: 24px;
      line-height: 34px;
      letter-spacing: -0.5px;
      color: #1B1D20;
    }
    .sub {
      margin-top:30px;
      font-size: 13px;
      line-height: 20px;
      letter-spacing: -0.5px;
      color: #8E8E93;
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
    }
    .member {
      margin-top:auto;
      margin-bottom:30px;
      font-size: 16px;
      line-height: 20px;
      text-align: center;
      letter-spacing: -0.5px;
      color: #8E8E93;
    }
 </style>
