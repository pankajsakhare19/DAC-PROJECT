package spring.ladybug.ladybugapp.services;

import java.util.List;
import java.util.Set;

import spring.ladybug.ladybugapp.pojos.Employee;
import spring.ladybug.ladybugapp.pojos.Project;

public interface ProjectService {
	
	List<Project> findAll();
	
	Project getProjectById(int id);
	
	List<Employee> getProjectEmpById(int id);
	
	boolean addProject(Project proj);
	
	Set<Project> getProjectsUnderEmp(int empId);
	
	Set<Project> getProjectsUnderMgr(int empId);
	
	Set<Project> getProjectsUnderSupport(int empId);
	
}
