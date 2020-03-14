package spring.ladybug.ladybugapp.pojos;

public enum EnumBugPriority {

	HIGHEST,HIGH,MEDIUM,LOW,LOWEST;
	
	@Override
	public String toString() {
		return name().toLowerCase();
	}
}
