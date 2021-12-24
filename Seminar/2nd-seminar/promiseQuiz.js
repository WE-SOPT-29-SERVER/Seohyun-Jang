const members = require("./members");

const getOnline = members => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = members.filter(o => o.location === "online");
            resolve(data);
        }, 500);
    });
};

const getOffline = members => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const data = members.filter(o => o.location === "offline");
        resolve(data);
    }, 500);
    });
};

const getYB = members => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = members.filter(o => o.group === "YB");
            resolve(data);
        }, 500);
    });
};

const getOB = members => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = members.filter(o => o.group === "OB");
            resolve(data);
        }, 500);
    });
};

getOnline(members).then(getOB).then(console.log);
getYB(members).then(getOffline).then(console.log);

const onlineOB = async (members) => {
    const onlineMembers = await getOnline(members);
    const onlineOBMembers = await getOB(onlineMembers);
    console.log(onlineOBMembers);
}

onlineOB(members);