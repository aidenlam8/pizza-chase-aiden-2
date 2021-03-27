sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(8)
    otherSprite.setPosition(randint(0, 160), randint(0, 120))
    info.startCountdown(3)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(-8)
    otherSprite.setPosition(randint(0, 160), randint(0, 120))
    info.startCountdown(3)
})
scene.setBackgroundColor(9)
let DUMMIE = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
    . . 3 3 3 f 3 3 3 3 3 3 3 . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 . . . 
    . 3 3 3 3 3 3 3 3 3 f 3 3 3 . . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . 3 3 3 3 f f 3 3 3 f f 3 3 . . 
    . 3 3 3 3 3 f f f f f 3 3 3 . . 
    . 3 3 3 3 3 1 1 3 1 1 3 3 3 . . 
    . . . 3 3 3 1 1 3 1 3 3 . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . . . f . . f . . . . . . 
    . . . . . . f . . f . . . . . . 
    . . . . . . f . . f . . . . . . 
    `, SpriteKind.Player)
let dirt = sprites.create(img`
    e . . 3 e e e e e e e e e . . . 
    e e . 3 3 3 3 . . 3 3 e e . . . 
    . e e e e e 3 3 3 3 e e e 3 3 3 
    . . e e e e e e e e e e e e . 3 
    . . e . e e e . e e e e . e . 3 
    . . e e e e e e e e e . e . . 3 
    . e e e . . e e e e . e e . . 3 
    . e . e 3 3 3 3 3 . e e e e e 3 
    e e . e . . . . 3 3 3 . . . . e 
    e . . . e e e e e . 3 3 3 . . e 
    e . e e e e e e e e . . . . . e 
    e e 3 3 3 3 3 e . . e e . e e e 
    . . 3 . e e . e e e . e e 3 3 3 
    3 3 3 e e e . . . . e e . . . 3 
    e . . e e . . . . e . . e e . 3 
    e e e e e e . . . e . . . . e 3 
    `, SpriteKind.Food)
let food = sprites.create(img`
    . . . . c c c b b b b b . . . . 
    . . c c b 4 4 4 4 4 4 b b b . . 
    . c c 4 4 4 4 4 5 4 4 4 4 b c . 
    . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
    e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
    e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
    e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
    . e b 4 4 4 4 4 5 4 4 4 4 b e . 
    8 7 e e b 4 4 4 4 4 4 b e e 6 8 
    8 7 2 e e e e e e e e e e 2 7 8 
    e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
    e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
    e b e 8 8 c c 8 8 c c c 8 e b e 
    e e b e c c e e e e e c e b e e 
    . e e b b 4 4 4 4 4 4 4 4 e e . 
    . . . c c c c c e e e e e . . . 
    `, SpriteKind.Enemy)
dirt.setPosition(30, 12)
food.setPosition(0, 20)
controller.moveSprite(DUMMIE, 100, 100)
DUMMIE.setStayInScreen(true)
forever(function () {
    if (info.score() >= 160) {
        game.over(true)
    }
    if (info.score() <= -23) {
        game.over(false)
    }
})
