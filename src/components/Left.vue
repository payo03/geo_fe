<template>
    <div id="sidebar-nav" class="sidebar">
        <div class="sidebar-scroll">
            <nav>
                <ul class="nav">
                    <li>
                        <a href="#" class="active">
                            <i class="lnr lnr-home"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>

                    <li>
                        <a href="#" class="">
                            <i class="lnr lnr-chart-bars"></i>
                            <span>Charts</span>
                        </a>
                    </li>

                    <li>
                        <a href="#" class="">
                            <i class="lnr lnr-dice"></i>
                            <span>Tables</span>
                        </a>
                    </li>

                    <li>
                        <a href="/notification" class="">
                            <i class="lnr lnr-alarm"></i>
                            <span>Notifications</span>
                        </a>
                    </li>

                    <li>
                        <a href="#" class="">
                            <i class="lnr lnr-code"></i>
                            <span>Elements</span>
                        </a>
                    </li>

                    <!-- <c:choose>
                        <c:when test="${!empty sessionScope.login}">
                            <li><a href="#subPages" data-toggle="collapse"
                                class="collapsed"><i class="lnr lnr-file-empty"></i> <span>Pages</span>
                                    <i class="icon-submenu lnr lnr-chevron-left"></i></a>
                                <div id="subPages" class="collapse ">
                                    <ul class="nav">
                                        <li><a href="${pageContext.request.contextPath}/profile/refresh"
                                            class="">Profile</a></li>
                                        <li><a
                                            href="${pageContext.request.contextPath}/profile/message/${sessionScope.login.memberNumber}"
                                            class="">Message</a></li>
                                        <li><a href="${pageContext.request.contextPath}/logout"
                                            class="">Logout</a></li>
                                    </ul>
                                </div></li>
                        </c:when>
                    </c:choose> -->
                    <li>
                        <a href="/edit" class="">
                            <i class="lnr lnr-cog"></i>
                            <span>Settings</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    
};
</script>

<style scoped="scoped">
</style>