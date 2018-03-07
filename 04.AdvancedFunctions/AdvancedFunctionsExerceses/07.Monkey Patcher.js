function result(command) {
    let self = this
    let downVotes = self['downvotes']
    let upVotes = self['upvotes']
    let totalVotes = upVotes + downVotes
    let commands = {
        upvote: () => self.upvotes += 1,
        balance: () => self.upvotes - self.downvotes,
        downvote: () => self.downvotes += 1,
        score: () => {
            let falseAdd = Math.ceil(Math.max(upVotes, downVotes) * 0.25)
            let totalCount = downVotes + upVotes
            let reportDownVotes = totalCount > 50 ? self.downvotes + falseAdd : self['downvotes']
            let reportUpVotes = totalCount > 50 ? self.upvotes + falseAdd : self.upvotes
            let balance = reportUpVotes - reportDownVotes

            let report = [reportUpVotes, reportDownVotes, balance, self['rating']]
            return report
        },
    }

    if (upVotes > totalVotes * 0.66) {
        self['rating'] = 'hot'
    } else {
        if (downVotes > upVotes && totalVotes >= 10) {
            self['rating'] = 'unpopular'
        }
        if (upVotes >= downVotes) {
            if (upVotes >= 100 || downVotes >= 100) {
                self['rating'] = 'controversial'
            }
        }
    }
    if (downVotes + upVotes < 10) {
        self['rating'] = 'new'
    }
    return commands[command]()

}

let forumPost ={
    id: '1234',
    author: 'author name',
    content: 'these fields are irrelevant',
    upvotes: 4,
    downvotes: 5
}

var answer = result.call(forumPost, 'score')

console.log(answer)
var expected = [1, 0, 1, 'new']
// solution.call(forumPost, 'upvote')
// solution.call(forumPost, 'downvote')
// let score = solution.call(forumPost, 'score') // [127, 127, 0, 'controversial']
// for (let i = 0; i < 50; i++) {
//
//     solution.call(forumPost, 'downvote')  // (executed 50 times)
// }
//
// score = solution.call(forumPost, 'score')     // [139, 189, -50, 'unpopular']
// solution.call(forumPost, 'upvote')