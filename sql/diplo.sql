-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 09, 2024 at 01:11 PM
-- Server version: 8.2.0
-- PHP Version: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `diplo`
--

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'laura', '81dc9bdb52d04dc20036dbd8313ed055'),
(3, 'elisa', '81dc9bdb52d04dc20036dbd8313ed055');

-- --------------------------------------------------------

--
-- Table structure for table `valoraciones`
--

DROP TABLE IF EXISTS `valoraciones`;
CREATE TABLE IF NOT EXISTS `valoraciones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `titulo` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `comentario` text COLLATE utf8mb4_general_ci NOT NULL,
  `valoracion` tinyint NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `valoraciones`
--

INSERT INTO `valoraciones` (`id`, `fecha`, `titulo`, `comentario`, `valoracion`) VALUES
(1, '2019-08-15', 'Impressing stay', 'I have Arriving check in to the hotel with my wife at 2 p.m . I got premier pool acces type room. When i was first stepping into hotel every staff who meet me has greeting me with broad smile . Everyone was helpfulness especially to the front staff the name is Udin and Dilla . I really really impressive with them . They are kindest to me . and the other Hotel staff were very good service . Facilities and hotel view are fantastic. Breakfast menu was very awesome and complete. Hotel room was clean, very comfortable. I will back soon !', 5),
(9, '2020-03-09', 'Great resort', 'This is a very nice resort made special by the staff.. from the front desk to the restaurant they are all excellent, they make a driver available for local Journeys. Breakfast and dinner arr very good.\r\n\r\nWho can be a little cold at times, and the internet is very intermittent which is disappointing. However overall I recommend this resort.', 4),
(3, '2019-11-15', 'Good', 'All around good place, breakfast was good and staff where helpful. Great for families with young children.\r\n\r\nOnly thing I can I didn\'t like was 3pm check in. Hopefully this ould be updated in the future.', 4),
(5, '2020-05-17', 'Excellent Hotel', 'Deluxe room with pool acces and view is cool. We love it. All the thing is very satisfying. Suggestion only for dinner menu. Should not be the same for 3days and 2 night. Facility is complete. Sauna,jacuzy tennis court, basket ball etc', 5),
(8, '2020-02-07', 'Weekend Escape', 'This place is always been my escape for a short break weekend. I love this place, food are good, room are clean, and especially the staff are very very nice and helpfull. This time i like to mention a staff name Arief Setiawan in the breakfast area who is very helpfull and so nice. Not just to us but i saw he did also to everyone. Love the dedication, and that is very well deserved an employee.\r\nLove to come back there again soon.', 5),
(15, '2022-03-04', 'Very nice', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 3);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
