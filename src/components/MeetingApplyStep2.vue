<template>
  <div class="wrap">
    <div class="header">
      <a href="#" class="btn-link" v-on:click="$router.push('/')"></a>
      <strong>IR 미팅 신청하기</strong>
    </div>
    <div class="content">
      <div class="top-section">
        <div class="text-wrap">
          <span class="select-date">선택한 일정</span>
          <strong class="tit">2019년 12월 12일 목요일</strong>
          <p class="sub">
            <span class="">16:00 ~ 17:00</span>
            <span>탐방미팅</span>
          </p>
        </div>
      </div>
      <div class="invite-section">
        <div class="invite-form">
          <strong class="tit">동행인 초대</strong>
          <input type="text" placeholder="동행인의 정보를 입력하세요">
          <button type="button"></button>
        </div>
      </div>
      <div class="user-info">
        <strong class="tit">동행인 1 정보</strong>
        <input type="text" placeholder="이름">
        <input type="text" placeholder="회사명">
        <input type="text" placeholder="핸드폰 번호">
      </div>
      <div class="user-info">
        <strong class="tit">동행인 2 정보</strong>
        <input type="text" placeholder="이름">
        <input type="text" placeholder="회사명">
        <input type="text" placeholder="핸드폰 번호">
      </div>
      <div class="text-wrap">
        <strong class="tit">탐방목적 및 사전질문</strong>
        <div class="textarea">
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <p class="noti">내용을 입력해주세요.<br>
            <span>(작성글은 300자 내로 제한됩니다.)</span>
          </p>
        </div>
      </div>
    </div>
    <a href="#" class="btn-bottom active">
      신청하기
    </a>
  </div>
</template>
<script>
export default {
  name: 'meetingApply'
}
</script>
 <style lang="scss" scoped>
 .wrap {
   display:flex;
   flex-direction: column;
   height:100%;
   padding-bottom:100px;
   padding-top:55px;
   overflow: auto;
   .content {
     position: relative;
     padding:108px 22px 0 22px;
   }
 }
 .header {
   position: fixed;
   left:0;
   top:0;
   width:100%;
   padding:14px 0;
   text-align: center;
   background-color: #fff;
   z-index: 50;
   border-bottom: 1px solid #E5E5EA;
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
.top-section {
  position:absolute;
  left:0;
  top:0;
  width:100%;
  padding:17px 16px;
  background: #F2F2F2;
  .text-wrap {
    position: relative;
    padding-left:90px;
    .select-date {
      position: absolute;
      left:0;
      top:0;
      font-size: 12px;
      line-height: 26px;
      letter-spacing: -0.5px;
      color: #313439;
    }
    .tit {
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: -0.5px;
      color: #313439;
    }
    .sub {
      margin-top:5px;
      span {
        font-size: 14px;
        line-height: 16px;
        color: #313439;
        & + span {
          margin-left:9px;
        }
      }
    }
  }
}
.invite-section {
  padding-bottom:10px;
  border-bottom:1px solid #E5E5EA;
  .invite-form {
    display:flex;
    position: relative;
    flex-direction: column;
    padding-right:50px;
    input {
      height:22px;
      font-size: 12px;
      line-height: 17px;
      color: #545454;
      border:none;
      &::placeholder{
        font-family: 'Noto Sans KR', sans-serif;
        color: #8E8E93;
      }
    }
  .tit {
    font-size: 16px;
    line-height: 26px;
    letter-spacing: -0.5px;
    color: #313439;
    }
    button {
      position: absolute;
      right:0;
      bottom:0;
      width:40px;
      height:40px;
      background:url(../assets/btn/btn_invite.svg) no-repeat center;
    }
  }
}
.user-info {
  display:flex;
  flex-direction: column;
  margin-top:26px;
  .tit {
    margin-bottom:10px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.005em;
    color: #545454;
  }
  input {
    height:40px;
    padding:0 10px;
    border: 1px solid #D1D1D6;
    border-radius: 4px;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.005em;
    color: #545454;
    -webkit-appearance: none;
    -webkit-border-radius: 0;
    &::placeholder{
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.005em;
      color: #8E8E93;
    }
    & + input {
      margin-top:8px;
    }
  }
  + .user-info {
    margin-top:26px;
  }
  & + .text-wrap  {
    margin-top:27px;
  }
}
.text-wrap {
  .tit {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.005em;
    color: #1B1D20;
  }
  .textarea {
    position: relative;
    margin-top:10px;
    padding:18px 17px;
    background: #FFFFFF;
    border: 1px solid #D1D1D6;
    box-sizing: border-box;
    border-radius: 4px;
    textarea {
      width:100%;
      height:100%;
      box-sizing: border-box;
      border:none;
      outline: none;
      resize:none;
    }
    .noti {
      position:absolute;
      left:17px;
      top:18px;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.5px;
      color: #8E8E93;
      span {
        display:inline-block;
        margin-top:4px;
        font-size: 12px;
        line-height: 18px;
        letter-spacing: -0.5px;
        color: #8E8E93;
      }
    }
  }
}
 </style>
