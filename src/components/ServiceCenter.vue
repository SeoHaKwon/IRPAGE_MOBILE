<template>
  <div class="wrap">
    <div class="header">
      <a href="#" class="btn-link" v-on:click="$router.push('/')"></a>
      <strong>고객센터</strong>
      <a href="#" class="alarm"></a>
    </div>
    <div class="content">
      <ul class="my-section">
        <li>
          <strong class="tit">운영</strong>
        </li>
        <li>
          <p class="desc">공지사항</p>
        </li>
        <li>
          <p class="desc">카카오톡문의</p>
        </li>
      </ul>
      <ul class="my-section">
        <li>
          <strong class="tit">약간 및 정책</strong>
        </li>
        <li>
          <p class="desc">서비스 이용약관</p>
        </li>
        <li>
          <p class="desc">개인정보 처리방침</p>
        </li>
        <li>
          <p class="desc">제 3자 제공동의</p>
        </li>
      </ul>
            <ul class="my-section">
        <li>
          <strong class="tit">개발사 정보</strong>
        </li>
        <li>
          <span class="sub-tit">상호</span>
          <p class="desc">서비스 이용약관</p>
        </li>
        <li>
          <span class="sub-tit">대표</span>
          <p class="desc">이준호, 이종승</p>
        </li>
        <li>
          <span class="sub-tit">주소</span>
          <p class="desc">서울특별시 영등포구 국제금융로8길 2</p>
        </li>
        <li>
          <span class="sub-tit">홈페이지</span>
          <p class="desc">www.irkudos.co.kr</p>
        </li>
        <li>
          <span class="sub-tit">사업자등록번호</span>
          <p class="desc">220-81-76613</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
 .wrap {
   height:100%;
 }
 .header {
   position: relative;;
   padding-top:14px;
   margin-bottom:20px;
   text-align: center;
   .alarm {
    display:inline-block;
     position:absolute;
     right :24px;
     top:17px;
     width:24px;
     height:24px;
     background:url(../assets/btn/btn_alarm.svg) no-repeat center;
   }
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
  .my-section {
    &:last-child {
      li {
        &:last-child {
          border-bottom:none;
        }
      }
    }
    + .my-section {
      margin-top:53px;
    }
    li {
      position:relative;
      display:flex;
      flex-wrap: wrap;
      align-items: center;
      padding:17px 23px;
      + li {
        border-top:1px solid #E5E5EA;
      }
      &:first-child {
        padding-top:0;
      }
      &:last-child {
        border-bottom:4px solid #EFEFF4;
      }
      .tit {
        font-weight: 500;
        font-size: 16px;
        line-height: 23px;
        color: #8E8E93;
      }
      .sub-tit {
        display:inline-block;
        width:100%;
        font-size: 14px;
        line-height: 20px;
        color: #8E8E93;
      }
      .desc {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 23px;
        color: #313439;
        & + span.en {
        position:absolute;
        right:24px;
        top:50%;
        transform: translateY(-50%);
        }
      }
    }
  }
 </style>
