basic.forever(function () {
    cuteBot.moveTime(cuteBot.Direction.forward, 255, 1)
    basic.pause(1000)
    cuteBot.moveTime(cuteBot.Direction.left, 255, 1)
    cuteBot.moveTime(cuteBot.Direction.right, 0, 1)
    basic.pause(1000)
    cuteBot.moveTime(cuteBot.Direction.left, 0, 1)
    cuteBot.moveTime(cuteBot.Direction.right, 255, 1)
    basic.pause(1000)
    cuteBot.moveTime(cuteBot.Direction.backward, 255, 1)
    basic.pause(1000)
})
