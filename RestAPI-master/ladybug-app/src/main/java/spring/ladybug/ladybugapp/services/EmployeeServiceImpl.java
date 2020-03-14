package spring.ladybug.ladybugapp.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import spring.ladybug.ladybugapp.daos.EmployeeDao;
import spring.ladybug.ladybugapp.daos.LoginAuthDao;
import spring.ladybug.ladybugapp.pojos.BugDtls;
import spring.ladybug.ladybugapp.pojos.Employee;
import spring.ladybug.ladybugapp.pojos.EnumEmpRoles;
import spring.ladybug.ladybugapp.pojos.Login;
import spring.ladybug.ladybugapp.pojos.Project;
@Transactional
@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeDao empDao;

	@Autowired
	private LoginAuthDao logDao;

	@Override
	public Employee getEmployeeByLogin(Login login) {
		System.out.println("Login Credent---->  " + login.getEmail() + " " + login.getPassword());
		Optional<Employee> optionalEmp = empDao.findByLogin(login);
		if (optionalEmp.isPresent()) {
			return optionalEmp.get();
		}
		return null;
	}

	@Override
	public boolean registerNewEmp(Employee emp) {

		emp.addLogin(emp.getLogin());
		try {
			empDao.save(emp);
		} catch (Exception e) { // DataIntegrityViolationException
			return false;
		}

		return true;
	}

	@Override
	public boolean deleteEmp(Login login) {
		try {
			System.out.println("Login->" + login.getEmail());

			Employee emp = login.getEmp();
			System.out.println(login);
			emp.removeLogin();

			for (Project p : emp.getProjects()) {
				p.removeEmployee(emp);
			}
			for (BugDtls bg : emp.getBugDtls()) {
				emp.removeBugDetails(bg);
			}

			logDao.delete(login);

		} catch (Exception e) {
			return false;
		}
		return true;
	}

	@Override
	public Employee getEmployeeById(int id) {
		Employee emp = null;
		Optional<Employee> employee = empDao.findById(id);
		if (employee != null) {
			emp = employee.get();
			return emp;
		}

		return null;
	}

	@Override
	public List<Employee> getEmpList() {
		List<Employee> emps = empDao.findAll(Sort.by("empId"));
		return emps;
	}

	@Override
	public List<Employee> getAllManagers() {
		List<Login> login = logDao.findAll();
		if(login!=null)
		{
			List<Employee> managerList = new ArrayList<>();
			for(Login l: login)
			{
				if(l.getRole()==EnumEmpRoles.MANAGER)
				{
					managerList.add(l.getEmp());
				}
			}
			return managerList;
		}
		return null;
	}

//	@Override
//	public Set<Employee> getEmpsUnderSameProject(int empId) {
//		Employee emp = empDao.findById(empId).orElse(null);
//		if(emp!=null)
//		{
//			Employee empMgr = emp.getEmpMgr();
//			Set<Employee> empList= empMgr.getEmployeeSubOrdinates();
//			return empList;
//		}
//		return null;
//	}
}
