<template>
  <div class="wrap">
    <div class="header">
      <a href="#" class="btn-link"></a>
      <strong>이메일 변경</strong>
    </div>
    <div class="content">
      <dl class="now-email">
        <dt>현재 등록된 이메일 주소</dt>
        <dd>mooyeoulpark@miraeasset.co.kr</dd>
      </dl>
      <div class="email-edit">
        <strong>
          변경을 원하시는<br>
          이메일 주소를 입력하세요
        </strong>
        <input type="text">
        <button type="button">변경</button>
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
.now-email {
  position:relative;
  padding-bottom:20px;
  margin-bottom:28px;
  &::after {
    display:block;
    position:absolute;
    left:-24px;
    bottom:0;
    width:calc(100% + 48px);
    height:1px;
    content:"";
    background-color:#E5E5EA;
  }
  dt {
    font-size: 14px;
    line-height: 26px;
    letter-spacing: -0.5px;
    color: #313439;
  }
  dd {
    font-size: 16px;
    line-height: 23px;
    color: #8E8E93;
  }
}
.email-edit {
  display:flex;
  flex-direction: column;
  strong {
    font-weight: 500;
    font-size: 21px;
    line-height: 26px;
    letter-spacing: -0.5px;
    color: #313439;
  }
  input {
    margin-top:12px;
    height:40px;
    padding:0 10px;
    background: #FFFFFF;
    border: 1px solid #D1D1D6;
    box-sizing: border-box;
    border-radius: 4px;
    font-size:14px;
    color:#313439;
  }
  button {
    height:40px;
    margin-top:10px;
    background: #D1D1D6;
    border-radius: 4px;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    color: #FFFFFF;

  }
}
 </style>
