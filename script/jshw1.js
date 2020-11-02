document.write("<hr />");
document.write("<div id= container1>")
document.write("<table>");
for (let countX = 1; countX <= 9; countX ++) {
    document.write("<tr>");
    for(let countY = 1; countY <= 9; countY++) {
        document.write("<td>" + countX + "*" + countY + "=" + countX*countY + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");
document.write("</div>");
document.write("<hr />");
document.write("<div id = 'container2'>")

var element0 = document.getElementById("container2");
var contents = "<table>";
for (let countX = 1; countX <= 9; countX ++) {
    contents += "<tr>";
    for(let countY = 1; countY <= 9; countY++) {
        contents += "<td>" + countX + "*" + countY + "=" + countX*countY + "</td>";
    }
    contents += "</tr>";
}
contents += "</table>";
element0.innerHTML = contents;
document.write("</div>")