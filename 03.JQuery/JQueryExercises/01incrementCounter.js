function increment(selector) {
    let container = $(selector)
    let fragment = document.createDocumentFragment()
    let txtArea = $('<textarea>').addClass('counter').val(0).attr('disabled', true)
    let incremBtn = $('<button></button>')
        .addClass("btn").attr('id', "incrementBtn").text("Increment")
    let addBtn = $('<button class="btn" id="addBtn"></button>').text("Add")
    let list = $('<ul></ul>').addClass('results')

    incremBtn.on('click', function () {
        txtArea.val(+txtArea.val() + 1)
    })

    addBtn.on('click', function () {
        let li = $(`<li>${txtArea.val()}</li>`)
        li.appendTo(list)

    })
    txtArea.appendTo(fragment)
    incremBtn.appendTo(fragment)
    addBtn.appendTo(fragment)
    list.appendTo(fragment)

    container.append(fragment)
    container.append(list)
    console.log('Hello')
}
