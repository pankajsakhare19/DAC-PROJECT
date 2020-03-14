package spring.ladybug.ladybugapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class EmailServiceImpl implements EmailService {
	
	
	@Autowired
	private JavaMailSender mailSender;
	
	public EmailServiceImpl() {
		// TODO Auto-generated constructor stub
	}
	
	@Async
	@Override
	public void sendEmail(SimpleMailMessage email) {
		mailSender.send(email);
	}

}
