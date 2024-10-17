var btn = document.getElementById("btn").addEventListener("click", function () {
    var number = document.getElementById("number").value
    var a = Number(number)
    // above code gets number input


    var txtarea = document.getElementById("txtarea")
    txtarea.setAttribute("maxlength", number)
    txtarea.value=""
    
    var counting = document.getElementById("counting")
    counting.textContent = a 

    txtarea.addEventListener("keyup", function () {
        var txtvalue = txtarea.value.length

        var b = Number(txtvalue)
        var counting = document.getElementById("counting")
        counting.textContent = a - b + "/" + number

        if (a - b == 0) {
            var warning = document.createElement("h3")
            warning.id = "warning"
            warning.textContent = "You've exceeded the limit! Remember, you could have set one."
            document.body.appendChild(warning)
            
        }
        else {
            var check = document.getElementById("warning")
            if (check) {
                check.remove()
            }
        }


    })
})