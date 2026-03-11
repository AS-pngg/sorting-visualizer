export default function Controls({
generateRandom,
generateReverse,
generateNearlySorted,
startSort,
reset,
paused,
setPaused,
running,
algorithm,
setAlgorithm,
size,
setSize,
speed,
setSpeed
}){

return(

<div className="flex flex-wrap gap-3 justify-center mb-6">

<button onClick={generateRandom} className="px-4 py-2 bg-blue-600 rounded">
Random
</button>

<button onClick={generateReverse} className="px-4 py-2 bg-blue-600 rounded">
Reverse
</button>

<button onClick={generateNearlySorted} className="px-4 py-2 bg-blue-600 rounded">
Nearly Sorted
</button>

<button
onClick={startSort}
disabled={running}
className="px-4 py-2 bg-green-600 rounded"
>
Start
</button>

<button
onClick={()=>setPaused(!paused)}
className="px-4 py-2 bg-yellow-600 rounded"
>
{paused ? "Resume":"Pause"}
</button>

<button
onClick={reset}
className="px-4 py-2 bg-red-600 rounded"
>
Reset
</button>

<select
value={algorithm}
onChange={(e)=>setAlgorithm(e.target.value)}
className="bg-gray-800 px-3 py-2 rounded"
>

<option value="bubble">Bubble</option>
<option value="selection">Selection</option>
<option value="insertion">Insertion</option>
<option value="merge">Merge</option>
<option value="quick">Quick</option>
<option value="heap">Heap</option>

</select>

<div className="flex flex-col text-sm">
<label>Array Size</label>

<input
type="range"
min="10"
max="150"
value={size}
onChange={(e)=>setSize(e.target.value)}
/>
</div>

<div className="flex flex-col text-sm">
<label>Speed</label>

<input
type="range"
min="10"
max="200"
value={speed}
onChange={(e)=>setSpeed(e.target.value)}
/>
</div>

</div>

)
}