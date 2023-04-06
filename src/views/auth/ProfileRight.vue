<template>
<h4 class="heading">Update Profile</h4>
    <!-- Profile Update Form -->
    <div class="awards">
    <div class="row">

        <!-- Image Update -->
        <div v-if="checkImage() == 0">

        <form id="form" method="post" enctype="multipart/form-data" action="/edit/uploadImage">
            <!-- Label for file input -->
            <label for="ex_file"> 
            <a class="btn btn-info" style="color: white;">Image Upload</a>
            </label> 
            <input type="file" multiple="multiple" name="file" style="display: none" id="ex_file" /> 
            <!-- Hidden input for member number -->
            <input type="hidden" name="memberNumber" :value="this.member.memberNumber" /> &nbsp;
            <button type="submit" name="select" value="true" class="btn btn-success">Select</button>
            <button type="submit" name="delete" value="true" class="btn btn-danger">Delete</button>
        </form>

        <br>
        <!-- Loop through image list -->
        <div v-for="(image, index) in imageList" :key="index" class="col-md-3 col-sm-6">
            <div class="award-item">
            <div class="profile-main">
                <a :href="'/upload/' + image.imagePath" class="img-circle"> 
                <img width="125" height="125" class="img-circle" :src="'/upload/' + image.imagePath" />
                </a>
            </div>
            </div>
        </div>

        </div>
        <div v-else>
        <form method="post" :action="`${$root.baseUrl}/edit/deleteImage/${$root.memberNumber}`">
            <button type="submit" class="btn btn-success">Delete</button> &nbsp; 
            <a :href="`${$root.baseUrl}/profile/refresh`">
            <button type="button" class="btn btn-danger">Cancel</button>
            </a>
            <br>
            <br>
            <!-- Loop through the imageList using v-for directive -->
            <div v-for="(image, index) in $root.imageList" :key="index" class="col-md-3 col-sm-6">
            <div class="award-item">
                <div class="profile-main">
                <a :href="`${$root.baseUrl}/upload/${image.imagePath}`" class="img-circle"> 
                    <img width="125" height="125" class="img-circle" :src="`${$root.baseUrl}/upload/${image.imagePath}`" />
                </a>
                <div class="checkBox">
                    <input type="checkbox" name="checkbox" :value="image.imagePath" />
                </div>
                </div>
            </div>
            </div>
        </form>
        </div>

        <!-- <c:if test="${modifyImage eq true}">
        <form:form method="post" action="${pageContext.request.contextPath}/edit/updateImage/${sessionScope.login.memberNumber}">
            <button type="submit" class="btn btn-success">Select</button>
            &nbsp; <a href="${pageContext.request.contextPath}/profile/refresh">
            <button type="button" class="btn btn-danger">Cancel</button>
            </a>
            <br>
            <br>
            <c:forEach var="image" items="${imageList}" varStatus="status">
            <div class="col-md-3 col-sm-6">
                <div class="award-item">
                <div class="profile-main">
                    <a href="${pageContext.request.contextPath}/upload/${image.imagePath}" class="img-circle"> <img width="125" height="125" class="img-circle" src="<spring:url value='/upload/${image.imagePath}'/>" />
                    </a>
                    <div class="checkBox">
                    <input type="radio" name="radio" value="${image.imagePath}" />
                    </div>
                </div>
                </div>
            </div>
            </c:forEach>
        </form:form>
        </c:if> -->

        <c:when test="${!empty updatePhoneNumber }">
        <div class="btn btn-default">Mobile Update</div>
        <br>
        <br>
        <!-- Create a form for updating the phone number. -->
        <form action="/edit/updatePhoneNumber" method="post" class="form-auth-small">
            <div class="input-group">
            <input type="text" name="memberPhoneNumber" v-model="phoneNumber" @keyup="inputPhoneNumber" maxlength="13" pattern=".{13,13}" class="form-control" />
            <input type="hidden" name="memberNumber" :value="this.member.memberNumber" /> 
            <span class="input-group-btn">
                <button type="submit" class="btn btn-success">Update</button> &nbsp; 
                <a href="/profile/refresh">
                <button type="button" class="btn btn-danger">Cancel</button>
                </a>
            </span>
            </div>
        </form>
        </c:when>

        <c:when test="${!empty updateWebsite }">
        <div class="btn btn-default">Website Update</div>
        <br>
        <br>
        <form action="/edit/updateWebsite" method="post" class="form-auth-small">
        <textarea name="memberWebsite" class="form-control" rows="3" placeholder="https://..." v-model="member.memberWebsite"></textarea>
        <input type="hidden" name="memberNumber" :value="this.member.memberNumber" />
        <span class="input-group-btn">
            <button type="submit" class="btn btn-success">Update</button> &nbsp; 
            <a href="/profile/refresh">
            <button type="button" class="btn btn-danger">Cancel</button>
            </a>
        </span>
        </form>
        </c:when>
        <br>
    </div>
    
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
    name: 'HomeView',
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
