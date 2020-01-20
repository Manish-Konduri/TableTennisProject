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
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

@WebServlet(name="login1",urlPatterns = "/login1")
public class TeamManager extends HttpServlet {
    public TeamManager(){

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse resp) throws ServletException, IOException {
        DataBase db = new DataBase();
        Statement statement;
        Connection connection;
        try {
            resp.setContentType("text/html");
            Class.forName("com.mysql.jdbc.Driver");

            // Connects to mysql service through a connection url and credentials
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/testdb", "manishk", "manish@145#");
            statement = connection.createStatement();
            String q = "select Name from teamplayer where TodayStatus=1";
            ResultSet rs = statement.executeQuery(q);
            JSONObject userDetails =  new JSONObject();
            JSONArray js = new JSONArray();
            //    Gson userDetails = new Gson();
            String Name="";
            int i=0;;
            while(rs.next()) {
                String s = rs.getString("Name");
//                userDetails.put("Names",rs.getString("Name"));
                js.put(i,s);
                i++;
            }
            System.out.println(js.toString());
            resp.getWriter().write(js.toString());
       }
        catch (Exception e){
            e.printStackTrace();
        }


    }
}
