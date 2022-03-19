class Multimedia {
    constructor(url) {
        this._url = url
    }
    getUrl() {
        return this._url
    }
    setInicio() {
        return ('Este método es para realizar un cambio en la URL del video')
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url)
        this._id = document.getElementById(id)
    }
    getId() {
        return this._id
    }
    setId(id) {
        this._id = id
    }
    playMultimedia() {
        const result = `la película ${Multimedia.getUrl()} se está
        reproduciendo...inicia en el segundo: ${Reproductor.getId()}`;
        return result;
    }
    setInicio(tiempo) {
        this._id.setAttribute('src', this._url)
        this._id.style.display = 'block'
        this.id.setAttribute('src', this.id.src + `?start=${tiempo}`)
        console.log(this._id)
    }
}

const ver1 = new Reproductor('https://www.youtube.com/embed/P04agpfcMGE', 'peliculas')
const ver2 = new Reproductor('https://www.youtube.com/embed/v7ADTKFbUDs', 'musica')
const ver3 = new Reproductor('https://www.youtube.com/embed/1A5SwexGxKw?', 'series')

ver1.setInicio(50)
ver2.setInicio(5)
ver3.setInicio(60)

const playing = setInicio.setAttribute(ver1);
console.log(playing);
const playing2 = setInicio.setAttribute(ver2);
console.log(playing2);
const playing3 = setInicio.setAttribute(ver3);
console.log(playing3);

