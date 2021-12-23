import members from './members.js';

let memberYB = members.filter(member => member.group === 'YB');
let memberOB = members.filter(member => member.group === 'OB');

console.log(members.length);
console.log(`YB: ${memberYB.length}`);
console.log(`OB: ${memberOB.length}`);