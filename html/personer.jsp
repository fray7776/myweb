<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personal jsp</title>
</head>
<body>
    <%
    String id = request.getParameter("id");
    String date = request.getParameter("birthdate");
    String sex = request.getParameter("sex");
    String email = request.getParameter("email");
    String agree = request.getParameter("agree");
    String phone = request.getParameter("firstnumber");
    String phone1 = request.getParameter("lastnumber");
    String job = request.getParameter("job");
    String hobby = request.getParameter("hobby");
    String information = request.getParameter("if");
    %>
    <h1>아이디: <%=id%></h1>
    <h1>날짜: <%=date%></h1>
    <h1>성별: <%=sex%></h1>
    <h1>메일: <%=email%></h1>
    <h1>동의여부:<%=agree%></h1>
    <h1>폰번호:<%=phone+phone1%></h1>
    <h1>직업: <%=job%></h1>
    <h1>취미: <%=hobby%></h1>
    <h1>자기소개: <%=information%></h1>
  
    
</body>
</html>