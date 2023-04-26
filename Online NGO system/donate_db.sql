-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 13, 2023 at 09:48 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `donate_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `donate_info`
--

CREATE TABLE `donate_info` (
  `nationality` varchar(15) NOT NULL,
  `focusArea` varchar(25) NOT NULL,
  `amount` int(10) NOT NULL,
  `title` varchar(10) NOT NULL,
  `name` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `contact` bigint(30) NOT NULL,
  `pan` varchar(10) NOT NULL,
  `dob` date NOT NULL,
  `add1` varchar(50) NOT NULL,
  `add2` varchar(50) DEFAULT NULL,
  `postal_code` int(10) NOT NULL,
  `city` varchar(20) NOT NULL,
  `state` varchar(20) NOT NULL,
  `country` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `donate_info`
--

INSERT INTO `donate_info` (`nationality`, `focusArea`, `amount`, `title`, `name`, `email`, `contact`, `pan`, `dob`, `add1`, `add2`, `postal_code`, `city`, `state`, `country`) VALUES
('Indian', 'Health', 1000, 'Mr.', 'Samreen Chowlkar', 'sam@gmail.com', 9098787001, 'ABS234421D', '2003-11-12', 'Thane (West)', NULL, 400601, 'thane', 'Maharashtra', 'India'),
('Indian', 'Orphan', 200, 'Ms.', 'Amreen', 'am12@gmail.com', 9784561230, 'ANDF1234H6', '2003-11-12', 'Kharegao east', NULL, 401253, 'Kharegao', 'Gujrat', 'India'),
('Indian', 'education', 2000, 'Ms', 'Samreen Chowlkar', 'ChowlkarSam1303@gmail.com', 99999999, '0', '2003-11-11', 'Rabodi koliwada thane', 'Pandurang niwad rabodi koliwada thane', 100601, 'Thane', 'Mahrashtra', 'United Kingdom'),
('Indian', 'education', 2000, 'Ms', 'Samreen Chowlkar', 'ChowlkarSam1303@gmail.com', 99999999, '0', '2003-11-11', 'Rabodi koliwada thane', 'Pandurang niwad rabodi koliwada thane', 100601, 'Thane', 'Mahrashtra', 'United Kingdom'),
('Indian', 'education', 500, 'ms', 'Samreen Chowlkar', 'ChowlkarSam1303@gmail.com', 8978789, '0', '2003-11-11', 'Rabodi koliwada thane', 'Pandurang niwad rabodi koliwada thane', 100601, 'Thane', 'Maharashtra', 'United Kingdom'),
('Indian', 'education', 546, 'ms', 'Samreen Chowlkar', 'ChowlkarSam1303@gmail.com', 236512356, '0', '1111-11-11', 'Rabodi koliwada thane', 'Pandurang niwad rabodi koliwada thane', 100601, 'Thane', 'Karnatka', 'United Kingdom'),
('Indian', 'education', 500, 'mrs', 'Samreen Chowlkar', 'ChowlkarSam1303@gmail.com', 898988989, '0', '1111-11-11', 'Rabodi koliwada thane', 'Pandurang niwad rabodi koliwada thane', 100601, 'Thane', 'Karnatka', 'United Kingdom'),
('Indian', 'education', 500, 'mrs', 'Samreen Chowlkar', 'ChowlkarSam1303@gmail.com', 898988989, '0', '1111-11-11', 'Rabodi koliwada thane', 'Pandurang niwad rabodi koliwada thane', 100601, 'Thane', 'Karnatka', 'United Kingdom'),
('Indian', 'orphan', 3000, 'mrs', 'Sanika suresh Bagal', 'sanika@03gmail.com', 232344323, '0', '1111-11-11', 'Satara', 'Rutupark(thane)', 400601, 'Thane', 'Karnatka', 'India'),
('Indian', 'orphan', 3000, 'mrs', 'Sanika suresh Bagal', 'sanika@03gmail.com', 232344323, '0', '1111-11-11', 'Satara', 'Rutupark(thane)', 400601, 'Thane', 'Karnatka', 'India'),
('Indian', 'orphan', 3000, 'mrs', 'Sanika suresh Bagal', 'sanika@03gmail.com', 232344323, '0', '1111-11-11', 'Satara', 'Rutupark(thane)', 400601, 'Thane', 'Karnatka', 'India'),
('Indian', 'orphan', 3000, 'mrs', 'Sanika suresh Bagal', 'sanika@03gmail.com', 232344323, '0', '1111-11-11', 'Satara', 'Rutupark(thane)', 400601, 'Thane', 'Karnatka', 'India'),
('Indian', 'orphan', 3000, 'mrs', 'Sanika suresh Bagal', 'sanika@03gmail.com', 232344323, '0', '1111-11-11', 'Satara', 'Rutupark(thane)', 400601, 'Thane', 'Karnatka', 'India'),
('Indian', 'orphan', 3000, 'mrs', 'Sanika suresh Bagal', 'sanika@03gmail.com', 232344323, '0', '1111-11-11', 'Satara', 'Rutupark(thane)', 400601, 'Thane', 'Karnatka', 'India'),
('Indian', 'orphan', 3000, 'mrs', 'Sanika suresh Bagal', 'sanika@03gmail.com', 232344323, '0', '1111-11-11', 'Satara', 'Rutupark(thane)', 400601, 'Thane', 'Karnatka', 'India'),
('Indian', 'orphan', 3000, 'mrs', 'Sanika suresh Bagal', 'sanika@03gmail.com', 232344323, '0', '1111-11-11', 'Satara', 'Rutupark(thane)', 400601, 'Thane', 'Karnatka', 'India'),
('Indian', 'orphan', 3000, 'mrs', 'Sanika suresh Bagal', 'sanika@03gmail.com', 232344323, '0', '1111-11-11', 'Satara', 'Rutupark(thane)', 400601, 'Thane', 'Karnatka', 'India'),
('Indian', 'orphan', 3000, 'mrs', 'Sanika suresh Bagal', 'sanika@03gmail.com', 232344323, '0', '1111-11-11', 'Satara', 'Rutupark(thane)', 400601, 'Thane', 'Karnatka', 'India'),
('Indian', 'orphan', 3000, 'mrs', 'Sanika suresh Bagal', 'sanika@03gmail.com', 232344323, '0', '1111-11-11', 'Satara', 'Rutupark(thane)', 400601, 'Thane', 'Karnatka', 'India'),
('Indian', 'orphan', 3000, 'mrs', 'Sanika suresh Bagal', 'sanika@03gmail.com', 232344323, '0', '1111-11-11', 'Satara', 'Rutupark(thane)', 400601, 'Thane', 'Karnatka', 'India'),
('Indian', 'orphan', 3000, 'mrs', 'Sanika suresh Bagal', 'sanika@03gmail.com', 232344323, '0', '1111-11-11', 'Satara', 'Rutupark(thane)', 400601, 'Thane', 'Karnatka', 'India'),
('Indian', 'orphan', 3000, 'mrs', 'Sanika suresh Bagal', 'sanika@03gmail.com', 232344323, '0', '1111-11-11', 'Satara', 'Rutupark(thane)', 400601, 'Thane', 'Karnatka', 'India'),
('Indian', 'orphan', 3000, 'mrs', 'Sanika suresh Bagal', 'sanika@03gmail.com', 232344323, '0', '1111-11-11', 'Satara', 'Rutupark(thane)', 400601, 'Thane', 'Karnatka', 'India'),
('Indian', 'orphan', 3000, 'mrs', 'Sanika suresh Bagal', 'sanika@03gmail.com', 232344323, '0', '1111-11-11', 'Satara', 'Rutupark(thane)', 400601, 'Thane', 'Karnatka', 'India'),
('Indian', 'orphan', 3000, 'mrs', 'Sanika suresh Bagal', 'sanika@03gmail.com', 232344323, '0', '1111-11-11', 'Satara', 'Rutupark(thane)', 400601, 'Thane', 'Karnatka', 'India'),
('Indian', 'orphan', 3000, 'mrs', 'Sanika suresh Bagal', 'sanika@03gmail.com', 232344323, '0', '1111-11-11', 'Satara', 'Rutupark(thane)', 400601, 'Thane', 'Karnatka', 'India'),
('Indian', 'health', 1000, 'ms', 'Samreen Chowlkar', 'ChowlkarSam1303@gmail.com', 234545565, '0', '1111-11-11', 'Rabodi koliwada thane', 'Pandurang niwad rabodi koliwada thane', 400601, 'Thane', 'Maharashtra', 'India');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
