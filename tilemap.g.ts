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
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020202020202020202020202020202040000020200000000000002020202020202000202000202020202020202020202020000000002020202020202020202020202020200020202000002020202020202020202000202020000020202020202020202020002020200000202020202020202020200000000000000000002020202020202020202020202020200000202020000000000000000000000000202020200020202020202020200000202020202000000000202020202000002020202020202020002020202020200020202020202020200000000000002000202020202020202020202020200020002020202020202020202020202030202020202`, img`
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
`, [myTiles.tile0,sprites.builtin.coral0,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.chestClosed,sprites.builtin.crowd4], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100002020202020202020202020202020202040000020200000000000002020202020202000202000202020202020202020202020000000002020202020202020202020202020200020202000002020202020202020202000202020000020202020202020202020002020200000202020202020202020200000000000000000002020202020202020202020202020200000202020000000000000000000000000202020200020202020202020200000202020202000000000202020202000002020202020202020002020202020200020202020202020200000000000002000202020202020202020202020200020002020202020202020202020202030202020202`, img`
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
`, [myTiles.transparency16,sprites.builtin.coral0,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.chestClosed,sprites.builtin.crowd4], TileScale.Sixteen);
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
