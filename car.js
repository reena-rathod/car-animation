let carele = document.getElementById("mycar");
        let animate;

        function init(){
            carele.style.left = "0px";

        }
        
        function start(){
            carele.style.left = "0px";
        }
        window.onload = init;

        function start() {
            carele.style.left = parseInt(carele.style.left) + 10 + "px";
            animate = setTimeout(start, 50);
        }
        function stop() {
            clearTimeout(animate);
        }
        function reverse() {
            carele.style.left = parseInt(carele.style.left) - 10 + "px";
            animate = setTimeout(reverse, 50);
        }