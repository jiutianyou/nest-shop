/*
Navicat MySQL Data Transfer

Source Server         : localSql
Source Server Version : 50718
Source Host           : localhost:3306
Source Database       : vuestudy

Target Server Type    : MYSQL
Target Server Version : 50718
File Encoding         : 65001

Date: 2021-01-07 13:43:10
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account` varchar(32) NOT NULL COMMENT '用户登录账号',
  `password` varchar(200) DEFAULT NULL COMMENT '用户登录密码',
  `avatar` varchar(200) NOT NULL COMMENT '头像地址',
  `create_date` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '创建时间',
  `update_date` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '更新时间',
  `phoneNum` varchar(20) DEFAULT NULL COMMENT '用户手机号码',
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '所属状态是否有效， 使用中， 禁用',
  `email` varchar(200) NOT NULL COMMENT '邮箱地址',
  `nickname` varchar(32) DEFAULT NULL COMMENT '用户显示昵称',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '张良', '123456', '20', '2019-05-09 09:30:50.000000', '0000-00-00 00:00:00.000000', '15012121212', '0', '121232112@qq.com', null);
INSERT INTO `user` VALUES ('2', 'zhansan', '111', '3', '2019-05-09 11:34:42.000000', '0000-00-00 00:00:00.000000', null, '0', '121232112@qq.com', null);
INSERT INTO `user` VALUES ('3', '过高', '123456', '1', '2019-05-09 20:43:46.000000', '0000-00-00 00:00:00.000000', null, '0', '121232112@qq.com', null);
INSERT INTO `user` VALUES ('4', 'safns', '123456', '2', '2019-05-09 20:43:58.000000', '0000-00-00 00:00:00.000000', null, '0', '121232112@qq.com', null);
INSERT INTO `user` VALUES ('5', 'ds', '123', '2', '2019-05-09 20:44:05.000000', '0000-00-00 00:00:00.000000', null, '0', '121232112@qq.com', null);
INSERT INTO `user` VALUES ('6', 'eee', '123456', '3', '2019-05-09 20:44:14.000000', '0000-00-00 00:00:00.000000', null, '0', '121232112@qq.com', null);
INSERT INTO `user` VALUES ('7', 'dd', '123456', '1', '2019-05-09 20:44:23.000000', '0000-00-00 00:00:00.000000', null, '1', '121232112@qq.com', null);
INSERT INTO `user` VALUES ('8', 'ff', '123456', '2', '2019-05-09 20:44:31.000000', '0000-00-00 00:00:00.000000', null, '1', '121232112@qq.com', null);
INSERT INTO `user` VALUES ('9', 'we', '123456', '2', '2019-05-09 20:44:39.000000', '0000-00-00 00:00:00.000000', null, '1', '121232112@qq.com', null);
INSERT INTO `user` VALUES ('10', 'qaz', '123456', '3', '2019-05-09 20:44:48.000000', '0000-00-00 00:00:00.000000', null, '1', '121232112@qq.com', null);
INSERT INTO `user` VALUES ('11', 'sdf', '123', '1', '2019-05-09 20:45:08.000000', '0000-00-00 00:00:00.000000', null, '1', '121232112@qq.com', null);
