package com.tabletennis;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Enumeration;
import java.util.Random;


@WebServlet(name="Players",urlPatterns = "/Players")
public class PlayerServlet extends HttpServlet {
    public PlayerServlet()
    {

    }
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse resp) throws ServletException, IOException {
        DataBase db = new DataBase();
        String playerName = request.getParameter("Name");
        String teamName = "";
        String phone = request.getParameter("Phone");
        String email = request.getParameter("Email");
        String password = request.getParameter("pwd");
//        PasswordEncryption passwordEncryption = new PasswordEncryption();
//        String finalPassword =  passwordEncryption.encryption(password);
        try {
            db.add(4,playerName,teamName,3,phone,email,password,"1");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();
        resp.setContentType("application/json;charset=utf-8");

        DataBase db = new DataBase();
        try {
            out.write(db.display().toString());
        } catch (SQLException e) {
            e.printStackTrace();
        }
        out.close();
    }

    /*@Override
    public String toString() {
        DataBase db = new DataBase();
        try {
            out.println(db.display());
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }*/
}
