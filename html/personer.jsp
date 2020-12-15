<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="java.util.*"%>
<%
 
    request.setCharacterEncoding("UTF-8");
 
%>
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
    String phone = request.getParameter("phone");
    String phone1 = request.getParameter("firstnumber");
    String phone2 = request.getParameter("lastnumber");
    String job = request.getParameter("job");
    String hobby = request.getParameter("hobby");
    String information = request.getParameter("if");
    %>

    <h3 style="background-color: cornflowerblue;">회원 정보</h3>
    <h3>아이디: <%=id%></h3>
    <h3>날짜: <%=date%></h3>
    <h3>성별: <%=sex%></h3>
    <h3>메일: <%=email%></h3>
    <h3>동의여부:<%=agree%></h3>
    <h3>폰번호:<%=phone%> - <%=phone1%> - <%=phone2%></h3> 
    <h3>직업: <%=job%></h3>
    <h3>취미: <%=hobby%></h3>
    <h3>자기소개: <%=information%></h3>
    

  
</body>
</html>