package spring.ladybug.ladybugapp.controller;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import spring.ladybug.ladybugapp.pojos.Employee;
import spring.ladybug.ladybugapp.pojos.Project;
import spring.ladybug.ladybugapp.services.ProjectService;

@CrossOrigin(origins = "*")
@RestController
public class ProjectController {

	@Autowired
	private ProjectService project;
	//Getting list of projects
	@RequestMapping(value = "/projects", method = RequestMethod.GET)
	public ResponseEntity<?> m1() {		
		List<Project> pro = project.findAll();		
		if(pro!=null) {
			return new ResponseEntity<List<Project>>(pro, HttpStatus.OK);
		}				
		return new ResponseEntity<Boolean>(false, HttpStatus.OK);
	}
	
	//Getting project details by project ID
	@RequestMapping(value = "/project/{projectId}", method = RequestMethod.GET)
	public ResponseEntity<?> m2(@PathVariable("projectId")Integer projectId) {
		Project pr=project.getProjectById(projectId);
		if(pr!=null) {
			return new ResponseEntity<Project>(pr, HttpStatus.OK);
		}
		return new ResponseEntity<Boolean>(false, HttpStatus.OK);
	}
	//Getting the list of employees whose role is DEVTEST by project ID
	@RequestMapping(value = "/employeesDevTest/{projectId}", method = RequestMethod.GET)
	public ResponseEntity<?> m3(@PathVariable("projectId")Integer projectId) {
		List<Employee> emp = project.getProjectEmpById(projectId);
		if(emp!=null) {
			return new ResponseEntity<List<Employee>>(emp, HttpStatus.OK);
		}
		return new ResponseEntity<Boolean>(false, HttpStatus.OK);
	}
	//Adding the project
	@RequestMapping(value = "/addProject", method = RequestMethod.POST)
	public ResponseEntity<?> m4(@RequestBody Project proj) {
		if(project.addProject(proj))
		{
			return new ResponseEntity<Boolean>(true, HttpStatus.OK);
		}
		return new ResponseEntity<Boolean>(false, HttpStatus.OK);
	}
	
	//Getting list of projects which are under the DEVTEST
	@RequestMapping(value = "/getProjectsUnderEmp/{empId}", method = RequestMethod.GET)
	public ResponseEntity<?> m4(@PathVariable("empId")Integer empId) {		
		Set<Project> projs = project.getProjectsUnderEmp(empId);
		if(projs!=null)
		{
			return new ResponseEntity<Set<Project>>(projs, HttpStatus.OK);
		}
					
		return new ResponseEntity<Boolean>(false, HttpStatus.OK);
	}
	//Getting list of projects which are under the MANAGER
	@RequestMapping(value = "/getProjectsUnderMgr/{empId}", method = RequestMethod.GET)
	public ResponseEntity<?> m5(@PathVariable("empId")Integer empId) {		
		Set<Project> projs = project.getProjectsUnderMgr(empId);
		if(projs!=null)
		{
			return new ResponseEntity<Set<Project>>(projs, HttpStatus.OK);
		}
					
		return new ResponseEntity<Boolean>(false, HttpStatus.OK);
	}
	
	//Getting list of projects which are under the SUPPORT
	@RequestMapping(value = "/getProjectsUnderSupport/{empId}", method = RequestMethod.GET)
	public ResponseEntity<?> m6(@PathVariable("empId")Integer empId) {		
		Set<Project> projs = project.getProjectsUnderSupport(empId);
		if(projs!=null)
		{
			return new ResponseEntity<Set<Project>>(projs, HttpStatus.OK);
		}
					
		return new ResponseEntity<Boolean>(false, HttpStatus.OK);
	}
	
}
