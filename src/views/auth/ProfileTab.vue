<template>
    <div class="custom-tabs-line tabs-line-bottom left-aligned">
        <ul class="nav" role="tablist">
            <li :class="[ clickTabBar? 'active' : '']">
                <a href="#" role="tab" data-toggle="tab" @click="memberActive">Find Friends</a>
            </li>
            <li :class="[ clickTabBar? '' : 'active']">
                <a href="#" role="tab" data-toggle="tab" @click="alarmActive">Notifications History</a>
            </li>
        </ul>
    </div>
    <div class="tab-content">
        <div class="tab-pane fade" :class="[ clickTabBar? 'in active' : '']" id="tab-bottom-right">
            <MemberList />
        </div>
        <div class="tab-pane fade" :class="[ clickTabBar? '' : 'in active']" id="tab-bottom-left">
            <AlarmList />
        </div>
    </div>
</template>

<script>
import MemberList from "./components/MemberList.vue";
import AlarmList  from "./components/AlarmList.vue";

export default {
    name: 'ProfileTab',
    data() {
        return {
            clickTabBar : true
        }
    },
    components: {
        MemberList,
        AlarmList
    },
    methods: {
        alarmActive() {
            this.clickTabBar = true;
        },
        memberActive() {
            this.clickTabBar = false;
        }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>