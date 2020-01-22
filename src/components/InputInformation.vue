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
          <li class="">
            <p class="tit">회사명</p>
            <div class="input-wrap select-wrap">
              <input type="text" value="미래">
              <ul class="select-list">
                <li>
                  <a href="#"><span class="point">미래</span>에셋</a>
                </li>
                <li>
                  <a href="#"><span class="point">미래</span>에셋대우</a>
                </li>
                <li>
                  <a href="#"><span class="point">미래</span>에셋자산운용</a>
                </li>
                <li>
                  <a href="#"><span class="point">미래</span>에셋캐피탈</a>
                </li>
                <li>
                  <a href="#"><span class="point">미래</span>에셋벤처투자</a>
                </li>
                <li>
                  <a href="#"><span class="point">미래</span>에셋벤처투자</a>
                </li>
                <li>
                  <a href="#"><span class="point">미래</span>에셋벤처투자</a>
                </li>
              </ul>
            </div>
            <span class="error">미인식</span>
          </li>
           <li class="error">
            <p class="tit">기관 분류</p>
            <div class="input-wrap">
              <input type="text" value="li에 클래스 error 추가해주시면됩니다.">
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
          <li class="">
            <p class="tit">직군</p>
            <div class="select-box">
              <select name="" id="" class="en">
                <option value="" disabled selected>직군선택</option>
                <option value="">Buy Side</option>
                <option value="">Sell Side</option>
                <option value="">Broker</option>
              </select>
              <span class="arrow"></span>
            </div>
            <span class="error">미인식</span>
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
 .content {
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
.card-wrap {
  position:relative;
  padding:0 7px;
  border-bottom:4px solid#EFEFF4;
  img {
    width:100%;
  }
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
      .error {
        display:block;
      }
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
    .select-wrap {
      input{
        &:focus {
          +.select-list {
            display:block;
          }
        }
      }
    }
    .select-list {
      display:none;
      position:absolute;
      left:0;
      top:45px;
      width:100%;
      max-height:190px;
      overflow: auto;
      padding:13px 12px;
      border: 1px solid #C7C7CC;
      box-sizing: border-box;
      border-radius: 4px;
      background-color:#fff;
      z-index: 5;
      li {
        a {
          font-size: 14px;
          line-height: 28px;
          color: #C7C7CC;
          .point {
            color: #313439;
          }
        }
      }
      + li {
        margin-top:7px;
      }
    }
    .select-box {
      position: relative;
      width:100%;
      height:40px;
      box-sizing: border-box;
      select {
        width:100%;
        height:100%;
        border:none;
        padding:0 14px;
        background-color:#fff;
        border: 1px solid #D1D1D6;
        border-radius: 4px;
        box-sizing: border-box;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        &::-ms-expand {
        display: none;
        }
        option{
          width: 100%;
          padding:0;
          border:none;
          box-sizing: border-box;
          font-size: 14px;
          line-height: 16px;
          letter-spacing: -0.005em;
          color: #313439;
          &[value=""][disabled] {
            display: none;
            font-family: Noto Sans KR;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 20px;
            letter-spacing: -0.005em;
            color: #C7C7CC;
          }
        }
        &:focus {
          outline: none;
          border-color:#313439;
          + .arrow {
            border-top-color:#313439;
            border-left-color:#313439;
          }
        }
      }
      .arrow{
        display:block;
        position:absolute;
        right:14px;
        top:17px;
        border:3px solid #8E8E93;
        border-bottom-color:transparent;
        border-right-color:transparent;
        transform: rotate(-135deg);
      }
    }
  }
}
 </style>
