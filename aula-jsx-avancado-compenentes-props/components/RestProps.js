const Alerta = ({ tipo = 'info', children, ...rest }) => {
  const classe = `alert-${tipo}`;
  return <div className={classe} {...rest}>{children}</div>;
};

export default Alerta;