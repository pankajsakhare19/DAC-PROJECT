package spring.ladybug.ladybugapp.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import spring.ladybug.ladybugapp.daos.LoginAuthDao;
import spring.ladybug.ladybugapp.pojos.Login;
@Transactional
@Service
public class AuthServicesImpl implements AuthServices {

	@Autowired
	private LoginAuthDao loginDao;
	
	@Override
	public Login authenticateEmp(Login login) {
	//	Employee temp1 = new Employee();
		Login temp = new Login();
		temp.setEmail(login.getEmail());
		temp.setPassword(login.getPassword());
		
		Example<Login> exampleEmp = Example.of(temp);
		
		//Returns the result for the below query:
		// SELECT * FROM employees e WHERE e.emp_email=? and e.emp_password=?;
		Optional<Login> optional = loginDao.findOne(exampleEmp);
		if(optional.isPresent()) {
			return optional.get();
		}		
		return null;
	}

	@Override
	public Optional<Login> findLoginByEmail(String email) {
		return loginDao.findByEmail(email);
	}

	@Override
	public Optional<Login> findLoginByResetToken(String resetToken) {
		return loginDao.findByResetToken(resetToken);
	}

	@Override
	public void save(Login login){
		loginDao.save(login);
		
	}

}
