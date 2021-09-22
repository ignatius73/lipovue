export default ()   =>({
    isLoading: true,
    entries: [
        { id: '1',
          date: new Date().toDateString(),
          title: "Cualquier título",
          slug:"titulo-con-guiones",
          photo:"la-foto-que-debe-subir",
          body:"lorem ipsum"
        
        },
        { id:'2', 
          date: new Date().toDateString(),
          title: "Cualquier título",
          slug:"titulo-con-guiones",
          photo:"la-foto-que-debe-subir",
          body:"lorem ipsum"
          
          },
          { id: '3',
            date: new Date().toDateString(),
            title: "Cualquier título",
            slug:"titulo-con-guiones",
            photo:"la-foto-que-debe-subir",
            body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque odio voluptatum provident consectetur voluptates quam repellat accusantium praesentium unde explicabo ad minus rerum quas debitis sequi blanditiis, placeat voluptatem voluptas."
          
          }
         
    ]
})