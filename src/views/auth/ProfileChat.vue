<template>
    <div class="custom-tabs-line tabs-line-bottom left-aligned">
        <ul class="nav" role="tablist">
            <li class="active">
                <a href="#tab-bottom-left" role="tab" data-toggle="tab">Notifications History</a>
            </li>
            <li>
                <a href="#tab-bottom-right" role="tab" data-toggle="tab">Find Friends</a>
            </li>
        </ul>
    </div>
    <div class="tab-content">
        <div class="tab-pane fade in active" id="tab-bottom-left">
            <ul class="list-unstyled activity-timeline">
                <li>
                    <i class="fa fa-comment activity-icon"></i>
                    <p> Commented on post <a href="#">Prototyping</a>
                        <span class="timestamp">2 minutes ago</span>
                    </p>
                </li>
                <li>
                    <i class="fa fa-cloud-upload activity-icon"></i>
                    <p> Uploaded new file <a href="#">Proposal.docx</a> to project <a href="#">New Year Campaign</a>
                        <span class="timestamp">7 hours ago</span>
                    </p>
                </li>
                <li>
                    <i class="fa fa-plus activity-icon"></i>
                    <p> Added <a href="#">Martin</a> and <a href="#">3 others colleagues</a> to project repository
                        <span class="timestamp">Yesterday</span>
                    </p>
                </li>
                <li>
                    <i class="fa fa-check activity-icon"></i>
                    <p> Finished 80% of all <a href="#">assigned tasks</a> 
                        <span class="timestamp">1 day ago</span>
                    </p>
                </li>
            </ul>
            <div class="margin-top-30 text-center">
                <a href="#" class="btn btn-default">See all Notifications</a>
            </div>
        </div>

        <div class="tab-pane fade" id="tab-bottom-right">
            <div class="table-responsive">
                <div class="col-md-12 text-right">
                    <a href="${pageContext.request.contextPath}/profile/refresh">
                        <button type="button" class="btn btn-primary">
                            <i class="fa fa-refresh"></i>
                        </button>
                    </a>
                </div>
                <table class="table project-table">
                    <thead>
                        <tr>
                            <th><spring:message code="profile"/></th>
                            <th><spring:message code="memberId"/></th>
                            <th><spring:message code="message"/></th>
                            <th><spring:message code="memberonline"/></th>
                        </tr>
                    </thead>
                    <tbody>
                        <c:forEach var="member" items="${memberList}" varStatus="status">
                            <tr>
                                <td>
                                    <img class="avatar img-circle" src="${pageContext.request.contextPath}/upload/${member.image.imagePath }"> ${member.memberName }</td>
                                <td>${member.memberId }</td>
                                <td>
                                    <a href="${pageContext.request.contextPath}/profile/messageForm/${member.memberNumber}">
                                        <button type="submit" class="btn btn-default">
                                            <i class="fa fa-plus-square"></i> SEND
                                        </button>
                                    </a>
                                </td>
                                <td>
                                    <c:choose>
                                        <c:when test="${member.memberonline.memberStatus }">
                                            <a href="#" class="notification-item">
                                                <span class="dot bg-success"></span>Online</a>
                                        </c:when>
                                        <c:otherwise>
                                            <a class="notification-item">
                                                <span class="dot bg-warning"></span>Offline</a>
                                        </c:otherwise>
                                    </c:choose>
                                </td>
                            </tr>
                        </c:forEach>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: 'ProfileChat',
    data() {
        return {}
    },
    methods: {
        
        checkImage() {

        return this.member.memberImage;
        }
    },
    computed: {
        ...mapState('geoMain', ['member'])
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>