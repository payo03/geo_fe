<template>
    <div class="profile-left">
        <!-- PROFILE HEADER -->
        <div class="profile-header">
        <div class="overlay"></div>
        <div class="profile-main">

            <router-link to="/">
                <img class="img-circle" width="75" height="75" :src="require('@/assets/images/' + this.pMember.memberImage + '.png')">
            </router-link>
            <!-- Use mustache syntax to display data -->
            <h3 class="name">{{ this.pMember.memberName }}</h3>
            <div v-if="this.pMember.memberStatus != 0">
                <a href="#" class="notification-item" @click="pUpdateStatus">
                    <span class="dot bg-success"></span>Online
                </a>
            </div>
            <div v-else>
                <a href="#" class="notification-item" @click="pUpdateStatus">
                    <span class="dot bg-warning"></span>Clocking
                </a>
            </div>
        </div>
        </div>
        <!-- END PROFILE HEADER -->
        <!-- PROFILE DETAIL -->
        <div class="profile-detail">
        <div class="profile-info">
            <h4 class="heading">Basic Info</h4>
            <ul class="list-unstyled list-justify">
            <li>Registration Date 
                <span> 
                    {{ this.pMember.memberRegistrationDate.substring(0, 10) }}
                </span>
            </li>

            <li>Email <span>{{ this.pMember.memberId }} <a href="${pageContext.request.contextPath }/edit/updateId">
                <i class="lnr lnr-pencil"></i></a></span>
            </li>

            <li>Mobile <span>{{ this.pMember.memberPhoneNumber }} <a href="${pageContext.request.contextPath }/edit/updatePhoneNumber">
                <i class="lnr lnr-pencil"></i></a></span>
            </li>

            <li>Website <span><a :href="this.pMember.memberWebsite">{{ this.pMember.memberWebsite }}</a>
                <a href="`${pageContext.request.contextPath}/edit/updateWebsite`"><i class="lnr lnr-pencil"></i></a></span>
            </li>
            </ul>
        </div>

        <div class="profile-info">
            <h4 class="heading">Social</h4>
            <ul class="list-inline social-icons">
            <li><a href="https://www.facebook.com/profile.php?id=100034820436628" class="facebook-bg"><i class="fa fa-facebook"></i></a></li>
            <li><a href="https://github.com/payo03" class="github-bg"><i class="fa fa-github"></i></a></li>
            </ul>
        </div>
        </div>
        <!-- END PROFILE DETAIL -->
    </div>       
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: 'ProfileBase',
    data() {
        return {
            pMember: JSON.parse(localStorage.getItem('member'))
        }
    },
    mounted() {
        if(localStorage.getItem('member')) {
            this.pMember = JSON.parse(localStorage.getItem('member'))
        }
    },
    methods: {
        ...mapActions('geoMain', ['updateStatus']),
        async pUpdateStatus() {
            
            switch(this.pMember.memberStatus) {
                case 0:
                    this.pMember.memberStatus = 1;
                    break;
                case 1:
                    this.pMember.memberStatus = 0;
                    break;
            }
            this.pMember = await this.updateStatus(this.pMember);
        }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
