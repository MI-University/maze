$(document).ready(function () {
  var gameStarted = false
  var gameLost = false

  function loseGame() {
    $('.boundary').addClass('youlose')
    $('#status').text('You lose!')
    gameLost = true
  }

  function resetGame() {
    $('.boundary').removeClass('youlose')
    $('#status').text('Click the "S" to begin.')
    gameLost = false
  }

  $('.boundary').mouseover(function () {
    if (gameStarted) {
      loseGame()
      gameStarted = false
    }
  })

  $('#end').mouseover(function () {
    if (!gameLost && gameStarted) {
      $('#status').text('You win!')
      gameStarted = false
    }
  })

  $('#start').click(function () {
    gameStarted = true
    resetGame()
  })

  $('#maze').mouseleave(function () {
    if (!gameLost && gameStarted) {
      loseGame()
    }
  })
})
