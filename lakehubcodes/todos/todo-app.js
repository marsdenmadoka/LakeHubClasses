const todos =[
    {
    text:'Buy house',
    completed:false
},

{
    text:'design',
    completed:true
},
{
    text:'go to gym',
    completed:true
},

]

const renderTools=function(todosItem){

    todosItem.forEach(function(todo){
        const p = document.createElement("p") //p is paragaraph
      p.textContent=todo.text;
      document.getElementById("todos").appendChild(p)

    })


    const incompletedtodos= todosItem.filter(function(todo){
        return !todo.completed    
    })
    const summary=document.createElement("h2")
    summary.textContent=`you have ${incompletedtodos.length} todos left`
    document.getElementById("todos").appendChild(summary)

    

};

renderTools(todos)
//https://eloquentjavascript.net/

// const names=document.createElement("p")
// names.textContent=`The incomplete todos are ${}`