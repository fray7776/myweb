<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>html/pocus.jsp</title>
</head>
<body>
    <%
    String answer=request.getParameter("answer");
    %>
    <h2>답안: <%=answer%> </h2>
    if(answer=="paris") {
        ehco '정답입니다!'
    }

   
</body>
</html>