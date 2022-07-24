let badges = [{
    "type": "broadcaster",
    "version": "1",
    "url": "https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3"
},
{
    "type": "glhf-pledge",
    "version": "1",
    "url": "https://static-cdn.jtvnw.net/badges/v1/3158e758-3cb4-43c5-94b3-7639810451c5/3"
}
];
let urlsArray = '';
for (let i = 0; i < badges.length; i++) {
    let url = badges[i].url;
    let type = badges[i].type;
    urlsArray += `<img src="${url}" class="badge ${type}"></img>`;
}

console.log(urlsArray);