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
music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
})
