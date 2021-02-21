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
    text:'my life as a shiling',
    completed:false
},
{
    text:'we hold the truths',
    completed:false
},
{
    text:'javscript is mine',
    completed:true
},

]

const renderTools=function(todosItem){
         //getting out todos
    todosItem.forEach(function(todo){
        const p = document.createElement("p") //p is paragaraph
      p.textContent=todo.text;
      document.getElementById("todos").appendChild(p) 

    })

         //getting the incomplete todos
    const incompletedtodos = todosItem.filter(function(todo){
        return !todo.completed    
    })

    const summary=document.createElement("h2") //h2 is a heading 
    summary.textContent=`you have ${incompletedtodos.length} incomplete todos left`

    document.getElementById("todos").appendChild(summary)
           //displaying the incomplete todos
    incompletedtodos.forEach(function(incompletetodo){
    const p = document.createElement("p") //p is paragaraph
    p.textContent=incompletetodo.text;
    document.getElementById("todos").appendChild(p)
    })
    
};
renderTools(todos)
//https://eloquentjavascript.net/
