function sortTickets(inputarr, criterya) {
    class Ticket {
        constructor([destination, price, status]) {
            [this.destination, this.price, this.status] = [destination, Number(price), status]
        }
    }

    let ticketsArr = new Map()
    for (let item in inputarr) {

        ticketsArr.set(item, new Ticket(inputarr[item].split("|")))
    }
    let sortedTickets = [...ticketsArr.entries()].sort((a, b) => {
        if (a[1][criterya] === b[1][criterya]) {
            return a[0] - b[0]
        } else {
            if (criterya === 'price') {
                return a[1][criterya] - b[1][criterya]
            } else {
                return a[1][criterya].localeCompare(b[1][criterya])
            }
        }
    })
    sortedTickets = sortedTickets.map(a => a = a[1])
    return sortedTickets
}

sortTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'
)
