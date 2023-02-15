//const { default: axios } = require('axios');

/*
var polyline = new naver.maps.Polyline({
    map: map,
    path: [],
    strokeColor: '#5347AA',
    strokeWeight: 2
});


const point = [
    { place:"건대입구역", lat: 37.539922, lng: 127.070609 },
    { place:"어린이대공원역", lat: 37.547263, lng: 127.074181 },
];

var map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(37.539922, 127.070609),
    zoom: 14
});

for (var i = 0; i < point.length; i++) {
        var marker = new naver.maps.Marker({
            map: map,
            title: locations[i].place,
            position: new naver.maps.LatLng(point[i].lat, point[i].lng),
        });
    }
    */
    $(function() {
	
        initMap();
        
    });
    
    // const locations=[ { place:"광주광역시 동구 장동로 51-1", lat: '35.1472041', lng: '126.9272577' },
    // { place:"광주 남구 양림동 24-63", lat: '35.14010072213278', lng: '126.91678475522582' },{ place:"광주광역시 남구 봉선로133번길 4 금호타운", lat: '35.1241449', lng: '126.9066826' }
//];
let dataarr=[];
axios.get(`http://localhost:8080/api/v1/posts/${postId}`,{headers:{"Authorization": "Bearer " + localStorage.getItem("token") }})
    .then(res=>{
        dataarr=res.data;
    })
    .catch(err=>{
        console.log(err);
    })




    function initMap() { 
        
       
        
        let markers = new Array(); // 마커 정보를 담는 배열
        let infoWindows = new Array(); // 정보창을 담는 배열
        
        var map = new naver.maps.Map('map', {
            center: new naver.maps.LatLng(dataarr.map[1].lat, dataarr.map[1].lng), //지도 시작 지점
            zoom: 14
        });
        
        
        path = [];
        for (var i=0, ii=dataarr.map.length; i<ii; i++) {
           var position = new naver.maps.LatLng(dataarr.map[i].lat , dataarr.map[i].lng);
           path.push({lat:dataarr.map[i].lat , lng: dataarr.map[i].lng});
        }
      
      polyline = new naver.maps.Polyline({
          map: map,
          path:path,
          clickable: true,
          strokeColor: '#F67777',
          strokeOpacity: 1,
          strokeWeight: 5
      });
        
        
        for (var i = 0; i < dataarr.map.length; i++) {
            // 지역을 담은 배열의 길이만큼 for문으로 마커와 정보창을 채워주자 !
    
            var marker = new naver.maps.Marker({
                map: map,
                title: dataarr.map[i].place, // 지역구 이름 
                position: new naver.maps.LatLng(dataarr.map[i].lat ,dataarr.map[i].lng), // 지역구의 위도 경도 넣기 
                icon: {
                    url: 'contentLook/pngegg.png',
                }
            
            });
          
         
            /* 정보창 */
             var infoWindow = new naver.maps.InfoWindow({
                 content: '<div style="width:200px;text-align:center;padding:10px;border:0px;"><b>' + locations[i].place
             }); // 클릭했을 때 띄워줄 정보 HTML 작성
            
             markers.push(marker); // 생성한 마커를 배열에 담는다.
             infoWindows.push(infoWindow); // 생성한 정보창을 배열에 담는다.
        }
        
         
        function getClickHandler(seq) {
            
                return function(e) {  // 마커를 클릭하는 부분
                    var marker = markers[seq], // 클릭한 마커의 시퀀스로 찾는다.
                        infoWindow = infoWindows[seq]; // 클릭한 마커의 시퀀스로 찾는다
    
                    if (infoWindow.getMap()) {
                        infoWindow.close();
                    } else {
                        infoWindow.open(map, marker); // 표출
                    }
                }
            }
        
        for (var i=0, ii=markers.length; i<ii; i++) {
            console.log(markers[i] , getClickHandler(i));
            naver.maps.Event.addListener(markers[i], 'click', getClickHandler(i)); // 클릭한 마커 핸들러
        }



        
        
      
    
    }
    ///////////////////////
   