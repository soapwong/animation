class GuaAnimation {
    constructor(game) {
        this.game = game
        // 硬编码动画
        this.animations = {
            idle: [],
            run: [],
        }
        for (var i = 1; i < 11; i++) {
            var name = `idle${i}`
            var t = game.textureByName(name)
            this.animations['idle'].push(t)
        }
        for (var i = 1; i < 9; i++) {
            var name = `run${i}`
            var t = game.textureByName(name)
            this.animations['run'].push(t)
        }
        // 第一张图片
        this.animationName = 'idle'
        this.texture = this.frames()[0]
        this.w = this.texture.width
        this.h = this.texture.height
        this.framesIndex = 0
        this.framesCount = 3
        //
        this.flipX = false
    }
    static new(...args) {
        return new this(...args)
    }
    frames() {
        return this.animations[this.animationName]
    }
    update() {
        this.framesCount--
        if (this.framesCount === 0) {
            this.framesCount = 3
            this.framesIndex = (this.framesIndex + 1) % this.frames().length
            this.texture = this.frames()[this.framesIndex]
        }
    }
    draw() {
        var context = this.game.context
        if (this.flipX) {
            context.save()

            var x = this.x + this.w / 2
            context.translate(x, 0)
            context.scale(-1, 1)
            context.translate(-x, 0)
            context.drawImage(this.texture, this.x, this.y)

            context.restore()
        } else {
            context.drawImage(this.texture, this.x, this.y)
        }
    }
    move(x, keyStatus) {
        this.flipX = (x < 0)
        this.x += x
        // log('keyStatus', keyStatus)
        var animationNames = {
            down: 'run',
            up: 'idle',
        }
        var name = animationNames[keyStatus]
        this.changeAnimation(name)
    }
    changeAnimation(name) {
        this.animationName = name
    }
}