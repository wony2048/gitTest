// const enumData = require('./enum');

// console.log(enumData);
// console.log(enumData.eBattleDifficulty1);

// const e1 = require('./e1');
// console.log(e1);

// require('./e1');

// // console.log(require('./e1'));
// console.log(eBattleDifficulty1);

const room = {};

room['id'] = 1;
room['pw'] = 2;

console.log(room);

// 1. 1111111111111111
// 2. 2222222222222222
// 3. 3333333333333333

const PawnBattleInfoRet = require('./PawnBattleInfoRet');

async function pawnBattleInfo() {
    return await new PawnBattleInfoRet().init(130);
}

console.log(pawnBattleInfo().then(obj => console.log(obj)));

const key = 'users';

const Queue = {};
Queue[key] = [];
Queue[key].push(1001);
Queue[key].push(1002);
Queue[key].push(1003);

console.log('Queue index', Queue);
console.log('Queue index', Queue[key].indexOf(1001));

const REDIS_INFO = require('./redis.js');
console.log(REDIS_INFO.getClient());
