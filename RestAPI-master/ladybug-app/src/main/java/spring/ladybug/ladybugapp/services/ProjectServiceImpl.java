package spring.ladybug.ladybugapp.services;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import spring.ladybug.ladybugapp.daos.EmployeeDao;
import spring.ladybug.ladybugapp.daos.ProjectDao;
import spring.ladybug.ladybugapp.pojos.Employee;
import spring.ladybug.ladybugapp.pojos.EnumEmpRoles;
import spring.ladybug.ladybugapp.pojos.Project;

@Transactional
@Service
public class ProjectServiceImpl implements ProjectService {
	
	@Autowired
	private ProjectDao project;
	
	@Autowired
	private EmployeeDao empDao;
	
	public List<Project> findAll()
	{
		List<Project> projects = project.findAll();
		return projects;
	}

	@Override
	public Project getProjectById(int id) {
		Project pr=null;
		Optional<Project> proj = project.findById(id);
		if(proj!=null) {
			pr=proj.get();
			return pr;
		}
		
		return null;
	}
	
	@Override
	public List<Employee> getProjectEmpById(int id){
		List<Employee> emps=new ArrayList<Employee>();
 		Optional<Project> proj = project.findById(id);
 		//Not working in case of wrong project id
		Project p = proj.get();
		if(p!=null) {
			for(Employee e: p.getEmployees()) {
				if(e.getLogin().getRole()==EnumEmpRoles.DEVTEST) { 
					emps.add(new Employee(e.getEmpId(), e.getFirstName(), e.getLastName()));
				}
			}
			return emps;
		}	
		return null;
	}

	@Override
	public boolean addProject(Project proj) {
		if(proj!=null)
		{
			project.save(proj);
			return true;
		}
		return false;
	}

	@Override
	public Set<Project> getProjectsUnderEmp(int empId) {
		Employee emp = empDao.findById(empId).orElse(null);
		if(emp!=null)
		{
			Set<Project> projs = emp.getProjects();
			return projs;
		}
		return null;
	}

	@Override
	public Set<Project> getProjectsUnderMgr(int empId) {
		Employee emp = empDao.findById(empId).orElse(null);
		if(emp!=null)
		{
		 	Set<Employee> emps = emp.getEmployeeSubOrdinates();
		 	if(emps!=null)
		 	{
		 		Set<Project> projs = new HashSet<>();
		 		for(Employee e: emps)
		 		{
		 			Set<Project> p = e.getProjects();
		 			for(Project pr: p)
		 			{
		 				projs.add(pr);
		 			}
		 		}
		 		return projs;
		 	}
		}
		return null;
	}

	@Override
	public Set<Project> getProjectsUnderSupport(int empId) {
		Employee emp = empDao.findById(empId).orElse(null);
		if(emp!=null)
		{
			Employee empMgr = emp.getEmpMgr();
			Set<Project> projs =  this.getProjectsUnderMgr(empMgr.getEmpId());
			return projs;
		}
		return null;
	}
}
