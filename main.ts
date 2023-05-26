radio.setGroup(105)
basic.forever(function () {
    radio.sendString("" + (input.temperature()))
    basic.pause(5000)
})
