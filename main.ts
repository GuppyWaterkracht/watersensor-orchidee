input.onButtonPressed(Button.A, function () {
    if (pins.analogReadPin(AnalogPin.P0) <= 200) {
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
    } else if (pins.analogReadPin(AnalogPin.P0) <= 600 && pins.analogReadPin(AnalogPin.P0) > 400) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(1000)
        basic.clearScreen()
    } else if (pins.analogReadPin(AnalogPin.P0) <= 800 && pins.analogReadPin(AnalogPin.P0) > 600) {
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(1000)
        basic.clearScreen()
    } else {
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
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) < 200) {
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.pause(2000)
    }
})
