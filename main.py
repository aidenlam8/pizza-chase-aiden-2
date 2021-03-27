def on_on_overlap(sprite, otherSprite):
    info.change_score_by(8)
    otherSprite.set_position(randint(0, 160), randint(0, 120))
    info.start_countdown(10)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

scene.set_background_color(9)
DUMMIE = sprites.create(img("""
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
    """),
    SpriteKind.player)
dirt = sprites.create(img("""
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
    """),
    SpriteKind.food)
dirt.set_position(30, 12)
controller.move_sprite(DUMMIE, 100, 100)
DUMMIE.set_stay_in_screen(True)