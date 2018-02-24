function domSearch(element, isSensitive) {
    let contentDiv = $('#content')
    let addDiv = $('<div></div>').addClass('add-controls').addClass('add')
    let addLabel = $('<label>').text('Enter text:')
    let addInput = $('<input>')
    let addBtn = $('<a></a>').addClass("button").text('Add')
    addDiv.append(addLabel).append(addInput).append(addBtn)
    contentDiv.append(addDiv)


    let searchDiv = $('<div></div>').addClass('add-controls')
    let searchLabel = $('<label>').text('Enter text:')
    let searchInput = $('<input>')
    let searchBtn = $('<a></a>').addClass("button").text('Search')

    searchDiv.append(searchLabel).append(searchInput).append(searchBtn)
    contentDiv.append(searchDiv)

    let resultDiv = $('<div></div>').addClass('result-controls').css('display', 'none')
    let list = $('<ul></ul>').addClass('items-list')

    function deleteItem() {
        $(this).parent().remove()
    }

    contentDiv.append(resultDiv)
    resultDiv.append(list)
    addBtn.on('click', function (el) {
        el.preventDefault()
        let liText = addInput.val()
        let item = $(`<li class="list-item"><strong>${liText}</strong></li>`)
        item.prepend('<a class="button">X</a>')
        list.append(item)
        resultDiv.css('display', 'block')
        addInput.val('')

    })
    $('#content').on('click','a.button', deleteItem())
}