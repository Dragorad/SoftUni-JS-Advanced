function createBook(container, title, author, isCode) {
    let id = 1

    let wrapperDiv = $('<div style="border: medium none"></div>').addClass(`book${id}`)
    let titleParagraph = $('<p></p>').text(title).addClass('title')
    let authorParagraph = $('<p></p>').text(author).addClass('author')
    let isCodeParagraph = $('<p></p>').text(isCode).addClass('isbn')
    wrapperDiv.append(titleParagraph)
        .append(authorParagraph)
        .append(isCodeParagraph)
        function select() {
            $(this).parent().css('border','2px solid blue')
        }
        function deselect() {
            $(this).parent().css('border','none')
        }

        wrapperDiv.append($('<button></button>').text('Select').on('click', select))
        .append($('<button></button>').text('Deselect').on('click', deselect))

    $(container).append(wrapperDiv)
}

