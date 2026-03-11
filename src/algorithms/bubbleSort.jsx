export default async function bubbleSort(
arr,
setArray,
setComparisons,
setSwaps,
speed,
sleep
){

let a=[...arr]

for(let i=0;i<a.length;i++){

for(let j=0;j<a.length-i-1;j++){

setComparisons(c=>c+1)

if(a[j]>a[j+1]){

[a[j],a[j+1]]=[a[j+1],a[j]]

setSwaps(s=>s+1)

setArray([...a])

await sleep(speed)
}
}
}

return a
}