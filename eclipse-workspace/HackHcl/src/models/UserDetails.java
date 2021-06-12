package models;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class UserDetails {
	@Id
	private String ssn;
	private double loan_amount;
	private double current_annual_income;
	private String date_stamp;
	
	
	public String getSsn() {
		return ssn;
	}
	public void setSsn(String ssn) {
		this.ssn = ssn;
	}
	public double getLoan_amount() {
		return loan_amount;
	}
	public void setLoan_amount(double loan_amount) {
		this.loan_amount = loan_amount;
	}
	public double getCurrent_annual_income() {
		return current_annual_income;
	}
	public void setCurrent_annual_income(double current_annual_income) {
		this.current_annual_income = current_annual_income;
	}
	public String getDate_stamp() {
		return date_stamp;
	}
	public void setDate_stamp(String date_stamp) {
		this.date_stamp = date_stamp;
	}
	

}
