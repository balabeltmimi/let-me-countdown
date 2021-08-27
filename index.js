(() => {

const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24

function setElementInnerText(id, text) {
  const element = document.getElementById(id)
  element.innerText = text
}

function countDown() {
  const now = new Date().getTime()
  const newYear = new Date(`August 19, 2022 23:59:59`).getTime()
  const unixTime = newYear - now

  setElementInnerText('days', Math.floor(unixTime / DAY))
  setElementInnerText('hours', Math.floor(unixTime % DAY / HOUR))
  setElementInnerText('minutes', Math.floor(unixTime % HOUR / MINUTE))
  setElementInnerText('seconds', Math.floor(unixTime % MINUTE / SECOND))

} 

function run() {
  countDown()
  setInterval(countDown, SECOND)
} run()

})();