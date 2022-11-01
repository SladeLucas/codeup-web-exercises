"use strict";

function wait(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, num);
    })
};
//wait(1000).then(() => console.log('You\'ll see this after 1 second'));
//wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

function userLastCommit(username) {
    let commit = '';
    fetch("https://api.github.com/users/" + username + "/events", {headers: {'Authorization': "token " + MY_GITHUB_KEY}})
        .then((response) => {
            response.json().then((events) => {
                commit = (events[0].created_at);
                commit = commit.slice(0, 10);
                commit = commit.split('-');
                let onlyDate = commit.shift();
                    commit.push(onlyDate);
                    commit = commit.join('-');
                return commit;
            }).then(commit => console.log(`${username}'s last commit: ${commit}`))
        }).catch((err) => console.log(err));
}
userLastCommit('SladeLucas')
userLastCommit('MilesRaker')