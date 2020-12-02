export class Marcador {
    public lat      : number;
    public lon      : number;
    public titulo   = 'No título';
    public desc     = 'No desc';

    constructor( lat: number, lon: number ) {
        this.lat = lat;
        this.lon = lon;
    }
}