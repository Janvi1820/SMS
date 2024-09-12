$(document).ready(function () {
    $.ajax({
        url: "/Students/GetTeacher",
        type: "Get",
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success: function (result) {
            var htmlContent = "";
            var i = 1;
            $.each(result, function (index, item) {
                console.log("Processing item:", item);
               
                htmlContent += "<option value='" + item.teacherId + "'>" + item.firstName + "</option>";
                i++;
            });
            console.log(htmlContent);
            $('#TeacherId').html(htmlContent);
          
        },
        error: function () { 
            console.log("DOne")
        }
    })
    $.ajax({
        url: '/Academic/FetchSubjects', 
        type: 'GET',
        dataType: 'json',
        success: function (result, status, xhr) {
            var options = '<option value="">Select Subject</option>';
            $.each(result, function (index, item) {
                options += "<option value='" + item.subjectId + "'>" + item.subjectName + "</option>";
            });
            $("#GetSubjects").html(options); 
        },
        error: function (xhr, status, error) {
            console.error("Error fetching data: ", error);
            alert("Failed to load subjects: " + xhr.status + " - " + error);
        }
    })

    $.ajax({
        url: "/Students/GetTeacher",
        type: "Get",
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success: function (result) {
            var htmlContent = "";
            var i = 1;
            $.each(result, function (index, item) {
                console.log("Processing item:", item);

                htmlContent += "<option value='" + item.firstName + "'>" + item.firstName + "</option>";
                i++;
            });
            console.log(htmlContent);
          
            $('#FetchTeacherData').html(htmlContent);
        },
        error: function () { 
            console.log("DOne")
        }
    })
    $.ajax({
        url: "/Students/GetClass",
        type: "Get",
        dataType: "json",
        success: function (result) {
            var htmlContent = "";
            var i = 1;
            $.each(result, function (index, item) {
                console.log("Processing item:", item);

                htmlContent += "<option value='" + item.classId + "'>" + item.className + "</option>";
                i++;
            });
            console.log(htmlContent);
            $('#AddClassInFees').html(htmlContent);
            $('#FetchAllClasses').html(htmlContent);

        },
        error: function (xhr, status, error) {


            console.error("AJAX Error:", status, error);
            console.error("Response Text:", xhr.responseText);
        }
    })

    $.ajax({
        url: "https://localhost:44386/api/Admin/GetNoOfStudents",
        type: "Get",
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success: function (result) {

            console.log(result);
            $('#noofstudents').html(result);
        },
        error: function () { 
            console.log("DOne")
        }
    })

    $.ajax({
        url: "https://localhost:44386/api/Admin/NoOfTeachers",
        type: "Get",
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success: function (result) {

            console.log(result);
            $('#NoOfTeachers').html(result);
        },
        error: function () {
            console.log("DOne")
        }
    })
   
        $.ajax({
            url: '/Students/GetAllPerformances',
            type: 'GET',
            dataType: 'json',
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            success: function (data) {
                var htmlContent = '';
                $.each(data, function (index, item) {
                    htmlContent += `<tr>
                        <td>${item.performanceId}</td>
                        <td>${item.studentId}</td>
                        <td>${item.grade}</td>
                        <td>${new Date(item.date).toLocaleDateString()}</td>
                    </tr>`;
                });
                $('#Tbody').html(htmlContent);
            },
            error: function () {
                console.log("Error")
            }
        })
$('#addPerformanceForm').on('submit', function (e) {

    var performanceData = {
        StudentId: $('#studentId').val(),
        Grade: $('#grade').val(),
        Date: $('#date').val()
    };
})

        $.ajax({
            url: 'https://localhost:7264/api/Students/AddPerformance',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(performanceData),
            success: function (response) {
                alert('Performance added successfully!');
                $('#addPerformanceForm')[0].reset();

            },
            error: function (xhr, status, error) {
                console.error("AJAX Error:", status, error);
                alert('Error adding performance.');
            }
        })

});

