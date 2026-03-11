import {useState,useEffect} from "react"
import {motion} from "framer-motion"

import Controls from "./Controls"
import Stats from "./Stats"
import AlgorithmInfo from "./AlgorithmInfo"

import bubbleSort from "../algorithms/bubbleSort"
import selectionSort from "../algorithms/selectionSort"
import insertionSort from "../algorithms/insertionSort"
import heapSort from "../algorithms/heapSort"

const sleep=(ms)=>new Promise(r=>setTimeout(r,ms))

export default function Visualizer(){

const [array,setArray]=useState([])
const [size,setSize]=useState(40)
const [speed,setSpeed]=useState(40)

const [comparisons,setComparisons]=useState(0)
const [swaps,setSwaps]=useState(0)

const [algorithm,setAlgorithm]=useState("bubble")

const [running,setRunning]=useState(false)
const [paused,setPaused]=useState(false)

useEffect(()=>{

generateRandom()

},[size])

function generateRandom(){

let arr=[]

for(let i=0;i<size;i++){
arr.push(Math.floor(Math.random()*300)+20)
}

setArray(arr)
setComparisons(0)
setSwaps(0)
}

function generateReverse(){

let arr=[]

for(let i=size;i>0;i--){
arr.push(i*5)
}

setArray(arr)
}

function generateNearlySorted(){

let arr=[]

for(let i=0;i<size;i++){
arr.push(i*5)
}

for(let i=0;i<5;i++){

let a=Math.floor(Math.random()*size)
let b=Math.floor(Math.random()*size)

[arr[a],arr[b]]=[arr[b],arr[a]]
}

setArray(arr)
}

function reset(){

generateRandom()

setComparisons(0)
setSwaps(0)
setRunning(false)
}

async function startSort(){

setRunning(true)

let result

if(algorithm==="bubble")
result=await bubbleSort(array,setArray,setComparisons,setSwaps,speed,sleep)

if(algorithm==="selection")
result=await selectionSort(array,setArray,setComparisons,setSwaps,speed,sleep)

if(algorithm==="insertion")
result=await insertionSort(array,setArray,setComparisons,speed,sleep)

if(algorithm==="heap")
result=await heapSort(array,setArray,speed,sleep)

setArray(result)

setRunning(false)
}

return(

<div className="p-6">

<h1 className="text-3xl font-bold text-center mb-6">
Sorting Visualizer
</h1>

<Controls
generateRandom={generateRandom}
generateReverse={generateReverse}
generateNearlySorted={generateNearlySorted}
startSort={startSort}
reset={reset}
paused={paused}
setPaused={setPaused}
running={running}
algorithm={algorithm}
setAlgorithm={setAlgorithm}
size={size}
setSize={setSize}
speed={speed}
setSpeed={setSpeed}
/>

<Stats
comparisons={comparisons}
swaps={swaps}
/>

<AlgorithmInfo
algorithm={algorithm}
/>

<div className="flex items-end justify-center h-105 gap-0.5">

{array.map((value,index)=>(

<motion.div
key={index}
layout
initial={{height:0}}
animate={{height:value}}
transition={{duration:0.2}}
className="bg-green-500 w-2"
/>

))}

</div>

</div>

)

}