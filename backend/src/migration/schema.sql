-- Esquema completo de la base de datos MySQL para la Plataforma de Servicios de Seguridad Digital

-- Creación de la base de datos (si no existe)
CREATE DATABASE IF NOT EXISTS security_platform CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE security_platform;

-- Tabla de usuarios
CREATE TABLE users (
  id CHAR(36) PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  plan_type ENUM('free', 'premium', 'admin') DEFAULT 'free',
  email_verified BOOLEAN DEFAULT FALSE,
  verification_token VARCHAR(255),
  reset_password_token VARCHAR(255),
  reset_password_expires DATETIME,
  last_login DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_users_email (email),
  INDEX idx_users_plan_type (plan_type)
) ENGINE=InnoDB;

-- Tabla de fuentes de datos
CREATE TABLE sources (
  id CHAR(36) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  type ENUM('API', 'crawler', 'partner') NOT NULL,
  description TEXT,
  api_endpoint VARCHAR(255),
  api_key_param VARCHAR(100),
  is_active BOOLEAN DEFAULT TRUE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_sources_type (type),
  INDEX idx_sources_is_active (is_active)
) ENGINE=InnoDB;

-- Tabla de verificaciones
CREATE TABLE verifications (
  id CHAR(36) PRIMARY KEY,
  user_id CHAR(36),
  email VARCHAR(255) NOT NULL,
  source_id CHAR(36) NOT NULL,
  status ENUM('pending', 'completed', 'failed') DEFAULT 'pending',
  result JSON,
  report_type ENUM('basic', 'detailed') DEFAULT 'basic',
  is_cached BOOLEAN DEFAULT FALSE,
  cached_at DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
  FOREIGN KEY (source_id) REFERENCES sources(id) ON DELETE CASCADE,
  INDEX idx_verifications_email (email),
  INDEX idx_verifications_status (status),
  INDEX idx_verifications_report_type (report_type),
  INDEX idx_verifications_created_at (created_at)
) ENGINE=InnoDB;

-- Tabla de filtraciones
CREATE TABLE breaches (
  id CHAR(36) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  domain VARCHAR(255),
  breach_date DATE,
  added_date DATETIME,
  description TEXT,
  data_classes JSON,
  is_verified BOOLEAN DEFAULT TRUE,
  is_fabricated BOOLEAN DEFAULT FALSE,
  is_sensitive BOOLEAN DEFAULT FALSE,
  is_retired BOOLEAN DEFAULT FALSE,
  is_spam_list BOOLEAN DEFAULT FALSE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_breaches_name (name),
  INDEX idx_breaches_domain (domain),
  INDEX idx_breaches_breach_date (breach_date),
  INDEX idx_breaches_is_sensitive (is_sensitive)
) ENGINE=InnoDB;

