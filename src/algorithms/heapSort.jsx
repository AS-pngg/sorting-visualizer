export default async function heapSort(
arr,
setArray,
speed,
sleep
){

let a=[...arr]

let n=a.length

function heapify(n,i){

let largest=i
let l=2*i+1
let r=2*i+2

if(l<n && a[l]>a[largest]) largest=l
if(r<n && a[r]>a[largest]) largest=r

if(largest!==i){

[a[i],a[largest]]=[a[largest],a[i]]

heapify(n,largest)
}
}

for(let i=Math.floor(n/2)-1;i>=0;i--){
heapify(n,i)
}

for(let i=n-1;i>0;i--){

[a[0],a[i]]=[a[i],a[0]]

heapify(i,0)

setArray([...a])

await sleep(speed)
}

return a
}