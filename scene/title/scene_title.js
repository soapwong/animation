class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        var label = GuaLabel.new(game, 'hello from gua')
        this.addElement(label)

        var w = GuaAnimation.new(game)
        w.x = 100
        w.y = 150
        this.w = w
        this.addElement(w)

        this.setupInputs()
    }
    setupInputs() {
        var self = this
        self.game.registerAction('a', function(keyStatus) {
            self.w.move(-10, keyStatus)
        })
        self.game.registerAction('d', function(keyStatus) {
            self.w.move(10, keyStatus)
        })
    }
}