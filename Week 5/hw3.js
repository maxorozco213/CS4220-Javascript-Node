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

let responses = []

checkWebsiteResponseTime = (website, callback) => {
    setTimeout(function() {
        responses.push(callback());
    }, website.responseTime)
}

websiteResponseTime = (site) => {
    for (let i = 0; i < site.length; i++) {
        if (site[i].responseTime !== null) {
            checkWebsiteResponseTime(site[i], () => {
                console.log("obj", site[i])
                return site[i];
            })
        } else if (site[i].responseTime === null) {
            responses.push(site[i]);
        }
    }
}

console.log("func", responses);

// ------------------------- Question 2 ----------------------
