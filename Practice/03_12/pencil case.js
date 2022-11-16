class Pencilcase {
    constructor(
        name,
        size,
        color,
        height,
        width,
        thick,
        volume,
        zipOpen,
    ){
        this.name = name;
        this.size = size;
        this.color = color;
        this.volume = volume;
        this.length = {
            top: height,
            length: width,
            thickness: thick,

        }
        this.zipOpen = zipOpen;
    
    }

    togglelid(lidStatus) {
        this.zipOpen = lidStatus;
    }

    newmeasurements(height,length){
        this.length.top = height;
        this.length.length = width;
        this.length.thickness = thick;
    }

}


export default Pencilcase;