function showDetails() {
    alert("Meal details will appear here");
}

function toggleDetails(id) {
    var row = document.getElementById(id);

    if (row.style.display === "none") {
        row.style.display = "table-row";
    } else {
        row.style.display = "none";
    }
}

    var total = 0;
    var order = "";

function continueOrder() {
    
    total = 0;
    order = "" ;

    var meal1 = $("#meal1").is(":checked");
    if (meal1) {
        order += "وجبة سمك بوري مشوي\n";
        total +=110000;
    }
    
    var meal2 = $("#meal2").is(":checked");
    if (meal2) {
        order += "وجبة دجاج مشوي\n";
        total += 90000;
    }

    var meal3 = $("#meal3").is(":checked");
    if (meal3) {
        order += "وجبة برغر لحم مع بطاطا\n";
        total += 75000;
    }

    var meal4 = $("#meal4").is(":checked");
    if (meal4) {
        order += "وجبة شاورما دجاج عربي\n";
        total += 5000;
    }

    var meal5 = $("#meal5").is(":checked");
    if (meal5) {
        order += "وجبة بيتزا خضار عائلية\n";
        total += 60000;
    }

    if (order === "") {
        alert("الرجاء اختيار وجبة واحدة على الأقل")
        return;
    } else {
            $("#orderForm").show();
        }
    
}

function submitOrder() {
     var name = $("#name").val();

     var namePattern = /^[A-Za-z]+ [A-Za-z]+$/;

     if (name !== "" && !namePattern.test(name)) {
         alert("الاسم يجب أن يكون باللغة الإنكليزية واسمين فقط");
         return;
     }

    var acc = $("#account").val();
    if(acc.length != 6) {
        alert("رقم الحساب يجب أن يكون 6 أرقام");
        return;
    }

    var phone = $("#phone").val();
    if (phone !== "") {
        if (phone.length !=10 || phone.substring(0,2) != "09") {
           alert("رقم الهاتف يجب أن يبدأ ب09 ويكون 10 أرقام فقط");
           return;
        }
    }

    var tax = total * 0.1;
    var finalTotal = total + tax;

    alert(
        "الطلبات:\n" + order +
        "\nالسعر:" + total +
        "\nالضريبة" + tax +
        "\nالمجموع النهائي" + finalTotal
    );

}