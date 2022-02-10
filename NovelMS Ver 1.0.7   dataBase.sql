/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 5.5.61 : Database - nover_manager_system
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`nover_manager_system` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `nover_manager_system`;

/*Table structure for table `administrator_info` */

DROP TABLE IF EXISTS `administrator_info`;

CREATE TABLE `administrator_info` (
  `ID` varchar(255) NOT NULL COMMENT 'ID',
  `AName` varchar(50) DEFAULT NULL COMMENT '管理员姓名',
  `ANickname` varchar(255) DEFAULT NULL COMMENT '管理员昵称',
  `AEmail` varchar(255) DEFAULT NULL COMMENT '管理员邮箱',
  `ATelephone` varchar(11) DEFAULT NULL COMMENT '管理员联系电话',
  `APassword` varchar(16) DEFAULT NULL COMMENT '管理员密码',
  `ARole` varchar(255) DEFAULT NULL COMMENT '管理员角色',
  `AHeadPortrait` varchar(255) DEFAULT NULL COMMENT '管理员头像路径',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `audit_log` */

DROP TABLE IF EXISTS `audit_log`;

CREATE TABLE `audit_log` (
  `ID` varchar(255) NOT NULL,
  `type` int(1) DEFAULT NULL COMMENT '审核类型 1:小说 2:章节',
  `result` varchar(255) DEFAULT NULL COMMENT '审核结果 1:通过 0：不通过',
  `opinion` varchar(255) DEFAULT NULL COMMENT '审核意见',
  `auditor` varchar(255) DEFAULT NULL COMMENT '审核人',
  `time` datetime DEFAULT NULL COMMENT '审核时间',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `chapter_info` */

DROP TABLE IF EXISTS `chapter_info`;

CREATE TABLE `chapter_info` (
  `ID` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL COMMENT '章节名',
  `content` text COMMENT '章节内容',
  `isverify` varchar(255) DEFAULT NULL COMMENT '审核表外键ID',
  `isDelete` int(1) DEFAULT NULL COMMENT '是否删除 1：删除 0：未删除',
  `time` datetime DEFAULT NULL COMMENT '发布时间',
  `NID` varchar(255) DEFAULT NULL COMMENT '小说外键ID',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `novel_info` */

DROP TABLE IF EXISTS `novel_info`;

CREATE TABLE `novel_info` (
  `ID` varchar(255) NOT NULL,
  `coverUrl` varchar(255) DEFAULT NULL COMMENT '小说封面路径',
  `name` varchar(255) DEFAULT NULL COMMENT '小说名',
  `synopsis` text COMMENT '小说简介',
  `state` varchar(255) DEFAULT NULL COMMENT '状态 完结\\连载中',
  `Author` varchar(255) DEFAULT NULL COMMENT '作者',
  `isverify` varchar(255) DEFAULT NULL COMMENT '审核表外键ID',
  `time` datetime DEFAULT NULL COMMENT '发布时间',
  `isDelete` int(1) DEFAULT NULL COMMENT '是否删除  1：删除  0：未删除',
  `type` varchar(255) DEFAULT NULL COMMENT '小说类型',
  `recentUpdatesTime` datetime DEFAULT NULL COMMENT '最近更新时间',
  `recentUpdatesChapter` varchar(255) DEFAULT NULL COMMENT '最新更新章节编号',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `permission_role_info` */

DROP TABLE IF EXISTS `permission_role_info`;

CREATE TABLE `permission_role_info` (
  `ID` varchar(255) NOT NULL COMMENT 'ID',
  `chapter` int(1) DEFAULT NULL COMMENT '章节审核',
  `novel` int(1) DEFAULT NULL COMMENT '小说审核',
  `role` int(1) DEFAULT NULL COMMENT '角色管理',
  `type` int(1) DEFAULT NULL COMMENT '书籍类型管理',
  `administrator` int(1) DEFAULT NULL COMMENT '管理员管理',
  `user` int(1) DEFAULT NULL COMMENT '注册用户管理',
  `name` varchar(50) DEFAULT NULL COMMENT '角色名字',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `type_info` */

DROP TABLE IF EXISTS `type_info`;

CREATE TABLE `type_info` (
  `ID` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL COMMENT '小说类型名称',
  `time` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `user_info` */

DROP TABLE IF EXISTS `user_info`;

CREATE TABLE `user_info` (
  `ID` varchar(255) NOT NULL COMMENT '用户ID',
  `UName` varchar(255) DEFAULT NULL COMMENT '用户昵称',
  `UEmail` varchar(255) DEFAULT NULL COMMENT '用户邮箱',
  `UPassword` varchar(16) DEFAULT NULL COMMENT '用户密码',
  `UHeadPortrait` varchar(255) DEFAULT NULL COMMENT '用户头像路径',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `chapter_novel_user_admin_audit_type` */

DROP TABLE IF EXISTS `chapter_novel_user_admin_audit_type`;

/*!50001 DROP VIEW IF EXISTS `chapter_novel_user_admin_audit_type` */;
/*!50001 DROP TABLE IF EXISTS `chapter_novel_user_admin_audit_type` */;

/*!50001 CREATE TABLE  `chapter_novel_user_admin_audit_type`(
 `ChapterID` varchar(255) ,
 `ChapterName` varchar(255) ,
 `ChapterContent` text ,
 `ChapterTime` datetime ,
 `ChapterIsDelete` int(1) ,
 `AuditResult` varchar(255) ,
 `AuditOpinion` varchar(255) ,
 `NovelID` varchar(255) ,
 `NovelName` varchar(255) ,
 `NovelState` varchar(255) ,
 `NovelCoverUrl` varchar(255) ,
 `UserName` varchar(255) ,
 `UserHeadPortrait` varchar(255) ,
 `UserID` varchar(255) ,
 `TypeID` varchar(255) ,
 `TypeName` varchar(255) ,
 `auditAuditor` varchar(255) ,
 `AdminName` varchar(50) ,
 `AdminNickname` varchar(255) ,
 `AdminHeadportrait` varchar(255) ,
 `AdminID` varchar(255) ,
 `AuditID` varchar(255) ,
 `AuditTime` datetime 
)*/;

/*Table structure for table `novel_user_admin_audit_type` */

DROP TABLE IF EXISTS `novel_user_admin_audit_type`;

/*!50001 DROP VIEW IF EXISTS `novel_user_admin_audit_type` */;
/*!50001 DROP TABLE IF EXISTS `novel_user_admin_audit_type` */;

/*!50001 CREATE TABLE  `novel_user_admin_audit_type`(
 `NovelID` varchar(255) ,
 `NovelCoverUrl` varchar(255) ,
 `NovelName` varchar(255) ,
 `NovelSynopsis` text ,
 `NovelState` varchar(255) ,
 `auditID` varchar(255) ,
 `NovelUploadTime` datetime ,
 `NovelIsDelete` int(1) ,
 `NovelTypeName` varchar(255) ,
 `NovelType` varchar(255) ,
 `UserName` varchar(255) ,
 `UserID` varchar(255) ,
 `UserHeadPortrait` varchar(255) ,
 `AuditResult` varchar(255) ,
 `AuditOpinion` varchar(255) ,
 `AuditTime` datetime ,
 `auditAuditor` varchar(255) ,
 `AdminName` varchar(50) ,
 `AdminNickname` varchar(255) ,
 `AdminHeadportrait` varchar(255) ,
 `AdminID` varchar(255) ,
 `auditType` int(1) ,
 `NovelRecentUpdatesTime` datetime ,
 `NovelRecentUpdatesChapter` varchar(255) 
)*/;

/*View structure for view chapter_novel_user_admin_audit_type */

/*!50001 DROP TABLE IF EXISTS `chapter_novel_user_admin_audit_type` */;
/*!50001 DROP VIEW IF EXISTS `chapter_novel_user_admin_audit_type` */;

/*!50001 CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `chapter_novel_user_admin_audit_type` AS select `chapter_info`.`ID` AS `ChapterID`,`chapter_info`.`name` AS `ChapterName`,`chapter_info`.`content` AS `ChapterContent`,`chapter_info`.`time` AS `ChapterTime`,`chapter_info`.`isDelete` AS `ChapterIsDelete`,`audit_log`.`result` AS `AuditResult`,`audit_log`.`opinion` AS `AuditOpinion`,`novel_info`.`ID` AS `NovelID`,`novel_info`.`name` AS `NovelName`,`novel_info`.`state` AS `NovelState`,`novel_info`.`coverUrl` AS `NovelCoverUrl`,`user_info`.`UName` AS `UserName`,`user_info`.`UHeadPortrait` AS `UserHeadPortrait`,`user_info`.`ID` AS `UserID`,`type_info`.`ID` AS `TypeID`,`type_info`.`name` AS `TypeName`,`audit_log`.`auditor` AS `auditAuditor`,(select `administrator_info`.`AName` from `administrator_info` where (`administrator_info`.`ID` = `auditAuditor`)) AS `AdminName`,(select `administrator_info`.`ANickname` from `administrator_info` where (`administrator_info`.`ID` = `auditAuditor`)) AS `AdminNickname`,(select `administrator_info`.`AHeadPortrait` from `administrator_info` where (`administrator_info`.`ID` = `auditAuditor`)) AS `AdminHeadportrait`,(select `administrator_info`.`ID` from `administrator_info` where (`administrator_info`.`ID` = `auditAuditor`)) AS `AdminID`,`audit_log`.`ID` AS `AuditID`,`audit_log`.`time` AS `AuditTime` from ((((`chapter_info` join `audit_log` on((`chapter_info`.`isverify` = `audit_log`.`ID`))) join `novel_info` on((`chapter_info`.`NID` = `novel_info`.`ID`))) join `user_info` on((`novel_info`.`Author` = `user_info`.`ID`))) join `type_info` on((`novel_info`.`type` = `type_info`.`ID`))) */;

/*View structure for view novel_user_admin_audit_type */

/*!50001 DROP TABLE IF EXISTS `novel_user_admin_audit_type` */;
/*!50001 DROP VIEW IF EXISTS `novel_user_admin_audit_type` */;

/*!50001 CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `novel_user_admin_audit_type` AS select `novel_info`.`ID` AS `NovelID`,`novel_info`.`coverUrl` AS `NovelCoverUrl`,`novel_info`.`name` AS `NovelName`,`novel_info`.`synopsis` AS `NovelSynopsis`,`novel_info`.`state` AS `NovelState`,`novel_info`.`isverify` AS `auditID`,`novel_info`.`time` AS `NovelUploadTime`,`novel_info`.`isDelete` AS `NovelIsDelete`,`type_info`.`name` AS `NovelTypeName`,`type_info`.`ID` AS `NovelType`,`user_info`.`UName` AS `UserName`,`user_info`.`ID` AS `UserID`,`user_info`.`UHeadPortrait` AS `UserHeadPortrait`,`audit_log`.`result` AS `AuditResult`,`audit_log`.`opinion` AS `AuditOpinion`,`audit_log`.`time` AS `AuditTime`,`audit_log`.`auditor` AS `auditAuditor`,(select `administrator_info`.`AName` from `administrator_info` where (`administrator_info`.`ID` = `auditAuditor`)) AS `AdminName`,(select `administrator_info`.`ANickname` from `administrator_info` where (`administrator_info`.`ID` = `auditAuditor`)) AS `AdminNickname`,(select `administrator_info`.`AHeadPortrait` from `administrator_info` where (`administrator_info`.`ID` = `auditAuditor`)) AS `AdminHeadportrait`,(select `administrator_info`.`ID` from `administrator_info` where (`administrator_info`.`ID` = `auditAuditor`)) AS `AdminID`,`audit_log`.`type` AS `auditType`,`novel_info`.`recentUpdatesTime` AS `NovelRecentUpdatesTime`,`novel_info`.`recentUpdatesChapter` AS `NovelRecentUpdatesChapter` from (((`novel_info` join `user_info` on((`novel_info`.`Author` = `user_info`.`ID`))) join `type_info` on((`novel_info`.`type` = `type_info`.`ID`))) join `audit_log` on((`novel_info`.`isverify` = `audit_log`.`ID`))) */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
