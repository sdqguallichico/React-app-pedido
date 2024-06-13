import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 Mi Empresa. Todos los derechos reservados.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#282c34',
    padding: '1rem',
    color: 'white',
    textAlign: 'center',
    position: 'fixed',
    width: '100%',
    bottom: 0,
  }
};

export default Footer;
