/*
 Navicat Premium Data Transfer

 Source Server         : MySQL
 Source Server Type    : MySQL
 Source Server Version : 50561
 Source Host           : localhost:3306
 Source Schema         : ems

 Target Server Type    : MySQL
 Target Server Version : 50561
 File Encoding         : 65001

 Date: 10/12/2020 11:19:11
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for audit_log
-- ----------------------------
DROP TABLE IF EXISTS `audit_log`;
CREATE TABLE `audit_log`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `result` int(255) NULL DEFAULT NULL,
  `opinion` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `auditor` int(255) NULL DEFAULT NULL,
  INDEX `ID`(`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 27 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of audit_log
-- ----------------------------
INSERT INTO `audit_log` VALUES (24, 1, '通过', 1);
INSERT INTO `audit_log` VALUES (25, 1, '通过', 1);
INSERT INTO `audit_log` VALUES (26, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for book_info
-- ----------------------------
DROP TABLE IF EXISTS `book_info`;
CREATE TABLE `book_info`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `imageURL` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `file` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `fileURL` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `author` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `text` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `downloadCount` int(255) NULL DEFAULT NULL,
  `isEnd` int(255) NULL DEFAULT NULL,
  `classID` int(255) NULL DEFAULT NULL,
  `uploadTime` datetime NULL DEFAULT NULL,
  `uploadUser` int(255) NULL DEFAULT NULL,
  `Opinion` int(255) NULL DEFAULT NULL,
  `isDelete` int(255) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of book_info
-- ----------------------------
INSERT INTO `book_info` VALUES (3, 'IMG_4248.JPG', 'http://localhost:8080/EBookMS/image/IMG_4248.JPG', '418280525 马启道+实验10 E-R图构建数据库.zip', 'http://localhost:8080/EBookMS/upload/418280525 马启道+实验10 E-R图构建数据库.zip', '仙王的日常生活', '枯玄', '好看', 0, 0, 1, '2020-12-06 12:14:36', 6, 24, 0);
INSERT INTO `book_info` VALUES (5, 'IMG_4267.JPG', 'http://localhost:8080/EBookMS/image/IMG_4267.JPG', '25 马启道（实验六）.zip', 'http://localhost:8080/EBookMS/upload/25 马启道（实验六）.zip', '我能重生真是太好了', '二日一月', '张凡，一个普普通通的名字，平平淡淡活了89年，在弥留之际却突然被系统绑定了。\r\n“恭喜宿主被系统选中，从此你的时间就是金钱。”\r\n“我.......”\r\n张凡瞪大了眼睛，彻底咽气。\r\n还好，他又重生了。\r\n本书又名：\r\n《她们想让我告白？长得太帅的烦恼》\r\n《为了不被柴刀，我不得不小心翼翼地管理时间》', 0, 0, 2, '2020-12-06 16:09:52', 1, 25, 0);
INSERT INTO `book_info` VALUES (6, 'IMG_4231.JPG', 'http://localhost:8080/EBookMS/image/IMG_4231.JPG', '超神机械师.zip', 'http://localhost:8080/EBookMS/upload超神机械师.zip', '超神机械师', '齐佩甲', '好看 酷酷酷酷酷酷酷酷酷酷酷酷', 0, 1, 7, '2020-12-08 22:31:03', 6, 26, 0);

-- ----------------------------
-- Table structure for class_info
-- ----------------------------
DROP TABLE IF EXISTS `class_info`;
CREATE TABLE `class_info`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `isClose` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of class_info
-- ----------------------------
INSERT INTO `class_info` VALUES (1, '武侠仙侠', '0');
INSERT INTO `class_info` VALUES (2, '玄幻奇幻', '0');
INSERT INTO `class_info` VALUES (3, '现代都市', '0');
INSERT INTO `class_info` VALUES (5, '历史军事', '0');
INSERT INTO `class_info` VALUES (6, '游戏竞技', '0');
INSERT INTO `class_info` VALUES (7, '科幻灵异', '0');
INSERT INTO `class_info` VALUES (8, '美文同人', '0');

-- ----------------------------
-- Table structure for department_info
-- ----------------------------
DROP TABLE IF EXISTS `department_info`;
CREATE TABLE `department_info`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `isClose` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of department_info
-- ----------------------------
INSERT INTO `department_info` VALUES (1, '编辑部', '0');
INSERT INTO `department_info` VALUES (2, '技术部', '0');
INSERT INTO `department_info` VALUES (3, '人事部', '0');
INSERT INTO `department_info` VALUES (4, '财务部', '0');

-- ----------------------------
-- Table structure for employee_info
-- ----------------------------
DROP TABLE IF EXISTS `employee_info`;
CREATE TABLE `employee_info`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `employeeID` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `telephone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `isOnline` int(255) NULL DEFAULT NULL,
  `loginTime` datetime NULL DEFAULT NULL,
  `isTrue` int(255) NULL DEFAULT NULL,
  `isDelete` int(255) NULL DEFAULT NULL,
  `departID` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of employee_info
-- ----------------------------
INSERT INTO `employee_info` VALUES (1, '202021', '王令', 'po123467@qq.com', '110', '1', 0, '2020-12-09 13:23:57', 1, 0, 2);
INSERT INTO `employee_info` VALUES (2, '202022', '刘雨昕', 'po123467@qq.com', '123123123123', '1', 0, '2020-12-08 10:18:11', 1, 0, 2);
INSERT INTO `employee_info` VALUES (3, '202023', '赵海棠', 'po123467@qq.com', '120', '1', 0, '2020-12-09 21:49:20', 1, 0, 2);
INSERT INTO `employee_info` VALUES (9, '202024', '嬴政', 'po123467@qq.com', '119', '1', 0, '2020-12-06 22:18:56', 1, 0, 2);
INSERT INTO `employee_info` VALUES (10, '202025', '路明非', 'po123467@qq.com', '12312312311', '1', 0, '2020-12-10 09:41:15', 1, 0, 2);
INSERT INTO `employee_info` VALUES (11, '202026', '路明泽', 'po123467@qq.com', '12312312311', '1', 0, '2020-12-10 09:43:32', 1, 0, 2);
INSERT INTO `employee_info` VALUES (12, '202027', '路麟城', 'po123467@qq.com', '12312312311', '1', 0, '2020-12-10 09:45:35', 1, 0, 2);
INSERT INTO `employee_info` VALUES (13, '202031', '赢子楚', 'po123467@qq.com', '119', '1', 0, '2020-12-10 11:17:16', 1, 0, 3);

-- ----------------------------
-- Table structure for employeeidmax
-- ----------------------------
DROP TABLE IF EXISTS `employeeidmax`;
CREATE TABLE `employeeidmax`  (
  `EmployeeIdPrefix` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `EmployeeIdSuffix` int(255) NULL DEFAULT NULL,
  PRIMARY KEY (`EmployeeIdPrefix`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of employeeidmax
-- ----------------------------
INSERT INTO `employeeidmax` VALUES ('20202', 8);
INSERT INTO `employeeidmax` VALUES ('20203', 2);

-- ----------------------------
-- Table structure for user_info
-- ----------------------------
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `userID` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `isOnline` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `loginTime` datetime NULL DEFAULT NULL,
  `isDelete` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of user_info
-- ----------------------------
INSERT INTO `user_info` VALUES (1, '叶开', 'po123467@qq.com', '1', '0', '2020-12-08 22:09:41', '0');
INSERT INTO `user_info` VALUES (6, '虞书欣', 'po123467@qq.com', '1', '0', '2020-12-09 13:25:42', '0');
INSERT INTO `user_info` VALUES (7, '唐三', 'po123467@qq.com', '1', '1', '2020-12-10 09:07:01', '0');

-- ----------------------------
-- Function structure for EmployeeIDFunction
-- ----------------------------
DROP FUNCTION IF EXISTS `EmployeeIDFunction`;
delimiter ;;
CREATE FUNCTION `EmployeeIDFunction`()
 RETURNS int(255)
BEGIN
	#Routine body goes here...

	RETURN 0;
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for getEmployeeID
-- ----------------------------
DROP PROCEDURE IF EXISTS `getEmployeeID`;
delimiter ;;
CREATE PROCEDURE `getEmployeeID`(IN id VARCHAR(255),OUT newId VARCHAR(255))
BEGIN
DECLARE oldId VARCHAR(255) DEFAULT '0';
DECLARE idCount INT DEFAULT 0;
SET oldId = id;
set idCount = (SELECT COUNT(EmployeeIdPrefix) FROM employeeidmax WHERE EmployeeIdPrefix = id);
IF idCount = 0 THEN INSERT employeeidmax (EmployeeIdPrefix,EmployeeIDSuffix) VALUES (id,1); end if;
 SELECT CONCAT(EmployeeIdPrefix,EmployeeIDSuffix) INTO newId FROM employeeidmax WHERE EmployeeIdPrefix = id;
  UPDATE employeeidmax SET EmployeeIdSuffix = EmployeeIdSuffix+1 WHERE EmployeeIdPrefix = oldId;
END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table employee_info
-- ----------------------------
DROP TRIGGER IF EXISTS `trigInsertEmployee`;
delimiter ;;
CREATE TRIGGER `trigInsertEmployee` BEFORE INSERT ON `employee_info` FOR EACH ROW BEGIN
  CALL getEmployeeID(new.employeeID,@newID);
  SET new.employeeID = @newID;
 END
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
