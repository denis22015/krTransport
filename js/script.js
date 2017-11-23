/**
 * Created by Denis on 24.11.2017.
 */
const getId = (id) => document.getElementById(id);
const initRect = '<rect x="0" y="0" width="1200" height="700" fill="#d6d6d6" stroke="#d6d6d6" />';
window.onload = () => {
    let points = [];
    let interval ;
    console.log(342)
    const plate = getId('plate');
    console.log(plate);
    //todo another way
    interval  = setInterval(() => moveAll(),100);
    plate.addEventListener("click",() =>{
            points.push({x: event.layerX, y: event.layerY});
            render();
        }, false);



    const render = () => {
        plate.innerHTML = initRect;
        points.forEach(p => {
            plate.innerHTML +=
                `<circle r="4" cx="${p.x}" cy="${p.y}" fill="red"/>`
        });
    };
    const moveAll = () => {
        finished = 0
        points.forEach( (p,i) => {
            if ( i!=0 && !p.finish){
                moveToBegin(i);
            } else
                finished++;
        });
        if (finished !== points.length)
            render()
    };
    const moveToBegin = (num) => {
        finishPoint = points[0];
        newPoint = points[num];
        points.splice(num,0);
        if(points[0].x < newPoint.x)
            newPoint.x -= 5;
        else if(points[0].x > newPoint.x)
            newPoint.x += 5;
        else if(points[0].y < newPoint.y)
            newPoint.y -= 5;
        else if(points[0].y > newPoint.y)
            newPoint.y += 5;
       else
            newPoint.finish = true;
        points = [...points,newPoint];
    };
};
