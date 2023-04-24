<template>
<h4 class="heading">Update Profile</h4>
    <!-- Profile Update Form -->
    <div class="awards">
    
    <div class="text-center">
        <div v-if="this.pMember.memberStatus != 0">
            <button class="btn label-default" @click="pUpdateStatus">Clocking</button>
        </div>
        <div v-else>
            <button class="btn label-success" @click="pUpdateStatus">Online</button>
        </div>
    </div>
    </div>
</template>

<script>
import {mapState, mapActions} from "vuex";

export default {
    name: 'ProfileChat',
    data() {
        return {
            pMember: JSON.parse(localStorage.getItem('member'))
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

            console.log(this.pMember);
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
