basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
    }
    if (input.pinIsPressed(TouchPin.P1)) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    }
})
