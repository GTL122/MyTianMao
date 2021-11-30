window.onload = function () {
    let banner1 = document.getElementById('banner1')
    let prev1 = document.getElementById('prev1')
    let next1 = document.getElementById('next1')
    let banner2 = document.getElementById('banner2_box')
    let prev2 = document.getElementById('prev2')
    let next2 = document.getElementById('next2')
    let t1
    let t2
    let marle = 0
    let marle2 = 0
    let bannertf2 = true
    let bannertf = true
    // 切换效果
    function start1(le) {
        le = marle
        banner1.animate({
            marginLeft: le + 'px'
        }, {
            duration: 300
        })
        setTimeout(function () {
            bannertf = true
            banner1.style.marginLeft = le + 'px'
        }, 300)
    }
    // 执行轮播定时器
    function startbanner1() {
        t1 = setInterval(function () {
            marle = marle - 520
            if (marle == -2600) {
                marle = 0
            }
            start1(marle)
        }, 4000)
    }
    // 轮播上一张图
    prev1.onclick = function () {
        if (bannertf == true) {
            bannertf = false
            marle = marle + 520
            // 如果为最后一张图，则跳到第一张
            if (marle == 520) { // 如果是第一张图，则跳到最后一张
                marle = -2080
                clearInterval(t1)
                start1(marle)
                startbanner1()
            } else {
                // if (marle == -2080) {
                //     marle = 0
                // }
                clearInterval(t1)
                start1(marle)
                startbanner1()
            }
        }
    }
    // 轮播下一张图
    next1.onclick = function () {
        if (bannertf == true) {
            bannertf = false
            marle = marle - 520
            // 如果为最后一张图，则跳到第一张
            if (marle == -2600) {
                marle = marle + 2600
                clearInterval(t1)
                start1(marle)
                startbanner1()
            } else {
                clearInterval(t1)
                start1(marle)
                startbanner1()
            }
        }
    }
    // 已进入页面就开始轮播
    startbanner1()


    // 第二张轮播图
    // 切换效果
    function start2(le) {
        le = marle2
        banner2.animate({
            marginLeft: le + 'px'
        }, {
            duration: 300
        })
        setTimeout(function () {
            bannertf2 = true
            banner2.style.marginLeft = le + 'px'
        }, 300)
    }
    // 执行轮播定时器
    function startbanner2() {
        t2 = setInterval(function () {
            marle2 = marle2 - 520
            if (marle2 == -2080) {
                marle2 = 0
            }
            start2(marle2)
        }, 4000)
    }
    // 轮播上一张图
    prev2.onclick = function () {
        if (bannertf2 == true) {
            bannertf2 = false
            marle2 = marle2 + 520
            if (marle2 == 520) { // 如果是第一张图，则跳到最后一张
                marle2 = -1560
                clearInterval(t2)
                start2(marle2)
                startbanner2()
            } else {
                // if (marle == -2080) {
                //     marle = 0
                // }
                clearInterval(t2)
                start2(marle2)
                startbanner2()
            }
        }
    }
    // 轮播下一张图
    next2.onclick = function () {
        if (bannertf2 == true) {
            bannertf2 = false
            marle2 = marle2 - 520
            // 如果为最后一张图，则跳到第一张
            if (marle2 == -2080) {
                marle2 = marle2 + 2080
                clearInterval(t2)
                start2(marle2)
                startbanner2()
            } else {
                clearInterval(t2)
                start2(marle2)
                startbanner2()
            }
        }
    }
    startbanner2()
}