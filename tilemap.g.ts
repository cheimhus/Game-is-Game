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
            case "level 1":return tiles.createTilemap(hex`11001000030606060c060606060606060c06060710050101010101010101010101010101081005010101010101010101010101010108100e010101010101010101010101010108100501010101010101010101010101010810050101010101010101010101010101081005010101010101010101010101010102100501010101010101010101010101010f1105010101010101010b0101010101010f110501010101010101010101010101010f11050101010101010101010101010101021005010101010101010101010101010108100e0101010101010101010101010101081005010101010101010101010101010108100501010101010101010101010101010810040a0a0d0a0a0a0a0a0a0a0a0d0a0a0910`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 . . . . . . . . . . . . . . 2 . 
2 . . . . . . . . . . . . . . 2 . 
2 . . . . . . . . . . . . . . 2 . 
2 . . . . . . . . . . . . . . 2 . 
2 . . . . . . . . . . . . . . 2 . 
2 . . . . . . . . . . . . . . 2 2 
2 . . . . . . . . . . . . . . . . 
2 . . . . . . . 2 . . . . . . . . 
2 . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . 2 2 
2 . . . . . . . . . . . . . . 2 . 
2 . . . . . . . . . . . . . . 2 . 
2 . . . . . . . . . . . . . . 2 . 
2 . . . . . . . . . . . . . . 2 . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.purpleOuterEast2,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.chestClosed,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.purpleOuterWest2,sprites.dungeon.stairWest,sprites.builtin.forestTiles9,sprites.builtin.forestTiles10], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`110010000b030404040404040404040404040404050b010909090909090909090909090909060b010909090909090909090909090909060b010909090909090909090909090909060b010909090909090909090909090909060b010909090909090909090909090909060b01090909090909090909090909090906000a090909090909090909090909090906000a090909090909090909090909090906000a0909090909090909090909090909060b010909090909090909090909090909060b010909090909090909090909090909060b010909090909090909090909090909060b010909090909090909090909090909060b010909090909090909090909090909060b02080808080808080808080808080807`, img`
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
`, [myTiles.transparency16,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.darkGroundCenter,sprites.dungeon.stairEast,sprites.builtin.forestTiles11], TileScale.Sixteen);
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
