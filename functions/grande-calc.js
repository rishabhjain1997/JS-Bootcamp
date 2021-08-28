let gradeCalculator = function(studentScore, totalScore = 100) {
    if (typeof studentScore !== 'number' || typeof totalScore !== 'number') {
        throw Error('Arguments must be numbers')
    }
    let percentage = (studentScore / totalScore) * 100
    let grade
    if (percentage > 90) {
        grade = 'A'
    } else if (percentage > 80) {
        grade = 'B'
    }

    if (percentage > 70) {
        grade = 'C'
    }

    if (percentage > 60) {
        grade = 'D'
    }

    if (percentage > 50) {
        grade = 'E'
    } else {
        grade = 'F'
    }

    return `You got a ${grade} (${percentage})!`
}

try { console.log(gradeCalculator(50, '100')) } catch (e) {
    console.log(e.message)
}