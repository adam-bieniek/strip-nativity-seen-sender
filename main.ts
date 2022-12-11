input.onPinPressed(TouchPin.P0, function () {
    red = 0
    green = 0
    bule = 0
})
input.onButtonPressed(Button.A, function () {
    red += 10
})
input.onPinPressed(TouchPin.P2, function () {
    green += -10
})
input.onButtonPressed(Button.AB, function () {
    bule += 10
})
input.onButtonPressed(Button.B, function () {
    green += 10
})
input.onPinPressed(TouchPin.P1, function () {
    bule += -10
})
let bule = 0
let green = 0
let red = 0
red = 0
green = 0
bule = 0
radio.setGroup(107)
basic.showLeds(`
    # # # . .
    # . . # .
    # # # # .
    # # # . .
    # . . # #
    `)
basic.pause(500)
basic.clearScreen()
basic.forever(function () {
    if (red >= 1) {
        radio.sendValue("red", red)
        basic.showString("red")
    } else if (green >= 1) {
        radio.sendValue("green", green)
        basic.showString("green")
    } else if (bule >= 1) {
        radio.sendValue("blue", bule)
        basic.showString("blue")
    }
})
