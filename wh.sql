-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 26, 2022 at 04:30 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wh`
--

-- --------------------------------------------------------

--
-- Table structure for table `wh`
--

CREATE TABLE `wh` (
  `wname` text NOT NULL,
  `ciname` text NOT NULL,
  `coname` text NOT NULL,
  `email` text NOT NULL,
  `sname` text NOT NULL,
  `zc` varchar(50) NOT NULL,
  `ph` varchar(50) NOT NULL,
  `address` text NOT NULL,
  `mname` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `wh`
--

INSERT INTO `wh` (`wname`, `ciname`, `coname`, `email`, `sname`, `zc`, `ph`, `address`, `mname`) VALUES
('erww', 'Delhi', 'India', 'ishigautam24@gmail.com', 'Mahrashtra', '110054', '5478965412', 'aasdsdfdsfgrrtret', 'Ramya'),
('erww', 'Delhi', 'India', 'hayhrt21@gmail.hj', 'Delhi', '110051', '5478965412', 'erwerewr', 'Ramya'),
('kl pvt. ltd.', 'Mumbai', 'India', 'hayhrt21@gmail.in', 'Delhi', '11032', '5478965412', 'wewqrrwe', 'rt'),
('kl pvt. ltd.', 'dfree', 'India', 'ishigautam24@gmail.com', 'qwrrf', '110054', '2345678901', 'qwqw', 'Ramya');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
