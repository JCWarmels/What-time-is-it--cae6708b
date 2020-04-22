function trying() 
{  
    function calculatingPerimeter() 
    {   
        var diameter = document.querySelector("input#diameter").value;
        perimeter = diameter * Math.PI;
        return {
            hit: (diameter>0),
            value: perimeter
        };
    }
    try {
        throw calculatingPerimeter();
    } catch (data) {
        element =  document.getElementById("show_output");
        value = data.value;
        if (data.hit || (perimeter/Math.PI) < diameter + 1 && (perimeter/Math.PI) > diameter - 1) {
            element.innerHTML = "The perimeter is the following: " + value + " centimeter. <br> It would look like this:";
            draw(value);
        } else {
            element.innerHTML = "Something went wrong... That's all we know.";
        }
    }
    function draw(value)
    {
        var canvas = document.getElementById('circle');
        if (canvas.getContext)
        {
        var ctx = canvas.getContext('2d'); 
        var X = canvas.width / 2;
        var Y = canvas.height / 2;
        var R = value;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
        ctx.lineWidth = 1;
        ctx.stroke();
        }
    }
}