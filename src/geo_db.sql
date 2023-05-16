-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: geo_db
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image` (
  `IMAGE_NUMBER` int NOT NULL AUTO_INCREMENT,
  `IMAGE_PATH` varchar(255) DEFAULT NULL,
  `MEMBER_NUMBER` int DEFAULT NULL,
  PRIMARY KEY (`IMAGE_NUMBER`),
  KEY `image_FK` (`MEMBER_NUMBER`),
  CONSTRAINT `image_FK` FOREIGN KEY (`MEMBER_NUMBER`) REFERENCES `member` (`MEMBER_NUMBER`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member` (
  `MEMBER_NUMBER` int NOT NULL AUTO_INCREMENT,
  `MEMBER_ID` varchar(50) DEFAULT NULL,
  `MEMBER_PASSWORD` varchar(50) DEFAULT NULL,
  `MEMBER_NAME` varchar(50) DEFAULT NULL,
  `MEMBER_PHONE_NUMBER` varchar(13) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `MEMBER_REGISTRATION_DATE` datetime DEFAULT CURRENT_TIMESTAMP,
  `MEMBER_WEBSITE` varchar(255) DEFAULT NULL,
  `MEMBER_STATUS` tinyint DEFAULT '0',
  `MEMBER_LEVEL` tinyint DEFAULT '2',
  `MEMBER_IMAGE` int DEFAULT '0',
  PRIMARY KEY (`MEMBER_NUMBER`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES (1,'xsonyn14@gmail.com','1234','송태호',NULL,'2023-03-30 00:00:00',NULL,1,2,0),(2,'payo03@naver.com','1234','송찬영','01089460314','2023-03-30 17:05:45',NULL,1,2,1),(5,'xpayo03@gmail.com','1234','윈터솔져',NULL,'2023-04-24 14:32:00',NULL,0,2,2),(6,'zjwj0294@naver.com','1234','아이어맨',NULL,'2023-04-24 14:32:00',NULL,0,2,3),(7,'payo03@nate.com','1234','토르',NULL,'2023-04-24 14:32:00',NULL,0,2,4);
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `memberlevel`
--

DROP TABLE IF EXISTS `memberlevel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `memberlevel` (
  `MEMBER_LEVEL` tinyint NOT NULL DEFAULT '0' COMMENT '회원등급',
  `MEMBER_LEVEL_DESCRIPTION` varchar(100) NOT NULL,
  PRIMARY KEY (`MEMBER_LEVEL`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `memberlevel`
--

LOCK TABLES `memberlevel` WRITE;
/*!40000 ALTER TABLE `memberlevel` DISABLE KEYS */;
INSERT INTO `memberlevel` VALUES (0,'admin'),(1,'manager'),(2,'user');
/*!40000 ALTER TABLE `memberlevel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `memberonline`
--

DROP TABLE IF EXISTS `memberonline`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `memberonline` (
  `MEMBER_STATUS` tinyint NOT NULL DEFAULT '0' COMMENT '회원 접속상태',
  `MEMBER_STATUS_DESCRIPTION` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`MEMBER_STATUS`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `memberonline`
--

LOCK TABLES `memberonline` WRITE;
/*!40000 ALTER TABLE `memberonline` DISABLE KEYS */;
INSERT INTO `memberonline` VALUES (0,'OFF'),(1,'ON'),(2,'MISSED');
/*!40000 ALTER TABLE `memberonline` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `message`
--

DROP TABLE IF EXISTS `message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `message` (
  `MESSAGE_NUMBER` int NOT NULL AUTO_INCREMENT,
  `FROM_MEMBER_NUMBER` int NOT NULL,
  `TO_MEMBER_NUMBER` int NOT NULL,
  `CONTENT` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `SEND_DATE` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`MESSAGE_NUMBER`)
) ENGINE=InnoDB AUTO_INCREMENT=117 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message`
--

LOCK TABLES `message` WRITE;
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
INSERT INTO `message` VALUES (10,1,2,'you','2023-04-25 04:34:50'),(11,1,2,'i','2023-04-25 04:36:11'),(13,7,2,'h','2023-04-25 04:37:31'),(15,5,2,'hi','2023-04-25 04:38:33'),(20,5,2,'gr','2023-04-25 04:43:14'),(21,6,2,'hi','2023-04-25 04:43:20'),(39,6,2,'412412','2023-04-25 05:00:50'),(108,2,1,'14','2023-04-26 23:42:09'),(111,2,1,'hh','2023-04-26 23:43:27'),(113,2,1,'안녕 태호야','2023-04-28 08:47:36'),(114,1,2,'안녕 찬영아','2023-04-28 08:47:41'),(115,1,2,'나는 혁도야','2023-04-28 08:47:50'),(116,2,1,'응 나는 찬영이야','2023-04-28 08:47:53');
/*!40000 ALTER TABLE `message` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-16  4:57:39
