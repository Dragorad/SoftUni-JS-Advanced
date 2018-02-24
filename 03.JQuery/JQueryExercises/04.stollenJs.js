function domSearch(selector, isSensitive) {

    let parentDiv = $(selector);
    parentDiv.attr('class', 'items-control');

    let addDiv = $('<div class="add-controls"></div>');
    let inputLabel = $('<label>Enter text: </label>');
    let input = $('<input>');
    let addAncor = $('<a class="button" style="display: inline-block">Add</a>');

    inputLabel.append(input);
    addDiv.append(inputLabel);
    addDiv.append(addAncor);
    parentDiv.append(addDiv);


    let div3 = $('<div class="result-controls"></div>');
    let ul = $('<ul class="items-list"></ul>');
    div3.append(ul);
    parentDiv.append(div3);


    addAncor.on('click', function () {
        let textValue = input.val();
        let li = $('<li class="list-item"></li>');
        let anchor = $('<a class="button">X</a>');
        anchor.click({li: li}, deleteItem);

        let strong = $('<strong></strong>');
        strong.text(textValue);

        li.append(anchor);
        li.append(strong);
        ul.append(li);
        search();
    });

    function deleteItem(event) {
        event.data.li.remove();
        search();
    }


}