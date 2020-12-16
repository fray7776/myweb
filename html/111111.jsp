<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="java.util.*"%>
<%
 
    request.setCharacterEncoding("UTF-8");
 
%>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</head>
<body>
    <%
    String id = request.getParameter("id");
    String date = request.getParameter("birthdate");
    String sex = request.getParameter("sex");
    String email = request.getParameter("email");
    String agree = request.getParameter("agree");
    String phone = request.getParameter("phone");
    String phone1 = request.getParameter("firstnumber");
    String phone2 = request.getParameter("lastnumber");
    String job = request.getParameter("job");
    String hobby = request.getParameter("hobby");
    String information = request.getParameter("if");
    %>

    <div class="container mt-3">
        <h2>MEMBER TABLE</h2>
        <p>Type something in the input field to search the table for first names, last names or emails:</p>  
        <input class="form-control" id="myInput" type="text" placeholder="Search..">
        <br>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>SEX</th>
              <th>EMAIL</th>
              <th>AGREE</th>
              <th>PHONE</th>
              <th>JOB</th>
              <th>HOBBY</th>
              <th>INFO</th>
            </tr>
          </thead>
          <tbody id="myTable">
            <tr>
              <td><%=id%></td>
              <td><%=date%></td>
              <td><%=sex%></td>
              <td><%=email%></td>
              <td><%=agree%></td>
              <td><%=phone%> - <%=phone1%> - <%=phone2%></td>
              <td><%=job%></td>
              <td><%=hobby%></td>
              <td> <%=information%></td>
            </tr>
         
          </tbody>
        </table>
        
        <p>Note that we start the search in tbody, to prevent filtering the table headers.</p>
      </div>
      
      <script>
      $(document).ready(function(){
        $("#myInput").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#myTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
      });
      </script>

</body>
</html>
