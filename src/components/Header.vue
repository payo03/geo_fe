<template>
	<header>
		<nav class="navbar navbar-default navbar-fixed-top">
			<div class="brand">
				<router-link to="/"><img src="../assets/images/logo-dark.png" class="img-responsive logo"></router-link>
			</div>
			<div class="container-fluid">
				<div class="navbar-btn">
					<button type="button" @click="showSidebar" class="btn-toggle-fullwidth">
						<i :class="[ clickSidebar ? 'lnr lnr-arrow-left-circle' : 'lnr lnr-arrow-right-circle']"></i>
					</button>
				</div>

				<form @submit.prevent="searchDashboard" class="navbar-form navbar-left">
					<div class="input-group">
						<input type="text" v-model="searchDashboardValue" class="form-control" placeholder="Search dashboard..."> 
						<span class="input-group-btn">
							<button type="submit" class="btn btn-primary">Go</button>
						</span>
					</div>
				</form>

				<div id="navbar-menu">
					<ul class="nav navbar-nav navbar-right">
						<!-- <c:choose>
							<c:when test="${!empty sessionScope.login}">
								<li class="dropdown"><a href="#"
									class="dropdown-toggle icon-menu" data-toggle="dropdown"> <i
										class="lnr lnr-alarm"></i> <span class="badge bg-danger"><c:if
												test="${!empty sessionScope.messageLength}">${sessionScope.messageLength }</c:if></span></a>
									<ul class="dropdown-menu notifications">
										<c:forEach var="messagecommand"
											items="${sessionScope.messagecommands }" varStatus="status">
											<c:if test="${!messagecommand.read }">
												<li><a
													href="profile/messageDetail/${messagecommand.messageNumber}"
													class="notification-item"><span class="dot bg-danger"></span>${messagecommand.title }</a></li>
											</c:if>
										</c:forEach>
										<li><a
											href="profile/message/${sessionScope.login.memberNumber}"
											class="more">See all message</a></li>
									</ul></li>
							</c:when>
						</c:choose> -->
						<li class="dropdown"><a href="#" class="dropdown-toggle"
							data-toggle="dropdown"> 
								<!-- <c:choose>
									<c:when test="${!empty sessionScope.login}">
										<img class="img-circle" width="30" height="20"
											src="upload/${sessionScope.login.image.imagePath}">
									</c:when>
									<c:otherwise>
										<img
											src="../assets/images/favicon.png"
											class="img-circle" alt="image">
									</c:otherwise>
								</c:choose> -->
								<span v-if="this.member != null">
									{{ this.member.memberName }}
								</span>
								<i class="icon-submenu lnr lnr-chevron-down"></i></a>
							<ul class="dropdown-menu">
								<!-- <c:choose>
									<c:when test="${empty sessionScope.login}">
										<li><a href="login"><i
												class="lnr lnr-enter"></i> <spring:message code="title.login" /></a></li>
										<li><a
											href="signup/step1"><i
												class="lnr lnr-pencil"></i> <spring:message
													code="register.member" /></a></li>
									</c:when>
									<c:otherwise>
										<li><a
											href="profile/refresh"><i
												class="lnr lnr-user"></i> <span>Profile</span></a></li>
										<li><a
											href="profile/message"><i
												class="lnr lnr-envelope"></i> <span>Message</span></a></li>
										<li><a href="edit"><i
												class="lnr lnr-cog"></i> <span>Settings</span></a></li>
										<li><a href="logout"><i
												class="lnr lnr-exit"></i> <span>Logout</span></a></li>
									</c:otherwise>
								</c:choose> -->
							</ul>
						</li>
						<li>
							<!-- <c:if test="${sessionScope.login.memberlevel.memberLevelCode == 1}">
								<a href="admin/refresh"><i
									class="lnr lnr-cog"></i></a>
							</c:if> -->
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    name: 'headerVue',
	data() {
		return {
			clickSidebar : true,
		}
	},
	mounted() {
		window.addEventListener("load", this.onWindowLoad);
	},
	methods: {
		onWindowLoad() {
			if(window.innerWidth < 1025) {
				this.clickSidebar = false;
			}
		},
		showSidebar() {
			if(this.clickSidebar) {
				document.body.className += 'layout-fullwidth ';
			} else {
				document.body.classList.remove('layout-fullwidth');
			}

			this.clickSidebar = !this.clickSidebar;
			if(window.innerWidth < 1025) {
				if(document.body.classList.contains('offcanvas-active')) {
					document.body.className += 'offcanvas-active ';
				} else {
					document.body.classList.remove('offcanvas-active');
				}
			}
		},
		...mapMutations('geoMain', ['searchDashboard', 'getMemberData'])
	},
	computed: {
		...mapState('geoMain', ['member'])
	}
};
</script>

<style scoped>

</style>