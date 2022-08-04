-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 26, 2022 at 04:41 PM
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
-- Database: `user`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `name` text NOT NULL,
  `Cname` text NOT NULL,
  `Phone` int(10) NOT NULL,
  `Address` varchar(50) NOT NULL,
  `eid` text NOT NULL,
  `password1` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`name`, `Cname`, `Phone`, `Address`, `eid`, `password1`) VALUES
('Ishika', 'erer', 1234567891, ' drfhgfdhgd', 'ishigautam24@gmail.com', '12345'),
('Riya', 'yut', 345667889, 'qwqwqw', 'riya23@gmail.com', '12345'),
('Ishika', 'erer', 345667889, ' drfhgfdhgd', 'ishi24@gmail.com', '12345'),
('Ishika', 'erer', 345667889, ' drfhgfdhgd', 'ishi24@gmail.com', '123455'),
('Mahi', 'L.ZG', 1234543267, ' drfhgfdhgd', 'mahi45@gmail.in', '56789'),
('Ishika', 'erer', 454211, ' drfhgfdhgd', 'ishigautam24@gmail.com', '1234'),
('Ishika', 'erer', 454211, ' drfhgfdhgd', 'ishigautam24@gmail.com', '1234');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
