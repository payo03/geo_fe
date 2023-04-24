<template>
    <div id="wrapper">
        <HeaderVue />
        <LeftVue />
        <div class="main">
            <div class="main-content">
                <div class="container-fluid">

                    <div class="hello">
                        <!-- MAIN -->
                        <div class="panel panel-profile">
                            <div class="clearfix">

                                <!-- LEFT COLUMN -->
                                <ProfileBase />

                                <!-- RIGHT COLUMN -->
                                <div class="profile-right">
                                    <ProfileChat />
                                    <!-- TABBED CONTENT -->
                                    <ProfileTab />
                                    <!-- END TABBED CONTENT -->
                                </div>
                            </div>
                        </div>
                        <!-- MAIN END -->
                    </div>
                </div>
            </div>
        </div>
        <FooterVue />
    </div>
</template>

<script>
// import GeoMap from '@/views/GeoMap.vue';
import HeaderVue from '../../components/Header.vue';
import LeftVue from '../../components/Left.vue';
import FooterVue from '../../components/Footer.vue';

import ProfileBase from "./ProfileBase.vue";
import ProfileChat from "./ProfileChat.vue";
import ProfileTab  from "./ProfileTab.vue";

export default {
    name: 'MainView',
    data() {
        return {
            
        }
    },
    components: {
        HeaderVue,
        FooterVue,
        LeftVue,
        ProfileBase,
        ProfileChat,
        ProfileTab,
    },
    methods: {

    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>