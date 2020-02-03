<template>
  <div class="wrap">
    <div class="header">
      <a href="#" class="btn-link" v-on:click="$router.push('/')"></a>
      <strong>알림</strong>
    </div>
    <div class="content">
      <div class="alarm-section">
        <p class="tit">1.15 수 오늘</p>
        <ul class="list">
          <li class="ask">
            <div class="info">
              <span class="type">문의답변</span>
              <span class="ago">방금 전</span>
            </div>
            <p class="txt">
              문의 주신 질문에 IR담당자가 답변을 남겼습니다.
            </p>
          </li>
          <li class="meeting">
            <div class="info">
              <span class="type">문의답변</span>
              <span class="ago">1시간 전</span>
            </div>
            <p class="txt">
              IR담당자가 신청하신 일정을 승인하였습니다.
            </p>
          </li>
          <li class="ir">
            <div class="info">
              <span class="type">문의답변</span>
              <span class="ago">2시간 전</span>
            </div>
            <p class="txt">
              LG디스플레이의 새로운 IR News가 게시 되었습니다.
            </p>
          </li>
        </ul>
      </div>
      <div class="alarm-section">
        <p class="tit">1.14 화</p>
        <ul class="list">
          <li class="ask">
            <div class="info">
              <span class="type">문의답변</span>
              <span class="ago">방금 전</span>
            </div>
            <p class="txt">
              문의 주신 질문에 IR담당자가 답변을 남겼습니다.
            </p>
          </li>
          <li class="meeting">
            <div class="info">
              <span class="type">문의답변</span>
              <span class="ago">1시간 전</span>
            </div>
            <p class="txt">
              IR담당자가 신청하신 일정을 승인하였습니다.
            </p>
          </li>
          <li class="ir">
            <div class="info">
              <span class="type">문의답변</span>
              <span class="ago">2시간 전</span>
            </div>
            <p class="txt">
              LG디스플레이의 새로운 IR News가 게시 되었습니다.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AlarmList'
}
</script>
 <style lang="scss" scoped>
 .wrap {
   display:flex;
   flex-direction: column;
   height:100%;
   .content {
     padding:0 24px;
   padding-bottom:74px;
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
.alarm-section {
 .tit {
    margin-bottom:20px;
    font-size: 14px;
    line-height: 20px;
    color: #313439;
 }
 .list {
   li {
     padding:0 0 23px 63px;
     margin-bottom:18px;
     border-bottom:1px solid #E5E5EA;
     @each $obj in ask , meeting , ir {
       &.#{$obj}{
         background:url(../assets/bg/bg_alarm_#{$obj}.png) no-repeat left top;
       }
     }
     &:last-child {
       margin-bottom:0;
       border:none;
     }
   }
   .info {
     display:flex;
     align-items: center;
     margin-bottom:3px;
     .type {
       margin-right:auto;
        font-size: 12px;
        line-height: 17px;
        letter-spacing: -0.5px;
        color: #E91E63;
     }
     .ago {
        font-size: 12px;
        line-height: 17px;
        text-align: right;
        letter-spacing: -0.5px;
        color: #8E8E93;
     }
   }
   .txt {
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.5px;
      color: #545454;
   }
 }
 & + .alarm-section {
   margin-top:50px;
 }
}
 </style>
