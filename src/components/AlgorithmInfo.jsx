const data={

bubble:{
name:"Bubble Sort",
desc:"Repeatedly swaps adjacent elements.",
time:"O(n²)"
},

selection:{
name:"Selection Sort",
desc:"Selects minimum element each pass.",
time:"O(n²)"
},

insertion:{
name:"Insertion Sort",
desc:"Builds sorted array one element at a time.",
time:"O(n²)"
},

merge:{
name:"Merge Sort",
desc:"Divide and conquer merge algorithm.",
time:"O(n log n)"
},

quick:{
name:"Quick Sort",
desc:"Partition around pivot.",
time:"O(n log n)"
},

heap:{
name:"Heap Sort",
desc:"Uses binary heap structure.",
time:"O(n log n)"
}

}

export default function AlgorithmInfo({algorithm}){

const info=data[algorithm]

return(

<div className="text-center text-gray-300 mb-4">

<h3 className="text-xl font-bold">{info.name}</h3>

<p>{info.desc}</p>

<p>Time Complexity: {info.time}</p>

</div>

)

}