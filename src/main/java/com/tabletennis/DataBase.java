package com.tabletennis;

import org.json.JSONArray;
import org.json.JSONObject;

import java.sql.*;

public class DataBase {
    Statement statement;
    Connection connection;
    DataBase(){
        dbConnection();
    }
    public void dbConnection() {
        try{
            Class.forName("com.mysql.jdbc.Driver");

            // Connects to mysql service through a connection url and credentials
            connection= DriverManager.getConnection( "jdbc:mysql://localhost:3306/testdb","manishk","manish@145#");
            statement = connection.createStatement();
        }
        catch (Exception e){
            System.out.println("No Table");
        }
    }

//    INSERT INTO `teamplayer`(`Name`,`TeamName`,`phone`,`Email`,`password`) VALUES ('"+id+"','"+name+"','"+teamname+"','"+skill+"','"+phone+"','"+Email+"','"+password+"','"+TodayStatus+"');

    public void add(int id, String name, String teamname, int skill, String phone, String Email, String password,String TodayStatus, String Role) throws SQLException {


//        System.out.println("insert into tesdb values ("+id+",'"+name+"','"+description+"','"+dateString+"','"+Initial+"')");
        String q= "INSERT INTO `teamplayer`(`Name`,`TeamName`,`skill`,`phone`,`Email`,`password`,`TodayStatus`) VALUES ('"+name+"','"+teamname+"','"+4+"','"+phone+"','"+Email+"','"+password+"','"+0+"','"+Role+"')";
        statement.executeUpdate(q);
    }
    public JSONArray display() throws SQLException {
        ResultSet rs = statement.executeQuery("select * from teamplayer");
//        JSONObject jsonObject = new JSONObject();
        JSONArray array = new JSONArray();
        while(rs.next()) {
            JSONObject record = new JSONObject();
            //Inserting key-value pairs into the json object
            record.put("Name", rs.getString("Name"));
            record.put("Team_Name", rs.getString("TeamName"));
            record.put("skill", rs.getInt("skill"));
            record.put("Phone", rs.getString("phone"));
            record.put("Email", rs.getString("Email"));
            array.put(record);
        }
        return (array);
    }

}
