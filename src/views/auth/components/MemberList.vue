<template v-for="(member, index) in this.pMemberList">
  <table class="table project-table">
    <thead>
        <tr>
            <th width="25%">profile</th>
            <th width="40%">address</th>
            <th width="15%">message</th>
            <th width="20%">online</th>
        </tr>
    </thead>
    <tbody>
      <template v-for="(member, index) in this.pMemberList" :key="index">
        <tr v-if="member.memberNumber != this.pfMember.memberNumber">
          <td>
            <img class="avatar img-circle" :src="require('@/assets/images/' + member.memberImage + '.png')"> {{ member.memberName }}
          </td>
          <td>{{ member.memberId }}</td>
          <td>
            <!-- <a :href="`${$pageContext.request.contextPath}/profile/messageForm/${member.memberNumber}`"> -->
              <button type="submit" class="btn btn-default">
                <i class="fa fa-plus-square"></i> SEND
              </button>
            <!-- </a> -->
          </td>
          <td>
            <!-- Use v-if directive to check if member is online -->
            <div v-if="member.memberStatus != 0">
              <a href="#" class="notification-item">
                <span class="dot bg-success"></span>Online
              </a>
            </div>
            <!-- Use v-else directive to show member is offline -->
            <div v-else>
              <a class="notification-item">
                <span class="dot bg-warning"></span>Offline
              </a>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name:'MemberList',
  data() {
    return {
     pfMember: JSON.parse(localStorage.getItem('member')),
     pMemberList: [],
    }
  },
  created() {
    var result = this.memberList();
    result.then((value) => {
      this.pMemberList = value;
    })
  },
  methods: {
    ...mapActions('geoMain', ['memberList']),
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>