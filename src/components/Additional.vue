<template>
  <div class="wrap">
    <div class="header">
      <a href="#" class="btn-link"></a>
      <strong>문의하기</strong>
    </div>
    <div class="content">
      <div class="input-set">
        <strong class="tit">이메일</strong>
        <input type="text" class="input" value="dsad@naver.com">
      </div>
      <div class="input-set">
        <strong class="tit">LG디스플레이 주식보유 여부</strong>
        <div class="check-group">
          <div class="radio-box">
            <input type="radio" name="ch1">
            <span>보유</span>
          </div>
          <div class="radio-box">
            <input type="radio" name="ch1">
            <span>미보유</span>
          </div>
          <div class="radio-box">
            <input type="radio" name="ch1">
            <span>과거보유</span>
          </div>
        </div>
      </div>
    <a href="#" class="btn-bottom active">
      시작하기
    </a>
  </div>
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
  .input-set {
    .tit {
      display: inline-block;
      width:100%;
      margin-bottom:15px;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: -0.005em;
      color: #1B1D20;
    }
    .input {
      width:100%;
      outline: none;
      padding-bottom:9px;
      font-size: 16px;
      line-height: 20px;
      color: #8E8E93;
      border:none;
      border-bottom: 0.5px solid #D1D1D6;
    }
    & + .input-set  {
      margin-top:38px;
    }
    .check-group {
      display: flex;
      border: 1px solid #C7C7CC;
      box-sizing: border-box;
      border-radius: 2px;
      .radio-box {
        position: relative;
        width:33.33%;
        input {
          position: absolute;
          left:0;
          top:0;
          width:100%;
          height:100%;
          opacity: 0;
          &:checked {
            & + span {
              background-color:#8E8E93;
              color:#fff;
            }
          }
        }
        span {
          display:inline-block;
          width:100%;
          padding:14px 0;
          font-size: 14px;
          line-height: 20px;
          text-align: center;
          color: #8E8E93;
        }
        & +  .radio-box {
          border-left:1px solid #C7C7CC;
        }
      }
    }
  }
 </style>
<script>
export default {
  name: 'AskPage'
}
</script>
