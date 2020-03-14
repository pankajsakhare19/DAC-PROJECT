package spring.ladybug.ladybugapp.controller;

import java.util.Optional;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import spring.ladybug.ladybugapp.pojos.Login;
import spring.ladybug.ladybugapp.services.AuthServices;
import spring.ladybug.ladybugapp.services.EmailService;

@CrossOrigin(origins = "*")
@RestController
public class PasswordController {

	@Autowired
	private AuthServices authService;

	@Autowired
	private EmailService emailService;

	// @Autowired
	// private BCryptPasswordEncoder bCryptPasswordEncoder;

	public PasswordController() {
		
	}

	//Sending password reset token to registered email
	@RequestMapping(value = "/forgot", method = RequestMethod.POST)
	public ResponseEntity<?> processForgotPasswordForm(@RequestBody Login emps, HttpServletRequest request) {
		System.out.println("inside forgot");
		System.out.println(emps.getEmail());
		System.out.println(request.getScheme() + " " + request.getServerName() + " " + request.getServletPath() + " "
				+ request.getServletContext());
		String email = emps.getEmail();

		// Lookup user in database by e-mail
		Optional<Login> optional = authService.findLoginByEmail(email);

		if (!optional.isPresent()) {
			return new ResponseEntity<Boolean>(false, HttpStatus.OK);
		} else {

			// Generate random 36-character string token for reset password
			Login emp = optional.get();
			emp.setResetToken(UUID.randomUUID().toString());

			// Save token to database
			authService.save(emp);

			String appUrl = request.getScheme() + "://" + request.getRemoteAddr();
			System.out.println(request.getRemoteAddr());
			// Email message
			SimpleMailMessage passwordResetEmail = new SimpleMailMessage();
			passwordResetEmail.setFrom("ladybugaug19@gmail.com");
			passwordResetEmail.setTo(emp.getEmail());
			passwordResetEmail.setSubject("Password Reset Request");
			passwordResetEmail.setText(
					"To reset your password, click the link below:\n" + appUrl + "/login/reset/" + emp.getResetToken());

			emailService.sendEmail(passwordResetEmail);

		}

		return new ResponseEntity<Boolean>(true, HttpStatus.OK);

	}

	// Resetting the password by comparing the reset token
	@RequestMapping(value = "/reset/{token}", method = RequestMethod.POST)
	public ResponseEntity<?> setNewPassword(@RequestBody Login emp, HttpServletRequest request,
			@PathVariable("token") String token) {

		// Find the user associated with the reset token Optional<User> user =
		System.out.println(token);
		Optional<Login> employee = authService.findLoginByResetToken(token);
		System.out.println(employee);
		// This should always be non-null but we check just in case if
		if (employee.isPresent()) {
			System.out.println(token);
			Login resetEmployee = employee.get();
			System.out.println(resetEmployee.getResetToken() + " " + resetEmployee.getPassword());

			System.out.println(emp.getPassword());
			// Set new password
			resetEmployee.setPassword(emp.getPassword());

			// Set the reset token to null so it cannot be used again
			resetEmployee.setResetToken(null);

			// Save user userService.saveUser(resetUser);
			authService.save(resetEmployee);
			return new ResponseEntity<Boolean>(true, HttpStatus.OK);

		}
		return new ResponseEntity<Boolean>(false, HttpStatus.OK);
	}
}
