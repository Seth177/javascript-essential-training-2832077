class resources {
    constructor(
        name,
        color,
        numberofpages,
        material,
        content,
        size,
        length,
        width,
        coverOpen,
        dateAcquired

    ){
        this.name = name;
        this.color =color;
        this.number = numberofpages;
        this.material= material;
        this.content = content;
        this.dimensions = {
            thickness: size,
            tall : length,
            breadth: width
        }

        this. coverOpen = coverOpen;
        this.dateAcquired = dateAcquired;


    }

    toggleLid(coverstatus) {
        this.coverOpen = coverstatus;
    }

    bookage(){
        let now = new Date()
        let current = new Date(this.dateAcquired)
        let numberofdays = now - current
        let daysSincepurchased = Math.floor(numberofdays / (1000 * 3600 * 24))
        return daysSincepurchased

    }


}

export default resources;