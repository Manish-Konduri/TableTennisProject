package com.tabletennis;

import com.google.gson.Gson;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

@WebServlet(name="Schedule",urlPatterns = "/Schedule")
public class Testing extends HttpServlet {
    public Testing()
    {

    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse resp) throws ServletException, IOException {
        List<Match> ll = new ArrayList<>();
        MatchPlayer mp = new MatchPlayer();
        DataBase db = new DataBase();
        String tournamentName = request.getParameter("Tournament");
        int round = Integer.parseInt(request.getParameter("RoundNum"));
        ll=mp.matching(tournamentName,round);
        Statement statement;
        Connection connection;
        try {
            resp.setContentType("text/html");
            Class.forName("com.mysql.jdbc.Driver");

            // Connects to mysql service through a connection url and credentials
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/testdb", "manishk", "manish@145#");
            statement = connection.createStatement();
            int p1,p2;
            for(Match match:ll)
            {
                p1=match.getPlayer1();
                p2=match.getPlayer2();
                String query = "INSERT INTO `pointstable`(`player1`,`player2`,`round`,`tournament`) VALUES ('"+p1+"','"+p2+"',"+round+",'"+tournamentName+"')";
                statement.executeUpdate(query);
            }
            Gson gson=new Gson();
            resp.getWriter().write(gson.toJson(ll));
        }
        catch (Exception e){
            e.printStackTrace();
            resp.setStatus(401);
        }
    }
}
