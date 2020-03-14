package spring.ladybug.ladybugapp.services;

import java.util.List;
import java.util.Map;

import spring.ladybug.ladybugapp.pojos.BugDtls;
import spring.ladybug.ladybugapp.pojos.Project;

public interface BugService {
	
	boolean createBug(BugDtls bug);
	
	List<BugDtls> listNullAssigneBug();
	
	boolean changeBugStatus(BugDtls bug);
	
	List<Object> getBugById(int id);
	
	//Map<String,Object> getBugDetailsByPaging(Project project,int pageNO, int pageSize);
	
	List<BugDtls> getBugByProjectId(int projectId);
	
	List<Integer> getBugStatusCount();
	
	List<Integer> getBugPriorityCount();
	
	boolean updateBug(BugDtls bug)throws Exception;

}
