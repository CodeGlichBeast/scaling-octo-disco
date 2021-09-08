canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=2;
ctx.rect(150,143,430,200);
ctx.stroke();

    console.log("First Circle");
    ctx.beginPath();
    ctx.strokeStyle="blue";
    ctx.lineWidth=5;
    ctx.arc(250, 210, 40, 0, 2*Math.PI);
    ctx.stroke();
    console.log("First Circle done");

    console.log("Second Circle");
    ctx.beginPath();
    ctx.strokeStyle="yellow";
    ctx.lineWidth=5;
    ctx.arc(350, 210, 40, 0, 2*Math.PI);
    ctx.stroke();
    console.log("Second Circle done");

    console.log("Third Circle");
    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.lineWidth=5;
    ctx.arc(450, 210, 40, 0, 2*Math.PI);
    ctx.stroke();
    console.log("Third Circle done");

    console.log("Fourth Circle");
    ctx.beginPath();
    ctx.strokeStyle="red";
    ctx.lineWidth=5;
    ctx.arc(300, 250, 40, 0, 2*Math.PI);
    ctx.stroke();
    console.log("Fourth Circle done");

    console.log("Fifth Circle");
    ctx.beginPath();
    ctx.strokeStyle="orange";
    ctx.lineWidth=5;
    ctx.arc(400, 250, 40, 0, 2*Math.PI);
    ctx.stroke();
    console.log("Fifth Circle done");




