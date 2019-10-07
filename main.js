var loadlevel = function(game, n) {
    n = n - 1
    var blocks = []
    var level = levels[n]
    for (var i = 0; i < level.length; i++) {
        var p = level[i]
        var b = Block(game, p)
        blocks.push(b)
    }
    return blocks
}

var enableDebugMode = function(game, enable) {
    if (!enable) {
        return
    }
    // 控制速度
    e('#id-input-speed').addEventListener('input', function(event) {
        var input = event.target
        window.fps = Number(input.value)
    })
}

var __main = function() {
    var images = {
        // 闲置
        idle1: 'img/idle/Idle1.png',
        idle2: 'img/idle/Idle2.png',
        idle3: 'img/idle/Idle3.png',
        idle4: 'img/idle/Idle4.png',
        idle5: 'img/idle/Idle5.png',
        idle6: 'img/idle/Idle6.png',
        idle7: 'img/idle/Idle7.png',
        idle8: 'img/idle/Idle8.png',
        idle9: 'img/idle/Idle9.png',
        idle10: 'img/idle/Idle10.png',
        // 跑步
        run1: 'img/run/r1.png',
        run2: 'img/run/r2.png',
        run3: 'img/run/r3.png',
        run4: 'img/run/r4.png',
        run5: 'img/run/r5.png',
        run6: 'img/run/r6.png',
        run7: 'img/run/r7.png',
        run8: 'img/run/r8.png',
        // 多状态动画
    }

    var game = GuaGame.instance(60, images, function(g) {
        // var s = Scene.new(g)
		var s = SceneTitle.new(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true)
}

__main()
