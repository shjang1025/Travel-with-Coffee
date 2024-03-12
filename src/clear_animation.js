function clearRain() {
    const raindrops = document.querySelectorAll('.raindrop')
    raindrops.forEach(raindrop => raindrop.parentNode.removeChild(raindrop));
}

function clearDrizzle() {
    const drizzles = document.querySelectorAll('.drizzle')
    drizzles.forEach(drizzle => drizzle.parentNode.removeChild(drizzle));

}

function clearSnow() {
    const snowflakes = document.querySelectorAll('.snowflake')
    snowflakes.forEach(snowflake => snowflake.parentNode.removeChild(snowflake));
}

export {clearRain, clearDrizzle, clearSnow}