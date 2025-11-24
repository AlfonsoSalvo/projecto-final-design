// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const tile0 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100003030303030303030303030303030303020404030304040404040403030303030303040303040303030303030303030303030404040403030303030303030303030303030304030303040403030303030303030303040303030404030303030303030303030403030304040303030303030303030304040404040404040403030303030303030303030303030304040303030404040404040404040404040303030304030303030303030304040303030303040404040303030303040403030303030303030403030303030304030303030303030304040404040403040303030303030303030303030304030403030303030303030303030303010303030303`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . 2 2 . . . . . . 2 2 2 2 2 
2 2 . 2 2 . 2 2 2 2 2 2 2 2 2 2 
2 2 . . . . 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 . 2 2 2 . . 2 2 2 2 2 
2 2 2 2 2 . 2 2 2 . . 2 2 2 2 2 
2 2 2 2 2 . 2 2 2 . . 2 2 2 2 2 
2 2 2 2 2 . . . . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . 2 2 2 2 2 2 2 2 . . 2 2 2 
2 2 . . . . 2 2 2 2 2 . . 2 2 2 
2 2 2 2 2 . 2 2 2 2 2 2 . 2 2 2 
2 2 2 2 2 . . . . . . 2 . 2 2 2 
2 2 2 2 2 2 2 2 2 2 . 2 . 2 2 2 
2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.chestClosed,sprites.builtin.crowd4,sprites.builtin.forestTiles2,sprites.builtin.oceanDepths0], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101030000010100000000000001010101010101000101000101010101010101010101010000000001010101010101010101010101010100010101000001010101010101010101000101010000010101010101010101010001010100000101010101010101010100000000000000000001010101010101010101010101010100000101010000000000000000000000000101010100010101010101010100000101010101000000000101010101000001010101010101010001010101010100010101010101010100000000000001000101010101010101010101010100010001010101010101010101010101020101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . 2 2 . . . . . . 2 2 2 2 2 
2 2 . 2 2 . 2 2 2 2 2 2 2 2 2 2 
2 2 . . . . 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 . 2 2 2 . . 2 2 2 2 2 
2 2 2 2 2 . 2 2 2 . . 2 2 2 2 2 
2 2 2 2 2 . 2 2 2 . . 2 2 2 2 2 
2 2 2 2 2 . . . . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . 2 2 2 2 2 2 2 2 . . 2 2 2 
2 2 . . . . 2 2 2 2 2 . . 2 2 2 
2 2 2 2 2 . 2 2 2 2 2 2 . 2 2 2 
2 2 2 2 2 . . . . . . 2 . 2 2 2 
2 2 2 2 2 2 2 2 2 2 . 2 . 2 2 2 
2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 
`, [myTiles.tile0,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.chestClosed,sprites.builtin.crowd4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "tile0":return tile0;
            case "transparency16":return transparency16;
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
