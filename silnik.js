import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite("tlo","swieta.png")
loadSprite("balwan","balwan.png")
loadSound("muzyka","przybiezeli.mp3")


// add a piece of text at position (120, 80)
add([
    text("hello"),
    pos(120, 80),
]);

add([
    sprite("tlo"),
    pos(0,0)
])

const balwan = add([
    sprite("balwan"),
    pos(10, 190)
])

onUpdate(()=>{

    if(balwan.pos.x<570)
    
    balwan.pos.x=balwan.pos.x+1

    else  if(balwan.pos.y>100) balwan.pos.y=balwan.pos.y-1


})

onKeyPress("space", ()=>{play("muzyka")})

