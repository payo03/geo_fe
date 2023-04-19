<template>
<h4 class="heading">Update Profile</h4>
    <!-- Profile Update Form -->
    <div class="awards">
    
    <div class="text-center">
        <a href="${pageContext.request.contextPath}/edit/status">
        <c:choose>
            <c:when
            test="${sessionScope.login.memberonline.memberStatus }">
            <button class="btn label-default">Clocking</button>
            </c:when>
            <c:otherwise>
            <button class="btn label-success">Online</button>
            </c:otherwise>
        </c:choose>
        </a>
    </div>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: 'ProfileRight',
    data() {
        return {

        }
    },
    methods: {
        
    },
    computed: {
        ...mapState('geoMain', ['member'])
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
