function trying() 
{  
    function calculatingPerimeter() 
    {   
        diameter = document.querySelector("input#diameter").value;
        perimeter = (diameter * Math.PI).toFixed(2);
        return {
            hit: (diameter>0),
            value: perimeter
        };
    }
    try {
        throw calculatingPerimeter();
    } catch (data) {
        element =  document.getElementById("show_output");
        var value = data.value;
        if (data.hit || (perimeter/Math.PI) < diameter + 1 && (perimeter/Math.PI) > diameter - 1) {
            element.innerHTML = "The perimeter is the following: " + value + " centimeter.";
            if (true) {
                let value = (diameter * diameter * Math.PI * 0.25).toFixed(2);
                element.innerHTML += "<br> The surface is the following: " + value + " centimeter.";
            }
            element.innerHTML += "<br> It would look like this:";
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

function justSetAnAlarm() 
{
    var current_time = new Date();
    var current_hours = current_time.getHours();
    var current_minutes = current_time.getMinutes();
    var current_seconds = current_time.getSeconds();

    current_minutes = (current_minutes < 10 ? "0" : "") + current_minutes;
    current_seconds = (current_seconds < 10 ? "0" : "") + current_seconds;

    var time_of_day = (current_hours < 12) ? "AM" : "PM";
    current_hours = (current_hours > 12) ? current_hours - 12 : current_hours;
    current_hours = (current_hours == 0) ? 12 : current_hours;

    var current_time_string = current_hours + ":" + current_minutes + ":" + current_seconds + " " + time_of_day;

    document.getElementById("clock").firstChild.nodeValue = current_time_string;
}
