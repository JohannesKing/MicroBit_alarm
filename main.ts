input.onButtonPressed(Button.A, function () {
    alarmed = 1
    music.playMelody("C C5 C C5 - - - - ", 500)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.magneticForce(Dimension.Strength))
})
input.onGesture(Gesture.Shake, function () {
    if (alarmed == 1) {
        alarmed = 0
        Alarm = 1
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    alarmed = 0
    Alarm = 0
    music.stopAllSounds()
    basic.clearScreen()
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
})
let alarmed = 0
let Alarm = 0
Alarm = 0
basic.showIcon(IconNames.Diamond)
basic.showIcon(IconNames.SmallDiamond)
music.playMelody("C D E F G A B C5 ", 500)
basic.pause(5000)
alarmed = 1
music.playMelody("C C5 C C5 - - - - ", 500)
basic.forever(function () {
    if (alarmed == 1) {
        basic.showLeds(`
            # # . . .
            # . . . .
            . . . . .
            . . . . #
            . . . # #
            `)
        basic.showLeds(`
            # # # . .
            . . . . .
            . . . . .
            . . . . .
            . . # # #
            `)
        basic.showLeds(`
            . # # # .
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            `)
        basic.showLeds(`
            . . # # #
            . . . . .
            . . . . .
            . . . . .
            # # # . .
            `)
        basic.showLeds(`
            . . . # #
            . . . . #
            . . . . .
            # . . . .
            # # . . .
            `)
        basic.showLeds(`
            . . . . #
            . . . . #
            # . . . #
            # . . . .
            # . . . .
            `)
        basic.showLeds(`
            . . . . .
            # . . . #
            # . . . #
            # . . . #
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . #
            . . . . #
            . . . . #
            `)
    }
})
basic.forever(function () {
    if (Alarm == 1) {
        music.playMelody("C5 - C5 - C5 - C5 - ", 500)
        basic.showIcon(IconNames.Chessboard)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) < 200) {
        if (alarmed == 1) {
            alarmed = 0
            Alarm = 1
        }
    }
})
