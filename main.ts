basic.showLeds(`
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    `)
basic.pause(5000)
basic.clearScreen()
basic.showString("SRIVIHAAN!")
basic.pause(5000)
basic.clearScreen()
music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.UntilDone)
basic.forever(function () {
    basic.showIcon(IconNames.Surprised)
})
