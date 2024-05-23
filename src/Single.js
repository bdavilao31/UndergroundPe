import Fotos from './data/fotos.json'

const Single = () => {

    const currentRoute = window.location.pathname;
    const foto = Fotos.find(it => currentRoute.includes(it.slug))

    return (<>
        <h1>{foto.name}</h1>
        <hr></hr>
        <img src={foto.picture}></img>
        <p>{foto.description}</p>
    </>);
}

export default Single;