const posts = [
    {
      id: 1, 
      text: "Love this product",
      comments: []
    },
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [
                  {id: 1, text: "Idiot has no idea"}, 
                  {id: 2, text:"Fool!"}, 
                  {id: 3, text: "I agree!"}
                ]
    },
    {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []
    }
]
for (i in posts){
    for (j in posts[i].comments){
        if (posts[i].comments[j].id == 3){
            posts[i].comments.splice(j, 1)
        }
    }
}
