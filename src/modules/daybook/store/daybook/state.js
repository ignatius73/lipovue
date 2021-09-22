export default ()   =>({
    isLoading: true,
    entries: [
        { id: new Date().getTime() + Math.random(),
          date: new Date().toDateString(),
          title: "Cualquier título",
          slug:"titulo-con-guiones",
          photo:"la-foto-que-debe-subir",
          body:"lorem ipsum"
        
        },
        { id: new Date().getTime()+ Math.random(), 
          date: new Date().toDateString(),
          title: "Cualquier título",
          slug:"titulo-con-guiones",
          photo:"la-foto-que-debe-subir",
          body:"lorem ipsum"
          
          },
          { id: new Date().getTime()+  Math.random(),
            date: new Date().toDateString(),
            title: "Cualquier título",
            slug:"titulo-con-guiones",
            photo:"la-foto-que-debe-subir",
            body:"lorem ipsum"
          
          }
         
    ]
})