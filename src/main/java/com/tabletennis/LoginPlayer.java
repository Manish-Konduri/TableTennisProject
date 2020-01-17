package com.tabletennis;

import org.json.JSONArray;
import org.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.*;
@WebServlet(name="login",urlPatterns = "/login")
public class LoginPlayer extends HttpServlet {
    public LoginPlayer()
    {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse resp) throws ServletException, IOException {
        DataBase db = new DataBase();
        String email = request.getParameter("Email");
        String password = request.getParameter("pwd");
      //  String finalPassword =  PasswordEncryption.encryption(password);
        Statement statement;
        Connection connection;
        try {
            Class.forName("com.mysql.jdbc.Driver");

            // Connects to mysql service through a connection url and credentials
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/testdb", "manishk", "manish@145#");
            statement = connection.createStatement();
            String q = "select MemberId from teamplayer where Email='" + email + "' and password= '" + password + "'";
            ResultSet rs = statement.executeQuery(q);
            String id="";
            while(rs.next()) {
                id = rs.getString("MemberId");
            }
            JSONObject userDetails = new JSONObject();
            if (id.length()>0) {
//                userDetails.put("name", rs.getString("Name"));
//                userDetails.put("email", rs.getString("Email"));
                Cookie c = new Cookie("id",id);
              //  System.out.println(c);
                resp.getWriter().write(c.getValue());
                resp.addCookie(c);

            }

//            if(userDetails.length()>0)
//                resp.getWriter().write(userDetails.toString());
            else
                resp.setStatus(401);
        }
        catch (Exception e){
            e.printStackTrace();
        }

    }
}
