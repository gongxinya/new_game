control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    weaponVol = 0
    serial.writeLine("" + weapon + ":0")
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    weaponVol = 1
    while (weaponVol == 1) {
        music.setVolume(10)
        music.playTone(622, music.beat(BeatFraction.Sixteenth))
        basic.pause(200)
    }
    serial.writeLine("" + weapon + ":1")
    basic.pause(200)
})
// Press to toggle pause
input.onButtonPressed(Button.AB, function () {
    serial.writeLine("p:1")
})
// Press to shield on or shield off
input.onButtonPressed(Button.B, function () {
    serial.writeLine("s:1")
    basic.pause(200)
    serial.writeLine("s:0")
})
// Press to switch the weapon
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    a = a + 1
    if (a % 2 == 1) {
        weapon = "b"
    } else {
        weapon = "a"
    }
})
serial.onDataReceived(serial.readLine(), function () {
	
})
let roll = 0
let pitch = 0
let a = 0
let weaponVol = 0
let weapon = ""
let score = ""
let receivedVal
weapon = "a"
basic.forever(function () {
    pitch = input.rotation(Rotation.Pitch)
    roll = input.rotation(Rotation.Roll)
    // Thurst
    if (pitch < -15) {
        serial.writeLine("t:-1")
        basic.pause(200)
        serial.writeLine("t:0")
    } else if (pitch > 15) {
        serial.writeLine("t:1")
        basic.pause(200)
        serial.writeLine("t:0")
    } else {
        serial.writeLine("t:0")
    }
    // Turn left or turn right
    if (roll < -15) {
        serial.writeLine("l:1")
        basic.pause(200)
        serial.writeLine("l:0")
    } else if (pitch > 15) {
        serial.writeLine("r:1")
        basic.pause(200)
        serial.writeLine("r:0")
    } else {
        serial.writeLine("l:0")
        serial.writeLine("r:0")
    }
    receivedVal = serial.readLine().split(":")
    if (receivedVal[0] == "l") {
        basic.showString("" + (receivedVal[1]))
    }
})
