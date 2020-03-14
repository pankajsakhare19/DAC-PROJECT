package spring.ladybug.ladybugapp.daos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import spring.ladybug.ladybugapp.pojos.Employee;
import spring.ladybug.ladybugapp.pojos.Login;
import java.util.Set;
import java.util.List;

public interface EmployeeDao extends JpaRepository<Employee, Integer>{
	
	Optional<Employee> findByLogin(Login login);
	
	
}
