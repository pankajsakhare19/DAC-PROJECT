package spring.ladybug.ladybugapp.daos;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import spring.ladybug.ladybugapp.pojos.BugDtls;
import spring.ladybug.ladybugapp.pojos.Project;
import java.util.List;

public interface BugDao extends JpaRepository<BugDtls, Integer> {
	
	List<BugDtls> findByProject(Project project);
	
	long countByProject(Project p);
	

}
