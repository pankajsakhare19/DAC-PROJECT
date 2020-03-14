package spring.ladybug.ladybugapp.pojos;

public enum EnumBugStatus {

	NEW,ASSIGNED,OPEN,INPROGRESS,FIXED,PENDINGRETEST,
	RETEST,VERIFIED,REOPEN,CLOSED,DUPLICATE,REJECTED,DEFERRED,NOTABUG;
	
	@Override
	public String toString()
	{
		return name().toLowerCase();
	}
}
