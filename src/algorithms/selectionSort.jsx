export default async function selectionSort(
arr,
setArray,
setComparisons,
setSwaps,
speed,
sleep
){

let a=[...arr]

for(let i=0;i<a.length;i++){

let min=i

for(let j=i+1;j<a.length;j++){

setComparisons(c=>c+1)

if(a[j]<a[min]){

min=j
}
}

if(min!==i){

[a[i],a[min]]=[a[min],a[i]]

setSwaps(s=>s+1)

setArray([...a])

await sleep(speed)
}
}

return a
}