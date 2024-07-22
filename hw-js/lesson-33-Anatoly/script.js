const text = "JavaScript дійсно є дуже цікавою мовою програмування. Вона є однією з найпопулярніших мов програмування у світі і є основною мовою програмування для веб-сторінок. javaScript є легкою, інтерпретованою (або компільованою в режимі реального часу) мовою програмування з функціями першого класу. Хоча вона найвідоміша як мова сценаріїв для веб-сторінок, багато не-браузерних середовищ також використовують її. javascript є мовою програмування, заснованою на прототипах, багатопарадигмальною, однопотоковою, динамічною мовою, що підтримує об’єктно-орієнтований, імперативний та декларативний (наприклад, функціональне програмування) стилі."

const patternWord = /JavaScript/gi
const patternSentence = /\w+\W+/g
const patternGap = /\S+/g
const resultWord = text.match(patternWord)
const resultSetense = text.match(patternSentence)
const resultGap = text.match(patternGap)
console.log(resultWord);
console.log(resultSetense);
console.log(resultGap);