package spring.ladybug.ladybugapp.pojos;

public enum EnumEmpRoles {
	ADMIN,MANAGER,DEVTEST,SUPPORT;
	
	@Override
	public String toString()
	{
		return name().toLowerCase();
	}
}
