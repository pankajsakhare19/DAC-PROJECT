package spring.ladybug.ladybugapp.services;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import spring.ladybug.ladybugapp.daos.BugDao;
import spring.ladybug.ladybugapp.pojos.BugDtls;
import spring.ladybug.ladybugapp.pojos.Employee;
import spring.ladybug.ladybugapp.pojos.EnumBugPriority;
import spring.ladybug.ladybugapp.pojos.EnumBugStatus;
import spring.ladybug.ladybugapp.pojos.Login;
import spring.ladybug.ladybugapp.pojos.Project;
@Transactional
@Service
public class BugServiceImpl implements BugService,Serializable {
	
	@Autowired
	private BugDao bugDao;

	@Override
	public boolean createBug(BugDtls bug) {
		try {
			bug.setBugStatus(EnumBugStatus.NEW);
			bugDao.save(bug);
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	@Override
	public List<BugDtls> listNullAssigneBug() {
		List<BugDtls> bugs = bugDao.findAll();
		List<BugDtls> nullBugs = new ArrayList<>();
		for(BugDtls bug: bugs) {
			if(bug.getBugAssignee()==null) {
				nullBugs.add(bug);
			}
		}
		return nullBugs;
	}

	@Override
	public boolean changeBugStatus(BugDtls bug) {
		Optional<BugDtls> b = bugDao.findById(bug.getBugId());
		BugDtls bu = b.get();
		Employee emp = bug.getEmp();
		if(bu!=null) {
			EnumBugStatus status = bug.getBugStatus();
			if(status==EnumBugStatus.NEW) {
				bu.setBugStatus(EnumBugStatus.INPROGRESS);
				bu.setBugAssignee(emp.getEmpId());
				return true;
			}
			else if(status==EnumBugStatus.INPROGRESS) {
				bu.setBugStatus(EnumBugStatus.FIXED);
				return true;
			}
		}
		return false;
	}

	@Override
	public List<Object> getBugById(int id) {
	 Optional<BugDtls>	optionalBug = bugDao.findById(id);
	 BugDtls bug = null;
	 if(optionalBug != null) {
		 bug=optionalBug.get();
		 Employee emp = bug.getEmp();
		 if(bug!=null) {
		 List<Object> bugDetails = new ArrayList<>();
		 
//			Object empObj = new Object() {
//				int bugIssuer = bug.getEmp().getEmpId();
//				String firstName = bug.getEmp().getFirstName();
//				String lastName = bug.getEmp().getLastName();
//				BugDtls bugDtls = bug;
//			};
		 
		 bugDetails.add(bug);
		 
		 Login log = new Login(emp.getLogin().getRole());
		 
		 //bugDetails.add(emp.getFirstName()+" "+emp.getLastName());
		 bugDetails.add(new Employee(emp.getEmpId(), emp.getFirstName(), emp.getLastName(), log));
		 return bugDetails;
		 }
	 }
	 
	 	return null;
	}

//	//@SuppressWarnings("serial")
//	@Override
//	public Map<String,Object> getBugDetailsByPaging(Project project,int pageNo, int pageSize) {
//		Pageable page = PageRequest.of(pageNo, pageSize, Sort.by("bugId"));
//		//Example<Project> ex = Example.of(project);
//		Long count = bugDao.countByProject(project);
//		Long totalPages = count/pageSize;
//		List<BugDtls> bugList = bugDao.findByProject(project, page);
//		Map<String,Object> bugDtlsObjectMap = new HashMap<>();
//		bugDtlsObjectMap.put("bugData", bugList);
//		bugDtlsObjectMap.put("totalPages", totalPages);
//		return bugDtlsObjectMap;
//	}

	@Override
	public List<BugDtls> getBugByProjectId(int projectId) {
		List<BugDtls> bugsListByProject = bugDao.findByProject(new Project(projectId));
		return bugsListByProject;
	}

	@Override
	public List<Integer> getBugStatusCount() {
		List<BugDtls> bugList = bugDao.findAll();
		List<Integer> bugCount = new ArrayList<>();
		if(bugList!=null)
		{
			int n=0;
			int inProgress=0;
			int fixed=0;
			int closed=0;
			for(BugDtls b: bugList) {
				if(b.getBugStatus()==EnumBugStatus.NEW) {
					n++;
				}
				else if(b.getBugStatus()==EnumBugStatus.INPROGRESS){
					inProgress++;
				}
				else if(b.getBugStatus()==EnumBugStatus.FIXED){
					fixed++;
				}
				else if(b.getBugStatus()==EnumBugStatus.CLOSED){
					closed++;
				}
			}
			bugCount.add(n);
			bugCount.add(inProgress);
			bugCount.add(fixed);
			bugCount.add(closed);
		}
		return bugCount;
	}

	@Override
	public List<Integer> getBugPriorityCount() {
		List<BugDtls> bugList = bugDao.findAll();
		List<Integer> bugCount = new ArrayList<>();
		if(bugList!=null)
		{	int lowest=0;
			int low=0;
			int medium=0;
			int high=0;
			int highest=0;
			for(BugDtls b: bugList) {
				if(b.getBugPriority()==EnumBugPriority.LOW) {
					low++;
				}
				else if(b.getBugPriority()==EnumBugPriority.MEDIUM){
					medium++;
				}
				else if(b.getBugPriority()==EnumBugPriority.HIGH){
					high++;
				}
				else if(b.getBugPriority()==EnumBugPriority.HIGHEST){
					highest++;
				}
				else if(b.getBugPriority()==EnumBugPriority.LOWEST){
					lowest++;
				}
			}
			bugCount.add(lowest);
			bugCount.add(low);
			bugCount.add(medium);
			bugCount.add(high);
			bugCount.add(highest);
		}
		return bugCount;
	}

	@Override
	public boolean updateBug(BugDtls bug)throws Exception {
		BugDtls newBug = bugDao.findById(bug.getBugId()).orElse(null);
		if(newBug!=null)
		{
			newBug.setBugStatus(bug.getBugStatus());
			newBug.setBugAssignee(bug.getBugAssignee());
			newBug.setBugPriority(bug.getBugPriority());
			bugDao.save(newBug);
			
			return true;
		}
		return false;
	}



}
