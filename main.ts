scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(true)
})
scene.setBackgroundColor(5)
tiles.setTilemap(tilemap`level2`)
let mySprite = sprites.create(img`
    . . . . . 4 4 4 . . . . . . . . 
    . . . . . . 4 . . . . . . . . . 
    . . . . 3 3 3 3 3 . . . . . . . 
    . . . . 3 e e e 3 . . . . . . . 
    . . . 3 3 f e f 3 3 . . . . . . 
    . . 3 e e e d e e e 3 . . . . . 
    . . 3 e 2 e e e 2 e 3 . . . . . 
    . . 3 e e 2 2 2 e e 3 . . . . . 
    . . . . c c c c c . . . . . . . 
    . . e e c c c c c e e . . . . . 
    . . . . c c c c c . . . . . . . 
    . . . c c c c c c c . . . . . . 
    . . c c c c c c c c c . . . . . 
    . . . . . e . e . . . . . . . . 
    . . . . . e . e . . . . . . . . 
    . . . . 7 7 . 7 7 . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, sprites.builtin.crowd4)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
info.startCountdown(40)
