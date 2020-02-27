// ------------------------- Question 1 ----------------------

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

let responses = [];
let noResponse = [];

function checkWebsiteResponseTime(website, callback) {
    setTimeout(() => {
        if (website.responseTime) {
            callback(true);
        } else {
            callback(false);
        }
    }, website.responseTime)
}

function websiteResponseTimes(websites) {
    websites.forEach(site => {
        checkWebsiteResponseTime(site, hasResponse => {
            if (hasResponse) {
                responses.push(site)
                console.log(responses);
            } else {
                noResponse.push(site)
                console.log(noResponse);
            }
        })
    });
}

websiteResponseTimes(websites);


// https://stackoverflow.com/questions/22442321/callback-function-example#22442533

// ------------------------- Question 2 ----------------------
