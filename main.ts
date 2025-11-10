controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    MainCharacter,
    assets.animation`MainUp`,
    200,
    false
    )
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    MainCharacter,
    assets.animation`AttackLeft0`,
    100,
    true
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    MainCharacter,
    assets.animation`AttackLeft`,
    100,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    MainCharacter,
    assets.animation`MainLeft`,
    200,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function (sprite) {
    tiles.setCurrentTilemap(tilemap`level2`)
    MainCharacter.setPosition(40, 140)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    MainCharacter,
    assets.animation`MainRight`,
    200,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite) {
    tiles.setCurrentTilemap(tilemap`level 1`)
    MainCharacter.x += 70
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    MainCharacter,
    assets.animation`MainDown`,
    200,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite) {
    tiles.setCurrentTilemap(tilemap`level 1`)
    MainCharacter.x += 70
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function (sprite) {
    tiles.setCurrentTilemap(tilemap`level2`)
    MainCharacter.setPosition(40, 140)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function (sprite) {
    tiles.setCurrentTilemap(tilemap`level2`)
    MainCharacter.setPosition(40, 140)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite) {
    tiles.setCurrentTilemap(tilemap`level 1`)
    MainCharacter.x += 70
})
let MainCharacter: Sprite = null
tiles.setCurrentTilemap(tilemap`level 1`)
MainCharacter = sprites.create(assets.image`Main`, SpriteKind.Player)
let Enemy1 = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
info.setLife(3)
MainCharacter.setPosition(40, 140)
game.onUpdate(function () {
    scene.cameraFollowSprite(MainCharacter)
    controller.moveSprite(MainCharacter, 50, 50)
})
forever(function () {
    MainCharacter.setKind(SpriteKind.Player)
    Enemy1.setKind(SpriteKind.Enemy)
})
