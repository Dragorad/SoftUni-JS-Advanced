

function bugTracker(command) {
    let id = (function () {
        let code = 0
        return function () {
            return code++
        }
    })()
    let commandSplit = command.split('(')
    let commandName = commandSplit[0].toString()
    let commandArgs = commandSplit[1].toString().replace(')', '')
    let reportsList = []
    switch (commandName) {
        case 'createReport': {
            let argsList = commandArgs.split(', ')
            let author = argsList[0],
                arg2 = argsList[1], arg3 = argsList[2],
                arg4 = argsList[3]
            createReport(author, arg2, arg3, arg4)
        }
            break
        case 'setStatus': {

            setStatus(commandArgs)
        }
            break
        case 'output': {

            output(commandArgs)
        }
            break
        case 'remove': {

            remove(Number(commandArgs))
        }
            break
    }

    function createReport(author, description, reproducible, severity) {
        let reportObj = {
            ID :id,
            author: author,
            description: description,
            reproducible: reproducible,
            severity: severity,
            status: 'Open'
        }
        reportsList.push(reportObj)
        console.log(reportObj.ID)

        return reportObj
    }


    function setStatus(id, newStatus) {
        let target = reportsList.find(d => d['id'] === id)
        target.status = newStatus
    }

    function remove(id) {
        reportsList.delete(d => d['id'] = id)
    }

    function sort(parameter) {

    }

    function output(selector) {
        for (let report of reportsList) {
            let reportDiv =
                $(`<div id="report_${this.ID}" class="report">
                  <div class="body">
                    <p>${this.description}</p>
                  </div>
                  <div class="title">
                    <span class="author">Submitted by: ${this.author}</span>
                    <span class="status">${this.status} | ${this.severity}</span>
                    </div>
                </div>`)
            $(selector).append(reportDiv)
        }
    }
}

bugTracker('createReport(mama, papaDon, reproduct, severity )')
bugTracker('createReport(mama2, papa2Don, rep4roduct, 2severity )')
bugTracker('output("#wrapper")')