<template>
  <div class="wrap">
    <div class="content">
      <div class="card-wrap">
        <img src="../assets/bg/bg_card.svg" alt="">
        <button type="button">재촬영</button>
      </div>
      <div class="input-section">
        <strong>입력된 정보 확인과 추가 정보를 입력하여<br>
        가입단계를 완료하세요</strong>
        <ul class="input-list">
          <li class="error">
            <p class="tit">회사명</p>
            <div class="input-wrap">
              <input type="text">
            </div>
            <span class="error">미인식</span>
          </li>
           <li class="">
            <p class="tit">기관 분류</p>
            <div class="input-wrap">
              <input type="text">
            </div>
            <span class="error">미인식</span>
          </li>
          <li class="">
            <p class="tit">이메일</p>
            <div class="input-wrap">
              <input type="text" class="en" value="dasdad@naver.com">
            </div>
            <span class="error">미인식</span>
          </li>
        </ul>
      </div>
  </div>
</div>
</template>
<script>
</script>
<style lang="scss" scoped>
 .wrap {
   height:100%;
 }
.content {
  padding-bottom:46px;
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
.card-wrap {
  position:relative;
  padding:0 7px;
  border-bottom:4px solid#EFEFF4;
  button {
    position:absolute;
    left:50%;
    top:17px;
    width:70px;
    padding:3px 0;
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
    text-align: center;
    color: #FFFFFF;
    transform:translateX(-50%);
    background-color:rgba($color: #000000, $alpha: .6);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 100px;
  }
}
.input-section {
  padding:22px 27px 0 27px;
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #313439;
}
.input-list {
  margin-top:17px;
  li {
    position:relative;
    padding-bottom:20px;
    text-align: left;
    .tit {
      margin-bottom:5px;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.005em;
      color: #8E8E93;
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
    }
    .error {
      display:none;
      position:absolute;
      left:0;
      bottom:0;
      font-size: 12px;
      line-height: 17px;
      letter-spacing: -0.005em;
      color: #EB5757;
    }
    & + li {
      margin-top:11px;
    }
    &.error {
      .input-wrap{
        &::after {
          display:block;
        }
      }
      input {
        position: relative;
        border-color:#EB5757;
      }
    }
  }
}
 </style>
