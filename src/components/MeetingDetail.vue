<template>
  <div class="wrap">
    <div class="header">
      <a href="#" class="btn-link" v-on:click="$router.push('/')"></a>
      <strong>IR 미팅 내역</strong>
    </div>
    <div class="content">
      <div class="meeting-result">
        <p class="tit on">
          <strong>승인 완료</strong>
        </p>
        <div class="inner">
          <div class="date-box">
            <p class="day en">2</p>
            <span class="month">DEC</span>
          </div>
          <div class="data-info">
            <p>2019년 12월 2일 월요일</p>
            <span>10:00 ~ 11:00 탐방미팅</span>
          </div>
        </div>
      </div>
      <div class="toggle-section" :class="{active : active_el}">
        <p class="toggl-tit">
          신청내용
          <button type="button" @click="onToggle()"></button>
        </p>
        <div class="toggle-cont" >
          <dl class="base">
            <dt class="tit">동행인</dt>
            <dd>
              <div class="name-box">
                <span>박무열</span>
                <span>구자웅</span>
                <span>백경진</span>
              </div>
            </dd>
          </dl>
          <dl class="base">
            <dt class="tit">탐방목적 및 사전질문</dt>
            <dd>LCD 시장 철수로 인한 해외 시장에서의 점유율의 영향과 향후 계획에 대해 궁금하며 사전에 전달 가능한 자료가 있으면 먼저 요청드립니다.</dd>
          </dl>
        </div>
      </div>
      <div class="toggle-section" :class="{active : active_el}">
        <p class="toggl-tit">
          담당자 정보
          <button type="button" @click="onToggle()"></button>
        </p>
        <div class="toggle-cont">
          <div class="manager-info">
            <strong class="name">유연석 차장</strong>
            <span class="pic">
              <img src="../assets/img/img_name01.svg" alt="">
            </span>
            <p class="info">
              <span class="en">010-7127-2460</span>
              <span class="en">homemachine@lgdisplay.co.kr</span>
            </p>
          </div>
          <div class="manager-info">
            <strong class="name">박진주 대리</strong>
            <span class="pic">
              <img src="../assets/img/img_name02.svg" alt="">
            </span>
            <p class="info">
              <span class="en">010-7127-2460</span>
              <span class="en">homemachine@lgdisplay.co.kr</span>
            </p>
          </div>
          <div class="direct">
            <a href="tel:010-3134-7792" class="tel">
              <span>전화걸기</span>
            </a>
            <a href="sms:010-3134-7792" class="sms">
              <span>문의하기</span>
              </a>
          </div>
        </div>
      </div>
      <div class="toggle-section" :class="{active : active_el}">
        <p class="toggl-tit">
          오시는길
          <button type="button" @click="onToggle(3)"></button>
        </p>
        <div class="toggle-cont">
          <div class="address-info">
            <p>서울특별시 영등포구 여의대로 128, LG트윈타워</p>
            <button type="button">주소복사</button>
          </div>
          <dl class="base">
            <dt class="tit">탐방목적 및 사전질문</dt>
          <dd>LCD 시장 철수로 인한 해외 시장에서의 점유율의 영향과 향후 계획에 대해 궁금하며 사전에 전달 가능한 자료가 있으면 먼저 요청드립니다.</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'meetingList'
}
</script>
 <style lang="scss" scoped>
 .wrap {
   display:flex;
   flex-direction: column;
   height:100%;
   .content {
     padding:0 22px;
   }
 }
 .header {
   position: relative;
   padding-top:14px;
   margin-bottom:56px;
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
.meeting-result {
  background: #F2F2F2;
  border-radius: 4px;
  .tit {
    padding:10px 18px;
    background: #E91E63;
    border-radius: 4px;
    strong {
      display:inline-block;
      padding-left:28px;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      display: flex;
      align-items: center;
      letter-spacing: -0.005em;
      text-transform: capitalize;
      color: #FFFFFF;
    }
    $status : (
      on : #E91E63,
      off : #545454,
      result :#E0E0E0,
    );
    &.result {
      strong {
        color:#545454;
      }
      & + .inner {
        background-color:#fff;
      }
    }
    @each $obj , $color in $status {
      &.#{$obj}{
        background-color:$color;
        strong {
          background:url(../assets/bg/bg_meeting_#{$obj}.svg ) no-repeat left center;
        }
      }
    }
  }
  .inner {
    display:flex;
    padding:20px 18px;
  }
  .date-box {
    flex:0 0 auto;
    width:48px;
    height:48px;
    padding:8px 0;
    margin-right:18px;
    background: #FFFFFF;
    border: 1px solid #E5E5EA;
    border-radius: 4px;
    text-align: center;
    .day {
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      text-align: center;
      letter-spacing: -0.4px;
      color: #545454;
    }
    .month {
      font-weight: bold;
      font-size: 9px;
      line-height: 12px;
      text-align: center;
      letter-spacing: 0.2px;
      text-transform: uppercase;
      color: #545454;
    }
  }
  .data-info {
    p {
      margin-bottom:4px;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      align-items: center;
      letter-spacing: -0.005em;
      color: #313439;
    }
    span {
      font-size: 16px;
      line-height: 20px;
      letter-spacing: -0.01em;
      text-transform: capitalize;
      color: #8E8E93;
    }
  }
  & + .toggle-section {
    margin-top:32px;
  }
}
.toggle-section {
  .toggl-tit {
    position:relative;
    padding-bottom:13px;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.005em;
    color: #313439;
    border-bottom:1px solid #E5E5EA;
    button {
      position:absolute;
      right:0;
      top:50%;
      width:24px;
      height:24px;
      transform: translateY(-50%);
      background:url(../assets/arrow/arrow_toggle_down.svg) no-repeat center;
      background-size:cover;
      transition: all .5s;
    }
  }
  .toggle-cont {
    display:none;
    padding:16px 0 30px 0;
    .base {
      dt {
        margin-bottom:10px;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.005em;
        color: #8E8E93;
      }
      dd {
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.5px;
        color: #545454;
      }
       + .base {
         margin-top:32px;
       }
    }
    .manager-info {
      position:relative;
      padding-left:35px;
      .pic {
        position:absolute;
        left:0;
        top:4px;
      }
      .info {
        margin-top:13px;
        span {
          display:inline-block;
          width:100%;
          font-size: 16px;
          line-height: 19px;
          color: #8E8E93;
          +span {
            margin-top:4px;
          }
        }
      }
      .name {
        font-size: 20px;
        line-height: 29px;
        display: flex;
        align-items: center;
        letter-spacing: -0.005em;
        text-transform: capitalize;
        color: #545454;
      }
      + .manager-info {
        margin-top:38px;
      }
    }
    .name-box {
      display:flex;
      span {
        display:inline-block;
        padding:5px 10px;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #545454;
        background: #FFFFFF;
        border: 1px solid #E5E5EA;
        border-radius: 4px;
        & + span {
          margin-left:8px;
        }
      }
    }
    .direct {
      display:flex;
      position:relative;
      width:calc(100% + 16px);
      padding:12px 0;
      left:-8px;
      margin-top:20px;
      background: #F2F2F2;
      border: 1px solid #D1D1D6;
      box-sizing: border-box;
      border-radius: 4px;
      a {
        display:inline-block;
        width:50%;
        text-align: center;
        span {
          display:inline-block;
          padding-left:22px;
          font-size: 16px;
          line-height: 23px;
          letter-spacing: -0.005em;
          color: #313439;
        }
        @each $obj in tel , sms {
          &.#{$obj}{
            span {
              background:url(../assets/bg/bg_#{$obj}.svg) no-repeat left center;
            }
          }
        }
        + a {
          position:relative;
          &::after {
            display:block;
            position:absolute;
            left:0;
            top:50%;
            width:1px;
            height:30px;
            transform: translateY(-50%);
            background-color:#D1D1D6;
            content:"";
          }
        }
      }
    }
    .address-info {
      margin-bottom:32px;
      p {
        font-size: 16px;
        line-height: 23px;
        letter-spacing: -0.005em;
        color: #545454;
      }
      button {
        padding-left:24px;
        margin-top:3px;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.005em;
        color: #4DA1FF;
        background:url(../assets/btn/btn_copy_address.svg) no-repeat left center;
      }
    }
  }
    & + .toggle-section {
    position:relative;
    padding-top:26px;
    &::after {
      display:none;
      position:absolute;
      left:-22px;
      top:0;
      width:calc(100% + 44px);
      height:4px;
      background-color:#E5E5EA;
      content:"";
    }
  }
  &.active {
    & + .toggle-section {
      &::after{
        display:block;
      }
    }
    .toggl-tit {
        button {
          transform: translateY(-50%) rotate(180deg);
        }
      }
    .toggle-cont {
      display:block;
    }
  }
}
 </style>
 <script>
 export default {
  name: 'AskPage',
  data: () => {
    return {
      active_el : false
    }
  },
  methods: {
    onToggle: function() {
      console.log(this);
      const btn = document.querySelector('.toggl-tit');
      const toggle = btn.parentNode;
      toggle.classList.toggle('active');
    }
  }
}
 </script>
