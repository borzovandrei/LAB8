var x = 0 ;
var points = [];
var timerId;
$(document).ready(function (){
    var step = 0.05;
    $(".graph button").click(function(event){
        inter = $("[name='interval']").val();
        from = $("[name='from']").val();
        to = $("[name='to']").val();
        math = $("[name='math']").val();
        points = [];
        for (x = parseFloat(from); x < parseFloat(to); x += parseFloat(step)) {
            points.push([x, eval(math)]);
        }
        $.plot($("#gr"), [{ label: 'y='+math, data: points }], {});

        timerId = setInterval(() => {grafik(inter,math,step); },100);
    
    });
});

function grafik(inter,math,step){
    points.splice(0, 1);
    points.push([x, eval(math)]);
    console.log(points);
    $.plot($("#gr"), [{ label: 'y='+math, data: points }], {});
    x = parseFloat(x) + parseFloat(step);
}
function stop(){
    clearInterval(timerId);
}