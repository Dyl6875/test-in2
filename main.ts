radio.setGroup(105)
basic.forever(function () {
    radio.sendString("" + (input.temperature()))
})
