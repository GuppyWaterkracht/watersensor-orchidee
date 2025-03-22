input.onButtonPressed(Button.A, function () {
    if (pins.analogReadPin(AnalogPin.P0) <= 400) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
        basic.pause(1000)
        basic.clearScreen()
    } else if (pins.analogReadPin(AnalogPin.P0) <= 400 && pins.analogReadPin(AnalogPin.P0) > 200) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
        basic.pause(1000)
        basic.clearScreen()
    } else if (pins.analogReadPin(AnalogPin.P0) <= 0 && pins.analogReadPin(AnalogPin.P0) > 400) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(1000)
        basic.clearScreen()
    } else if (pins.analogReadPin(AnalogPin.P0) <= 700 && pins.analogReadPin(AnalogPin.P0) > 600) {
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(1000)
        basic.clearScreen()
    } else if (pins.analogReadPin(AnalogPin.P0) <= 1000 && pins.analogReadPin(AnalogPin.P0) > 800) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) < 200) {
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.pause(2000)
    }
})
