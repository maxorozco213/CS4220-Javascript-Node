const divider = "\n--------------------------------------------------------------\n\n";

// ------------------------- Question 1 --------------------------

const websites = [
    {
        site: 'yahoo.com',
        responseTime: 50,
        unit: 'ms'
    },
    {
        site: 'google.com',
        responseTime: 10,
        unit: 'ms'
    },
    {
        site: 'reddit.com',
        responseTime: null,
        unit: 'ms'
    },
    {
        site: 'slack.com',
        responseTime: 80,
        unit: 'ms'
    },
    {
        site: 'github.com',
        responseTime: 30,
        unit: 'ms'
    }
];

const responses = [];
const noResponse = [];


function checkWebsiteResponseTime(website, callback) {
    setTimeout(() => {
        if (website.responseTime) {
            callback(true, website);
        } else {
            callback(false, website);
        }
    }, website.responseTime)
}

function websiteResponseTimes(websites) {
    let count = 0;

    websites.forEach(site => {
        checkWebsiteResponseTime(site, (hasResponse, resultSite) => {
            if (hasResponse) {
                responses.push({
                    site: resultSite.site,
                    responseTime: resultSite.responseTime
                })
            } else {
                noResponse.push({
                    site: resultSite.site,
                    responseTime: resultSite.responseTime
                })
            }

            count++;

            if (count === websites.length) {
                console.log(
                    "\nAnswer 1",
                    divider, 
                    "No response: ", noResponse,
                    "\nResponses: ", responses,
                    divider
                )
            }
        })
    });
}

websiteResponseTimes(websites);

// ------------------------- Question 2 --------------------------

const database = [
    {
        id: 1,
        entry: 'Space X',
        twitter: '@spacex'
    },
    {
        id: 2,
        entry: 'NASA',
        twitter: null
    },
    {
        id: 3,
        entry: 'Apple',
        twitter: '@apple'
    },
    {
        id: 4,
        entry: 'Microsoft',
        twitter: '@microsoft'
    },
    {
        id: 5,
        entry: 'Reddit',
        twitter: null
    }
];

bucketTwitters = (account) => {
    return new Promise((resolve, reject) => {
        if(account.twitter !== null) {
             return resolve(account);
        } else {
            return reject(account);
        }
    })
}

loopAccountPromises = (database) => {
    const finalObj = {
        found: [],
        notFound: []
    }

    database.forEach(data => {
        bucketTwitters(data)
            .then(acc => {finalObj.found.push(acc)})
            .catch(error => {finalObj.notFound.push(error)});
    })   

    return finalObj;
}

const answer = loopAccountPromises(database);

setTimeout(() => {
    console.log(
        "Answer 2",
        divider, 
        answer,
        divider
    )
    // loopAccountPromises(database)
}, 300)
