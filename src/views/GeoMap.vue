<template>
    <div id="map" :style="mapSize">

    </div>
</template>

<script>
// import { mapState, mapGetters, mapMutations } from "vuex";

export default {
    name: 'GeoMap',
    data() {
        return {
            map: null,
            keyword: null,
            markers: [],
            latitude: 33.450701,
            longtitude: 126.570667
        };
    },
    mounted() {
        if(window.kakao && window.kakao.maps) {
            this.loadMap();
        } else {
            this.loadScript();
        }
    },
    methods: {
        loadScript() {
            const script = document.createElement('script');
            script.src = '//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=' + process.env.VUE_APP_KAKAO_KEY; // &autoload=false > api를 로드한 후 맵을 그리는 함수가 실행되도록 구현
            script.onload = () => window.kakao.maps.load(this.loadMap); // 스크립트 로드가 끝나면 지도를 실행될 준비가 되어 있다면 지도가 실행되도록 구현

            document.head.appendChild(script); // html>head 안에 스크립트 소스를 추가
        },
        loadMap() {
            const container = document.getElementById("map"); // 지도를 담을 DOM 영역
            
            navigator.geolocation.getCurrentPosition(pos => {

                this.latitude = pos.coords.latitude;
                this.longitude = pos.coords.longitude;

                const options = {
                    // 지도를 생성할 때 필요한 기본 옵션
                    center: new window.kakao.maps.LatLng(this.latitude, this.longitude), // 지도의 중심좌표
                    level: 3, // 지도의 레벨(확대, 축소 정도)
                };

                this.map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
            }, err => {
                console.log(err.message);

                const options = {
                    // 지도를 생성할 때 필요한 기본 옵션
                    center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                    level: 3, // 지도의 레벨(확대, 축소 정도)
                };

                this.map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
            });
        }
    },
    computed: {
        mapSize() {
            return {
                '--width': window.innerWidth - (window.innerWidth / 50) + 'px',
                '--height': window.innerHeight - (window.innerHeight / 50) + 'px'
            };
        }
    }
};
</script>

<style scoped>
div {
    width: var(--width);
    height: var(--height);
    margin: auto;
    position: relative;
    overflow: hidden;
}
</style>