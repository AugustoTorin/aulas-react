const CardDesafio = ({children}) => <div className="card-desafio">{children}</div>

const CardHeader = ({children}) => <div className="card-header">{children}</div>

const CardBody = ({children}) => <div className="card-body">{children}</div>

export default function CardsDesafio(){
    return(
        <CardDesafio>

            <CardHeader><h1>Título Principal</h1></CardHeader>
            <CardBody><p>Texto de teste do desafio final</p></CardBody>

        </CardDesafio>        
    );
}