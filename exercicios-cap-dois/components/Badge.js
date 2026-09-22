const Badge = ({tipo}) => {
    if (tipo === 'success'){
        return <p className="badge-success">Sucesso</p>
    }
    else if (tipo === 'warning'){
        return <p className="badge-warning">Aviso</p>
    }
    else if(tipo === 'info'){
        return <p className="badge-info">Informação</p>
    }
}

export default Badge;