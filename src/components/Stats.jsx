export default function Stats({comparisons,swaps}){

return(

<div className="flex justify-center gap-12 mb-4 text-lg">

<div>
Comparisons: {comparisons}
</div>

<div>
Swaps: {swaps}
</div>

</div>

)
}