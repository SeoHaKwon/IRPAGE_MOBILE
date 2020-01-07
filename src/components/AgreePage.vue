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
          <button class="btn-view" v-on:click="popOpen">보기</button>
        </p>
      </div>
        <p class="check-box">
          <input type="checkbox">
          <span>(필수) 이용약관</span>
          <button class="btn-view" v-on:click="popOpen">보기</button>
        </p>
        <p class="check-box">
          <input type="checkbox">
          <span>(필수) 개인정보 수집 및 이용 안내</span>
          <button class="btn-view" v-on:click="popOpen">보기</button>
        </p>
                <p class="check-box">
          <input type="checkbox">
          <span>(필수) 제 3자 제공동의</span>
          <button class="btn-view" v-on:click="popOpen">보기</button>
        </p>
        <p class="check-box">
          <input type="checkbox">
          <span>(선택) 제 3자 제공, 처리위탁 동의</span>
          <button class="btn-view" v-on:click="popOpen">보기</button>
        </p>
                <p class="check-box">
          <input type="checkbox">
          <span>(선택) 마케팅 활용 동의</span>
          <button class="btn-view" v-on:click="popOpen">보기</button>
        </p>
    </div>
    </div>
    <a href="#" class="btn-bottom active">
      동의하기
    </a>
    <div class="pop" v-bind:class="{ active: IsPop }"> <!--active 클래스 추가시 활성화됩니다.-->
      <div class="pop-cont">
        <div class="pop-header">
          <strong>서비스 이용약관</strong>
          <button type="button" class="pop-close" v-on:click="popClose"></button>
        </div>
        <div class="pop-inner">
          <h2 class="title">서비스 이용약관</h2>
          <p class="tit">제 1장 총칙</p>
          <div class="desc">
            <strong class="num">제1조(목적)</strong>
            <p>
              1. 이 약관은 전기통신사업법 및 동법 시행령에 의하여 VIC Labs(이하”회사”라 합니다.)가 제공하는 IRGO(이하 "서비스"라 합니다)의 이용조건 및 절차에 관한 사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
            </p>
            <p>
              2. 이 약관의 적용대상은 “회사” 회원 여부에 무관하게 서비스(https://www.irgo.co.kr 또는 https://m.irgo.co.kr)를 이용하고자 하는 모든 이용자가 그 대상입니다.
            </p>
            <strong class="num">제2조(약관의 효력 및 개정공지)</strong>
            <p>1. 이 약관은 서비스 홈페이지에 게시함으로써 효력이 발생합니다.</p>
            <p>2. 이 약관을 개정할 경우 서비스 홈페이지에 공지하는 방법으로 약관 개정에 대한 홍보를 갈음할 수 있습니다.</p>
            <p>3. 개정된 약관은 개정 이전에 가입한 회원에게도 적용됩니다.</p>
            <p>스크롤테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글테스트글</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FirstPage',
  data: () => {
    return {
      IsPop: true
    }
  },
  methods: {
    popClose () {
      const _self = this
      _self.IsPop = false
    },
    popOpen () {
      const _self = this
      _self.IsPop = true
    }
  }
}
</script>
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
  .pop {
    display:none;
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    padding-top:88px;
    background-color:rgba($color: #191919, $alpha: .7);
    .pop-cont {
      height:100%;
      padding:0 16px;
      overflow: auto;
      background: #FFFFFF;
      box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.25);
      border-radius: 6px 6px 0px 0px;
    }
    .pop-header {
      position:relative;
      padding:9px 0;
      margin-bottom:24px;
      text-align: center;
      border-bottom:1px solid rgba($color: #313439, $alpha: .2);
      strong {
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        text-align: center;
        letter-spacing: -0.5px;
        color: #1B1D20;
      }
      .pop-close {
        position:absolute;
        right:0;
        top:50%;
        width:24px;
        height:24px;
        transform: translateY(-50%);
        background:url(../assets/btn/btn_close.svg) no-repeat center;
      }
    }
    .pop-inner {
      .title {
        font-weight: bold;
        margin-bottom:22px;
        font-size: 24px;
        line-height: 26px;
        text-align: center;
        letter-spacing: -0.5px;
        color: #1B1D20;
      }
      .tit {
        margin-bottom:24px;
        text-align: center;
        font-size: 21px;
        line-height: 26px;
        text-align: center;
        letter-spacing: -0.5px;
        color: #1B1D20;
      }
    }
    .desc {
      .num {
        display: inline-block;
        margin-bottom:4px;
        font-weight: 500;
        font-size: 14px;
        line-height: 26px;
        letter-spacing: -0.5px;
        color: #1B1D20;
      }
      p {
        font-size: 12px;
        line-height: 18px;
        letter-spacing: -0.5px;
        color: #545454;
        & + p {
          margin-top:10px;
        }
        & + .num {
          margin-top:18px;
        }
      }
    }
    &.active {
      display:block;
    }
  }
 </style>
