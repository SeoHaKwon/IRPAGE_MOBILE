<template>
    <div class="link-list">
      <router-link to="/AlarmList">알림내역</router-link>
      <router-link to="/AskDetail">문의내역 상세보기</router-link>
      <router-link to="/AskPageHistory">문의내역</router-link>
      <router-link to="/EmailEdit">이메일 변경</router-link>
      <router-link to="/InputInformation">정보입력</router-link>
      <router-link to="/MainMenu">메인메뉴버튼</router-link>
      <router-link to="/MeetingApply">미팅신청</router-link>
      <router-link to="/MeetingList">미팅리스트</router-link>
      <router-link to="/MeetingCancel">미팅 거절</router-link>
      <router-link to="/MeetingCancel2">미팅 취소</router-link>
      <router-link to="/MeetingDetail">미팅 상세</router-link>
      <router-link to="/MeetingWait">미팅 대기중</router-link>
      <router-link to="/MeetingWaitPop2">미팅 대기중 팝업</router-link>
      <router-link to="/MeetingWaitPop">미팅 대기중 컨펌팝업</router-link>
      <router-link to="/MeetingEdit">미팅 일정변경</router-link>
      <router-link to="/MeetingError">미팅 신청에러</router-link>
      <router-link to="/MeetingApplyStep2">미팅신청2</router-link>
      <router-link to="/MeetingApplyPop">미팅완료팝업</router-link>
      <router-link to="/MemberType">회원유형 선택</router-link>
      <router-link to="/Mypage">마이페이지</router-link>
      <router-link to="/Slider">슬라이드</router-link>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  }
}
</script>
<style lang="scss" scoped>
  .link-list {
    display:flex;
    flex-direction: column;
    height:100%;
    align-items: center;
    justify-content: center;
    color:#000;
    a {
      font-size:20px;
      line-height:22px;
      & + a{
        margin-top:20px;
      }
    }
  }
</style>
