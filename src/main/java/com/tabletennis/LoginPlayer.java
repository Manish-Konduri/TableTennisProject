package com.tabletennis;

import org.json.JSONArray;
import org.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
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
    protected void doGet(HttpServletRequest request, HttpServletResponse resp) throws ServletException, IOException {
        DataBase db = new DataBase();
        String email = request.getParameter("Email");
        String password = request.getParameter("pwd");
        PasswordEncryption passwordEncryption = new PasswordEncryption();
        String finalPassword =  passwordEncryption.encryption(password);
        Statement statement;
        Connection connection;
        try {
            Class.forName("com.mysql.jdbc.Driver");

            // Connects to mysql service through a connection url and credentials
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/testdb", "manishk", "manish@145#");
            statement = connection.createStatement();
            String q = "select * from teamplayer where Email='" + email + "' and password= '" + finalPassword + "'";
            ResultSet rs = statement.executeQuery(q);
            JSONObject userDetails = new JSONObject();
            if (rs.next()) {
                userDetails.put("name", rs.getString("Name"));
                userDetails.put("email", rs.getString("Email"));
            }
            if(userDetails.length()>0)
                resp.getWriter().write(userDetails.toString());
            else
                resp.getWriter().write("Failure");
        }
        catch (Exception e){
            System.out.println("No Table");
        }

    }
}
