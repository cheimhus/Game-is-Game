namespace SpriteKind {
    export const Plant = SpriteKind.create()
}
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
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
    MainCharacter.x = 40
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    MainCharacter,
    assets.animation`MainRight`,
    200,
    false
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    MainCharacter,
    assets.animation`MainDown`,
    200,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level 1`)
    MainCharacter.x = 230
})
let Wheat = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let Wheat_dead = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Plant)
music.play(music.createSong(assets.song`mySong`), music.PlaybackMode.LoopingInBackground)
let MainCharacter: Sprite = null
tiles.setCurrentTilemap(tilemap`level 1`)
MainCharacter = sprites.create(assets.image`Main`, SpriteKind.Player)
info.setLife(3)
MainCharacter.setPosition(40, 140)
Wheat.setPosition(41, 15)
game.onUpdate(function () {
    scene.cameraFollowSprite(MainCharacter)
    controller.moveSprite(MainCharacter, 50, 50)
})
game.onUpdateInterval(500, function () {
    animation.runImageAnimation(
    Wheat,
    assets.animation`myAnim`,
    200,
    false
    )
})
game.onUpdateInterval(500, function () {
    animation.runImageAnimation(
    Wheat_dead,
    assets.animation`myAnim0`,
    200,
    false
    )
})
