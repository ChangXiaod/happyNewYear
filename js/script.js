/**
 * Created by Ming on 2017/5/8.
 */
window.onload = function () {
    var page1 = document.getElementById('page1');
    var page2 = document.getElementById('page2');
    var page3 = document.getElementById('page3');

    var music = document.getElementById('music');
    var audio = document.getElementsByTagName('audio')[0];

    //音乐结束自动停止光碟旋转
    audio.addEventListener('ended', function () {
        music.setAttribute('class', '');
    }, false);

    //点击光碟,控制音乐播放
    // music.onclick = function () {
    //     if (audio.paused) {
    //         audio.play();
    //         // this.setAttribute('class', 'play');
    //         this.style.animationPlayState = 'running';
    //     } else {
    //         audio.pause();
    //         // this.setAttribute('class', '');
    //         this.style.animationPlayState = 'paused';
    //     }
    // };
    music.addEventListener('touchstart', function (event) {
        if (audio.paused) {
            audio.play();
            // this.setAttribute('class', 'play');
            this.style.animationPlayState = 'running';
        } else {
            audio.pause();
            // this.setAttribute('class', '');
            this.style.animationPlayState = 'paused';
        }
    }, false);

    //点击屏幕翻页
    page1.addEventListener('touchstart', function(event){
        page1.style.display = 'none';
        page2.style.display = 'block';
        page3.style.display = 'block';
        page3.style.top = '100%';

        setTimeout(function(){
            page2.setAttribute('class', 'page fadeOut');
            page3.setAttribute('class', 'page fadeIn');
        }, 5500);
    }, false);
};
