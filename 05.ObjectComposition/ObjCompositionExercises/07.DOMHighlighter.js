    function domHighlight(selector) {
    let nodeList = $selector.children()
        let nodeObjArr = []
        $.each(nodeList, function (key, value) {
            let nodeObj = {}
            let nodeName = key
            let childrenCount = value.find().length
            nodeObj.key = childrenCount
            nodeObjArr.push(nodeObj)
        })


    }
domHighlight('sidebar')