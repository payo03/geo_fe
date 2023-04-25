<template>
<h4 class="heading">Message List</h4>
    <div class="awards">
        to : <input v-model="this.to" type="text">
        message : <input v-model="message" type="text" @keyup="sendMessage">
        <div v-for="(member, idx) in this.pMemberList" :key="idx">
            <span>
                <img class="img-circle" width="35" height="35" :src="require('@/assets/images/' + member.memberImage + '.png')">{{ member.memberName }}
            </span>
            <div v-for="(message, idx) in this.pMessageList" :key="idx">
                <div v-if="member.memberNumber == message.fromMemberNumber">
                    <span>{{message.content}}</span>
                </div>
            </div>
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
            pMemberList: JSON.parse(localStorage.getItem('memberList')),
            pMessageList: JSON.parse(localStorage.getItem('messageList')),
            to: '',
            content: '',
        }
    },
    created() {
        this.connect();
        console.log(this.pMessageMemberList);
        console.log(this.pMessageContentList);
    },
    methods: {
        sendMessage(e) {
            if(e.keyCode === 13 && this.to !== '' && this.content !== '') {
                this.send();
                this.content = '';
            }
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
        connect() {
            const serverURL = "http://localhost:8080/chat"
            let socket = new SockJS(serverURL);
            this.stompClient = Stomp.over(socket);

            this.stompClient.connect({}, frame => {
                this.stompClient.subscribe("/send", res => {

                    this.messageList.push(JSON.parse(res.body));
                });
            }, error => {
                console.log('소켓 연결 실패', error);
            });
        }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
