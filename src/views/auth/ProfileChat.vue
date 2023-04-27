<template>
<h4 class="heading">Message List</h4>
    <div class="awards">
        <div v-if="this.displayMember != null">
            <img class="img-circle" width="35" height="35" :src="require('@/assets/images/' + this.displayMember.memberImage + '.png')"> {{ this.displayMember.memberName }}
        </div>
        <div v-else class="input-group">
            <span class="input-group-addon"><i class="fa fa-user"></i></span>
            <input v-model="this.to" class="form-control" placeholder="Send to..." type="text">            
        </div>

        <ul class="list-unstyled activity-list">
            <li v-for="(message, messageIdx) in this.pMessageList" :key="messageIdx">
                <div v-if="message.memberName != this.pMember.memberName">
                    <p class="text-left"> {{message.content}} </p>
                </div>
                <div v-else>
                    <p class="text-right"> {{message.content}} </p>
                </div>
                {{ message.sendDate.substring(0, 16) }}
            </li>
        </ul>

        <br>
        <div class="input-group">
            <input v-model="content" class="form-control" type="text" @keyup="enterMessage">
            <span class="input-group-btn"><button class="btn btn-primary" type="button" @click="sendMessage">Send</button></span>
        </div>
    </div>
</template>

<script>
import Stomp from 'webstomp-client';
import SockJS from 'sockjs-client';

export default {
    name: 'ProfileChat',
    data() {
        return {
            pMember: JSON.parse(localStorage.getItem('member')),
            pMemberList: [],
            pMessageList: [],
            displayMember: null,
            to: null,
            content: null,
        }
    },
    created() {
        this.receive();
    },
    mounted() {
        this.emitter.on('messageTo', memberNumber => {
            this.to = memberNumber;
            this.send();
        })
    },
    methods: {
        enterMessage(e) {
            if(e.keyCode === 13 && this.to !== null && this.content !== null) {
                this.send();
                this.content = null;
            }
        },
        sendMessage() {
            this.send();
            this.content = null;
        },
        send() {
            if (this.stompClient && this.stompClient.connected) {
                var map = {
                    fromMemberNumber: this.pMember.memberNumber,
                    toMemberNumber: this.to,
                    content: this.content
                };
                this.stompClient.send("/receive", JSON.stringify(map), {});
            }
        },
        receive() {
            const serverURL = "http://localhost:8080/chat"
            let socket = new SockJS(serverURL);
            this.stompClient = Stomp.over(socket);

            this.stompClient.connect({}, frame => {
                this.stompClient.subscribe("/send", res => {

                    var result = JSON.parse(JSON.parse(JSON.stringify(res.body)));
                    this.pMessageList = result;
                    this.displayMember = result.find(item => item.fromMemberNumber != this.pMember.memberNumber);
                });
            }, error => {
                console.log('소켓 연결 실패', error);
            });
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
