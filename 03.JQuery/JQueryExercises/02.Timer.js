function timer() {
    let time = 0
    let timerUp
    $('#start-timer').on('click', (function () {
              timerUp = setInterval(function () {
                let seconds = time % 60
                $('#seconds').text((seconds < 10 ? '0' : '') + seconds)
                let minutes = Math.floor(seconds / 60)
                $('#minutes').text((minutes % 60 < 10 ? '0' : '') + minutes)
                let hours = Math.floor(minutes / 60)
                $('#hours').text((hours % 60 < 10 ? '0' : '') + hours)
                time++
                console.log(seconds)
            }, 1000)
        }
    ))

    $('#stop-timer').on('click', clearInterval(timerUp))
}
