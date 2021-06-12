package models;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class CreditScore {
	@Id
	private String ssn;
	private int creditscore;
	public String getSsn() {
		return ssn;
	}
	public void setSsn(String ssn) {
		this.ssn = ssn;
	}
	public int getCreditscore() {
		return creditscore;
	}
	public void setCreditscore(int creditscore) {
		this.creditscore = creditscore;
	}
	
	
	@Override
	public String toString() {
		return "CreditScore [ssn=" + ssn + ", creditscore=" + creditscore + "]";
	}
	
	

}
