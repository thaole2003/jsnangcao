const gameEvent = new Map([
    [17, "Goal"],
    [36, "substitute"],
    [47, "Goal"],
    [61, "substitute"],
    [64, "Yellow card"],
    [69, "Red card"],
    [70, "substitute"],
    [72, "substitute"],
    [76, "Goal"],
    [80, "Goal"],
    [92, "Yellow card"],
]);

//1
const event = new Set(gameEvent.values());
console.log(event);
//2
gameEvent.delete(64);
console.log(gameEvent);
//3
console.log(`1 sự kiện xảy ra, trung bình mỗi ${90 / gameEvent.size} phút`);
const time = [...gameEvent.keys()].pop();
console.log(`1 sự kiện xảy ra, trung bình mỗi ${time / gameEvent.size} phút`);
//4
for (const [key, value] of gameEvent.entries()) {
    const hiep = key < 45 ? "hiệp1" : "hiệp2";
    console.log(`${hiep} Phút: ${key} Có: ${value}`);
}