export default async function insertionSort(
arr,
setArray,
setComparisons,
speed,
sleep
){

let a=[...arr]

for(let i=1;i<a.length;i++){

let key=a[i]

let j=i-1

while(j>=0 && a[j]>key){

setComparisons(c=>c+1)

a[j+1]=a[j]

j--

setArray([...a])

await sleep(speed)
}

a[j+1]=key
}

return a
}