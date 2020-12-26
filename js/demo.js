$(".album-poster").on('click', function(e){
    var dataSwitchId = $(this).attr('data-switch');
    ap.list.switch(dataSwitchId); 
    ap.play();
    $("#aplayer").addClass('showPlayer') ;
       

});

const ap = new APlayer({
container: document.getElementById('aplayer'),
ListFolded : true ,
audio: [
{
name: 'im lặng thôi dsk ',
artist: '',
url: '../js/audio/ImLangThoi.mp3',
cover: 'cover.jpg'
},
{
name: 'Điếu thuốc cuối',
artist: '',
url: '../../dieuthuoccuoidsk.mp3',
cover: 'cover.jpg'
},
{
name: 'Lớn Rồi ',
artist: '',
url: '../../Lon-Roi-DSK.mp3',
cover: 'cover.jpg'
},
{
name: 'Ngày tàn ',
artist: '',
url: '../../Ngay-Tan-DSK.mp3',
cover: 'cover.jpg'
},
{
name: 'Có sao đâu ',
artist: '',
url: '../../Co-Sao-Dau-DSK.mp3',
cover: 'cover.jpg'
},
{
name: 'Thế hệ tao ',
artist: '',
url: '../../The-He-Tao-DSK-Ft-Krazinoyze.mp3',
cover: 'cover.jpg'
},
{
name: 'Chưa bao giờ ',
artist: '',
url: '../../Chua-Bao-Gio-DSK (1).mp3',
cover: 'cover.jpg'
},
{
name: 'Ai mà biết được ',
artist: '',
url: '../../Ai-ma-biet-duoc-DSK.mp3',
cover: 'cover.jpg'
},
] 

});