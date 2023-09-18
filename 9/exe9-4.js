let number = prompt("enter number of triangle lines: ");
let triangle = "";
for(let i = 0 ; i < number ; i++)
{
    triangle = "";
    for(let s = 0 ; s < i + 1 ; s++)
    {
        triangle += "#"
    }
    console.log(triangle);
}