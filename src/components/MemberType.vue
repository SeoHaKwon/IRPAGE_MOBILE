<template>
  <div class="wrap">
    <div class="content">
      <a href="#" class="btn-bottom active">
        다음
      </a>
      <p class="member-title">
        회원 유형을 선택해주세요.
      </p>
      <div class="meber-type">
        <div class="check-type single">
          <input type="radio" name="member">
          <span></span>
        </div>
        <strong>개인투자자</strong>
      </div>
      <div class="meber-type active"> <!--클래스 active 추가해주시면됩니다.-->
        <div class="check-type agency">
          <input type="radio" name="member">
          <span></span>
        </div>
        <strong>기관투자자</strong>
        <p class="txt">* 본인 확인을 위해 명함을 준비해 주세요 (클래스 active)</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrap {
  height: 100%;
  padding-bottom: 100px;
  overflow: auto;
  .content {
    padding: 0 22px;
  }
}
.btn-bottom {
  display: block;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 13px 0 53px 0;
  background-color: #e91e63;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: #ffffff;
  z-index: 10;
  &.active {
    background-color: #d1d1d6;
  }
}
.member-title {
  margin:62px 0;
  font-weight: 500;
  font-size: 21px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.5px;
  color: #313439;
}
.meber-type {
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.5px;
  color: #545454;
  .check-type {
    max-width:144px;
    @each $obj in single , agency{
      &.#{$obj}{
        span {
          width:100px;
          height:100px;
          background:url(../assets/btn/btn_member_#{$obj}.png) no-repeat center bottom;
        }
        input:checked {
          + span {
            width:144px;
            height:144px;
            background:url(../assets/btn/btn_member_#{$obj}_on.png) no-repeat center bottom;
          }
        }
      }
    }
    position:relative;
    margin:0 auto 10px auto;
    input {
      position:absolute;
      left:0;
      top:0;
      width:100%;
      height:100%;
      opacity: 0;
      -webkit-tap-highlight-color: transparent;
    }
    span {
      display:inline-block;
      width:100%;
      height:100%;
    }
  }
  .txt {
      display:none;
      text-align: center;
      font-size: 12px;
      line-height: 26px;
      text-align: center;
      letter-spacing: -0.5px;
      color: #EB5757;
    }
  &.active {
    .txt {
      display:block;
    }
  }
  & + .meber-type {
    margin-top:70px;
  }
}
</style>
<script>
export default {
  name: 'MemberType'
}
</script>
