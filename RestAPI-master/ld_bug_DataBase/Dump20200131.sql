CREATE DATABASE  IF NOT EXISTS `ladybug_app_main` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `ladybug_app_main`;
-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: ladybug_app_main
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
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
 SET character_set_client = utf8mb4 ;
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
) ENGINE=InnoDB AUTO_INCREMENT=260 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bug_dtls`
--

LOCK TABLES `bug_dtls` WRITE;
/*!40000 ALTER TABLE `bug_dtls` DISABLE KEYS */;
INSERT INTO `bug_dtls` (`bug_id`, `bug_name`, `bug_desc`, `bug_start`, `bug_end`, `bug_priority`, `bug_by_emp_id`, `bug_assignee`, `bug_project_id`, `bug_status`, `bug_mgr_id`) VALUES (240,'BUG-1','BUG-DESCRIPTION-1',NULL,NULL,'HIGH',127,NULL,11,'NEW',129),(241,'BUG-2','BUG-DESCRIPTION-2',NULL,NULL,'LOW',126,142,22,'INPROGRESS',129),(242,'BUG-3','BUG-DESCRIPTION-3',NULL,NULL,'MEDIUM',148,142,55,'FIXED',129),(243,'BUG-4','BUG-DESCRIPTION-4',NULL,NULL,'HIGHEST',143,142,22,'CLOSED',129),(244,'BUG-5','BUG-DESCRIPTION-5',NULL,NULL,'LOWEST',148,NULL,11,'NEW',129),(245,'BUG-6','BUG-DESCRIPTION-6',NULL,NULL,'HIGH',128,NULL,33,'NEW',130),(246,'BUG-7','BUG-DESCRIPTION-7',NULL,NULL,'LOW',131,146,33,'INPROGRESS',130),(247,'BUG-8','BUG-DESCRIPTION-8',NULL,NULL,'MEDIUM',144,146,44,'FIXED',130),(248,'BUG-9','BUG-DESCRIPTION-9',NULL,NULL,'HIGHEST',145,146,33,'CLOSED',130),(249,'BUG-10','BUG-DESCRIPTION-10',NULL,NULL,'LOWEST',144,146,44,'INPROGRESS',130),(250,'BUG-11','BUG-DESCRIPTION-11',NULL,NULL,'HIGH',134,NULL,66,'NEW',132),(251,'BUG-12','BUG-DESCRIPTION-12',NULL,NULL,'LOW',136,135,88,'INPROGRESS',132),(252,'BUG-13','BUG-DESCRIPTION-13',NULL,NULL,'MEDIUM',137,135,99,'FIXED',132),(253,'BUG-14','BUG-DESCRIPTION-14',NULL,NULL,'HIGHEST',137,135,66,'INPROGRESS',132),(254,'BUG-15','BUG-DESCRIPTION-15',NULL,NULL,'LOWEST',134,135,66,'CLOSED',132),(255,'BUG-16','BUG-DESCRIPTION-16',NULL,NULL,'HIGH',139,NULL,77,'NEW',133),(256,'BUG-17','BUG-DESCRIPTION-17',NULL,NULL,'LOW',140,138,111,'INPROGRESS',133),(257,'BUG-18','BUG-DESCRIPTION-18',NULL,NULL,'MEDIUM',141,138,77,'FIXED',133),(258,'BUG-19','BUG-DESCRIPTION-19',NULL,NULL,'HIGHEST',141,138,77,'CLOSED',133),(259,'BUG-20','BUG-DESCRIPTION-20',NULL,NULL,'LOWEST',139,138,111,'INPROGRESS',133);
/*!40000 ALTER TABLE `bug_dtls` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emp_project_relation`
--

