<template>
    <div class="profile-left">
        <!-- PROFILE HEADER -->
        <div class="profile-header">
        <div class="overlay"></div>
        <div class="profile-main">

            <router-link to="/">
                <img class="img-circle" width="75" height="75" :src="require('@/assets/images/' + this.memberImage + '.png')" v-if="memberImage != null">
            </router-link>
            <!-- Use mustache syntax to display data -->
            <h3 class="name">{{ this.memberName }}</h3>
            <div v-if="this.memberStatus == 0">
            <a href="#" class="notification-item">
                <span class="dot bg-success"></span>Online
            </a>
            </div>
            <div v-else>
            <a href="#" class="notification-item">
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
                    <!-- <fmt:formatDate value="${sessionScope.login.memberRegisterDate}" pattern="yyyy-MM-dd" /> -->
                </span>
            </li>

            <li>Email <span>{{ this.memberId }} <a href="${pageContext.request.contextPath }/edit/updateId">
                <i class="lnr lnr-pencil"></i></a></span>
            </li>

            <li>Mobile <span>{{ this.memberPhoneNumber }} <a href="${pageContext.request.contextPath }/edit/updatePhoneNumber">
                <i class="lnr lnr-pencil"></i></a></span>
            </li>

            <li>Website <span><a :href="this.memberWebsite">{{ this.memberWebsite }}</a>
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
import { mapState } from "vuex";

export default {
    name: 'ProfileBase',
    props: ['pfMember'],
    data() {
        return {
            memberStatus: 0,
            memberImage: this.pfMember.memberImage,
            memberName: this.pfMember.memberName,
            memberId: this.pfMember.memberId,
            memberPhoneNumber: this.pfMember.memberPhoneNumber,
            memberWebsite: this.pfMember.memberWebsite,
            memberRegisterDate: this.pfMember.memberRegisterDate,
        }
    },
    methods: {
        
    },
    computed: {
        ...mapState('geoMain', ['member'])
    },
    created() {
        console.log(this.pfMember)
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
