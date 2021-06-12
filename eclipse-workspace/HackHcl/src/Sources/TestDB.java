package Sources;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.hibernate.Session;

import models.UserDetails;

public class TestDB {
	public static void main(String[] args) 
    {
        Session session = DBUtil.getSessionFactory().openSession();
        session.beginTransaction();
        
        UserDetails user = new UserDetails();
        user.setSsn("111-222-333");
        user.setLoan_amount(200000.00);
        user.setCurrent_annual_income(700000.00);
        
        DateTimeFormatter dateformat = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");  
        LocalDateTime curr = LocalDateTime.now(); 
        user.setDate_stamp(dateformat.format(curr));
       
        session.save(user);
 
        session.getTransaction().commit();
        DBUtil.shutdown();
    }

}
