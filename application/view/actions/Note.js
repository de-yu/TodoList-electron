
const newNote = ()=>({
  type:"new"
})

const getNote = () =>({
    type:"get"
})

const updateNote = (updateNote) =>({
    type:"update" , 
    updateNote
})

export {newNote, getNote , updateNote}