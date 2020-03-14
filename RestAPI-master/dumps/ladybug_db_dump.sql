CREATE DATABASE  IF NOT EXISTS `ladybug_app_main` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ladybug_app_main`;
-- MySQL dump 10.13  Distrib 8.0.17, for macos10.14 (x86_64)
--
-- Host: localhost    Database: ladybug_app_main
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bug_dtls`
--

DROP TABLE IF EXISTS `bug_dtls`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bug_dtls` (
  `bug_id` int(11) NOT NULL AUTO_INCREMENT,
  `bug_name` varchar(45) NOT NULL,
  `bug_desc` varchar(250) NOT NULL,
  `bug_start` datetime DEFAULT NULL,
  `bug_end` datetime DEFAULT NULL,
  `bug_priority` varchar(45) DEFAULT NULL,
  `bug_by_emp_id` int(11) NOT NULL,
  `bug_assignee` int(11) DEFAULT NULL,
  `bug_project_id` int(11) DEFAULT NULL,
  `bug_status` varchar(45) DEFAULT NULL,
  `bug_mgr_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`bug_id`),
  KEY `FK_EMP_ID_idx` (`bug_by_emp_id`),
  KEY `FK_PROJ_ID_idx` (`bug_project_id`),
  CONSTRAINT `FK_EMP_ID` FOREIGN KEY (`bug_by_emp_id`) REFERENCES `employees` (`emp_id`),
  CONSTRAINT `FK_PROJ_ID` FOREIGN KEY (`bug_project_id`) REFERENCES `projects` (`project_id`)
) ENGINE=InnoDB AUTO_INCREMENT=248 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bug_dtls`
--

LOCK TABLES `bug_dtls` WRITE;
/*!40000 ALTER TABLE `bug_dtls` DISABLE KEYS */;
INSERT INTO `bug_dtls` VALUES (240,'BUG1','BUG-DESC-1',NULL,NULL,'HIGH',126,NULL,11,'NEW',129),(241,'BUG2','BUG-DESC-2',NULL,NULL,'LOW',127,NULL,11,'NEW',129),(242,'BUG3','BUG-DESC-3',NULL,NULL,'HIGHEST',126,NULL,22,'NEW',129),(243,'BUG4','BUG-DESC-4',NULL,NULL,'MEDIUM',127,NULL,22,'NEW',129),(244,'BUG5','BUG-DESC-5',NULL,NULL,'LOW',128,NULL,33,'NEW',130),(245,'Employee Registration Not Visible','Employee Registration functionality should be visible for Admin to add a new employee to this system',NULL,NULL,'HIGHEST',126,NULL,11,'NEW',129),(246,'Projects Dashboard issue','All the projects are rendering to any employee who is logged in.',NULL,NULL,'HIGHEST',126,NULL,22,'NEW',129),(247,'Bug Deletion Pending','ajabkdb ad',NULL,NULL,'HIGH',126,NULL,11,'NEW',129);
/*!40000 ALTER TABLE `bug_dtls` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emp_project_relation`
--

DROP TABLE IF EXISTS `emp_project_relation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emp_project_relation` (
  `proj_id` int(11) NOT NULL,
  `e_id` int(11) NOT NULL,
  PRIMARY KEY (`proj_id`,`e_id`),
  KEY `FK_EMP_ID_P_idx` (`e_id`),
  CONSTRAINT `FK_EMP_ID_P` FOREIGN KEY (`e_id`) REFERENCES `employees` (`emp_id`),
  CONSTRAINT `FK_PROJ_ID_E` FOREIGN KEY (`proj_id`) REFERENCES `projects` (`project_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emp_project_relation`
--

LOCK TABLES `emp_project_relation` WRITE;
/*!40000 ALTER TABLE `emp_project_relation` DISABLE KEYS */;
INSERT INTO `emp_project_relation` VALUES (11,126),(22,126),(11,127),(22,127),(33,128),(11,129),(22,129),(33,130);
/*!40000 ALTER TABLE `emp_project_relation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employees` (
  `emp_id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `user_name` varchar(45) DEFAULT NULL,
  `mgr_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`emp_id`),
  KEY `mgr_id_idx` (`mgr_id`),
  CONSTRAINT `mgr_id` FOREIGN KEY (`mgr_id`) REFERENCES `employees` (`emp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=131 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` VALUES (125,'admin',NULL,NULL,NULL,NULL),(126,'akash','soni',NULL,NULL,129),(127,'pankaj','sakhare',NULL,NULL,129),(128,'vishal','wasekar',NULL,NULL,130),(129,'krishna','tiwari',NULL,NULL,125),(130,'buland','khan',NULL,NULL,125);
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `role` varchar(45) DEFAULT NULL,
  `last_login` datetime DEFAULT NULL,
  `reset_token` varchar(45) DEFAULT NULL,
  `emp_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`email`),
  KEY `employee_id_idx` (`emp_id`),
  CONSTRAINT `employee_id` FOREIGN KEY (`emp_id`) REFERENCES `employees` (`emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES ('asoni7667@gmail.com','akash11','DEVTEST',NULL,'',126),('buland@gmail.com','buland11','MANAGER',NULL,NULL,130),('krishna@gmail.com','krihsna11','MANAGER',NULL,NULL,129),('ladybugaug19@gmail.com','Ladybug@2020','ADMIN',NULL,NULL,125),('pankajsakhare91@gmail.com','pankaj11','DEVTEST',NULL,'bc3f012e-0fc0-4709-ad29-66b230f61fa9',127),('vwasekar22@gmail.com','vishal11','DEVTEST',NULL,'',128);
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projects` (
  `project_id` int(11) NOT NULL AUTO_INCREMENT,
  `project_name` varchar(45) NOT NULL,
  `project_desc` varchar(250) DEFAULT NULL,
  `project_mgr` int(11) DEFAULT NULL,
  PRIMARY KEY (`project_id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (11,'project11','pro11',129),(22,'project22','pro22',129),(33,'project33','pro33',130);
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-24 20:11:40