-- Tabla intermedia para relacionar verificaciones y filtraciones
CREATE TABLE verification_breaches (
  verification_id CHAR(36) NOT NULL,
  breach_id CHAR(36) NOT NULL,
  PRIMARY KEY (verification_id, breach_id),
  FOREIGN KEY (verification_id) REFERENCES verifications(id) ON DELETE CASCADE,
  FOREIGN KEY (breach_id) REFERENCES breaches(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Tabla de artículos del blog
CREATE TABLE blog_articles (
  id CHAR(36) PRIMARY KEY,
  author_id CHAR(36),
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  content TEXT NOT NULL,
  excerpt TEXT,
  featured_image VARCHAR(255),
  status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
  published_at DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE SET NULL,
  INDEX idx_blog_articles_slug (slug),
  INDEX idx_blog_articles_status (status),
  INDEX idx_blog_articles_published_at (published_at)
) ENGINE=InnoDB;

-- Tabla de categorías para artículos
CREATE TABLE categories (
  id CHAR(36) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) NOT NULL UNIQUE,
  description TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_categories_slug (slug)
) ENGINE=InnoDB;

-- Tabla intermedia para relacionar artículos y categorías
CREATE TABLE article_categories (
  article_id CHAR(36) NOT NULL,
  category_id CHAR(36) NOT NULL,
  PRIMARY KEY (article_id, category_id),
  FOREIGN KEY (article_id) REFERENCES blog_articles(id) ON DELETE CASCADE,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Tabla de herramientas
CREATE TABLE tools (
  id CHAR(36) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) NOT NULL UNIQUE,
  description TEXT,
  icon VARCHAR(255),
  url VARCHAR(255),
  is_premium BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN DEFAULT TRUE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_tools_slug (slug),
  INDEX idx_tools_is_premium (is_premium),
  INDEX idx_tools_is_active (is_active)
) ENGINE=InnoDB;

-- Tabla de notificaciones
CREATE TABLE notifications (
  id CHAR(36) PRIMARY KEY,
  user_id CHAR(36) NOT NULL,
  title VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  type ENUM('info', 'warning', 'danger', 'success') DEFAULT 'info',
  source_id CHAR(36),
  source_type VARCHAR(50),
  is_read BOOLEAN DEFAULT FALSE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_notifications_user_id (user_id),
  INDEX idx_notifications_is_read (is_read),
  INDEX idx_notifications_created_at (created_at)
) ENGINE=InnoDB;

-- Tabla de logs de API
CREATE TABLE api_logs (
  id CHAR(36) PRIMARY KEY,
  endpoint VARCHAR(255) NOT NULL,
  user_id CHAR(36),
  ip_address VARCHAR(45),
  email_checked VARCHAR(255),
  request_data JSON,
  response_data JSON,
  is_successful BOOLEAN DEFAULT TRUE,
  status_code INT,
  error_message TEXT,
  response_time INT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
  INDEX idx_api_logs_endpoint (endpoint),
  INDEX idx_api_logs_user_id (user_id),
  INDEX idx_api_logs_is_successful (is_successful),
  INDEX idx_api_logs_created_at (created_at)
) ENGINE=InnoDB;

-- Tabla de configuración del sistema
CREATE TABLE system_settings (
  id CHAR(36) PRIMARY KEY,
  setting_key VARCHAR(100) NOT NULL UNIQUE,
  setting_value TEXT,
  description TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_system_settings_setting_key (setting_key)
) ENGINE=InnoDB;

-- Tabla de suscripciones
CREATE TABLE subscriptions (
  id CHAR(36) PRIMARY KEY,
  user_id CHAR(36) NOT NULL,
  plan_id VARCHAR(100) NOT NULL,
  status ENUM('active', 'canceled', 'expired', 'pending') DEFAULT 'pending',
  start_date DATETIME NOT NULL,
  end_date DATETIME,
  payment_method VARCHAR(50),
  payment_id VARCHAR(255),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_subscriptions_user_id (user_id),
  INDEX idx_subscriptions_status (status),
  INDEX idx_subscriptions_end_date (end_date)
) ENGINE=InnoDB;

-- Triggers para actualizar automáticamente el campo updated_at
DELIMITER //

-- Trigger para actualizar el campo updated_at en la tabla users
CREATE TRIGGER before_update_users
BEFORE UPDATE ON users
FOR EACH ROW
BEGIN
  SET NEW.updated_at = NOW();
END //

-- Trigger para actualizar el campo updated_at en la tabla verifications
CREATE TRIGGER before_update_verifications
BEFORE UPDATE ON verifications
FOR EACH ROW
BEGIN
  SET NEW.updated_at = NOW();
END //

-- Trigger para actualizar el campo updated_at en la tabla breaches
CREATE TRIGGER before_update_breaches
BEFORE UPDATE ON breaches
FOR EACH ROW
BEGIN
  SET NEW.updated_at = NOW();
END //

-- Trigger para actualizar el campo updated_at en la tabla blog_articles
CREATE TRIGGER before_update_blog_articles
BEFORE UPDATE ON blog_articles
FOR EACH ROW
BEGIN
  SET NEW.updated_at = NOW();
END //

DELIMITER ;
