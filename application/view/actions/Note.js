
const newNote = ()=>({
  type:"new"
})



const updateNote = (updateNote) =>({
    type:"update" , 
    updateNote
})

export {updateNote}