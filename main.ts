input.onPinReleased(TouchPin.P2, function () {
    serial.writeLine("h:5")
})
input.onPinReleased(TouchPin.P0, function () {
    serial.writeLine("h:1")
})
input.onButtonPressed(Button.A, function () {
    a = a + 1
    if (a % 2 == 1) {
        serial.writeLine("a:1")
    } else {
        serial.writeLine("a:0")
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    serial.writeLine("l:1")
    serial.writeLine("r:0")
    basic.pause(200)
    serial.writeLine("l:0")
})
input.onButtonPressed(Button.B, function () {
    b = b + 1
    if (b % 2 == 1) {
        serial.writeLine("b:1")
    } else {
        serial.writeLine("b:0")
    }
})
input.onGesture(Gesture.TiltRight, function () {
    serial.writeLine("r:1")
    serial.writeLine("l:0")
    basic.pause(200)
    serial.writeLine("r:0")
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    serial.writeLine("t:-1")
})
input.onPinReleased(TouchPin.P1, function () {
    serial.writeLine("h:3")
})
let a = 0
let b = 0
