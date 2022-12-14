function displayDateTime() {
        var currentDate = new Date();
        var dateString = currentDate.toDateString() + " " + currentDate.toTimeString();
        document.getElementById("date-time").innerHTML = dateString;
        }
        
        displayDateTime();
const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'});