<template>
  <div class="wrap">
    <div class="header">
      <a href="#" class="btn-link" v-on:click="$router.push('/')"></a>
      <strong>로그인</strong>
    </div>
    <div class="content">
      <div class="input-section">
        <ul class="input-list">
          <li class="">
            <p class="tit">핸드폰</p>
            <div class="input-wrap select-wrap">
              <input type="text" placeholder="핸드폰번호를 입력해주세요.">
            </div>
          </li>
          <li class="">
            <p class="tit">이름</p>
            <div class="input-wrap select-wrap">
              <input type="text" placeholder="이름을 입력해주세요.">
            </div>
          </li>
        </ul>
      </div>
  </div>
  <a href="#" class="btn-bottom active">
    다음
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
 .header {
   position: relative;
   padding-top:14px;
   margin-bottom:30px;
   text-align: center;
   .btn-link {
     display:inline-block;
     position:absolute;
     left:24px;
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
.input-section {
  padding:22px 22px 0 22px;
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #313439;
}
.input-list {
  margin-top:17px;
  >li {
    position:relative;
    text-align: left;
    .tit {
      margin-bottom:12px;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: -0.005em;
      color: #1B1D20;
    }
    .input-wrap {
      position:relative;
      &::after {
        display:none;
        position: absolute;
        right:12px;
        top:50%;
        width:16px;
        height:16px;
        transform:translateY(-50%);
        content:"";
        background:url(../assets/bg/bg_alert-circle.svg) no-repeat center;
        background-size:cover;
      }
    }
    input {
      width:100%;
      height:40px;
      padding:0 14px;
      border: 1px solid #D1D1D6;
      border-radius: 4px;
      font-size: 14px;
      line-height: 16px;
      color: #545454;
      box-sizing: border-box;
      -webkit-appearance: none;
      &::placeholder{
        color: #8E8E93;
      }
    }
    & + li {
      margin-top:41px;
    }
  }
}
 </style>
