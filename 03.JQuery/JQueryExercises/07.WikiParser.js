function wikiParser(selector) {
    let text = $(selector).text()
    function replacer(chars, tag, text) {
        let currentPattern = RegExp(`(${chars})(.*?)(${chars})`)
        let matches = currentPattern.exec(text)
        while (currentPattern.test(text)) {
            let replaceString = `<${tag}>${matches[2]}<\/${tag}>`
            let stringToReplace = matches[0]
            text = text.replace(stringToReplace, replaceString)
            matches = currentPattern.exec(text)
        }
        return text
    }

    function linkReplacer1(text) {
        let currentPattern = RegExp('(/\\[\\[([^\'=\\[\\|]*?)]]')
        let matches = currentPattern.exec(text)
        while (currentPattern.test(text)) {
            let replaceString = `<a href="/wiki/${matches[2]}">${matches[2]}</a>`
            let stringToReplace = matches[0]
            text = text.replace(stringToReplace, replaceString)
            matches = currentPattern.exec(text)
        }
        return text
    }

    function linkReplacer2(text) {
        let currentPattern = RegExp('(\\[\\[([^\'=\\[]*?)\\|([^\'=\\[]*)]])')
        let matches = currentPattern.exec(text)
        while (currentPattern.test(text)) {
            let replaceString = `<a href="/wiki/${matches[2]}">${matches[3]}</a>`
            let stringToReplace = matches[0]
            text = text.replace(stringToReplace, replaceString)
            matches = currentPattern.exec(text)

        }
        return text
    }

    text = replacer('===', 'h3', text)
    text = replacer('==', 'h2', text)
    text = replacer('=', 'h1', text)
    text = replacer('\'\'\'', 'b', text)
    text = replacer('\'\'', 'i', text)
    text = linkReplacer1(text)
    text = linkReplacer2(text)

    $(selector).html(text)
}
//wikiParser('#wiki')