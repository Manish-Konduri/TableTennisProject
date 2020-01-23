package com.tabletennis;

import org.json.JSONArray;
import org.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

@WebServlet(name="joinTournament",urlPatterns = "/joinTournament")
public class JoinTournament extends HttpServlet {
    public JoinTournament()
    {

    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse resp) throws ServletException, IOException {
        DataBase db = new DataBase();
        Statement statement;
        Connection connection;

        try {
            resp.setContentType("text/html");
            Class.forName("com.mysql.jdbc.Driver");

            // Connects to mysql service through a connection url and credentials
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/testdb", "manishk", "manish@145#");
            statement = connection.createStatement();

            String query = "select tName from tournamentNames";
            ResultSet rs = statement.executeQuery(query);
            JSONObject userDetails =  new JSONObject();
            JSONArray jsonArray = new JSONArray();
            String s = "";
            while(rs.next()) {
                s = rs.getString("tName");
                jsonArray.put(s);
            }
            if(s.length()>0) {
//            System.out.println(js.toString());
                resp.getWriter().write(jsonArray.toString());
            }
            else
                resp.setStatus(401);

        }
        catch (Exception e){
            e.printStackTrace();
        }

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse resp) throws ServletException, IOException {

        DataBase db = new DataBase();
        Statement statement;
        Connection connection;
        String tournamentName = request.getParameter("Tournament");

        String stridcap = request.getParameter("Id");
        System.out.println("---->"+tournamentName);
        int j;
        String idcap = "";
        for (j = 3; j < stridcap.length(); j++) {
            idcap = idcap + stridcap.charAt(j);
        }

        int id = Integer.parseInt(idcap);
        try {
            resp.setContentType("text/html");
            Class.forName("com.mysql.jdbc.Driver");

            // Connects to mysql service through a connection url and credentials
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/testdb", "manishk", "manish@145#");
            statement = connection.createStatement();
            StringBuilder partQuery= new StringBuilder();

            String query = "INSERT INTO `tournamentjoined`(`MemberId`,`tournamentName`) VALUES ('"+id+"','"+tournamentName+"')";
            statement.executeUpdate(query);
        }
        catch (Exception e){
            e.printStackTrace();
            resp.setStatus(401);
        }



    }
}

