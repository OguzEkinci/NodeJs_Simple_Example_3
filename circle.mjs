const countingArea = (r) => {
    let area = 3.14 * r * r
    console.log(`Dairenin alanı: ${area}`)
}

const countingcircumference = (r) => {
    let circumference = 2 * 3.14 * r
    console.log(`Dairenin çevresi: ${circumference}`)
}

export {
    countingArea,
    countingcircumference
}