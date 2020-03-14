package spring.ladybug.ladybugapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import spring.ladybug.ladybugapp.pojos.Employee;
import spring.ladybug.ladybugapp.pojos.Login;
import spring.ladybug.ladybugapp.services.AuthServices;
import spring.ladybug.ladybugapp.services.EmployeeService;

@CrossOrigin(origins = "*")
@RestController
public class AuthController {
	
	@Autowired
	private AuthServices loginService;
	
	@Autowired
	private EmployeeService empService;
	
	//Authentication 
	@RequestMapping(value="/authenticate",method = RequestMethod.POST)
	public ResponseEntity<?> m1(@RequestBody Login emp)
	{
		Login temp = loginService.authenticateEmp(emp);
		
		if(temp != null){
			Employee tempEmp = temp.getEmp();
			System.out.println(temp);
			return new ResponseEntity<Employee>(tempEmp,HttpStatus.OK);
		}
		
		return new ResponseEntity<Boolean>(false,HttpStatus.OK);		
	}

}