DROP TABLE IF EXISTS `emp_project_relation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
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
INSERT INTO `emp_project_relation` (`proj_id`, `e_id`) VALUES (11,126),(22,126),(11,127),(22,127),(33,128),(44,128),(33,131),(44,131),(66,134),(88,134),(99,134),(66,136),(88,136),(99,136),(66,137),(88,137),(99,137),(77,139),(111,139),(77,140),(111,140),(77,141),(11,143),(22,143),(33,144),(44,144),(33,145),(44,147),(11,148),(22,148),(55,148);
/*!40000 ALTER TABLE `emp_project_relation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
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
) ENGINE=InnoDB AUTO_INCREMENT=149 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` (`emp_id`, `first_name`, `last_name`, `created_on`, `user_name`, `mgr_id`) VALUES (125,'admin',NULL,NULL,NULL,NULL),(126,'akash','soni',NULL,NULL,129),(127,'pankaj','sakhare',NULL,NULL,129),(128,'vishal','wasekar',NULL,NULL,130),(129,'krishna','tiwari',NULL,NULL,125),(130,'buland','khan',NULL,NULL,125),(131,'Bhanu','Chandar',NULL,NULL,130),(132,'Vijay','Kumar',NULL,NULL,125),(133,'Vinay','Kumar',NULL,NULL,125),(134,'Sri','Charan',NULL,NULL,132),(135,'Vinod','Chowdary',NULL,NULL,132),(136,'Pramod','K',NULL,NULL,132),(137,'sathish','Chowdary',NULL,NULL,132),(138,'Vamsi','Krishna',NULL,NULL,133),(139,'Kiran','Jadho',NULL,NULL,133),(140,'Laxmikanth','Mahale',NULL,NULL,133),(141,'Kashish','Agarwal',NULL,NULL,133),(142,'Aman','Pandey',NULL,NULL,129),(143,'Karthick','Ramani',NULL,NULL,129),(144,'Apurup','Reddy',NULL,NULL,130),(145,'Akash','Reddy',NULL,NULL,130),(146,'Vineel','Kumar',NULL,NULL,130),(147,'Prasad','Deshkar',NULL,NULL,130),(148,'Dhirendra','Pratap',NULL,NULL,129);
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
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
INSERT INTO `login` (`email`, `password`, `role`, `last_login`, `reset_token`, `emp_id`) VALUES ('akash@gmail.com','akash11','DEVTEST',NULL,NULL,145),('aman@gmail.com','aman11','SUPPORT',NULL,NULL,142),('apurup@gmail.com','apurup11','DEVTEST',NULL,NULL,144),('asoni7667@gmail.com','akash11','DEVTEST',NULL,'',126),('bhanuchandar7528@gmail.com','bhanu11','DEVTEST',NULL,NULL,131),('buland@gmail.com','buland11','MANAGER',NULL,NULL,130),('charan@gmail.com','charan11','DEVTEST',NULL,NULL,134),('dhirendra@gmail.com','dhirendra11','DEVTEST',NULL,NULL,148),('karthick@gmail.com','karthick11','DEVTEST',NULL,NULL,143),('kashish@gmail.com','kashish11','DEVTEST',NULL,NULL,141),('kiran@gmail.com','kiran11','DEVTEST',NULL,NULL,139),('krishna@gmail.com','krihsna11','MANAGER',NULL,NULL,129),('ladybugaug19@gmail.com','Ladybug@2020','ADMIN',NULL,NULL,125),('laxmikanth@gmail.com','laxmikanth11','DEVTEST',NULL,NULL,140),('pankajsakhare91@gmail.com','pankaj11','DEVTEST',NULL,'bc3f012e-0fc0-4709-ad29-66b230f61fa9',127),('pramod@gmail.com','pramod11','DEVTEST',NULL,NULL,136),('prasad@gmail.com','prasad11','DEVTEST',NULL,NULL,147),('satish@gmail.com','satish11','DEVTEST',NULL,NULL,137),('vamsi@gmail.com','vamsi11','SUPPORT',NULL,NULL,138),('vijaykatabathini96@gmail.com','vijay11','MANAGER',NULL,NULL,132),('vinay@gmail.com','vinay11','MANAGER',NULL,NULL,133),('vineel@gmail.com','vineel11','SUPPORT',NULL,NULL,146),('vinod@gmail.com','vinod11','SUPPORT',NULL,NULL,135),('vwasekar22@gmail.com','vishal11','DEVTEST',NULL,'',128);
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `projects` (
  `project_id` int(11) NOT NULL AUTO_INCREMENT,
  `project_name` varchar(45) NOT NULL,
  `project_desc` varchar(250) DEFAULT NULL,
  `project_mgr` int(11) DEFAULT NULL,
  PRIMARY KEY (`project_id`)
) ENGINE=InnoDB AUTO_INCREMENT=112 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` (`project_id`, `project_name`, `project_desc`, `project_mgr`) VALUES (11,'Swiggy','Food Delivering App',129),(22,'Monster','Job Posting Application',129),(33,'EBook App','Sharing Books',130),(44,'ECommerce','Shopping Application',130),(55,'Student Portal','College Management Student Portal',129),(66,'Localite','Shopping Grocery Application',132),(77,'Doctor Management App','Doctor Management Application ',133),(88,'Social App','Metting Application, Social Networking,  Sharing views',132),(99,'Health App','Monitoring Health Conditions',132),(111,'Quickr','Platform to Sell or Exchange the goods',133);
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

-- Dump completed on 2020-01-31  0:59:58
