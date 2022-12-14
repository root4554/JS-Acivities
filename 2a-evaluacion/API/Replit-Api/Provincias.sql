-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 15-12-2022 a las 10:53:10
-- Versión del servidor: 10.3.37-MariaDB-0ubuntu0.20.04.1
-- Versión de PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `2daw3`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Provincias`
--

CREATE TABLE `Provincias` (
  `Provincia` varchar(20) NOT NULL,
  `Extension` int(11) DEFAULT NULL,
  `Habitantes` int(11) DEFAULT NULL,
  `Comunidad` varchar(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Provincias`
--

INSERT INTO `Provincias` (`Provincia`, `Extension`, `Habitantes`, `Comunidad`) VALUES
('ALAVA', 3047, 272447, 'PAV'),
('ALBACETE', 14862, 342677, 'CAM'),
('ALICANTE', 5863, 1334545, 'VAL'),
('ALMERIA', 8774, 455496, 'AND'),
('ASTURIAS', 10565, 1118610, 'AST'),
('AVILA', 8048, 173021, 'CAL'),
('BADAJOZ', 21657, 650388, 'EXT'),
('BALEARES', 5014, 685686, 'BAL'),
('BARCELONA', 7733, 4690998, 'CAT'),
('BURGOS', 14309, 352772, 'CAL'),
('CACERES', 19945, 2732214, 'EXT'),
('CADIZ', 7385, 1096338, 'AND'),
('CANTABRIA', 5289, 526400, 'CAN'),
('CASTELLON', 6679, 453909, 'VAL'),
('CIUDAD REAL', 19749, 475435, 'CAM'),
('CORDOBA', 13718, 754452, 'AND'),
('CUENCA', 17061, 205198, 'CAM'),
('GERONA', 5886, 509628, 'CAT'),
('GRANADA', 12531, 790515, 'AND'),
('GUADALAJARA', 12190, 145593, 'CAM'),
('GUIPUZCOA', 1997, 676488, 'PAV'),
('HUELVA', 10085, 443476, 'AND'),
('HUESCA', 12450, 207810, 'ARA'),
('JAEN', 13498, 637633, 'AND'),
('LA CORUÑA', 7876, 1097511, 'GAL'),
('LA RIOJA', 5034, 260282, 'RIO'),
('LAS PALMAS', 4072, 767969, 'ICA'),
('LEON', 15468, 525869, 'CAL'),
('LERIDA', 12028, 353455, 'CAT'),
('LUGO', 9803, 384365, 'GAL'),
('MADRID', 7995, 4910199, 'MAD'),
('MALAGA', 7276, 1197308, 'AND'),
('MURCIA', 11317, 1038126, 'MUR'),
('NAVARRA', 10421, 521670, 'NAV'),
('ORENSE', 7278, 353491, 'GAL'),
('PALENCIA', 8035, 184396, 'CAL'),
('PONTEVEDRA', 4477, 896847, 'GAL'),
('S. CRUZ DE TENERIFE', 3170, 725815, 'ICA'),
('SALAMANCA', 12336, 357801, 'CAL'),
('SEGOVIA', 6949, 147188, 'CAM'),
('SEVILLA', 14001, 1638218, 'AND'),
('SORIA', 10287, 94130, 'CAL'),
('TARRAGONA', 6283, 542004, 'CAT'),
('TERUEL', 14785, 143680, 'ARA'),
('TOLEDO', 15368, 489543, 'CAM'),
('VALENCIA', 10763, 2141114, 'VAL'),
('VALLADOLID', 8202, 499207, 'CAL'),
('VIZCAYA', 2217, 1156245, 'PAV'),
('ZAMORA', 10559, 211213, 'CAL'),
('ZARAGOZA', 17252, 842427, 'ARA');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Provincias`
--
ALTER TABLE `Provincias`
  ADD PRIMARY KEY (`Provincia`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
