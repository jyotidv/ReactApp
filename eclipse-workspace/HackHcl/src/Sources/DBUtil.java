package Sources;

import java.io.File;


import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import models.UserDetails;


public class DBUtil {
	
	private static final SessionFactory sessionFactory = buildSessionFactory();
    
    private static SessionFactory buildSessionFactory() 
    {
    	try{
            SessionFactory sessionFactory = 
                    new Configuration().configure().buildSessionFactory();
            return sessionFactory;
        }catch(Exception ex){
            ex.printStackTrace();
            throw new ExceptionInInitializerError(ex);
        }
    }
  
    public static SessionFactory getSessionFactory() {
        return sessionFactory;
    }
  
    public static void shutdown() {
        getSessionFactory().close();
    }
	
	
}
