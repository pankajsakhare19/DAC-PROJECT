package spring.ladybug.ladybugapp.daos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import spring.ladybug.ladybugapp.pojos.Login;

@Repository
public interface LoginAuthDao extends JpaRepository<Login, String>{
	
	//SELECT * FROM user WHERE email = ?
	Optional<Login> findByEmail(String email);
	
	//SELECT * FROM user WHERE reset_token = ?
	Optional<Login> findByResetToken(String resetToken);


	

}
