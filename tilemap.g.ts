// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level 1":
            case "level 1":return tiles.createTilemap(hex`1100100004070707070707070707070707070708020d05050605050505050505050505050a020d05060605050505050505050505050a020d05050505050505050505050505050a020d05050505050505050505050505050a020d05050505050505050505050505050a020d05050505050505050505050505050b020d050505050505050505050505050501030d050505050505050505050505050501030d050505050505050505050505050501030d050505050505050505050505050508020d05050505050505050505050505050a020d05050505050505050505050505050a020d05050505050505050505050505050a020d05050505050505050505050505050a02090c0c0c0c0c0c0c0c0c0c0c0c0c0c0b02`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 . . . . . . . . . . . . . . 2 . 
2 . . . . . . . . . . . . . . 2 . 
2 . . . . . . . . . . . . . . 2 . 
2 . . . . . . . . . . . . . . 2 . 
2 . . . . . . . . . . . . . . 2 . 
2 . . . . . . . . . . . . . . 2 2 
2 . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . 2 2 
2 . . . . . . . . . . . . . . 2 . 
2 . . . . . . . . . . . . . . 2 . 
2 . . . . . . . . . . . . . . 2 . 
2 . . . . . . . . . . . . . . 2 . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
`, [myTiles.transparency16,sprites.dungeon.stairWest,sprites.builtin.forestTiles9,sprites.builtin.forestTiles10,sprites.castle.tilePath1,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath7,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tilePath4], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`11001000020307070707070707070707070707070802050b0b0b0b0b0b0b0b0b0b0b0b0b0b0902050b0b0b0b0b0b0b0b0b0b0b0b0b0b0902050b0b0b0b0b0b0b0b0b0b0b0b0b0b0902050b0b0b0b0b0b0b0b0b0b0b0b0b0b0902050b0b0b0b0b0b0b0b0b0b0b0b0b0b0902060b0b0b0b0b0b0b0b0b0b0b0b0b0b0900010b0b0b0b0b0b0b0b0b0b0b0b0b0b0900010b0b0b0b0b0b0b0b0b0b0b0b0b0b0900010b0b0b0b0b0b0b0b0b0b0b0b0b0b0902030b0b0b0b0b0b0b0b0b0b0b0b0b0b0902050b0b0b0b0b0b0b0b0b0b0b0b0b0b0902050b0b0b0b0b0b0b0b0b0b0b0b0b0b0902050b0b0b0b0b0b0b0b0b0b0b0b0b0b0902050b0b0b0b0b0b0b0b0b0b0b0b0b0b0902060a0a0a0a0a0a0a0a0a0a0a0a0a0a04`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 . . . . . . . . . . . . . . 2 
2 2 . . . . . . . . . . . . . . 2 
2 2 . . . . . . . . . . . . . . 2 
2 2 . . . . . . . . . . . . . . 2 
2 2 . . . . . . . . . . . . . . 2 
2 2 . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . . 2 
2 2 . . . . . . . . . . . . . . 2 
2 2 . . . . . . . . . . . . . . 2 
2 2 . . . . . . . . . . . . . . 2 
2 2 . . . . . . . . . . . . . . 2 
2 2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.stairEast,sprites.builtin.forestTiles11,sprites.castle.tilePath1,sprites.castle.tilePath9,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath8,sprites.castle.tileGrass1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
