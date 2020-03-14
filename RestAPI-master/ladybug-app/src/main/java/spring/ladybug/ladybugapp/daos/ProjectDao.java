package spring.ladybug.ladybugapp.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import spring.ladybug.ladybugapp.pojos.Project;

public interface ProjectDao extends JpaRepository<Project, Integer> {
	
	List<Project> findAll();
	
}
